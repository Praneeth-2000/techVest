const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ASSETS_DIR = path.join(__dirname, '../src/assets');
const MAX_DIMENSION = 1600;
const JPEG_QUALITY = '85';
const SIPS_BIN = '/usr/bin/sips';

function formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i];
}

function getImageDims(filePath) {
    try {
        const out = execFileSync(SIPS_BIN, ['-g', 'pixelWidth', '-g', 'pixelHeight', filePath], { encoding: 'utf8' });
        const widthMatch = out.match(/pixelWidth:\s*(\d+)/);
        const heightMatch = out.match(/pixelHeight:\s*(\d+)/);
        if (widthMatch && heightMatch) {
            return { width: parseInt(widthMatch[1], 10), height: parseInt(heightMatch[1], 10) };
        }
    } catch (e) {
        // Ignore
    }
    return null;
}

function getAllImages(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    for (const file of list) {
        if (file.startsWith('.') || file === 'videos' || file === 'brand') continue;
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            results = results.concat(getAllImages(fullPath));
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                results.push(fullPath);
            }
        }
    }
    return results;
}

function main() {
    console.log('🚀 Starting TechVest Image Optimization...\n');

    const allImages = getAllImages(ASSETS_DIR);
    console.log(`Found ${allImages.length} images in src/assets.`);

    let totalOriginalBytes = 0;
    let totalOptimizedBytes = 0;
    let optimizedCount = 0;
    const report = [];

    for (const imgPath of allImages) {
        const stat = fs.statSync(imgPath);
        const origSize = stat.size;
        totalOriginalBytes += origSize;

        const ext = path.extname(imgPath).toLowerCase();
        const isJpg = ext === '.jpg' || ext === '.jpeg';
        const isPng = ext === '.png';

        // Only inspect files over 250KB for optimization
        if (origSize < 250 * 1024) {
            totalOptimizedBytes += origSize;
            continue;
        }

        const dims = getImageDims(imgPath);
        if (!dims) {
            totalOptimizedBytes += origSize;
            continue;
        }

        const maxDim = Math.max(dims.width, dims.height);
        const needsResize = maxDim > MAX_DIMENSION;

        let changed = false;
        try {
            if (isJpg && (needsResize || origSize > 400 * 1024)) {
                if (needsResize) {
                    execFileSync(SIPS_BIN, ['-Z', String(MAX_DIMENSION), '-s', 'formatOptions', JPEG_QUALITY, imgPath], { stdio: 'ignore' });
                } else {
                    execFileSync(SIPS_BIN, ['-s', 'formatOptions', JPEG_QUALITY, imgPath], { stdio: 'ignore' });
                }
                changed = true;
            } else if (isPng && needsResize) {
                execFileSync(SIPS_BIN, ['-Z', String(MAX_DIMENSION), imgPath], { stdio: 'ignore' });
                changed = true;
            }
        } catch (err) {
            console.error(`Error on ${path.basename(imgPath)}:`, err.message);
        }

        const newStat = fs.statSync(imgPath);
        const newSize = newStat.size;
        totalOptimizedBytes += newSize;

        if (changed && origSize > newSize) {
            const saved = origSize - newSize;
            const pct = Math.round((saved / origSize) * 100);
            const newDims = getImageDims(imgPath) || dims;
            const relPath = path.relative(path.join(__dirname, '..'), imgPath);
            console.log(`✓ Optimized: ${path.basename(imgPath)}: ${formatBytes(origSize)} -> ${formatBytes(newSize)} (${pct}% saved)`);
            report.push({
                file: relPath,
                origSize,
                newSize,
                pct,
                origDims: `${dims.width}x${dims.height}`,
                newDims: `${newDims.width}x${newDims.height}`
            });
            optimizedCount++;
        }
    }

    report.sort((a, b) => (b.origSize - b.newSize) - (a.origSize - a.newSize));

    console.log('\n---------------------------------------------------------------------------------------------------------');
    console.log(`File Name                                       | Before   | After    | Dim Before  | Dim After   | Savings`);
    console.log('---------------------------------------------------------------------------------------------------------');
    for (const r of report) {
        const name = r.file.length > 45 ? '...' + r.file.slice(-42) : r.file.padEnd(45);
        const b = formatBytes(r.origSize).padStart(8);
        const a = formatBytes(r.newSize).padStart(8);
        const db = r.origDims.padStart(11);
        const da = r.newDims.padStart(11);
        const s = `${r.pct}%`.padStart(7);
        console.log(`${name} | ${b} | ${a} | ${db} | ${da} | ${s}`);
    }
    console.log('---------------------------------------------------------------------------------------------------------');

    const totalSaved = totalOriginalBytes - totalOptimizedBytes;
    const totalPct = Math.round((totalSaved / totalOriginalBytes) * 100);

    console.log(`\n🎉 Summary:`);
    console.log(`- Total Files in Assets: ${allImages.length}`);
    console.log(`- Images Optimized:      ${optimizedCount}`);
    console.log(`- Original Total Size:   ${formatBytes(totalOriginalBytes)}`);
    console.log(`- New Total Size:        ${formatBytes(totalOptimizedBytes)}`);
    console.log(`- Total Space Saved:     ${formatBytes(totalSaved)} (${totalPct}% overall reduction)`);
}

main();
