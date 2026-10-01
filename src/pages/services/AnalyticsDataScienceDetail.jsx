import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import { analyticsDataScienceServices } from "@/data/analyticsDataScienceData";

export default function AnalyticsDataScienceDetail() {
    const { slug } = useParams();
    const service = analyticsDataScienceServices.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link to="/services/analytics-data-science" className="text-[#00D4FF] hover:underline">
                        Back to Analytics & Data Science
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white">
            <Navigation />

            {/* Hero Section */}
            <section className="section-shell relative overflow-hidden pt-32">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(107,63,255,0.2),_transparent_65%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,212,255,0.15),_transparent_70%)]" />

                <div className="relative section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        {/* Centered Header */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-white to-[#00D4FF] bg-clip-text text-transparent pb-2">
                            {service.title}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
                            {service.subtitle}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
                            <Link to="/" className="hover:text-[#00D4FF] transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            <Link to="/services" className="hover:text-[#00D4FF] transition-colors">
                                Services
                            </Link>
                            <span>/</span>
                            <Link to="/services/analytics-data-science" className="hover:text-[#00D4FF] transition-colors">
                                Analytics & Data Science
                            </Link>
                            <span>/</span>
                            <span className="text-white">{service.title}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Section - Image Left, Features Right */}
            <section className="section-shell">
                <div className="section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-7xl mx-auto"
                    >
                        {/* Container with Image on Left and Features on Right */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                            {/* Left Side - Main Image (844px × 478px) - Centered */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="flex items-center justify-center"
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src={service.mainImage}
                                        alt={service.title}
                                        className="w-full h-auto"
                                        style={{ maxWidth: '844px', aspectRatio: '844/478' }}
                                    />
                                </div>
                            </motion.div>

                            {/* Right Side - Features List */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="space-y-8"
                            >
                                {service.features.map((feature, index) => (
                                    <div key={feature.id} className="relative">
                                        {/* Feature Block */}
                                        <div className="pb-6">
                                            <h3 className="text-2xl font-bold text-white mb-3">
                                                {feature.heading}
                                            </h3>
                                            <p className="text-lg text-gray-300 leading-relaxed">
                                                {feature.text}
                                            </p>
                                        </div>

                                        {/* Underline */}
                                        {index < service.features.length - 1 && (
                                            <div className="border-b border-white/10" />
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Bottom Centered Paragraph */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center max-w-5xl mx-auto"
                        >
                            <p className="text-xl text-gray-300 leading-relaxed italic">
                                "{service.bottomText}"
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Back Button Section */}
            <section className="section-shell">
                <div className="section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <Link
                            to="/services/analytics-data-science"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-transparent text-white hover:text-[#00D4FF] hover:border-[#00D4FF] transition-all duration-300"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Analytics & Data Science
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
