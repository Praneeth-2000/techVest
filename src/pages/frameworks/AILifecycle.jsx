import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Database, Cpu, Settings, CheckCircle, Zap, Rocket, Activity, RefreshCw, Shield, DollarSign, Server, Lock, Eye, Users } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";

import aiLifecycleFramework from "@/assets/images/ai-lifecycle-framework.png";

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

export default function AILifecycle() {
    const lifecycleSteps = [
        {
            number: 1,
            title: "Problem Definition",
            description: "Identify use cases, define success metrics, assess feasibility and ROI",
            icon: Target,
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            number: 2,
            title: "Data Collection",
            description: "Gather datasets, clean and preprocess, ensure compliance and quality",
            icon: Database,
            gradient: "from-cyan-500 to-teal-500"
        },
        {
            number: 3,
            title: "Model Selection",
            description: "Choose foundation models: GPT, Claude, Llama, or custom architectures",
            icon: Cpu,
            gradient: "from-teal-500 to-emerald-500"
        },
        {
            number: 4,
            title: "Training & Fine-Tuning",
            description: "Adapt models with domain-specific data, configure hyperparameters",
            icon: Settings,
            gradient: "from-emerald-500 to-green-500"
        },
        {
            number: 5,
            title: "Evaluation",
            description: "Assess performance with quantitative metrics and human evaluation",
            icon: CheckCircle,
            gradient: "from-green-500 to-lime-500"
        },
        {
            number: 6,
            title: "Optimization",
            description: "Implement RLHF, apply quantization, ensure safety and alignment",
            icon: Zap,
            gradient: "from-lime-500 to-yellow-500"
        },
        {
            number: 7,
            title: "Deployment",
            description: "Move to production: containerize, set up APIs, implement security",
            icon: Rocket,
            gradient: "from-yellow-500 to-orange-500"
        },
        {
            number: 8,
            title: "Monitoring",
            description: "Track performance, detect drift, monitor quality and user feedback",
            icon: Activity,
            gradient: "from-orange-500 to-red-500"
        },
        {
            number: 9,
            title: "Continuous Improvement",
            description: "Collect feedback, retrain models, implement A/B testing",
            icon: RefreshCw,
            gradient: "from-red-500 to-pink-500"
        },
        {
            number: 10,
            title: "Governance",
            description: "Ensure compliance, maintain transparency, conduct regular audits",
            icon: Shield,
            gradient: "from-pink-500 to-purple-500"
        }
    ];

    const crossCuttingConcerns = [
        {
            title: "Cost Management",
            description: "Optimize infrastructure and model costs throughout the lifecycle",
            icon: DollarSign,
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Scalability",
            description: "Ensure systems can handle growing workloads and user demands",
            icon: Server,
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "Security",
            description: "Protect data, models, and systems from threats and breaches",
            icon: Lock,
            gradient: "from-emerald-500 to-teal-500"
        },
        {
            title: "Explainability",
            description: "Make AI decisions transparent and interpretable to stakeholders",
            icon: Eye,
            gradient: "from-orange-500 to-red-500"
        },
        {
            title: "User Experience",
            description: "Design intuitive, responsive interfaces that delight users",
            icon: Users,
            gradient: "from-indigo-500 to-violet-500"
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
                                AI Lifecycle
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-[#00D4FF] via-[#6B3FFF] to-[#00D4FF] bg-clip-text text-transparent animate-gradient">
                                Framework
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-10">
                            A comprehensive framework for building, deploying, and maintaining AI systems across the entire development lifecycle.
                        </p>

                        {/* CTA Buttons */}
                        {/* <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#00D4FF]/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1 inline-block"
                            >
                                Get Started
                            </Link>
                            <Link
                                to="/frameworks"
                                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 hover:scale-105 inline-block"
                            >
                                Explore Frameworks
                            </Link>
                        </div> */}

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
                            <span className="text-white font-medium">AI Lifecycle</span>
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
                            <p className="section-kicker mb-3">Complete Lifecycle</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent pb-2">
                                The AI Development Journey
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                                Our framework provides a structured approach to AI development, covering all stages from initial problem definition to ongoing governance and continuous improvement.
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

            {/* 10 Lifecycle Steps & Cross-Cutting Concerns */}
            <section className="section-shell relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B3FFF]/5 to-transparent" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full" />
                <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto">
                        {/* 10 Lifecycle Steps */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <p className="section-kicker mb-4">10-Step Process</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent pb-2">
                                Complete AI Lifecycle Stages
                            </h2>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 gap-6 mb-16"
                        >
                            {lifecycleSteps.map((step, index) => (
                                <motion.div
                                    key={step.number}
                                    variants={itemVariants}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} shadow-lg text-white font-bold text-2xl`}>
                                                {step.number}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-gray-300 leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Cross-Cutting Concerns Cards */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 [&>*:nth-child(4)]:lg:ml-[calc(16.666%-0.75rem)]"
                        >
                            {crossCuttingConcerns.map((concern, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative text-center">
                                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${concern.gradient} shadow-lg mb-4 mx-auto`}>
                                            <concern.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{concern.title}</h3>
                                        <p className="text-gray-300 leading-relaxed">{concern.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mt-16"
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#00D4FF]/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                            >
                                Implement This Framework
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
