import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, GitBranch, Layers, Scale, Sparkles, AlertCircle } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";

import aiMaturityFramework from "@/assets/images/ai-maturity-framework.png";

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

export default function AIMaturityFramework() {
    const maturityPhases = [
        {
            phase: 1,
            title: "Chaos Phase",
            subtitle: "Innovation & Speed",
            capability: "Isolated experiments and duplicated efforts",
            focus: "Innovation & Speed",
            icon: Lightbulb,
            gradient: "from-blue-500 to-cyan-500",
            description: "Organizations are experimenting with AI in isolated pockets. Teams work independently with limited coordination, leading to duplicated efforts but rapid innovation."
        },
        {
            phase: 2,
            title: "Consolidation Phase",
            subtitle: "Centralizing Compute",
            capability: "Shared Models & Vector Stores",
            focus: "Centralizing Compute",
            icon: GitBranch,
            gradient: "from-cyan-500 to-teal-500",
            description: "Organizations begin sharing models and infrastructure. Central compute resources emerge, reducing redundancy and establishing common vector stores for knowledge management."
        },
        {
            phase: 3,
            title: "Platform Phase",
            subtitle: "Building the Layers",
            capability: "Unified Infrastructure with standards (FinOps, Safety, SDK)",
            focus: "Building the Layers",
            icon: Layers,
            gradient: "from-teal-500 to-emerald-500",
            description: "A unified platform emerges with standardized approaches to cost management, safety protocols, and development kits. Infrastructure becomes more sophisticated and reusable."
        },
        {
            phase: 4,
            title: "Governed Scale",
            subtitle: "Enforcing the Rules",
            capability: "Enterprise Operations, Oversight, Compliance, Policy Engines",
            focus: "Enforcing the Rules",
            icon: Scale,
            gradient: "from-emerald-500 to-green-500",
            description: "Full governance frameworks are operational. Policy engines automate compliance, oversight mechanisms ensure accountability, and enterprise-wide standards are enforced systematically."
        },
        {
            phase: 5,
            title: "AI-Native Organization",
            subtitle: "Optimization & Feedback",
            capability: "Agents Autonomy & Reasoning Embedded in Core, Automated HITL loops",
            focus: "Optimization & Feedback",
            icon: Sparkles,
            gradient: "from-green-500 to-lime-500",
            description: "AI becomes core to organizational DNA. Autonomous agents handle complex reasoning, human-in-the-loop processes are automated and optimized, driving continuous improvement and innovation at scale."
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
                                AI Maturity
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-[#00D4FF] via-[#6B3FFF] to-[#00D4FF] bg-clip-text text-transparent animate-gradient">
                                Framework
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-10">
                            Understanding how enterprises typically evolve in their AI journey—from chaos to AI-native organization.
                        </p>

                        {/* CTA Buttons */}
                        {/* s */}

                        {/* Breadcrumb */}
                        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                            <Link to="/" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">
                                Home
                            </Link>
                            <span className="text-gray-600">/</span>
                            <Link to="/frameworks" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">
                                Frameworks
                            </Link>
                            <span className="text-gray-600">/</span>
                            <span className="text-white font-medium">AI Maturity Framework</span>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Framework Diagram Section */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden py-12 md:py-16">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

                <div className="section-inner relative py-0">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-8"
                        >
                            <p className="section-kicker mb-3">Evolution Pathway</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent pb-2">
                                How Enterprises Typically Evolve
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                                This maturity framework maps the typical evolution path organizations follow as they scale AI capabilities, from experimental chaos to a fully AI-native organization.
                            </p>
                        </motion.div>

                        {/* Framework Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="max-w-6xl mx-auto"
                        >
                            {/* Image content commented out */}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5 Maturity Phases */}
            <section className="section-shell relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B3FFF]/5 to-transparent" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <p className="section-kicker mb-4">5 Evolution Phases</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent pb-2">
                                The Maturity Journey
                            </h2>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {maturityPhases.map((phase, index) => (
                                <motion.div
                                    key={phase.phase}
                                    variants={itemVariants}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                                            {/* Phase Number */}
                                            <div className="flex-shrink-0 flex items-center justify-center">
                                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${phase.gradient} shadow-lg text-white font-bold text-2xl`}>
                                                    {phase.phase}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <div className="mb-4">
                                                    <h3 className="text-2xl font-bold text-white mb-1">{phase.title}</h3>
                                                    <p className="text-lg text-[#00D4FF] font-semibold">{phase.subtitle}</p>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                                    <div>
                                                        <p className="text-sm text-gray-400 mb-1">Capability:</p>
                                                        <p className="text-white font-medium">{phase.capability}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-400 mb-1">Focus:</p>
                                                        <p className="text-white font-medium">{phase.focus}</p>
                                                    </div>
                                                </div>

                                                <p className="text-gray-300 leading-relaxed">{phase.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Critical Insight */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm p-8 md:p-12"
                        >
                            {/* Icon and Title */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex-shrink-0">
                                    <AlertCircle className="w-10 h-10 text-cyan-400" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                                    Critical Insight
                                </h2>
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <p className="text-xl md:text-2xl text-white leading-relaxed">
                                    Most enterprises are still navigating between <span className="font-bold text-[#00D4FF]">chaos and consolidation phases</span>.
                                </p>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Moving to platform and governed scale requires <span className="font-semibold text-white">deliberate strategy</span>, <span className="font-semibold text-white">executive commitment</span>, and <span className="font-semibold text-white">significant organizational change management</span>.
                                </p>
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-center mt-12"
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#00D4FF]/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                            >
                                Accelerate Your AI Maturity
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
