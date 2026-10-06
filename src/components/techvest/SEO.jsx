import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://techvestglobal.com";
const DEFAULT_TITLE =
  "TechVest Global | Your Strategic Tech Partner for Investment Management and IT Solutions";
const DEFAULT_DESCRIPTION =
  "TechVest Global delivers AI governance, AI engineering, data engineering, analytics and ISO 42001 readiness for banking, financial services and investment management.";
const DEFAULT_IMAGE = `${SITE_URL}/techvest-favicon.svg`;

// Acronyms and proper nouns that slug-to-title-case would otherwise mangle
// ("ai" -> "Ai", "iso" -> "Iso"). Keyed by the lowercased slug word.
const LABEL_CASING = {
  ai: "AI",
  iso: "ISO",
  nist: "NIST",
  rmf: "RMF",
  eu: "EU",
  oecd: "OECD",
  bi: "BI",
  llm: "LLM",
  ibor: "IBOR",
  abor: "ABOR",
  mlops: "MLOps",
  crd: "CRD",
  genai: "GenAI",
  and: "and",
  or: "or",
  in: "in",
  of: "of",
  the: "the",
  to: "to",
  vs: "vs",
};

// Full-segment label overrides, for segments whose readable name isn't
// derivable from the slug.
const SEGMENT_LABELS = {
  "privacy-policy": "Privacy Policy",
};

// Overrides for a crumb's URL, where the path segment itself is not a routable
// page. Without these a breadcrumb can link to a URL that 404s.
// Empty since the expertise pages canonicalised to "/industries/:slug", whose
// every segment is a real route; keep the hook for the next non-routable one.
const SEGMENT_ITEMS = {};

// Convert a URL slug into a human-readable breadcrumb label:
// "ai-governance" -> "AI Governance".
function labelFromSlug(slug) {
  if (SEGMENT_LABELS[slug]) return SEGMENT_LABELS[slug];

  return slug
    .split("-")
    .map((word, idx) => {
      const cased = LABEL_CASING[word.toLowerCase()];
      // Never lead with a lowercase joiner ("of", "the", ...).
      if (cased) return idx === 0 ? cased.replace(/^\w/, (c) => c.toUpperCase()) : cased;
      return word.replace(/^\w/, (c) => c.toUpperCase());
    })
    .join(" ");
}

// Build a BreadcrumbList JSON-LD object from the current path.
// Returns null for the homepage (no breadcrumb needed).
//
// leafName overrides the last crumb's label — pass a page's real title for
// detail routes, where the slug alone makes a poor label (a long blog slug
// title-cases into an unreadable crumb).
//
// parents inserts crumbs between Home and the path-derived ones, for a page
// whose place in the site hierarchy is not its URL depth. /insights sits under
// Resources in the navigation but lives at a top-level URL, so its trail is
// Home > Resources > Insights. Google allows a breadcrumb to describe hierarchy
// rather than mirror the URL, which is the point of it.
function buildBreadcrumb(cleanPath, leafName, parents = []) {
  if (cleanPath === "/") return null;
  const segments = cleanPath.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const items = [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
  ];
  parents.forEach((parent) => {
    items.push({
      "@type": "ListItem",
      position: items.length + 1,
      name: parent.name,
      item: `${SITE_URL}${parent.path}`,
    });
  });

  const offset = items.length;
  let acc = "";
  segments.forEach((seg, idx) => {
    acc += `/${seg}`;
    const isLeaf = idx === segments.length - 1;
    // A non-routable segment (e.g. "/service") links to its real landing page
    // instead, so no crumb points at a URL that 404s.
    const itemPath = !isLeaf && SEGMENT_ITEMS[seg] ? SEGMENT_ITEMS[seg] : acc;
    items.push({
      "@type": "ListItem",
      position: offset + idx + 1,
      name: isLeaf && leafName ? leafName : labelFromSlug(seg),
      item: `${SITE_URL}${itemPath}`,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

/**
 * Per-page SEO tags: unique <title>, meta description, a self-referencing
 * canonical, Open Graph / Twitter cards, and JSON-LD structured data.
 *
 * Props:
 *   title       - page title (without the brand suffix; added automatically)
 *   description - meta description (~140-160 chars)
 *   path        - canonical path override (defaults to current route)
 *   image       - absolute og/twitter image URL (optional)
 *   type        - og:type ("website" | "article"), defaults to "website"
 *   noindex     - if true, adds noindex,nofollow and suppresses structured data
 *   schema      - optional JSON-LD object (or array of objects) for this page,
 *                 e.g. a Service or Article/BlogPosting. A BreadcrumbList is
 *                 generated automatically from the route and does not need to
 *                 be passed here.
 *   breadcrumbName - overrides the final breadcrumb crumb's label. Pass the
 *                 page's real title on detail routes (blog posts, job
 *                 postings), where the URL slug makes a poor label.
 *   breadcrumbParents - extra crumbs inserted between Home and the path-derived
 *                 ones, as [{ name, path }]. For a page whose place in the site
 *                 hierarchy is not its URL depth (e.g. /insights sits under
 *                 Resources in the nav but lives at a top-level URL).
 */
export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  schema,
  breadcrumbName,
  breadcrumbParents,
}) {
  const location = useLocation();

  // Canonical: strip trailing slash (except root) so each URL is unique.
  const rawPath = path ?? location.pathname;
  const cleanPath =
    rawPath !== "/" && rawPath.endsWith("/") ? rawPath.slice(0, -1) : rawPath;
  const canonical = `${SITE_URL}${cleanPath}`;

  // Brand trails the title so each page's own keyword occupies the opening
  // characters, which carry the most weight and are what a searcher scans first.
  // The brand previously led every title; at 18 characters that pushed the
  // keyword to position 18 on all 69 pages, and consumed up to 45% of the
  // shortest ones. Google appends the site name to results regardless, so
  // leading with it spent the best position restating something already shown.
  const fullTitle = title ? `${title} | TechVest Global` : DEFAULT_TITLE;

  // Descriptions lead with the brand too. Pages that hardcode their own
  // description already start with it and are left alone; pages that build one
  // from a data file get the prefix here, so there is a single place to change
  // it rather than dozens of data entries. The 18-char prefix is accounted for
  // in each source value, which is kept to 142 chars or fewer.
  const fullDescription = description.startsWith("TechVest")
    ? description
    : `TechVest Global — ${description}`;

  // Assemble JSON-LD: auto breadcrumb + any page-provided schema.
  // Suppressed on noindex pages (nothing to surface for placeholders/404s).
  const jsonLd = [];
  if (!noindex) {
    const breadcrumb = buildBreadcrumb(cleanPath, breadcrumbName, breadcrumbParents);
    if (breadcrumb) jsonLd.push(breadcrumb);
    if (schema) jsonLd.push(...(Array.isArray(schema) ? schema : [schema]));
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large"
        }
      />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="TechVest Global" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />

      {/* Structured data (JSON-LD) */}
      {jsonLd.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
}
