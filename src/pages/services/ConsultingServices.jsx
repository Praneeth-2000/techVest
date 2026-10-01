// import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import SectionHeader from "@/components/techvest/SectionHeader";

import strategicEvaluation from "@/assets/images/strategic-evaluation.png";
import strategyAndSelectionOfSystems from "@/assets/images/strategy-and-selection-of-systems.png";
import assessmentAndSelectionOfOutsourcingSolutions from "@/assets/images/assessment-and-selection-of-outsourcing-solutions.png";
import benchmarkingSolutions from "@/assets/images/benchmarking-solutions.png";

const consultingServices = [
    {
        title: "Strategic Evaluation",
        description: "Let us help you envision your optimal operating model and map out a path to achieve it. With our unmatched insight into trends and industry standards, we are the perfect partner to guide you on your journey.",
        link: "/services/consulting/strategic-evaluation",
        image: strategicEvaluation
    },
    {
        title: "Strategy and Selection of Systems",
        description: "Reaching your desired future state demands the right systems. Our consultants, with their extensive expertise across various applications in the investment continuum, can help you build the optimal toolkit to achieve your goals.",
        link: "/services/consulting/strategy-and-selection-of-systems",
        image: strategyAndSelectionOfSystems
    },
    {
        title: "Assessment and Selection of Outsourcing Solutions",
        description: "Successfully navigating outsourcing processes and technology requires a nuanced understanding of available options. Through our extensive partnerships with leading outsourcing providers, we offer unmatched insights into managing outsourcing projects of all sizes.",
        link: "/services/consulting/assessment-and-selection-of-outsourcing-solutions",
        image: assessmentAndSelectionOfOutsourcingSolutions
    },
    {
        title: "Benchmarking Solutions",
        description: "Deciding whether to chart a new course or stay on your current path? Our Benchmarking Solutions offer the insights needed for informed decision-making. With decades of expertise in asset management software and services, we enable swift and cost-effective benchmarking of your current provider against market standards.",
        link: "/services/consulting/benchmarking-solutions",
        image: benchmarkingSolutions
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function ConsultingServices() {
    return (
        <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white">
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
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(107,63,255,0.2),_transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,212,255,0.15),_transparent_60%)]" />

                <div className="relative section-inner text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                                <Briefcase className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <SectionHeader
                            eyebrow="Consulting Services"
                            title="Strategic Guidance for Transformational Success"
                            subtitle="Consulting, delivery, and managed services for complex change—operating model design, roadmap, vendor selection, and execution at pace."
                        />
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
                            <Link to="/" className="hover:text-[#00D4FF] transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            <Link to="/services" className="hover:text-[#00D4FF] transition-colors">
                                Services
                            </Link>
                            <span>/</span>
                            <span className="text-white">Consulting Services</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-shell relative overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "80px 80px"
                }} />

                {/* Floating Orbs */}
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

                <div className="section-inner relative">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-6"
                    >
                        {consultingServices.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-white/30 transition-all duration-500"
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />

                                <div className="relative p-6">
                                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                    <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

                                    <Link
                                        to={service.link}
                                        className="btn-inline"
                                    >
                                        Learn more
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-shell bg-gradient-to-br from-[#6B3FFF]/10 to-[#00D4FF]/10 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-[100px] rounded-full" />

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
                        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300">
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