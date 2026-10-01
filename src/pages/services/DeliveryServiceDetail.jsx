// import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import { deliveryServices } from "@/data/servicesData";

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

export default function DeliveryServiceDetail() {
    const { slug } = useParams();
    const service = deliveryServices.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="min-h-screen bg-[#05060F] text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link to="/services" className="btn-primary">
                        Back to Services
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
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[#00D4FF] bg-clip-text text-transparent">
                            {service.heroTitle}
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            {service.heroSubtitle}
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
                            <Link to="/services/delivery" className="hover:text-[#00D4FF] transition-colors">
                                Delivery Services
                            </Link>
                            <span>/</span>
                            <span className="text-white">{service.title}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-shell">
                <div className="section-inner">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Left Column - Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-1 space-y-6"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4">{service.mainHeading}</h2>
                                <p className="text-gray-300 leading-relaxed">{service.headingDescription}</p>
                            </div>

                            {service.image && (
                                <div className="rounded-2xl overflow-hidden border border-white/10">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-auto"
                                    />
                                </div>
                            )}
                        </motion.div>

                        {/* Right Column - Capabilities Grid */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="lg:col-span-2 grid sm:grid-cols-2 gap-6"
                        >
                            {service.capabilities.map((capability,) => (
                                <motion.div
                                    key={capability.id}
                                    variants={itemVariants}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative">
                                        <h3 className="text-xl font-bold text-white mb-2">{capability.heading}</h3>
                                        {capability.subHeading && (
                                            <h4 className="text-[#00D4FF]/80 font-medium mb-3">{capability.subHeading}</h4>
                                        )}
                                        <p className="text-gray-300 leading-relaxed">{capability.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-16 text-center"
                    >
                        <Link to="/services/delivery" className="btn-primary">
                            <ArrowLeft className="mr-2 w-4 h-4" />
                            Back to Delivery Services
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-shell bg-white/[0.02]">
                <div className="section-inner text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title mb-6">
                            Know what you need? Submit your <span className="text-[#00D4FF]">Request</span> for information{" "}
                            <span className="text-[#00D4FF]">Here.</span>
                        </h2>
                        <Link to="/contact" className="btn-primary">
                            Contact Us
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}