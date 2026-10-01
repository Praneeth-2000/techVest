import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import expertiseData from "@/data/expertiseData";
import { ArrowRight } from "lucide-react";

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

export default function ExpertiseDetail() {
    const { slug } = useParams();

    // Scroll to top when slug changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // Find the expertise data by slug
    const expertise = Object.values(expertiseData).find(e => e.slug === slug);

    if (!expertise) {
        return (
            <div className="min-h-screen bg-[#05060F] text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Expertise Area Not Found</h1>
                    <Link to="/services/investment-management" className="btn-primary">
                        Back to Investment Management
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div key={slug} className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white">
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
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[#00D4FF] bg-clip-text text-transparent">
                            {expertise.bannerText}
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            {expertise.subBannerText}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
                            <Link to="/" className="hover:text-[#00D4FF] transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            <Link to="/industries" className="hover:text-[#00D4FF] transition-colors">
                                Industries
                            </Link>
                            <span>/</span>
                            <span className="text-white">{expertise.title}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            {(expertise.heading || expertise.headingDescription || expertise.headingDescription2) && (
                <section className="section-shell relative overflow-hidden">
                    {/* Background Accent */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B3FFF]/5 to-transparent" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full" />
                    <div className="section-inner relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            {expertise.heading && (
                                <h2 className="section-title mb-6">{expertise.heading}</h2>
                            )}
                            {expertise.headingDescription && (
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    {expertise.headingDescription}
                                </p>
                            )}
                            {expertise.headingDescription2 && (
                                <p className="text-gray-300 text-lg leading-relaxed mt-4">
                                    {expertise.headingDescription2}
                                </p>
                            )}
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Content Grid */}
            {expertise.content && expertise.content.length > 0 && (
                <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "100px 100px"
                    }} />
                    {/* Floating Orbs */}
                    <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                    <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />
                    <div className="section-inner relative">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="max-w-5xl mx-auto space-y-6"
                        >
                            {expertise.content.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    variants={itemVariants}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative">
                                        <h3 className="text-2xl font-bold text-white mb-3">{item.heading}</h3>
                                        {item.subheading && item.subheading !== item.heading && (
                                            <h4 className="text-[#00D4FF]/80 font-medium mb-3">{item.subheading}</h4>
                                        )}
                                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Back Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mt-16 text-center"
                        >
                            <Link to="/services/investment-management" className="btn-primary">
                                <ArrowLeft className="mr-2 w-4 h-4" />
                                Back to Investment Management
                            </Link>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="section-shell relative overflow-hidden">
                {/* Background Glow */}
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
