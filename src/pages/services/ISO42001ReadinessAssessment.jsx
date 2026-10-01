import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Users, FileText, Settings, BarChart, Shield, Award, Layers, FileCheck, GraduationCap, LayoutDashboard, UsersRound, RefreshCw, Network, UserCheck, ClipboardList, MessageSquare, Calculator } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";

import heroBanner from "@/assets/images/iso-42001-readiness-assessment-hero.png";
import whyIso42001 from "@/assets/images/why-iso42001.png";
import roadmapImg from "@/assets/images/roadmapImg.png";
import foundationRiskImg from "@/assets/images/foundation-risk-img.png";
import implementationValidationImg from "@/assets/images/implementation-validation-img.png";
import certificationReadinessImg from "@/assets/images/certification-readiness.png";
import aiDrivenOrganizations from "@/assets/images/ai-driven-organizations.png";
import complianceTeams from "@/assets/images/compliance-teams.png";
import technologyLeaders from "@/assets/images/technology-leaders.png";
import consultantsAdvisors from "@/assets/images/consultants-advisors.png";


const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function ISO42001ReadinessAssessment() {
    return (
        <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white">
            <Navigation />

            {/* Hero Section */}
            <section className="section-shell relative overflow-hidden pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
                {/* Background Elements - Scaled for mobile */}
                <div className="absolute top-10 right-5 sm:right-10 md:right-20 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-[#00D4FF] opacity-[0.15] blur-[60px] sm:blur-[90px] md:blur-[120px] rounded-full animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-[#6B3FFF] opacity-[0.12] blur-[80px] sm:blur-[100px] md:blur-[130px] rounded-full" />
                <div className="absolute top-40 right-8 sm:right-20 md:right-32 w-20 sm:w-28 md:w-40 h-20 sm:h-28 md:h-40 border border-cyan-400/30 rounded-full animate-pulse" />
                <div className="absolute bottom-1/2 left-4 sm:left-10 md:left-16 w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 border border-purple-400/20 rotate-45 animate-pulse" />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,212,255,0.15),_transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(107,63,255,0.15),_transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_0%,_rgba(10,10,15,0.4)_100%)]" />

                <div className="relative section-inner px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
                            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                                ISO/IEC 42001:2023
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-[#00D4FF] via-[#6B3FFF] to-[#00D4FF] bg-clip-text text-transparent animate-gradient">
                                Implementation Roadmap
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <div className="mb-4 sm:mb-6 md:mb-8">
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] bg-clip-text text-transparent px-2">
                                16 Weeks to AI Governance Certification
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 px-4">
                            A proven, step-by-step framework to achieve world-class AI management system certification and regulatory compliance.
                        </p>

                        {/* CTA Buttons */}
                        {/* <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-4">
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#00D4FF]/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1 inline-block text-center text-sm sm:text-base"
                            >
                                Start Your Journey
                            </Link>
                            <Link
                                to="/services/ai-governance"
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 hover:scale-105 inline-block text-center text-sm sm:text-base"
                            >
                                Back to AI Governance
                            </Link>
                        </div> */}

                        {/* Breadcrumb */}
                        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm px-4">
                            <Link to="/" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">
                                Home
                            </Link>
                            <span className="text-gray-600">/</span>
                            <Link to="/services" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">
                                Services
                            </Link>
                            <span className="text-gray-600">/</span>
                            <Link to="/services/ai-governance" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300 hidden xs:inline">
                                AI Governance
                            </Link>
                            <span className="text-gray-600 hidden xs:inline">/</span>
                            <span className="text-white font-medium text-center">ISO 42001-2023 Readiness Assessment</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section - Check Your Organizational Readiness */}
            <section className="section-shell relative overflow-hidden py-8 sm:py-10 md:py-12">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B3FFF]/5 to-transparent" />
                <div className="section-inner relative px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative rounded-2xl border-2 border-[#00D4FF]/30 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm p-6 sm:p-8 md:p-10 text-center overflow-hidden group hover:border-[#00D4FF]/50 transition-all duration-300"
                        >
                            {/* Animated Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 via-[#6B3FFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                                    Ready to Assess Your Organization?
                                </h3>
                                <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                                    Evaluate your current state and identify gaps before starting your certification journey
                                </p>
                                <Link
                                    to="/services/ai-governance/iso-42001-audit-checklist"
                                    className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#00D4FF]/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-sm sm:text-base"
                                >
                                    Check Your Organizational Readiness for ISO 42001 Audit Assessment
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why ISO Matters & Key Benefits Section */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden py-10 sm:py-12 md:py-16">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "50px 50px, 100px 100px"
                }} />
                <div className="absolute top-1/4 -left-20 sm:-left-32 w-48 sm:w-64 h-48 sm:h-64 bg-purple-600/10 blur-[80px] sm:blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-20 sm:-right-32 w-56 sm:w-80 h-56 sm:h-80 bg-cyan-500/10 blur-[100px] sm:blur-[120px] rounded-full" />

                <div className="section-inner relative px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Single Row with Image Top, Two Columns Below */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6 sm:space-y-8"
                        >
                            {/* Top Image */}
                            <div className="relative overflow-hidden shadow-2xl group max-h-[200px] sm:max-h-[250px] md:max-h-[300px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <img
                                    src={whyIso42001}
                                    alt="Why ISO 42001"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>


                            {/* Two Columns Below */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                                {/* Left Column - Why ISO Matters */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="space-y-4 sm:space-y-6"
                                >
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                                            WHY ISO/IEC 42001 MATTERS
                                        </h2>
                                        <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] bg-clip-text text-transparent mb-3 sm:mb-4">
                                            The Global AI Governance Imperative
                                        </h3>
                                    </div>

                                    <div className="space-y-3 sm:space-y-4">
                                        <div className="flex items-start gap-3 group/item">
                                            <div className="w-2 h-2 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed group-hover/item:text-white transition-colors duration-300">
                                                Increasing global regulatory pressure for responsible AI deployment.
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3 group/item">
                                            <div className="w-2 h-2 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed group-hover/item:text-white transition-colors duration-300">
                                                Compliance with EU AI Act and evolving global regulations.
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3 group/item">
                                            <div className="w-2 h-2 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed group-hover/item:text-white transition-colors duration-300">
                                                ISO/IEC 42001:2023 sets the international standard for AI
                                                Management Systems (AIMS).
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3 group/item">
                                            <div className="w-2 h-2 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed group-hover/item:text-white transition-colors duration-300">
                                                Demonstrates compliance, builds stakeholder trust, and drives
                                                operational excellence.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Right Column - Key Benefits */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="space-y-4 sm:space-y-6"
                                >
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                                            KEY BENEFITS
                                        </h2>
                                    </div>

                                    {/* Four-Card Grid - Mobile Responsive */}
                                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            className="group relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4 sm:p-5 hover:border-[#00D4FF]/50 transition-all duration-300"
                                        >
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="relative text-center">
                                                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                                                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                                </div>
                                                <h4 className="text-sm sm:text-base font-bold text-white mb-2">Systematic AI Risk Management</h4>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.4 }}
                                            className="group relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4 sm:p-5 hover:border-[#00D4FF]/50 transition-all duration-300"
                                        >
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="relative text-center">
                                                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                                                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                                </div>
                                                <h4 className="text-sm sm:text-base font-bold text-white mb-2">Achieve regulatory compliance</h4>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.5 }}
                                            className="group relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4 sm:p-5 hover:border-[#00D4FF]/50 transition-all duration-300"
                                        >
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="relative text-center">
                                                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                                                    <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                                </div>
                                                <h4 className="text-sm sm:text-base font-bold text-white mb-2">Boost stakeholder confidence</h4>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.6 }}
                                            className="group relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4 sm:p-5 hover:border-[#00D4FF]/50 transition-all duration-300"
                                        >
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="relative text-center">
                                                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 shadow-lg mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                                                    <BarChart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                                </div>
                                                <h4 className="text-sm sm:text-base font-bold text-white mb-2">Gain a competitive market advantage</h4>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* By The Numbers Section */}
            <section className="section-shell relative overflow-hidden py-20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B3FFF]/5 to-transparent" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent">
                                By The Numbers
                            </h2>
                        </motion.div>

                        {/* 4-Column Stat Grid */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {/* Stat 1 - 16 Weeks */}
                            <motion.div
                                variants={itemVariants}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300 text-center"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                                        16
                                    </div>
                                    <div className="text-xl font-bold text-white mb-3">Weeks</div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Complete implementation timeline from start to certification
                                    </p>
                                </div>
                            </motion.div>

                            {/* Stat 2 - 5 Phases */}
                            <motion.div
                                variants={itemVariants}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300 text-center"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#6B3FFF] to-[#00D4FF] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                                        5
                                    </div>
                                    <div className="text-xl font-bold text-white mb-3">Phases</div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Structured approach ensuring systematic progress
                                    </p>
                                </div>
                            </motion.div>

                            {/* Stat 3 - 100% Compliant */}
                            <motion.div
                                variants={itemVariants}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300 text-center"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                                        100%
                                    </div>
                                    <div className="text-xl font-bold text-white mb-3">Compliant</div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Full alignment with ISO/IEC 42001:2023 requirements
                                    </p>
                                </div>
                            </motion.div>

                            {/* Stat 4 - 1st Global Standard */}
                            <motion.div
                                variants={itemVariants}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300 text-center"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#6B3FFF] to-[#00D4FF] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                                        1st
                                    </div>
                                    <div className="text-xl font-bold text-white mb-3">Global Standard</div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        First international AI management
                                        standard, recognized worldwide for
                                        AI governance excellence
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* What Makes This Roadmap Different Section */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden py-16">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto">
                        {/* Two-Column Layout */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid lg:grid-cols-2 gap-12 items-center"
                        >
                            {/* Left Column - Controlled Height Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative rounded-2xl overflow-hidden shadow-2xl group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                                {/* Image with controlled height */}
                                <div className="relative w-full h-auto max-h-[600px]">
                                    <img
                                        src={roadmapImg}
                                        alt="What Makes This Roadmap Different"
                                        className="w-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                                    />

                                </div>
                            </motion.div>

                            {/* Right Column - Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="space-y-8"
                            >
                                <div>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                                        What Makes This Roadmap{" "}
                                        <span className="bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] bg-clip-text text-transparent">
                                            Different
                                        </span>
                                    </h2>
                                </div>

                                {/* Icon Circles with Text */}
                                <div className="space-y-6">
                                    {/* Item 1 - Proven Framework */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <Award className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-2">Proven Framework</h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                Battle-tested methodology used by leading organizations
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Item 2 - Structured Phases */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <Layers className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-2">Structured Phases</h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                Clear milestones and deliverables every week
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Item 3 - Audit-Ready */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.5 }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <FileCheck className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-2">Audit-Ready</h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                Built-in compliance checks and documentation
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Item 4 - Expert-Designed */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <GraduationCap className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-2">Expert-Designed</h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                Developed by ISO certification specialists
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Implementation Workflow Section */}
            <section className="section-shell relative overflow-hidden py-20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B3FFF]/5 to-transparent" />
                <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                                Implementation Workflow: 16-Week Journey to Certification
                            </h2>
                        </motion.div>

                        {/* Workflow Layout */}
                        <div className="relative">
                            {/* Top Row - START and Phase 2 and Phase 4 */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                {/* START Box */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="relative group"
                                >
                                    <div className="rounded-2xl border-2 border-blue-500 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF] transition-all duration-300 text-center min-h-[200px] flex flex-col justify-center">
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="relative">
                                            <h3 className="text-2xl font-bold text-white mb-4">START</h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                Begin the 16-week certification journey
                                            </p>
                                        </div>
                                    </div>
                                    {/* Arrow Down */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-full items-center justify-center h-12">
                                        <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
                                    </div>
                                </motion.div>

                                {/* Phase 2 Box */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="relative group"
                                >
                                    <div className="rounded-2xl border-2 border-purple-500 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#6B3FFF] transition-all duration-300 text-center min-h-[200px] flex flex-col justify-center">
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6B3FFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="relative">
                                            <h3 className="text-2xl font-bold text-white mb-3">Phase 2: Risk & Docs</h3>
                                            <p className="text-gray-300 leading-relaxed text-sm">
                                                Weeks 3-6 — Risk assessments, docs, controls
                                            </p>
                                        </div>
                                    </div>
                                    {/* Arrow Down */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-full items-center justify-center h-12">
                                        <div className="w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent"></div>
                                    </div>
                                </motion.div>

                                {/* Phase 4 Box */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="relative group"
                                >
                                    <div className="rounded-2xl border-2 border-cyan-500 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF] transition-all duration-300 text-center min-h-[200px] flex flex-col justify-center">
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="relative">
                                            <h3 className="text-2xl font-bold text-white mb-3">Phase 4: Internal Audits</h3>
                                            <p className="text-gray-300 leading-relaxed text-sm">
                                                Weeks 11-14 — Stage 1 & 2 audits, remediation
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Bottom Row - Phase 1 and Phase 3 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                {/* Phase 1 Box */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="relative group"
                                >
                                    {/* Arrow Up from this box */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-full items-center justify-center h-12">
                                        <div className="w-0.5 h-full bg-gradient-to-t from-emerald-500 to-transparent"></div>
                                    </div>
                                    <div className="rounded-2xl border-2 border-emerald-500 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-emerald-400 transition-all duration-300 text-center min-h-[200px] flex flex-col justify-center">
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="relative">
                                            <h3 className="text-2xl font-bold text-white mb-3">Phase 1: Foundation</h3>
                                            <p className="text-gray-300 leading-relaxed text-sm">
                                                Weeks 1-2 — AI inventory, governance, scope
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Phase 3 Box */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="relative group"
                                >
                                    {/* Arrow Up from this box */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-full items-center justify-center h-12">
                                        <div className="w-0.5 h-full bg-gradient-to-t from-pink-500 to-transparent"></div>
                                    </div>
                                    <div className="rounded-2xl border-2 border-pink-500 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-pink-400 transition-all duration-300 text-center min-h-[200px] flex flex-col justify-center">
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="relative">
                                            <h3 className="text-2xl font-bold text-white mb-3">Phase 3: Implementation</h3>
                                            <p className="text-gray-300 leading-relaxed text-sm">
                                                Weeks 7-10 — Deploy processes, evidence, monitoring
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Phase 1-2: Foundation & Risk Management Section */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto">
                        {/* Single Column Layout */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Section Title */}
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    Phase 1-2: Foundation & Risk Management
                                </h2>
                                <p className="text-xl text-gray-400">(Weeks 1-6)</p>
                            </div>

                            {/* 2x2 Grid of Week Boxes */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Week 1-2: Foundation */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="group relative rounded-xl border-2 border-blue-500 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF] transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg mb-4">
                                            <LayoutDashboard className="w-6 h-6 text-white" />
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3">Week 1-2: Foundation</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Establish AIMS governance structure</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Complete AI system inventory</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Define organizational context & scope</span>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Week 3-4: Risk Assessment */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="group relative rounded-xl border-2 border-purple-500 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#6B3FFF] transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#6B3FFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg mb-4">
                                            <Shield className="w-6 h-6 text-white" />
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3">Week 3-4: Risk Assessment</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                                                <span>Conduct comprehensive AI risk assessments</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                                                <span>Build risk register (ISO 31000)</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                                                <span>Define risk acceptance criteria</span>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Week 5-6: Documentation */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="group relative rounded-xl border-2 border-emerald-500 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-emerald-400 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg mb-4">
                                            <FileText className="w-6 h-6 text-white" />
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3">Week 5-6: Documentation</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                                                <span>Create mandatory AIMS documentation</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                                                <span>Develop AI lifecycle procedures</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                                                <span>Implement operational controls</span>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Key Milestone */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="group relative rounded-xl border-2 border-cyan-500 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF] transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg mb-4">
                                            <CheckCircle className="w-6 h-6 text-white" />
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3">Key Milestone</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                                <span>Foundation established</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                                <span>Risk framework operational</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                                <span>Documentation complete</span>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Phase 3-4: Implementation & Validation Section */}
            <section className="section-shell relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B3FFF]/5 to-transparent" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Section Title */}
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Phase 3-4: Implementation & Validation</h2>
                                <p className="text-xl text-gray-400">(Weeks 7-14)</p>
                            </div>

                            {/* 2x2 Grid for Weeks */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Week 7-8: Deploy & Monitor */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="group relative rounded-xl border-2 border-blue-500 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF] transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg mb-4">
                                            <Settings className="w-6 h-6 text-white" />
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3">Week 7-8: Deploy & Monitor</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Train stakeholders on AIMS processes</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Activate governance mechanisms</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                <span>Implement monitoring systems</span>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Week 9-10: Pre-Audit Validation */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="group relative rounded-xl border-2 border-purple-500 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#6B3FFF] transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#6B3FFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg mb-4">
                                            <FileCheck className="w-6 h-6 text-white" />
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3">Week 9-10: Pre-Audit Validation</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                                                <span>Conduct internal mini-audit</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                                                <span>Validate process effectiveness</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                                                <span>Prepare audit documentation</span>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Week 11-12: Stage 1 Audit & Remediation */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="group relative rounded-xl border-2 border-emerald-500 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-emerald-400 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg mb-4">
                                            <BarChart className="w-6 h-6 text-white" />
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3">Week 11-12: Stage 1 Audit & Remediation</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                                                <span>Execute Stage 1 internal audit</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                                                <span>Implement corrective actions</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                                                <span>Verify compliance readiness</span>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Week 13-14: Stage 2 Audit & Final Remediation */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="group relative rounded-xl border-2 border-cyan-500 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF] transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg mb-4">
                                            <CheckCircle className="w-6 h-6 text-white" />
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3">Week 13-14: Stage 2 Audit & Final Remediation</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                                                <span>Conduct Stage 2 internal audit</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                                                <span>Complete final remediation</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                                                <span>Achieve audit readiness</span>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Phase 5: Certification Readiness Section */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto">
                        {/* Two-Column Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid lg:grid-cols-2 gap-12 items-stretch"
                        >
                            {/* Left Column - Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="space-y-8 flex flex-col justify-center"
                            >
                                {/* Section Title */}
                                <div>
                                    <h2 className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-white mb-2">
                                        Phase 5: Certification <span className="whitespace-nowrap">Readiness</span>
                                    </h2>
                                    <p className="text-xl text-gray-400">(Weeks 15-16)</p>
                                </div>

                                {/* Week 15 & 16 Grid */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Week 15: Final Preparation */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                    >
                                        <h3 className="text-lg font-bold text-white mb-4">Week 15: Final Preparation</h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                                                <span className="text-sm">Complete management review of AIMS</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                                                <span className="text-sm">Finalize certification audit package</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                                                <span className="text-sm">Conduct mock certification audit</span>
                                            </li>
                                        </ul>
                                    </motion.div>

                                    {/* Week 16: Certification Submission */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        <h3 className="text-lg font-bold text-white mb-4">Week 16: Certification Submission</h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                                                <span className="text-sm">Submit application to certification body</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                                                <span className="text-sm">Provide all required documentation</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                                                <span className="text-sm">Schedule certification audit dates</span>
                                            </li>
                                        </ul>
                                    </motion.div>
                                </div>

                                {/* Triumphant Achievement Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="relative rounded-xl border-l-4 border-cyan-500 bg-white/[0.03] backdrop-blur-sm p-6"
                                >
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/5 to-transparent opacity-50" />
                                    <div className="relative">
                                        <h3 className="text-2xl font-bold text-white mb-3">
                                            Triumphant Achievement
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Achieving ISO/IEC 42001:2023 certification elevates your organization's standing,
                                            demonstrating world-class AI governance and an unwavering commitment to responsible AI.
                                            This is your triumph, solidifying leadership in the ethical and innovative future of AI.
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Right Column - Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative h-auto"
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[400px] bg-gradient-to-br from-slate-800 to-slate-900">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                                    <img
                                        src={certificationReadinessImg}
                                        alt="ISO/IEC 42001 Certification"
                                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Who Should Use This Roadmap Section */}
            <section className="section-shell relative overflow-hidden py-16">

                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                                Who Should Use This Roadmap
                            </h2>
                        </motion.div>

                        {/* 4-Column Grid */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {/* Card 1 - AI-Driven Organizations */}
                            <motion.div
                                variants={itemVariants}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-[#00D4FF]/50 transition-all duration-300"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    {/* Image */}
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={aiDrivenOrganizations}
                                            alt="AI-Driven Organizations"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-white mb-3">AI-Driven Organizations</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            Companies deploying AI systems in operations
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 2 - Compliance Teams */}
                            <motion.div
                                variants={itemVariants}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-[#00D4FF]/50 transition-all duration-300"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    {/* Image */}
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={complianceTeams}
                                            alt="Compliance Teams"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-white mb-3">Compliance Teams</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            Teams managing regulatory requirements
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 3 - Technology Leaders */}
                            <motion.div
                                variants={itemVariants}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-[#00D4FF]/50 transition-all duration-300"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    {/* Image */}
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={technologyLeaders}
                                            alt="Technology Leaders"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-white mb-3">Technology Leaders</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            CTOs and IT executives driving AI strategy
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 4 - Consultants & Advisors */}
                            <motion.div
                                variants={itemVariants}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-[#00D4FF]/50 transition-all duration-300"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    {/* Image */}
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={consultantsAdvisors}
                                            alt="Consultants & Advisors"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-white mb-3">Consultants & Advisors</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            Professionals guiding clients on AI governance
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section >

            {/* Success Factors for Your AI Governance Journey Section */}
            < section className="section-shell bg-white/[0.02] relative overflow-hidden py-16" >
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                                Success Factors for Your AI Governance Journey
                            </h2>
                        </motion.div>

                        {/* 2-Column Grid with 6 Items */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 gap-8 mb-16"
                        >
                            {/* Factor 1 - Executive Commitment */}
                            <motion.div
                                variants={itemVariants}
                                className="group relative"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <UsersRound className="w-7 h-7 text-blue-400" strokeWidth={1.5} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">Executive Commitment</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Strong leadership and resources are paramount for success.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Factor 2 - Cross-Functional Collaboration */}
                            <motion.div
                                variants={itemVariants}
                                className="group relative"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Network className="w-7 h-7 text-purple-400" strokeWidth={1.5} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">Cross-Functional Collaboration</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Team engagement ensures comprehensive coverage.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Factor 3 - Dedicated AIMS Team */}
                            <motion.div
                                variants={itemVariants}
                                className="group relative"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Users className="w-7 h-7 text-emerald-400" strokeWidth={1.5} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">Dedicated AIMS Team</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            A core team is crucial for seamless execution.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Factor 4 - Documentation Discipline */}
                            <motion.div
                                variants={itemVariants}
                                className="group relative"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <ClipboardList className="w-7 h-7 text-cyan-400" strokeWidth={1.5} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">Documentation Discipline</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Meticulous record-keeping is key for audit success.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Factor 5 - Continuous Improvement */}
                            <motion.div
                                variants={itemVariants}
                                className="group relative"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <RefreshCw className="w-7 h-7 text-orange-400" strokeWidth={1.5} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">Continuous Improvement</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Proactive refinement maintains compliance and efficiency.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Factor 6 - Expert Guidance */}
                            <motion.div
                                variants={itemVariants}
                                className="group relative"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <UserCheck className="w-7 h-7 text-indigo-400" strokeWidth={1.5} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">Expert Guidance</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Consultants provide accelerated success and expert insight.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative rounded-3xl border border-[#00D4FF]/30 bg-gradient-to-br from-[#00D4FF]/10 via-[#6B3FFF]/10 to-[#00D4FF]/10 backdrop-blur-sm p-8 md:p-12"
                        >
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00D4FF]/5 to-[#6B3FFF]/5" />
                            <div className="relative text-center">
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <MessageSquare className="w-12 h-12 text-[#00D4FF]" />
                                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                                        Ready to Lead in Responsible AI?
                                    </h3>
                                </div>
                                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                                    Contact us today for a customized implementation plan and secure your competitive edge in ethical AI.
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-block px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#00D4FF]/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                                >
                                    Schedule a Consultation Now
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section >



            <Footer />
        </div >
    );
}