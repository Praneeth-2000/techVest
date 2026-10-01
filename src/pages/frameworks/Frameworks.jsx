import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, RefreshCw } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";

// Import framework images
import governanceStructureImg from "@/assets/images/Governance Structure.png";
import aiMaturityFrameworkImg from "@/assets/images/ai-maturity-framework.png";
import aiLifecycleFrameworkImg from "@/assets/images/ai-lifecycle-framework.png";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
};

export default function Frameworks() {
    const frameworks = [
        {
            id: 1,
            title: "AI Governance & Trust Framework",
            description: "A comprehensive 10-layer framework for building responsible, trustworthy, and compliant AI systems at enterprise scale.",
            image: governanceStructureImg,
            icon: Shield,
            gradient: "from-[#00D4FF] to-[#6B3FFF]",
            link: "/frameworks/ai-governance-trust-framework",
            highlights: [
                "10 comprehensive governance layers",
                "Executive oversight to continuous improvement",
                "Compliance, risk management & transparency",
                "Build trust with stakeholders"
            ]
        },
        {
            id: 2,
            title: "AI Maturity Framework",
            description: "Understanding how enterprises typically evolve in their AI journey—from chaos to AI-native organization.",
            image: aiMaturityFrameworkImg,
            icon: TrendingUp,
            gradient: "from-[#6B3FFF] to-[#00D4FF]",
            link: "/frameworks/ai-maturity-framework",
            highlights: [
                "5 distinct maturity phases",
                "From chaos to AI-native organization",
                "Practical evolution pathway",
                "Assess & accelerate your journey"
            ]
        },
        {
            id: 3,
            title: "AI Lifecycle",
            description: "A comprehensive framework for building, deploying, and maintaining AI systems across the entire development lifecycle.",
            image: aiLifecycleFrameworkImg,
            icon: RefreshCw,
            gradient: "from-[#00D4FF] to-[#6B3FFF]",
            link: "/frameworks/ai-lifecycle",
            highlights: [
                "10-step development process",
                "Problem definition to governance",
                "Cross-cutting concerns addressed",
                "End-to-end AI implementation"
            ]
        }
    ];

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
                                AI
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-[#00D4FF] via-[#6B3FFF] to-[#00D4FF] bg-clip-text text-transparent animate-gradient">
                                Frameworks
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-10">
                            Comprehensive frameworks to guide your AI transformation journey, from governance and maturity assessment to complete lifecycle management.
                        </p>

                        {/* Breadcrumb */}
                        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                            <Link to="/" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">
                                Home
                            </Link>
                            <span className="text-gray-600">/</span>
                            <span className="text-white font-medium">Frameworks</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Frameworks Grid */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <p className="section-kicker mb-4">Our Frameworks</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent pb-2">
                                Choose Your Framework
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                                Select the framework that best aligns with your organization's needs and AI maturity level.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {frameworks.map((framework, index) => {
                                const Icon = framework.icon;
                                return (
                                    <motion.div
                                        key={framework.id}
                                        variants={itemVariants}
                                        className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-[#00D4FF]/50 transition-all duration-300"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Framework Image */}
                                        <div className="relative h-64 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#040615]/80 z-10" />
                                            <img
                                                src={framework.image}
                                                alt={framework.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute top-4 right-4 z-20">
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${framework.gradient} flex items-center justify-center shadow-lg`}>
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative p-6">
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors duration-300">
                                                {framework.title}
                                            </h3>
                                            <p className="text-gray-300 mb-4 leading-relaxed">
                                                {framework.description}
                                            </p>

                                            {/* Highlights */}
                                            <ul className="space-y-2 mb-6">
                                                {framework.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                                                        <span className="text-[#00D4FF] mt-1">✓</span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Read More Button */}
                                            <Link
                                                to={framework.link}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${framework.gradient} text-white font-semibold hover:shadow-lg hover:shadow-[#00D4FF]/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 w-full justify-center`}
                                            >
                                                Read More
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
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
                            Ready to <span className="text-[#00D4FF]">Transform</span> Your AI Journey?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Let our experts help you implement the right framework for your organization's unique needs and AI maturity level.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300 hover:scale-105"
                        >
                            Get Started Today
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
