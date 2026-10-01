import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";

const expertiseCategories = [
    {
        id: "front-office",
        title: "Front Office",
        description: "Diversified investment strategies, emerging financial products, and global risk management drive your business forward. Our specialty lies in positioning your front office at the forefront, transforming complex investment challenges into innovative technological solutions.",
        link: "/service/front-office",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
        id: "middle-office",
        title: "Middle Office",
        description: "The middle office is the core of your operations. You need a partner capable of understanding your unique operational challenges and enhancing your middle office strategy to achieve new levels of success.",
        link: "/service/middle-office",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
        id: "back-office",
        title: "Back Office",
        description: "From compliance to custody, we have a profound understanding of the back office. Whether you require assistance with onboarding, system rationalization, or operational transformation, we are here to provide support.",
        link: "/service/back-office",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
    },
    {
        id: "data-management",
        title: "Data Management",
        description: "Harness data's power. From governance to analytics, we optimize your data lifecycle for informed decisions and regulatory compliance, empowering your business with actionable insights.",
        link: "/service/data-management",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
        id: "outsourcing",
        title: "Outsourcing",
        description: "We collaborate with leading service providers, custodians, and specialized vendors to unravel the intricacies of outsourcing, from suitability assessment to transition.",
        link: "/service/outsourcing",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
    },
    {
        id: "alternative-operations",
        title: "Alternative Operations",
        description: "Unlock growth. Navigate complexities with our expertise in hedge funds, private equity, and more. Tailored solutions drive returns and mitigate risks in dynamic markets.",
        link: "/service/alternative-operations",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
    }
];

export default function InvestmentManagement() {
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
                            Investment Management
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Transform your investment operations with AI-powered solutions designed for the modern financial landscape. At Techvest Global, we deliver cutting-edge AI engineering expertise across the entire investment management lifecycle—from front office trading and portfolio management to middle office risk analytics and back office operations. Our comprehensive approach combines advanced machine learning, data engineering, and AI governance to help you optimize decision-making, enhance operational efficiency, and maintain competitive advantage in an increasingly complex market.
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
                            <Link to="/services/ai-engineering" className="hover:text-[#00D4FF] transition-colors">
                                AI Engineering
                            </Link>
                            <span>/</span>
                            <span className="text-white">Investment Management</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            {/* <section className="section-shell relative overflow-hidden">
               
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
                        <h2 className="section-title">
                            Our consultants are well-versed in Banking and Financial Services
                        </h2>
                        <p className="section-subtitle mt-6">
                            Our consultants range from 2 years to 25+ industry experience, spanning various roles across the investment management lifecycle. Partnering with Techvest Global grants you access to experts proficient in every aspect of your business. This ensures accelerated project initiation and enhanced insights, without any loss in communication.
                        </p>
                    </motion.div>
                </div>
            </section> */}

            {/* Expertise - Two Column Split Layout */}
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
                    <div className="max-w-7xl mx-auto space-y-24">
                        {expertiseCategories.map((expertise, index) => {
                            const isEven = index % 2 === 1;
                            return (
                                <motion.div
                                    key={expertise.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="grid lg:grid-cols-2 gap-12 items-center"
                                >
                                    {/* Content Column */}
                                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                            {expertise.title}
                                        </h2>
                                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                            {expertise.description}
                                        </p>
                                        <Link
                                            to={expertise.link}
                                            className="inline-flex items-center gap-2 text-[#00D4FF] hover:text-white transition-colors duration-300 font-medium text-lg group"
                                        >
                                            Learn more
                                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>

                                    {/* Image Column */}
                                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[16/9] w-full">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <img
                                                src={expertise.image}
                                                alt={expertise.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
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
