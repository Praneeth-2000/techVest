import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import { analyticsDataScienceServices } from "@/data/analyticsDataScienceData";
import analyticsHeroImg from "@/assets/images/analytics-data-science-hero.png";

export default function AnalyticsDataScience() {
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
                            Analytics & Data Science
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
                            <span className="text-white">Analytics & Data Science</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="section-shell relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B3FFF]/5 to-transparent" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full" />
                <div className="section-inner relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-7xl mx-auto"
                    >
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Content Column - Left */}
                            <div>
                                {/* Main Heading */}
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                    Elevate Decision-Making with Predictive Analytics & Data Science
                                </h2>

                                {/* Description Paragraph */}
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Forecast business outcomes before they happen—from customer churn and demand patterns to risk mitigation, powered by custom machine learning models tailored to your unique challenges.
                                </p>
                            </div>

                            {/* Image Column - Right */}
                            <div className="flex items-center justify-center">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full">
                                    <img
                                        src={analyticsHeroImg}
                                        alt="Analytics & Data Science"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services - Integrated View */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />
                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto space-y-16">
                        {analyticsDataScienceServices.map((service, index) => {
                            const isEven = index % 2 === 1;
                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="grid lg:grid-cols-2 gap-12 items-center"
                                >
                                    {/* Image Column */}
                                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group sticky top-8">
                                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <img
                                                src={service.mainImage}
                                                alt={service.title}
                                                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>

                                    {/* Content Column */}
                                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                            {service.title}
                                        </h2>
                                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                            {service.subtitle}
                                        </p>

                                        {/* Features List */}
                                        <div className="space-y-4 mb-6">
                                            {service.features.map((feature) => (
                                                <div key={feature.id} className="border-l-2 border-[#00D4FF]/30 pl-4">
                                                    <h3 className="text-xl font-bold text-white mb-2">
                                                        {feature.heading}
                                                    </h3>
                                                    <p className="text-gray-300">
                                                        {feature.text}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Bottom Text */}
                                        <p className="text-lg text-gray-300 italic border-t border-white/10 pt-6">
                                            "{service.bottomText}"
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
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
                            Ready to Transform Your Data?{" "}
                            <span className="text-[#00D4FF]">Let's Talk</span>
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
