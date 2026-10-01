import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import careersData from "@/data/careersData";
import { ArrowRight, Search, X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, MapPin, Briefcase, Clock } from "lucide-react";

const JOBS_PER_PAGE = 5;

export default function CareersList() {
    const defaultData = careersData.opportunities.content || [];
    const [careersAPIData, setCareersAPIData] = useState(defaultData);
    const [keyword, setKeyword] = useState("");
    const [selectedJob, setSelectedJob] = useState("All");
    const [selectedLocation, setSelectedLocation] = useState("All");
    const [selectedExperience, setSelectedExperience] = useState("All");
    const [filteredData, setFilteredData] = useState(defaultData);
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedIds, setExpandedIds] = useState({});
    const [loading, setLoading] = useState(true);

    const data = careersData.opportunities;
    const listRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchCareersData = async () => {
            try {
                const response = await fetch("https://techvestglobal.com/api/career.php");
                if (!response.ok) throw new Error("Network response was not ok");
                const jsonData = await response.json();
                const arrayData = Array.isArray(jsonData) ? jsonData : jsonData?.data || defaultData;
                setCareersAPIData(arrayData);
                setFilteredData(arrayData);
            } catch (error) {
                console.error("Error fetching careers data:", error);
                setCareersAPIData(defaultData);
                setFilteredData(defaultData);
            } finally {
                setLoading(false);
            }
        };
        fetchCareersData();
    }, []);

    // Derived options
    const jobOptions = ["All", ...Array.from(new Set(careersAPIData.map((i) => i.job_title).filter(Boolean)))];
    const locationOptions = ["All", ...Array.from(new Set(careersAPIData.map((i) => i.location).filter(Boolean)))];
    const experienceOptions = ["All", ...Array.from(new Set(careersAPIData.map((i) => i.experience).filter(Boolean)))];

    const applyFilters = (e) => {
        e && e.preventDefault();
        const kw = keyword.toLowerCase();
        const filtered = careersAPIData.filter((item) => {
            const matchesKeyword =
                !kw ||
                (item.job_title && item.job_title.toLowerCase().includes(kw)) ||
                (item.description && item.description.toLowerCase().includes(kw)) ||
                (item.location && item.location.toLowerCase().includes(kw));
            const matchesJob = selectedJob === "All" || item.job_title === selectedJob;
            const matchesLocation = selectedLocation === "All" || item.location === selectedLocation;
            const matchesExperience = selectedExperience === "All" || item.experience === selectedExperience;
            return matchesKeyword && matchesJob && matchesLocation && matchesExperience;
        });
        setFilteredData(filtered);
        setCurrentPage(1);
    };

    const onClickClear = (e) => {
        e && e.preventDefault();
        setKeyword("");
        setSelectedJob("All");
        setSelectedLocation("All");
        setSelectedExperience("All");
        setFilteredData(careersAPIData);
        setCurrentPage(1);
    };

    // Pagination
    const totalPages = Math.ceil(filteredData.length / JOBS_PER_PAGE);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * JOBS_PER_PAGE,
        currentPage * JOBS_PER_PAGE
    );
    const startResult = filteredData.length === 0 ? 0 : (currentPage - 1) * JOBS_PER_PAGE + 1;
    const endResult = Math.min(currentPage * JOBS_PER_PAGE, filteredData.length);

    const goToPage = (page) => {
        setCurrentPage(page);
        listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const toggleExpand = (id) => {
        setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    // Strip HTML for plain text preview
    const stripHtml = (html) => {
        if (!html) return "";
        return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    };

    const PREVIEW_CHARS = 180;

    console.log("Careers API Data:", careersAPIData);

    return (
        <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="section-shell relative overflow-hidden pt-32">
                <div className="absolute top-20 right-10 w-96 h-96 bg-[#00D4FF] opacity-20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[#6B3FFF] opacity-15 blur-[150px] rounded-full" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(107,63,255,0.2),_transparent_65%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,212,255,0.15),_transparent_70%)]" />

                <div className="relative section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-white to-[#00D4FF] bg-clip-text text-transparent">
                            {data.title}
                        </h1>
                        <p className="text-base sm:text-xl text-gray-300 leading-relaxed px-2 sm:px-0">{data.bannerText}</p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
                            <Link to="/" className="hover:text-[#00D4FF] transition-colors">Home</Link>
                            <span>/</span>
                            <Link to="/careers" className="hover:text-[#00D4FF] transition-colors">Careers</Link>
                            <span>/</span>
                            <span className="text-white">Opportunities</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Heading Section */}
            <section className="section-shell relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B3FFF]/5 to-transparent" />
                <div className="section-inner relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <h2 className="section-title mb-6">{data.heading}</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">{data.headingDescription}</p>
                    </motion.div>
                </div>
            </section>

            {/* Filter + Listings Section */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden" ref={listRef}>
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="section-inner relative">
                    <div className="max-w-6xl mx-auto">

                        {/* Filter Form */}
                        <form onSubmit={applyFilters} className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4 sm:p-6 mb-6 sm:mb-8">
                            {/* Keyword Row */}
                            <div className="relative mb-4">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search by job title, keyword, or location..."
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    className="w-full bg-[#0A0E27] border border-white/10 rounded-lg pl-12 pr-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4FF] transition-colors"
                                />
                                {keyword && (
                                    <button
                                        type="button"
                                        onClick={() => setKeyword("")}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                )}
                            </div>

                            {/* Dropdowns Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {/* Job Filter */}
                                <select
                                    className="w-full bg-[#0A0E27] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors appearance-none cursor-pointer"
                                    value={selectedJob}
                                    onChange={(e) => setSelectedJob(e.target.value)}
                                >
                                    <option value="All">All Job Titles</option>
                                    {jobOptions.slice(1).map((job, i) => (
                                        <option key={i} value={job}>{job}</option>
                                    ))}
                                </select>

                                {/* Location Filter */}
                                <select
                                    className="w-full bg-[#0A0E27] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors appearance-none cursor-pointer"
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                >
                                    <option value="All">All Locations</option>
                                    {locationOptions.slice(1).map((loc, i) => (
                                        <option key={i} value={loc}>{loc}</option>
                                    ))}
                                </select>

                                {/* Experience Filter */}
                                <select
                                    className="w-full bg-[#0A0E27] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors appearance-none cursor-pointer"
                                    value={selectedExperience}
                                    onChange={(e) => setSelectedExperience(e.target.value)}
                                >
                                    <option value="All">All Experience</option>
                                    {experienceOptions.slice(1).map((exp, i) => (
                                        <option key={i} value={exp}>{exp} Year{exp !== "1" ? "s" : ""}</option>
                                    ))}
                                </select>

                                {/* Buttons */}
                                <div className="flex gap-3">
                                    <button type="submit" className="flex-1 btn-primary flex items-center justify-center gap-2">
                                        <Search className="w-4 h-4" />
                                        Search
                                    </button>
                                    <button
                                        type="button"
                                        onClick={onClickClear}
                                        className="px-5 rounded-full border border-white/20 bg-transparent text-white hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all duration-200 flex items-center gap-1"
                                    >
                                        <X className="w-4 h-4" />
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </form>

                        {/* Results Bar */}
                        {!loading && (
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-5 sm:mb-6 px-1">
                                <p className="text-gray-400 text-sm">
                                    {filteredData.length === 0
                                        ? "No results found"
                                        : <>Showing <span className="text-white font-semibold">{startResult}–{endResult}</span> of <span className="text-white font-semibold">{filteredData.length}</span> open {filteredData.length === 1 ? "role" : "roles"}</>
                                    }
                                </p>
                                {totalPages > 1 && (
                                    <div className="flex items-center gap-1.5 text-sm text-gray-400">
                                        <button
                                            onClick={() => goToPage(currentPage - 1)}
                                            disabled={currentPage === 1}
                                            className="p-1.5 rounded-lg border border-white/10 hover:border-[#00D4FF]/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                        </button>
                                        {/* page numbers — hidden on mobile, shown sm+ */}
                                        <div className="hidden sm:flex items-center gap-1.5">
                                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                                <button
                                                    key={page}
                                                    onClick={() => goToPage(page)}
                                                    className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${page === currentPage
                                                        ? "bg-[#00D4FF] text-black"
                                                        : "border border-white/10 text-gray-400 hover:border-[#00D4FF]/50 hover:text-white"
                                                        }`}
                                                >
                                                    {page}
                                                </button>
                                            ))}
                                        </div>
                                        {/* compact page indicator on mobile */}
                                        <span className="sm:hidden text-xs text-gray-400 px-2 py-1 rounded-lg border border-white/10">
                                            {currentPage} / {totalPages}
                                        </span>
                                        <button
                                            onClick={() => goToPage(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                            className="p-1.5 rounded-lg border border-white/10 hover:border-[#00D4FF]/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                                        >
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Job Listings */}
                        <div className="space-y-4" style={{ minHeight: "200px" }}>
                            {loading ? (
                                // Skeleton loaders
                                Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 animate-pulse">
                                        <div className="h-6 bg-white/10 rounded w-2/5 mb-4" />
                                        <div className="h-4 bg-white/10 rounded w-full mb-2" />
                                        <div className="h-4 bg-white/10 rounded w-4/5 mb-2" />
                                        <div className="h-4 bg-white/10 rounded w-3/5" />
                                    </div>
                                ))
                            ) : paginatedData.length > 0 ? (
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentPage}
                                        initial={{ opacity: 0, y: 18 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -18 }}
                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                        className="space-y-4"
                                    >
                                        {paginatedData.map((item, index) => {
                                            const descText = stripHtml(item.description);
                                            const reqText = stripHtml(item.requirements);
                                            const combined = [reqText, descText].filter(Boolean).join(" ");
                                            const isExpanded = expandedIds[item.id];
                                            const needsTruncation = combined.length > PREVIEW_CHARS;
                                            const preview = needsTruncation && !isExpanded
                                                ? combined.slice(0, PREVIEW_CHARS).trimEnd() + "…"
                                                : combined;

                                            return (
                                                <motion.div
                                                    key={item.id}
                                                    layout
                                                    initial={{ opacity: 0, y: 16 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -8 }}
                                                    transition={{ duration: 0.35, delay: index * 0.04 }}
                                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4 sm:p-6 hover:border-[#00D4FF]/40 transition-all duration-300"
                                                >
                                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                    <div className="relative">
                                                        {/* Title */}
                                                        <h3 className="text-base sm:text-xl font-bold text-white mb-2 sm:mb-3 leading-snug">
                                                            {item.job_title}
                                                        </h3>

                                                        {/* Meta tags */}
                                                        <div className="flex flex-wrap gap-3 mb-4">
                                                            {item.location && (
                                                                <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1">
                                                                    <MapPin className="w-3 h-3 text-[#00D4FF]" />
                                                                    {item.location}
                                                                </span>
                                                            )}
                                                            {item.experience && (
                                                                <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1">
                                                                    <Briefcase className="w-3 h-3 text-[#6B3FFF]" />
                                                                    {item.experience} {item.experience !== "1" ? "Years" : "Year"} Exp.
                                                                </span>
                                                            )}
                                                            {item.employment_type && (
                                                                <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1">
                                                                    <Clock className="w-3 h-3 text-cyan-400" />
                                                                    {item.employment_type}
                                                                </span>
                                                            )}
                                                        </div>

                                                        {/* Description Preview */}
                                                        <p className="text-gray-400 text-sm leading-relaxed mb-3">
                                                            {preview}
                                                        </p>

                                                        {needsTruncation && (
                                                            <button
                                                                onClick={() => toggleExpand(item.id)}
                                                                className="inline-flex items-center gap-1 text-[#00D4FF] text-sm hover:text-cyan-300 transition-colors mb-4"
                                                            >
                                                                {isExpanded ? (
                                                                    <><ChevronUp className="w-4 h-4" /> Show less</>
                                                                ) : (
                                                                    <><ChevronDown className="w-4 h-4" /> Read more</>
                                                                )}
                                                            </button>
                                                        )}

                                                        {/* Footer */}
                                                        <div className="flex items-center justify-end pt-3 border-t border-white/10">
                                                            <Link
                                                                to={`/careers/opportunities/${item.id}`}
                                                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300"
                                                            >
                                                                Apply Now
                                                                <ArrowRight className="w-4 h-4" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </motion.div>
                                </AnimatePresence>
                            ) : (
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-12 text-center">
                                    <Search className="w-10 h-10 text-gray-600 mx-auto mb-3" />
                                    <p className="text-gray-300 text-lg font-medium mb-1">No roles found</p>
                                    <p className="text-gray-500 text-sm">Try adjusting your filters or search keyword</p>
                                    <button
                                        onClick={onClickClear}
                                        className="mt-4 text-[#00D4FF] text-sm hover:underline"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Bottom Pagination */}
                        {!loading && totalPages > 1 && (
                            <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
                                {/* Prev button */}
                                <button
                                    onClick={() => goToPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 rounded-lg border border-white/10 text-gray-400 hover:border-[#00D4FF]/50 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                    <span className="hidden sm:inline">Previous</span>
                                </button>

                                {/* Page numbers — shown on sm+ */}
                                <div className="hidden sm:flex items-center gap-2">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => goToPage(page)}
                                            className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${page === currentPage
                                                ? "bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white shadow-[0_0_15px_rgba(0,212,255,0.3)]"
                                                : "border border-white/10 text-gray-400 hover:border-[#00D4FF]/50 hover:text-white"
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </div>

                                {/* Compact indicator on mobile */}
                                <span className="sm:hidden text-sm text-gray-400 px-3 py-2 rounded-lg border border-white/10">
                                    Page {currentPage} of {totalPages}
                                </span>

                                {/* Next button */}
                                <button
                                    onClick={() => goToPage(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 rounded-lg border border-white/10 text-gray-400 hover:border-[#00D4FF]/50 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm"
                                >
                                    <span className="hidden sm:inline">Next</span>
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-shell relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/5 via-[#6B3FFF]/5 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full" />
                <div className="section-inner text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Know what you need? Submit your <span className="text-[#00D4FF]">Request</span> for information{" "}
                            <span className="text-[#00D4FF]">Here.</span>
                        </h2>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300"
                        >
                            Contact Us
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
