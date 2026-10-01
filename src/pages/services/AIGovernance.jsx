import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Search, FileText, AlertTriangle, Building, ClipboardList, Users, Layers, CheckCircle, Clock, FileCheck, ArrowRight, Scale, Eye, LayoutDashboard, Code, Briefcase, GraduationCap, Award, ClipboardCheck, BarChart, Server, FileSignature, RefreshCw, ShieldCheck } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";

import aiGovernanceHero from "@/assets/images/ai-governance-hero.png";
import aiRegulatoryCompliance from "@/assets/images/ai-regulatory-compliance.jpg";
import aiRiskLifecycle from "@/assets/images/ai-risk-lifecycle.png";
import responsibleAItools from "@/assets/images/responsible-ai-tools.png";
import gaasLifecycle from "@/assets/images/gaas-lifecycle.png";
import partnerWithUs from "@/assets/images/partner-with-us.png";

import AIRegComplianceAdvisory1 from "@/assets/images/AIRegComplianceAdvisory1.jpg";
import AIGovernanceFramework from "@/assets/images/AIGovernanceFramework.jpg";

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

export default function AIGovernance() {
    return (
        <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white">
            <Navigation />

            {/* Hero Section */}
            <section className="section-shell relative overflow-hidden pt-32 pb-20">
                {/* Background Elements */}
                <div className="absolute top-10 right-20 w-[500px] h-[500px] bg-[#00D4FF] opacity-[0.15] blur-[120px] rounded-full animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-[#6B3FFF] opacity-[0.12] blur-[130px] rounded-full" />
                <div className="absolute top-40 right-32 w-40 h-40 border border-cyan-400/30 rounded-full animate-pulse" />
                <div className="absolute bottom-1/2 left-16 w-28 h-28 border border-purple-400/20 rotate-45 animate-pulse" />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,212,255,0.15),_transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(107,63,255,0.15),_transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_0%,_rgba(10,10,15,0.4)_100%)]" />

                <div className="relative section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto text-center"
                    >

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                                Strategic AI Governance
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-[#00D4FF] via-[#6B3FFF] to-[#00D4FF] bg-clip-text text-transparent animate-gradient">
                                & Trust Advisory
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-10">
                            Comprehensive solutions for regulatory compliance, risk management, and responsible AI deployment across your organization.
                        </p>

                        {/* CTA Buttons */}
                        {/* <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#00D4FF]/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1 inline-block"
                            >
                                Get Started Now
                            </Link>
                            <Link
                                to="/services"
                                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 hover:scale-105 inline-block"
                            >
                                View Services
                            </Link>
                        </div> */}

                        {/* Breadcrumb */}
                        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                            <Link to="/" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">
                                Home
                            </Link>
                            <span className="text-gray-600">/</span>
                            <Link to="/services" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">
                                Services
                            </Link>
                            <span className="text-gray-600">/</span>
                            <span className="text-white font-medium">AI Governance</span>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image */}
                {/* <div className="relative section-inner mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="max-w-6xl mx-auto"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 group">
                            Glow Effect 
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4FF] via-[#6B3FFF] to-[#00D4FF] rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500" />

                            Image Container 
                            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10">
                                Gradient Overlay 
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/20 via-transparent to-[#6B3FFF]/20 opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10" />

                                Image
                                <img
                                    src={aiGovernanceHero}
                                    alt="AI Governance Strategy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                 Floating Info Card 
                                <div className="absolute bottom-8 left-8 right-8 bg-black/70 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#6B3FFF] flex items-center justify-center shadow-lg shadow-[#00D4FF]/50">
                                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-white font-bold text-lg">Certified & Compliant</div>
                                                <div className="text-gray-300 text-sm">ISO 27001 | SOC 2 | GDPR Ready</div>
                                            </div>
                                        </div>

                                        <div className="flex gap-6">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-[#00D4FF]">99%</div>
                                                <div className="text-xs text-gray-400">Compliance</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-[#6B3FFF]">500+</div>
                                                <div className="text-xs text-gray-400">Projects</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-[#00D4FF]">24/7</div>
                                                <div className="text-xs text-gray-400">Support</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div> */}
            </section>

            {/* AI Regulatory Compliance & Advisory Services */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto">
                        {/* Section with Image Left and Content Right */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid lg:grid-cols-2 gap-12 items-center mb-24"
                        >
                            {/* Image Column */}
                            <div className="lg:order-1">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[16/9] w-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <img src={AIRegComplianceAdvisory1} alt="AI Regulatory Compliance Banner" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="lg:order-2">
                                <p className="section-kicker mb-4">Regulatory Compliance</p>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    AI Regulatory Compliance & Advisory Services
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Navigate the complex landscape of AI regulation with expert guidance. Our comprehensive compliance services ensure alignment with emerging federal policies including the AI Executive Order, NIST AI Risk Management Framework, and OMB Guidance.
                                </p>
                            </div>
                        </motion.div>

                        {/* Key Focus Areas */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-12"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Key Focus Areas</h3>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            <motion.div
                                variants={itemVariants}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg mb-4">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-3">Federal & State Compliance</h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        Alignment with federal policies and state-level compliance across Canada and USA.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg mb-4">
                                        <Search className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-3">Risk Assessment</h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        Comprehensive frameworks for automated decision-making impact evaluation.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg mb-4">
                                        <FileText className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-3">Governance Blueprints</h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        AI compliance playbooks and governance blueprints tailored to your organization.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg mb-4">
                                        <AlertTriangle className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-3">Transparency & Safety</h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        Implementation of AI transparency, safety, and accountability measures.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* AI Governance Framework Design & Operating Model Setup */}
            <section className="section-shell relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B3FFF]/5 to-transparent" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto">
                        {/* Section with Content Left and Image Right */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid lg:grid-cols-2 gap-12 items-center mb-24"
                        >
                            {/* Content Column */}
                            <div className="lg:order-1">
                                <p className="section-kicker mb-4">Governance Framework</p>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    AI Governance Framework Design & Operating Model Setup
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Build a robust AI governance infrastructure from the ground up. We help organizations establish governance offices, policies, and operating models that align with existing workflows.
                                </p>
                            </div>

                            {/* Image Column */}
                            <div className="lg:order-2">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[16/9] w-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <img src={AIGovernanceFramework} alt="AI Governance Framework" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Framework Components */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-12"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Framework Components</h3>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
                        >
                            <motion.div
                                variants={itemVariants}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg mb-4">
                                        <Building className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-3">Establish AI Governance Office (AIGO)</h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        Build a dedicated AIGO with clear mandates and authority.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg mb-4">
                                        <ClipboardList className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-3">Create Policies & Standards</h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        Develop comprehensive AI policies, standards, and procedures.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg mb-4">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-3">Define Roles & Responsibilities</h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        Assign AI Owners, Model Risk Officers, and Human Oversight roles.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg mb-4">
                                        <Layers className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-3">Integrate with Operations</h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        Embed governance into MLOps and LLMOps cycles.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 shadow-lg mb-4">
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-3">Implement Responsible AI Principles</h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        Deploy organization-wide ethical AI frameworks.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* AI Risk Assessment & Continuous Monitoring Services */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto">
                        {/* Main Heading and Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <p className="section-kicker mb-4">Risk Management</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent pb-2">
                                AI Risk Assessment & Continuous Monitoring Services
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                                Proactive risk management is essential for safe AI deployment. Our continuous monitoring services detect and mitigate risks before they impact your operations, ensuring model reliability and regulatory compliance.

                            </p>
                        </motion.div>

                        {/* Comprehensive Risk Coverage */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-24"
                        >
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Image Column */}
                                <div className="lg:order-1">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[16/9] w-full">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <img src={aiRiskLifecycle} alt="Comprehensive Risk Coverage" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                </div>

                                {/* Content Column */}
                                <div className="lg:order-2">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Comprehensive Risk Coverage</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0" />
                                            <span className="text-gray-300 text-lg leading-relaxed">AI risk scoring frameworks tailored to use cases</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0" />
                                            <span className="text-gray-300 text-lg leading-relaxed">Cyber and AI attack resilience assessments</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0" />
                                            <span className="text-gray-300 text-lg leading-relaxed">Real-time monitoring for model drift and bias</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0" />
                                            <span className="text-gray-300 text-lg leading-relaxed">Hallucination and toxicity detection</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0" />
                                            <span className="text-gray-300 text-lg leading-relaxed">Incident and breach response protocols</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service Highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-24"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Service Highlights</h3>
                            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300">
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative flex items-start gap-4">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg flex-shrink-0">
                                            <Clock className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">24/7 Continuous Monitoring</h4>
                                            <p className="text-gray-300 leading-relaxed">Round-the-clock surveillance of AI systems.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300">
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative flex items-start gap-4">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg flex-shrink-0">
                                            <FileCheck className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">100% Audit Documentation</h4>
                                            <p className="text-gray-300 leading-relaxed">Complete model documentation for regulatory audits.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Risk Lifecycle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Risk Lifecycle</h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold text-sm">
                                                1
                                            </div>
                                            <h4 className="text-lg font-bold text-white">Risk Identification</h4>
                                        </div>
                                        <p className="text-gray-300 leading-relaxed">Catalog potential risks</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-sm">
                                                2
                                            </div>
                                            <h4 className="text-lg font-bold text-white">Risk Assessment</h4>
                                        </div>
                                        <p className="text-gray-300 leading-relaxed">Evaluate likelihood and impact</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white font-bold text-sm">
                                                3
                                            </div>
                                            <h4 className="text-lg font-bold text-white">Monitoring & Detection</h4>
                                        </div>
                                        <p className="text-gray-300 leading-relaxed">Continuous model/data checks</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold text-sm">
                                                4
                                            </div>
                                            <h4 className="text-lg font-bold text-white">Mitigation & Response</h4>
                                        </div>
                                        <p className="text-gray-300 leading-relaxed">Implement controls & remediation</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Responsible AI Tooling, Platforms & Automation */}
            <section className="section-shell relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B3FFF]/5 to-transparent" />
                <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <p className="section-kicker mb-4">Automation & Tooling</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent pb-2">
                                Responsible AI Tooling, Platforms & Automation
                            </h2>

                            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                                Leverage cutting-edge tools and platforms to automate AI governance and ensure responsible deployment. Our technology stack provides comprehensive visibility and control over your AI ecosystem.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Tooling Capabilities</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative text-center">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg mb-4 mx-auto">
                                            <Scale className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Fairness & Bias</h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">Detect and monitor model bias</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative text-center">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg mb-4 mx-auto">
                                            <Eye className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Explainability</h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">Provide interpretable model insights</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative text-center">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg mb-4 mx-auto">
                                            <LayoutDashboard className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Governance Dashboards</h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">Centralized visibility</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative text-center">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg mb-4 mx-auto">
                                            <Code className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Policy-as-Code</h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">Automated policy enforcement</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative text-center">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 shadow-lg mb-4 mx-auto">
                                            <FileText className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Automated Docs</h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">Auto-generated compliance documentation</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Training, Certification & Workforce Enablement */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <p className="section-kicker mb-4">Workforce Enablement</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent pb-2">
                                Training, Certification & Workforce Enablement
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                                Empower your team with the knowledge and skills needed to implement responsible AI practices. Our comprehensive training programs span from executive leadership to technical practitioners.
                            </p>
                        </motion.div>

                        {/* Programs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-24"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Programs</h3>
                            <div className="grid md:grid-cols-3 gap-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg mb-6">
                                            <Briefcase className="w-7 h-7 text-white" />
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-4">Executive Bootcamps</h4>
                                        <p className="text-gray-300 leading-relaxed">
                                            Strategic AI risk management for C-suite and board members.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg mb-6">
                                            <GraduationCap className="w-7 h-7 text-white" />
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-4">Technical Training</h4>
                                        <p className="text-gray-300 leading-relaxed">
                                            Hands-on Responsible AI practices for data scientists and engineers
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg mb-6">
                                            <Award className="w-7 h-7 text-white" />
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-4">ISO 42001 Implementation</h4>
                                        <p className="text-gray-300 leading-relaxed">
                                            AI Management System certification and implementation training
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Specialized Programs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-24"
                        >
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Image Column */}
                                <div className="lg:order-1">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[4/3] max-w-2xl mx-auto">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <img src={responsibleAItools} alt="Specialized Programs" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                </div>

                                {/* Content Column */}
                                <div className="lg:order-2">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Specialized Programs</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0" />
                                            <span className="text-gray-300 text-lg leading-relaxed">Generative AI safety and governance training</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0" />
                                            <span className="text-gray-300 text-lg leading-relaxed">AI Ethics certification programs</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0" />
                                            <span className="text-gray-300 text-lg leading-relaxed">Custom workshops for your organization</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Training Flow */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Training Flow</h3>
                            <div className="grid md:grid-cols-4 gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300 text-center"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold text-lg mb-4">
                                            1
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Assessment</h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">Evaluate current AI capabilities & needs</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300 text-center"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-lg mb-4">
                                            2
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Customized Training</h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">Tailored programs for specific roles & goals</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300 text-center"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white font-bold text-lg mb-4">
                                            3
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Certification</h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">Validate expertise with official credentials</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300 text-center"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold text-lg mb-4">
                                            4
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Ongoing Support</h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">Continuous learning & resource access</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Governance-as-a-Service (GaaS) */}
            <section className="section-shell relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B3FFF]/5 to-transparent" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <p className="section-kicker mb-4">Managed Services</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent pb-2">
                                Governance-as-a-Service (GaaS)
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                                Outsource your AI governance needs to our expert team. Our subscription-based service provides ongoing monitoring, compliance management, and strategic oversight without the overhead of building internal capabilities.
                            </p>
                        </motion.div>

                        {/* What's Included */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-24"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">What's Included</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative text-center">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg mb-4 mx-auto">
                                            <Clock className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Continuous Monitoring</h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">24/7 subscription-based surveillance of AI systems and models</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative text-center">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg mb-4 mx-auto">
                                            <ClipboardCheck className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Annual Audits</h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">Comprehensive AI governance audits and compliance reviews</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative text-center">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg mb-4 mx-auto">
                                            <Scale className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Regulatory Compliance</h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">Managed compliance with evolving AI regulations and standards</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative text-center">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg mb-4 mx-auto">
                                            <BarChart className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Board Reporting</h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">Real-time dashboards designed for executive and board-level visibility into AI governance metrics</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative text-center">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 shadow-lg mb-4 mx-auto">
                                            <Server className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Vendor Risk Management</h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">Comprehensive third-party AI risk assessment and ongoing monitoring of external AI tools</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* GaaS Lifecycle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">GaaS Lifecycle</h3>
                            <div className="max-w-5xl mx-auto mb-12">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <img
                                        src={gaasLifecycle}
                                        alt="GaaS Lifecycle Diagram"
                                        className="w-full h-auto object-contain bg-white/[0.02] transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>


                            <div className="text-center">
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    <span className="font-semibold text-white">Onboarding</span> → <span className="font-semibold text-white">Continuous Monitoring</span> → <span className="font-semibold text-white">Reporting</span> → <span className="font-semibold text-white">Optimization</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Third-Party AI Vendor Risk Management */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full" />

                <div className="section-inner relative w-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <p className="section-kicker mb-4">Vendor Management</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent pb-2">
                                Third-Party AI Vendor Risk Management
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                                Protect your organization from risks introduced by external AI vendors and tools. Our comprehensive vendor risk management program ensures that third-party AI solutions meet your governance standards and regulatory requirements.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-12"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">End-to-End Vendor Governance</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative text-center">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg mb-4 mx-auto">
                                            <AlertTriangle className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Vendor Risk Scoring</h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">Comprehensive AI risk assessment of potential and existing vendors</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative text-center">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg mb-4 mx-auto">
                                            <FileText className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Procurement Assessment</h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">Due diligence evaluations for AI-based tools and platforms</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative text-center">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg mb-4 mx-auto">
                                            <FileSignature className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Contractual Governance</h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">Establish governance requirements in vendor agreements</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative text-center">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 shadow-lg mb-4 mx-auto">
                                            <RefreshCw className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Ongoing Audits</h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">Regular third-party AI risk audits and compliance verification</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative text-center">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg mb-4 mx-auto">
                                            <Shield className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Risk Mitigation</h4>
                                        <p className="text-gray-300 leading-relaxed text-sm">Continuous monitoring and risk mitigation strategies</p>
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="max-w-4xl mx-auto rounded-2xl border border-[#00D4FF]/30 bg-gradient-to-br from-[#00D4FF]/10 to-transparent p-8"
                            >
                                <h4 className="text-xl font-bold text-white mb-4">Critical Protection:</h4>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Third-party AI tools can introduce significant risks including data privacy violations, algorithmic bias, and compliance failures. Our vendor risk management ensures you maintain control and visibility over your entire AI ecosystem.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Partner with Us */}
            <section className="section-shell relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B3FFF]/5 to-transparent" />
                <div className="absolute top-1/4 -right-32 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full" />

                <div className="section-inner relative w-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Two Column Layout: Image Left, Content Right */}
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                {/* Left Side - Image */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="order-2 lg:order-1"
                                >
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                        <img
                                            src={partnerWithUs}
                                            alt="Partner With Us"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </motion.div>

                                {/* Right Side - Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="order-1 lg:order-2"
                                >
                                    <div className="space-y-8">
                                        {/* Header */}
                                        <div>
                                            <p className="section-kicker mb-4">Strategic Partnership</p>
                                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent pb-2">
                                                Partner with Us
                                            </h2>
                                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                                Transform your AI governance from a compliance burden into a strategic advantage. Our comprehensive suite of services provides end-to-end support for responsible AI deployment, from initial framework design to ongoing monitoring and vendor management.
                                            </p>
                                        </div>

                                        {/* Why Choose Us */}
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Choose Us</h3>
                                            <div className="space-y-4">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.6, delay: 0.3 }}
                                                    className="group relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                                >
                                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                    <div className="relative flex items-start gap-4">
                                                        <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                                                            <ShieldCheck className="w-6 h-6 text-white" />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-lg font-bold text-white mb-2">360° Complete Coverage</h4>
                                                            <p className="text-gray-300 leading-relaxed">
                                                                End-to-end AI governance solutions
                                                            </p>
                                                        </div>
                                                    </div>
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.6, delay: 0.4 }}
                                                    className="group relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                                >
                                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                    <div className="relative flex items-start gap-4">
                                                        <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                                                            <Clock className="w-6 h-6 text-white" />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-lg font-bold text-white mb-2">24/7 Always On</h4>
                                                            <p className="text-gray-300 leading-relaxed">
                                                                Continuous monitoring and support
                                                            </p>
                                                        </div>
                                                    </div>
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.6, delay: 0.5 }}
                                                    className="group relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                                >
                                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                    <div className="relative flex items-start gap-4">
                                                        <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
                                                            <CheckCircle className="w-6 h-6 text-white" />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-lg font-bold text-white mb-2">100% Compliance Ready</h4>
                                                            <p className="text-gray-300 leading-relaxed">
                                                                Full regulatory alignment
                                                            </p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>

                                        {/* CTA Buttons */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.6 }}
                                        >
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                                <Link
                                                    to="/contact"
                                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300"
                                                >
                                                    Get Started Today
                                                    <ArrowRight className="w-5 h-5" />
                                                </Link>
                                                <Link
                                                    to="/contact"
                                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 bg-transparent text-white hover:text-[#00D4FF] hover:border-[#00D4FF] transition-all duration-300"
                                                >
                                                    Schedule a Consultation
                                                </Link>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-shell bg-gradient-to-br from-[#6B3FFF]/10 to-[#00D4FF]/10 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-[100px] rounded-full" />
                <div className="section-inner text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Ready to establish <span className="text-[#00D4FF]">AI Governance</span> in your organization?
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            Get in touch with our AI governance experts to discuss your specific requirements and discover how we can help you build a responsible AI framework.
                        </p>
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
