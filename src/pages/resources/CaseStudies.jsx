import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import { ChevronUp, X } from "lucide-react";

// Import case study images
import caseStudyImg1 from "@/assets/images/casestudieimg3.png";
import caseStudyImg2 from "@/assets/images/casestudieimg1.png";
import caseStudyImg3 from "@/assets/images/casestudieimg2.png";
import caseStudyImg4 from "@/assets/images/casestudieimg4.png";

export default function CaseStudies() {
    const [activeSection, setActiveSection] = useState("executive");
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Image modal state (for desktop/tablet only)
    const [modalImage, setModalImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Open image modal (only for desktop/tablet - 768px and above)
    const openImageModal = (imageSrc) => {
        if (window.innerWidth >= 768) {
            setModalImage(imageSrc);
            setIsModalOpen(true);
            document.body.style.overflow = 'hidden';
        }
    };

    // Close image modal
    const closeImageModal = () => {
        setIsModalOpen(false);
        setModalImage(null);
        document.body.style.overflow = 'unset';
    };

    // Sidebar sticky state: 'relative' | 'fixed' | 'absolute'
    const [sidebarMode, setSidebarMode] = useState('relative');
    const [absoluteTop, setAbsoluteTop] = useState(0);

    // Refs
    const sidebarRef = useRef(null);
    const sidebarWrapperRef = useRef(null);
    const contentWrapperRef = useRef(null);

    const NAVBAR_HEIGHT = 96; // Height of navbar (top-24 = 6rem = 96px)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Handle scroll events
    const handleScroll = useCallback(() => {
        // Show scroll to top button
        setShowScrollTop(window.scrollY > 500);

        // Track active section
        const sections = [
            "executive",
            "background",
            "objectives",
            "methodology",
            "implementation",
            "results",
            "lessons",
            "strategic"
        ];

        for (let i = sections.length - 1; i >= 0; i--) {
            const element = document.getElementById(sections[i]);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 150) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        }

        // Sidebar sticky logic
        const sidebar = sidebarRef.current;
        const wrapper = sidebarWrapperRef.current;
        const strategicSection = document.getElementById("strategic");

        if (sidebar && wrapper && strategicSection) {
            const wrapperRect = wrapper.getBoundingClientRect();
            const strategicRect = strategicSection.getBoundingClientRect();
            const sidebarHeight = sidebar.offsetHeight;

            // Calculate the point where sidebar bottom would meet strategic bottom
            const sidebarBottomWhenFixed = NAVBAR_HEIGHT + sidebarHeight;
            const spaceRemaining = strategicRect.bottom - sidebarBottomWhenFixed;

            // Check if wrapper has scrolled past the navbar
            const hasScrolledPastStart = wrapperRect.top <= NAVBAR_HEIGHT;

            // Check if we need to stop the sidebar (strategic bottom reached)
            const shouldStop = spaceRemaining <= 0;

            if (!hasScrolledPastStart) {
                // Haven't scrolled enough - sidebar stays in place
                setSidebarMode('relative');
            } else if (hasScrolledPastStart && !shouldStop) {
                // Scrolled past start but haven't reached end - sidebar is fixed
                setSidebarMode('fixed');
            } else if (shouldStop) {
                // Reached the end - sidebar becomes absolute
                setSidebarMode('absolute');
                // Calculate the absolute position
                const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
                const strategicBottom = strategicSection.getBoundingClientRect().bottom + window.scrollY;
                const absolutePosition = strategicBottom - wrapperTop - sidebarHeight;
                setAbsoluteTop(absolutePosition);
            }
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        // Initial call
        handleScroll();

        // Also handle resize
        window.addEventListener("resize", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [handleScroll]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // Get sidebar styles based on mode
    const getSidebarStyles = () => {
        switch (sidebarMode) {
            case 'fixed':
                return {
                    position: 'fixed',
                    top: `${NAVBAR_HEIGHT}px`,
                    width: sidebarRef.current ? `${sidebarWrapperRef.current?.offsetWidth}px` : 'auto',
                };
            case 'absolute':
                return {
                    position: 'absolute',
                    top: `${absoluteTop}px`,
                    width: '100%',
                };
            default:
                return {
                    position: 'relative',
                    top: '0',
                    width: '100%',
                };
        }
    };

    const implementationData = [
        {
            phase: "Phase 1: Discovery",
            activities: "Inventory of AI models across Azure, Databricks, Vertex",
            outcomes: "63 models identified across 6 business units"
        },
        {
            phase: "Phase 2: Framework Design",
            activities: "Defined governance pillars: accountability, transparency, safety, fairness",
            outcomes: "Drafted governance playbook"
        },
        {
            phase: "Phase 3: Platform Integration",
            activities: "Configured IBM OpenPages modules for AI risk; integrated with Azure ML Ops, Databricks, Vertex AI",
            outcomes: "Unified model registry and risk dashboard"
        },
        {
            phase: "Phase 4: Pilot & Feedback",
            activities: "Ran governance workflows on 7 high-impact models across platforms",
            outcomes: "Reduced audit cycle time by 30%"
        },
        {
            phase: "Phase 5: Enterprise Rollout",
            activities: "Trained 120+ users, deployed dashboards",
            outcomes: "Achieved 100% model registration compliance"
        }
    ];

    const navigationItems = [
        { id: "executive", label: "Executive Summary" },
        { id: "background", label: "Background & Context" },
        { id: "objectives", label: "Objectives" },
        { id: "methodology", label: "Methodology" },
        { id: "implementation", label: "Implementation" },
        { id: "results", label: "Results & Impact" },
        { id: "lessons", label: "Lessons Learned" },
        { id: "strategic", label: "Strategic Implications" }
    ];

    return (
        <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="section-shell relative overflow-hidden pt-32">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-20 right-10 w-96 h-96 bg-[#00D4FF] opacity-20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[#6B3FFF] opacity-15 blur-[150px] rounded-full" />

                {/* Decorative Shapes */}
                <div className="absolute top-1/4 right-10 w-32 h-32 border border-cyan-500/20 rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 left-20 w-24 h-24 border border-purple-500/20 rotate-45" />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(107,63,255,0.2),_transparent_65%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,212,255,0.15),_transparent_70%)]" />

                <div className="relative section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-white to-[#00D4FF] bg-clip-text text-transparent px-4">
                            Case Studies
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-4">
                            Real-world success stories and transformative AI implementations
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
                            <Link to="/" className="hover:text-[#00D4FF] transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            <Link to="/resources" className="hover:text-[#00D4FF] transition-colors">
                                Resources
                            </Link>
                            <span>/</span>
                            <span className="text-white">Case Studies</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content with Sidebar Navigation */}
            <section className="section-shell relative overflow-hidden">
                {/* Background Accent */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B3FFF]/5 to-transparent" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full" />

                <div className="section-inner relative">
                    {/* Case Study Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-6xl mx-auto text-center mb-8 md:mb-12 px-4"
                    >
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent">
                            Building an AI Governance Framework Using IBM OpenPages for Retail Conglomerate based out of Canada
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-400 italic">
                            With Integrated Support for Azure ML Ops, Azure ML, Databricks, and Google Vertex AI
                        </p>
                    </motion.div>

                    {/* Layout: Sidebar + Content */}
                    <div className="max-w-7xl mx-auto px-4 lg:px-6">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">

                            {/* Sticky Sidebar Navigation - Desktop Only */}
                            <div
                                ref={sidebarWrapperRef}
                                className="hidden lg:block lg:w-72 xl:w-80 flex-shrink-0 relative"
                            >
                                <div
                                    ref={sidebarRef}
                                    style={getSidebarStyles()}
                                    className="transition-none"
                                >
                                    <div className="p-4 rounded-xl border border-white/10 bg-[#0B1025]/95 backdrop-blur-md shadow-xl">
                                        <h3 className="text-sm font-bold text-[#00D4FF] mb-4 uppercase tracking-wider">
                                            Table of Contents
                                        </h3>
                                        <nav className="space-y-1">
                                            {navigationItems.map((item, index) => (
                                                <button
                                                    key={item.id}
                                                    onClick={() => scrollToSection(item.id)}
                                                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-3 ${activeSection === item.id
                                                        ? "bg-[#00D4FF]/15 text-[#00D4FF] font-semibold border-l-2 border-[#00D4FF] ml-0"
                                                        : "text-gray-400 hover:text-white hover:bg-white/[0.05] border-l-2 border-transparent"
                                                        }`}
                                                >
                                                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activeSection === item.id
                                                        ? "bg-[#00D4FF]/20 text-[#00D4FF]"
                                                        : "bg-white/5 text-gray-500"
                                                        }`}>
                                                        {index + 1}
                                                    </span>
                                                    <span className="truncate">{item.label}</span>
                                                </button>
                                            ))}
                                        </nav>

                                        {/* Progress Indicator */}
                                        <div className="mt-6 pt-4 border-t border-white/10">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs text-gray-500">Progress</span>
                                                <span className="text-xs font-medium text-[#00D4FF]">
                                                    {navigationItems.findIndex(item => item.id === activeSection) + 1} / {navigationItems.length}
                                                </span>
                                            </div>
                                            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] rounded-full"
                                                    initial={{ width: 0 }}
                                                    animate={{
                                                        width: `${((navigationItems.findIndex(item => item.id === activeSection) + 1) / navigationItems.length) * 100}%`
                                                    }}
                                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Table of Contents */}
                            <div className="lg:hidden mb-6">
                                <details className="group rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden">
                                    <summary className="flex items-center justify-between p-4 cursor-pointer list-none select-none">
                                        <span className="text-sm font-bold text-[#00D4FF] uppercase tracking-wider">
                                            Table of Contents
                                        </span>
                                        <ChevronUp className="w-5 h-5 text-[#00D4FF] transform rotate-180 group-open:rotate-0 transition-transform duration-300" />
                                    </summary>
                                    <nav className="p-4 pt-0 space-y-1">
                                        {navigationItems.map((item, index) => (
                                            <button
                                                key={item.id}
                                                onClick={() => scrollToSection(item.id)}
                                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-3 ${activeSection === item.id
                                                    ? "bg-[#00D4FF]/10 text-[#00D4FF] font-semibold"
                                                    : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                                                    }`}
                                            >
                                                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activeSection === item.id
                                                    ? "bg-[#00D4FF]/20 text-[#00D4FF]"
                                                    : "bg-white/5 text-gray-500"
                                                    }`}>
                                                    {index + 1}
                                                </span>
                                                {item.label}
                                            </button>
                                        ))}
                                    </nav>
                                </details>
                            </div>

                            {/* Main Content */}
                            <div ref={contentWrapperRef} className="flex-1 min-w-0">
                                <div className="space-y-8 md:space-y-12">
                                    {/* 1. Executive Summary */}
                                    <motion.section
                                        id="executive"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="scroll-mt-32"
                                    >
                                        <div className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] text-sm font-bold">1</span>
                                                Executive Summary
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                                A leading Canadian retail enterprise, launched a strategic initiative to operationalize AI governance across its enterprise functions. Leveraging IBM OpenPages as the governance backbone, the framework was extended to support model lifecycle management across Azure ML Ops, Azure ML, Databricks, and Google Vertex AI. This multi-platform integration enabled scalable, auditable, and adaptive governance aligned with emerging global standards, resulting in improved model transparency, reduced compliance risk, and enhanced stakeholder confidence.
                                            </p>
                                        </div>
                                    </motion.section>

                                    {/* 2. Background & Context */}
                                    <motion.section
                                        id="background"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="scroll-mt-32"
                                    >
                                        <div className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] text-sm font-bold">2</span>
                                                Background & Context
                                            </h3>
                                            <div className="space-y-4 text-gray-300 text-sm md:text-base">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                                                        <p className="text-[#00D4FF] font-semibold mb-2">Organization</p>
                                                        <p>Retail Conglomerate based out of Canada</p>
                                                    </div>
                                                    <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                                                        <p className="text-[#00D4FF] font-semibold mb-2">Industry</p>
                                                        <p>Retail, Financial Services, Automotive</p>
                                                    </div>
                                                </div>
                                                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                                                    <p className="text-[#00D4FF] font-semibold mb-2">Challenge</p>
                                                    <p>Fragmented AI development across cloud platforms without centralized governance posed risks in compliance, bias, and accountability.</p>
                                                </div>
                                                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                                                    <p className="text-[#00D4FF] font-semibold mb-2">Stakeholders</p>
                                                    <p>Data Governance Office, Risk & Compliance, IT, Business Units, External Auditors</p>
                                                </div>
                                                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                                                    <p className="text-[#00D4FF] font-semibold mb-2">Timeline</p>
                                                    <p>Phased rollout (Q3 2024–Q3 2025)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.section>

                                    {/* 3. Objectives */}
                                    <motion.section
                                        id="objectives"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="scroll-mt-32"
                                    >
                                        <div className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] text-sm font-bold">3</span>
                                                Objectives
                                            </h3>
                                            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                                                <li className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#00D4FF]"></span>
                                                    <span>Establish a centralized AI governance framework across hybrid cloud environments</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#00D4FF]"></span>
                                                    <span>Ensure traceability, accountability, and compliance for all AI models</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#00D4FF]"></span>
                                                    <span>Align with ISO/IEC 42001 and NIST AI RMF standards</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#00D4FF]"></span>
                                                    <span>Integrate governance into existing enterprise risk systems and ML platforms</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </motion.section>

                                    {/* 4. Methodology */}
                                    <motion.section
                                        id="methodology"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="scroll-mt-32"
                                    >
                                        <div className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] text-sm font-bold">4</span>
                                                Methodology
                                            </h3>
                                            <div className="space-y-6 text-gray-300 text-sm md:text-base">
                                                <div>
                                                    <h4 className="text-[#00D4FF] font-semibold mb-3">Approach</h4>
                                                    <p>Hybrid waterfall-agile model with governance-first design</p>
                                                </div>

                                                <div>
                                                    <h4 className="text-[#00D4FF] font-semibold mb-3">Tools Used</h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-sm">IBM OpenPages GRC platform</div>
                                                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-sm">Azure ML Ops for CI/CD pipelines and model deployment</div>
                                                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-sm">Azure ML for experimentation and model registry</div>
                                                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-sm">Databricks for collaborative development and lineage tracking</div>
                                                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-sm">Google Vertex AI for scalable training and model monitoring</div>
                                                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-sm">Custom APIs for model metadata ingestion</div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <h4 className="text-[#00D4FF] font-semibold mb-3">Governance Protocols</h4>
                                                    <ul className="space-y-2">
                                                        <li className="flex items-start gap-3">
                                                            <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#6B3FFF]"></span>
                                                            <span>Model registration and approval workflows</span>
                                                        </li>
                                                        <li className="flex items-start gap-3">
                                                            <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#6B3FFF]"></span>
                                                            <span>Risk scoring based on use-case sensitivity</span>
                                                        </li>
                                                        <li className="flex items-start gap-3">
                                                            <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#6B3FFF]"></span>
                                                            <span>Bias audit checkpoints</span>
                                                        </li>
                                                        <li className="flex items-start gap-3">
                                                            <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#6B3FFF]"></span>
                                                            <span>Human-in-the-loop validation triggers</span>
                                                        </li>
                                                        <li className="flex items-start gap-3">
                                                            <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#6B3FFF]"></span>
                                                            <span>Cross-platform model traceability and audit logs</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.section>

                                    {/* 5. Implementation */}
                                    <motion.section
                                        id="implementation"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="scroll-mt-32"
                                    >
                                        <div className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] text-sm font-bold">5</span>
                                                Implementation
                                            </h3>
                                            <div className="overflow-x-auto -mx-4 sm:mx-0">
                                                <table className="w-full border-collapse min-w-[600px]">
                                                    <thead>
                                                        <tr className="border-b border-white/20">
                                                            <th className="text-left p-3 md:p-4 text-[#00D4FF] font-semibold text-sm md:text-base">Phase</th>
                                                            <th className="text-left p-3 md:p-4 text-[#00D4FF] font-semibold text-sm md:text-base">Activities</th>
                                                            <th className="text-left p-3 md:p-4 text-[#00D4FF] font-semibold text-sm md:text-base">Outcomes</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-gray-300 text-sm md:text-base">
                                                        {implementationData.map((row, index) => (
                                                            <tr key={index} className="border-b border-white/10 hover:bg-white/[0.02] transition-colors">
                                                                <td className="p-3 md:p-4 font-medium">{row.phase}</td>
                                                                <td className="p-3 md:p-4">{row.activities}</td>
                                                                <td className="p-3 md:p-4">{row.outcomes}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </motion.section>

                                    {/* 6. Results & Impact */}
                                    <motion.section
                                        id="results"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="scroll-mt-32"
                                    >
                                        <div className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] text-sm font-bold">6</span>
                                                Results & Impact
                                            </h3>
                                            <div className="space-y-6 text-gray-300 text-sm md:text-base">
                                                <div>
                                                    <h4 className="text-[#00D4FF] font-semibold mb-4">Quantitative Outcomes</h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                        <div className="p-5 rounded-xl bg-gradient-to-br from-[#00D4FF]/10 to-transparent border border-[#00D4FF]/20 text-center">
                                                            <p className="text-3xl font-bold text-[#00D4FF] mb-2">100%</p>
                                                            <p className="text-sm">AI model registration within 90 days</p>
                                                        </div>
                                                        <div className="p-5 rounded-xl bg-gradient-to-br from-[#6B3FFF]/10 to-transparent border border-[#6B3FFF]/20 text-center">
                                                            <p className="text-3xl font-bold text-[#6B3FFF] mb-2">30%</p>
                                                            <p className="text-sm">Reduction in audit preparation time</p>
                                                        </div>
                                                        <div className="p-5 rounded-xl bg-gradient-to-br from-[#00D4FF]/10 to-transparent border border-[#00D4FF]/20 text-center">
                                                            <p className="text-3xl font-bold text-[#00D4FF] mb-2">25%</p>
                                                            <p className="text-sm">Improvement in model documentation completeness</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <h4 className="text-[#00D4FF] font-semibold mb-3">Qualitative Insights</h4>
                                                    <ul className="space-y-2">
                                                        <li className="flex items-start gap-3">
                                                            <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#00D4FF]"></span>
                                                            <span>Increased cross-functional collaboration</span>
                                                        </li>
                                                        <li className="flex items-start gap-3">
                                                            <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#00D4FF]"></span>
                                                            <span>Elevated trust in AI outputs among business leaders</span>
                                                        </li>
                                                        <li className="flex items-start gap-3">
                                                            <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#00D4FF]"></span>
                                                            <span>Enhanced readiness for external audits and regulatory reviews</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h4 className="text-[#00D4FF] font-semibold mb-3">	Sample Visuals</h4>
                                                    {/* Responsive Image Grid */}
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                                        {/* Image 1 */}
                                                        <motion.div
                                                            initial={{ opacity: 0, scale: 0.95 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.5 }}
                                                            className="relative rounded-xl overflow-hidden shadow-2xl group border border-white/10 hidden md:block md:cursor-pointer"
                                                            onClick={() => openImageModal(caseStudyImg1)}
                                                        >
                                                            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                                            <img
                                                                src={caseStudyImg1}
                                                                alt="Case Study Visual 1"
                                                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                                            />
                                                        </motion.div>
                                                        {/* Image 1 - Mobile (no click) */}
                                                        <motion.div
                                                            initial={{ opacity: 0, scale: 0.95 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.5 }}
                                                            className="relative rounded-xl overflow-hidden shadow-2xl group border border-white/10 md:hidden"
                                                        >
                                                            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                                            <img
                                                                src={caseStudyImg1}
                                                                alt="Case Study Visual 1"
                                                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                                            />
                                                        </motion.div>

                                                        {/* Image 2 */}
                                                        <motion.div
                                                            initial={{ opacity: 0, scale: 0.95 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.5, delay: 0.1 }}
                                                            className="relative rounded-xl overflow-hidden shadow-2xl group border border-white/10 hidden md:block md:cursor-pointer"
                                                            onClick={() => openImageModal(caseStudyImg2)}
                                                        >
                                                            <div className="absolute inset-0 bg-gradient-to-br from-[#6B3FFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                                            <img
                                                                src={caseStudyImg2}
                                                                alt="Case Study Visual 2"
                                                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                                            />
                                                        </motion.div>
                                                        {/* Image 2 - Mobile (no click) */}
                                                        <motion.div
                                                            initial={{ opacity: 0, scale: 0.95 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.5, delay: 0.1 }}
                                                            className="relative rounded-xl overflow-hidden shadow-2xl group border border-white/10 md:hidden"
                                                        >
                                                            <div className="absolute inset-0 bg-gradient-to-br from-[#6B3FFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                                            <img
                                                                src={caseStudyImg2}
                                                                alt="Case Study Visual 2"
                                                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                                            />
                                                        </motion.div>

                                                        {/* Image 3 */}
                                                        <motion.div
                                                            initial={{ opacity: 0, scale: 0.95 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.5, delay: 0.2 }}
                                                            className="relative rounded-xl overflow-hidden shadow-2xl group border border-white/10 hidden md:block md:cursor-pointer"
                                                            onClick={() => openImageModal(caseStudyImg3)}
                                                        >
                                                            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                                            <img
                                                                src={caseStudyImg3}
                                                                alt="Case Study Visual 3"
                                                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                                            />
                                                        </motion.div>
                                                        {/* Image 3 - Mobile (no click) */}
                                                        <motion.div
                                                            initial={{ opacity: 0, scale: 0.95 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.5, delay: 0.2 }}
                                                            className="relative rounded-xl overflow-hidden shadow-2xl group border border-white/10 md:hidden"
                                                        >
                                                            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                                            <img
                                                                src={caseStudyImg3}
                                                                alt="Case Study Visual 3"
                                                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                                            />
                                                        </motion.div>

                                                        {/* Image 4 */}
                                                        <motion.div
                                                            initial={{ opacity: 0, scale: 0.95 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.5, delay: 0.3 }}
                                                            className="relative rounded-xl overflow-hidden shadow-2xl group border border-white/10 hidden md:block md:cursor-pointer"
                                                            onClick={() => openImageModal(caseStudyImg4)}
                                                        >
                                                            <div className="absolute inset-0 bg-gradient-to-br from-[#6B3FFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                                            <img
                                                                src={caseStudyImg4}
                                                                alt="Case Study Visual 4"
                                                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                                            />
                                                        </motion.div>
                                                        {/* Image 4 - Mobile (no click) */}
                                                        <motion.div
                                                            initial={{ opacity: 0, scale: 0.95 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.5, delay: 0.3 }}
                                                            className="relative rounded-xl overflow-hidden shadow-2xl group border border-white/10 md:hidden"
                                                        >
                                                            <div className="absolute inset-0 bg-gradient-to-br from-[#6B3FFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                                            <img
                                                                src={caseStudyImg4}
                                                                alt="Case Study Visual 4"
                                                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                                            />
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.section>

                                    {/* 7. Lessons Learned */}
                                    <motion.section
                                        id="lessons"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="scroll-mt-32"
                                    >
                                        <div className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] text-sm font-bold">7</span>
                                                Lessons Learned
                                            </h3>
                                            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                                                <li className="flex items-start gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5">
                                                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#00D4FF]"></span>
                                                    <span>Early stakeholder engagement is critical for adoption</span>
                                                </li>
                                                <li className="flex items-start gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5">
                                                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#00D4FF]"></span>
                                                    <span>Bias audits require domain-specific expertise—generic tools fall short</span>
                                                </li>
                                                <li className="flex items-start gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5">
                                                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#00D4FF]"></span>
                                                    <span>Embedding governance into existing workflows (e.g., Jira, ServiceNow) boosts compliance</span>
                                                </li>
                                                <li className="flex items-start gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5">
                                                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#00D4FF]"></span>
                                                    <span>Multi-platform integration requires standardized metadata schemas</span>
                                                </li>
                                                <li className="flex items-start gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5">
                                                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#00D4FF]"></span>
                                                    <span>Governance must evolve with model complexity and external regulations</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </motion.section>

                                    {/* 8. Strategic Implications */}
                                    <motion.section
                                        id="strategic"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="scroll-mt-32"
                                    >
                                        <div className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] text-sm font-bold">8</span>
                                                Strategic Implications
                                            </h3>
                                            <div className="space-y-4 text-gray-300 text-sm md:text-base">
                                                <div className="p-5 rounded-xl bg-gradient-to-br from-[#00D4FF]/5 to-[#6B3FFF]/5 border border-white/10">
                                                    <p className="flex items-start gap-3">
                                                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#00D4FF]"></span>
                                                        <span>This retail conglomerate is now positioned to lead in responsible AI adoption across retail</span>
                                                    </p>
                                                </div>
                                                <div className="p-5 rounded-xl bg-gradient-to-br from-[#00D4FF]/5 to-[#6B3FFF]/5 border border-white/10">
                                                    <p className="flex items-start gap-3">
                                                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#6B3FFF]"></span>
                                                        <span>The framework serves as a blueprint for other Canadian enterprises</span>
                                                    </p>
                                                </div>
                                                <div className="p-5 rounded-xl bg-gradient-to-br from-[#00D4FF]/5 to-[#6B3FFF]/5 border border-white/10">
                                                    <p className="flex items-start gap-3">
                                                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#00D4FF]"></span>
                                                        <span>Supports alignment with Universal AI Safety Framework initiatives</span>
                                                    </p>
                                                </div>
                                                <div className="p-5 rounded-xl bg-gradient-to-br from-[#00D4FF]/5 to-[#6B3FFF]/5 border border-white/10">
                                                    <p className="flex items-start gap-3">
                                                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#6B3FFF]"></span>
                                                        <span>Enables scalable governance for future agentic AI systems</span>
                                                    </p>
                                                </div>
                                                <div className="p-5 rounded-xl bg-gradient-to-br from-[#00D4FF]/5 to-[#6B3FFF]/5 border border-white/10">
                                                    <p className="flex items-start gap-3">
                                                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#00D4FF]"></span>
                                                        <span>Demonstrates feasibility of cross-platform governance across Azure, Databricks, and Google Cloud</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.section>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll to Top Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: showScrollTop ? 1 : 0,
                    scale: showScrollTop ? 1 : 0.8,
                    pointerEvents: showScrollTop ? 'auto' : 'none'
                }}
                transition={{ duration: 0.3 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#00D4FF] text-white shadow-lg hover:bg-[#00B8E6] transition-all duration-300 hover:scale-110"
                aria-label="Scroll to top"
            >
                <ChevronUp className="w-6 h-6" />
            </motion.button>

            {/* Image Modal - Desktop/Tablet Only */}
            {isModalOpen && modalImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] hidden md:flex items-center justify-center p-8"
                    onClick={closeImageModal}
                >
                    {/* Backdrop with blur */}
                    <div className="absolute inset-0 bg-[#040615]/90 backdrop-blur-xl" />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(107,63,255,0.15),_transparent_70%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,212,255,0.1),_transparent_60%)]" />

                    {/* Close Button */}
                    <button
                        onClick={closeImageModal}
                        className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-[#00D4FF]/50 transition-all duration-300 group"
                        aria-label="Close modal"
                    >
                        <X className="w-6 h-6 group-hover:text-[#00D4FF] transition-colors duration-300" />
                    </button>

                    {/* Image Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="relative max-w-[90vw] max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Decorative glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4FF]/20 via-[#6B3FFF]/20 to-[#00D4FF]/20 rounded-2xl blur-xl opacity-50" />

                        {/* Image */}
                        <img
                            src={modalImage}
                            alt="Full size case study visual"
                            className="relative w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-2xl"
                        />
                    </motion.div>
                </motion.div>
            )}

            <Footer />
        </div>
    );
}