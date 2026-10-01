import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BadgeCheck, CheckIcon, ArrowRight } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import {
    dataEngineeringHero,
    aiReadyDataFoundation,
    selfHealingDataOps,
    modernDataArchitecture,
    intelligentDataFoundation
} from "@/data/dataEngineeringData";

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

export default function DataEngineering() {
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
                            Data Engineering
                        </h1>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
                            <Link to="/" className="hover:text-[#00D4FF] transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            <Link to="/services" className="hover:text-[#00D4FF] transition-colors">
                                Services
                            </Link>
                            <span>/</span>
                            <span className="text-white">Data Engineering</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Hero Content Section */}
            <section className="section-shell relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B3FFF]/5 to-transparent" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full" />
                <div className="section-inner relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid lg:grid-cols-[3fr_2fr] gap-12 items-center max-w-7xl mx-auto"
                    >
                        {/* Left: Text */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                {dataEngineeringHero.title}
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                {dataEngineeringHero.subtitle}
                            </p>
                        </div>

                        {/* Right: Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[16/9] w-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img
                                src={dataEngineeringHero.image}
                                alt="AI Native Architecture"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* AI-Ready Data Foundation Section */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />
                <div className="section-inner relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid lg:grid-cols-[2fr_3fr] gap-12 items-center max-w-7xl mx-auto"
                    >
                        {/* Left: Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[16/9] w-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img
                                src={aiReadyDataFoundation.image}
                                alt="AI-Ready Data Foundation"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Right: Content */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                {aiReadyDataFoundation.title}
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                {aiReadyDataFoundation.introParagraph}
                            </p>

                            <div className="space-y-6">
                                {aiReadyDataFoundation.spokes.map((spoke) => (
                                    <div key={spoke.id} className="flex gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center">
                                                <BadgeCheck className="w-5 h-5 text-[#00D4FF]" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{spoke.title}</h3>
                                            <p className="text-gray-300">{spoke.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-8 text-lg text-gray-300 italic">
                                "{aiReadyDataFoundation.centerHub.description}"
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Self-Healing DataOps Section */}
            <section className="section-shell bg-gradient-to-br from-[#6B3FFF]/10 to-[#00D4FF]/10">
                <div className="section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid lg:grid-cols-[3fr_2fr] gap-12 items-center max-w-7xl mx-auto"
                    >
                        {/* Left: Content */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                {selfHealingDataOps.title}
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                {selfHealingDataOps.description}
                            </p>

                            <div className="space-y-6">
                                {selfHealingDataOps.features.map((feature) => (
                                    <div key={feature.id} className="flex gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center">
                                                <BadgeCheck className="w-5 h-5 text-[#00D4FF]" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                            <p className="text-gray-300">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-8 text-lg text-gray-300 italic">
                                "{selfHealingDataOps.concludingText}"
                            </p>
                        </div>

                        {/* Right: Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[16/9] w-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img
                                src={selfHealingDataOps.image}
                                alt="Self-Healing DataOps Platform"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Modern Data Architecture Section */}
            <section className="section-shell">
                <div className="section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid lg:grid-cols-[3fr_2fr] gap-12 items-center max-w-7xl mx-auto"
                    >
                        {/* Left: Content */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                {modernDataArchitecture.title}
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                {modernDataArchitecture.subtitle}
                            </p>

                            <div className="space-y-6">
                                {modernDataArchitecture.services.map((service) => (
                                    <div key={service.id} className="flex gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center">
                                                <BadgeCheck className="w-5 h-5 text-[#00D4FF]" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                            <p className="text-gray-300 mb-2">{service.description}</p>
                                            {service.bulletPoints && (
                                                <ul className="space-y-1 ml-4">
                                                    {service.bulletPoints.map((point, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                                                            <CheckIcon className="w-4 h-4 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[16/9] w-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img
                                src={modernDataArchitecture.image}
                                alt="Modern Data Architecture"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intelligent Data Foundation Section */}
            <section className="section-shell bg-white/[0.02]">
                <div className="section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid lg:grid-cols-[3fr_2fr] gap-12 items-center max-w-7xl mx-auto"
                    >
                        {/* Left: Content */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                {intelligentDataFoundation.title}
                            </h2>
                            <p className="text-xl text-gray-300 mb-10">
                                {intelligentDataFoundation.description}
                            </p>

                            <div className="space-y-8">
                                {intelligentDataFoundation.stats.map((stat) => (
                                    <div key={stat.id} className="flex items-start gap-6">
                                        <div className="flex-shrink-0 w-24 h-24 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#6B3FFF] flex items-center justify-center shadow-lg">
                                            <span className="text-2xl font-bold">{stat.value}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2">{stat.title}</h3>
                                            <p className="text-lg text-gray-300">{stat.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[16/9] w-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img
                                src={intelligentDataFoundation.image}
                                alt="Intelligent Data Foundation"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
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
                            Ready to Transform Your Data Infrastructure?{" "}
                            <span className="text-[#00D4FF]">Let's Build Together</span>
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
