import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import { aiAcademyPrograms, programFormats, targetAudience } from "@/data/aiAcademyData";

export default function AIAcademy() {
    const [expandedPrograms, setExpandedPrograms] = useState({});

    const toggleProgram = (id) => {
        setExpandedPrograms(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white">
            <Navigation />

            {/* Hero Section */}
            <section className="section-shell relative overflow-hidden pt-32">
                <div className="absolute top-20 right-10 w-96 h-96 bg-[#00D4FF] opacity-20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[#6B3FFF] opacity-15 blur-[150px] rounded-full" />
                <div className="absolute top-1/4 right-10 w-32 h-32 border border-cyan-500/20 rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 left-20 w-24 h-24 border border-purple-500/20 rotate-45" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(107,63,255,0.2),_transparent_65%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,212,255,0.15),_transparent_70%)]" />

                <div className="relative section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[#00D4FF] bg-clip-text text-transparent pb-2">
                            AI Academy
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            Empower your team with practical AI skills and strategic insights
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
                            <Link to="/" className="hover:text-[#00D4FF] transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            <Link to="/services" className="hover:text-[#00D4FF] transition-colors">
                                Services
                            </Link>
                            <span>/</span>
                            <span className="text-white">AI Academy</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto space-y-24">
                        {aiAcademyPrograms.map((program, index) => {
                            const isExpanded = expandedPrograms[program.id];
                            const isEven = index % 2 === 1;

                            return (
                                <motion.div
                                    key={program.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    {/* Main Program Content */}
                                    <div className={`grid lg:grid-cols-2 gap-12 items-start`}>
                                        {/* Content Column */}
                                        <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] flex items-center justify-center">
                                                    <span className="text-2xl font-bold">{index + 1}</span>
                                                </div>
                                                <h2 className="text-3xl md:text-4xl font-bold text-white">
                                                    {program.title}
                                                </h2>
                                            </div>
                                            <h3 className="text-xl text-[#00D4FF] font-semibold mb-6">
                                                {program.subtitle}
                                            </h3>
                                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                                {program.description}
                                            </p>
                                            <button
                                                onClick={() => toggleProgram(program.id)}
                                                className="inline-flex items-center gap-2 text-[#00D4FF] hover:text-white transition-colors duration-300 font-medium text-lg group"
                                            >
                                                {isExpanded ? "Show Less" : "View Details"}
                                                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "-rotate-90" : "group-hover:translate-x-1"}`} />
                                            </button>
                                        </div>

                                        {/* Image Column */}
                                        <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                            {program.image && (
                                                <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[16/9] w-full">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                    <img
                                                        src={program.image}
                                                        alt={program.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Expandable Content Panel */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8 mt-8">
                                                    <h4 className="text-2xl font-bold text-white mb-6">Key Features:</h4>
                                                    <ul className="space-y-4">
                                                        {program.bullets.map((bullet, idx) => (
                                                            <li key={idx} className="text-gray-300 text-lg flex items-start gap-3">
                                                                <span className="text-[#00D4FF] mt-1.5 text-xl">•</span>
                                                                <span>{bullet}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Program Formats Table Section */}
            <section className="section-shell relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B3FFF]/5 to-transparent" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full" />

                <div className="section-inner relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto"
                    >
                        <h2 className="section-title text-center mb-12">Program Formats</h2>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-white/20">
                                        <th className="text-left py-4 px-6 text-[#00D4FF] font-bold text-lg">Format</th>
                                        <th className="text-left py-4 px-6 text-[#00D4FF] font-bold text-lg">Duration</th>
                                        <th className="text-left py-4 px-6 text-[#00D4FF] font-bold text-lg">Best For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {programFormats.map((format, index) => (
                                        <motion.tr
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            className="border-b border-white/10 hover:bg-white/[0.02] transition-colors"
                                        >
                                            <td className="py-4 px-6 text-white font-semibold">{format.format}</td>
                                            <td className="py-4 px-6 text-gray-300">{format.duration}</td>
                                            <td className="py-4 px-6 text-gray-300">{format.bestFor}</td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Who Is This For Section */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />

                <div className="section-inner relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="section-title text-center mb-12">Who Is This For?</h2>

                        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12">
                            <ul className="space-y-6">
                                {targetAudience.map((audience, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="text-gray-300 text-lg flex items-start gap-4"
                                    >
                                        <span className="text-[#00D4FF] mt-1.5 text-2xl">•</span>
                                        <span>{audience}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
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
                            Ready to Transform Your Team?{" "}
                            <span className="text-[#00D4FF]">Get Started</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Contact us to discuss customized AI training programs tailored to your organization's needs
                        </p>
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
