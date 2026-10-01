import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import { advisoryServices } from "@/data/servicesData";
import { ArrowRight } from "lucide-react";

export default function ConsultingServiceDetail() {
    const { slug } = useParams();
    const service = advisoryServices.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link to="/services/consulting" className="text-[#00D4FF] hover:underline">
                        Back to Consulting Services
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
                {/* Animated Gradient Orbs */}
                <div className="absolute top-20 right-10 w-96 h-96 bg-[#00D4FF] opacity-20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[#6B3FFF] opacity-15 blur-[150px] rounded-full" />
                {/* Decorative Shapes */}
                <div className="absolute top-1/4 right-10 w-32 h-32 border border-cyan-500/20 rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 left-20 w-24 h-24 border border-purple-500/20 rotate-45" />
                <div className="absolute top-2/3 right-1/4 w-16 h-16 border-2 border-cyan-400/10 rounded-lg rotate-12" />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(107,63,255,0.2),_transparent_65%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,212,255,0.15),_transparent_70%)]" />
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "radial-gradient(rgba(0,212,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "50px 50px"
                }} />

                <div className="relative section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[#00D4FF] bg-clip-text text-transparent pb-2">
                            {service.heroTitle}
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
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
                            <Link to="/services/consulting" className="hover:text-[#00D4FF] transition-colors">
                                Consulting Services
                            </Link>
                            <span>/</span>
                            <span className="text-white">{service.title}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content - Two Column Split */}
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
                    <div className="max-w-7xl mx-auto">
                        {/* Intro Section with Image Left */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid lg:grid-cols-2 gap-12 items-center mb-24"
                        >
                            {/* Image Column */}
                            <div className="lg:order-1">
                                {service.image && (
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Content Column */}
                            <div className="lg:order-2">
                                <p className="section-kicker mb-4">{service.eyebrow}</p>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    {service.sectionTitle}
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    {service.sectionDescription}
                                </p>
                            </div>
                        </motion.div>

                        {/* Benefits - Alternating Two Column Layout */}
                        <div className="space-y-24">
                            {service.benefits.map((benefit, index) => {
                                const isEven = index % 2 === 1;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="grid lg:grid-cols-2 gap-12 items-center"
                                    >
                                        {/* Content Column */}
                                        <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                                                <h3 className="text-2xl md:text-3xl font-bold text-white">
                                                    {benefit.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-300 text-lg leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>

                                        {/* Visual/Decorative Column */}
                                        <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#00D4FF]/5 to-transparent p-12 lg:p-16">
                                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,212,255,0.1),_transparent_70%)]" />
                                                <div className="relative text-center">
                                                    <div className="text-6xl md:text-7xl font-bold text-[#00D4FF]/20">
                                                        {String(index + 1).padStart(2, '0')}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
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
                            to="/services/consulting"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-transparent text-white hover:text-[#00D4FF] hover:border-[#00D4FF] transition-all duration-300"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Consulting Services
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-shell bg-gradient-to-br from-[#6B3FFF]/10 to-[#00D4FF]/10">
                <div className="section-inner text-center">
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
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300"
                        >
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
