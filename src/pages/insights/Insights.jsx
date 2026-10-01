import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, FileText } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import { ArrowRight } from "lucide-react";

const insightCards = [
    {
        id: "blog",
        title: "Blog",
        description: "Our Blogs gather perspectives from our client engagements. Explore observations and industry trends shared by our contributors, or deep dive into transformative insights led by our thought leaders.",
        to: "/insights/blog",
        icon: BookOpen
    },
    {
        id: "resources",
        title: "Resources",
        description: "We engage actively in industry discussions across multiple platforms. Whether you prefer webinars, client stories, or whitepapers, our resources provide in-depth insights into the trends shaping our industry's evolution.",
        to: "/insights/resources",
        icon: FileText
    }
];

export default function Insights() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[#00D4FF] bg-clip-text text-transparent pb-2">
                            Insights
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            We simplify complexity to surface actionable perspectives on emerging technology, operations, and strategy across the financial services landscape.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
                            <Link to="/" className="hover:text-[#00D4FF] transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            <span className="text-white">Insights</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section-shell relative overflow-hidden">
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
                        <h2 className="section-title mb-6">Deep Dive for Actionable Insights</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Our consultants actively contribute to shaping and implementing the insights we share through our blog, whitepapers, webinars, and more, rather than just discussing industry trends. Discover the latest industry discussions, understand how they impact your business, and explore strategies to stay ahead in the face of evolving technology and operational challenges.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Insights Cards */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />
                <div className="section-inner relative">
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                        {insightCards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative">
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#6B3FFF]/20 mb-6">
                                        <card.icon className="w-7 h-7 text-[#00D4FF]" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        {card.description}
                                    </p>

                                    <Link
                                        to={card.to}
                                        className="inline-flex items-center gap-2 text-[#00D4FF] font-medium hover:gap-3 transition-all duration-200"
                                    >
                                        Explore {card.title}
                                        <span>→</span>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
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
