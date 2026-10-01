import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import SectionHeader from "@/components/techvest/SectionHeader";

const deliveryServices = [
    {
        title: "Program & Project Management",
        description: "Effective program and project management is crucial for achieving strategic objectives and maintaining operational efficiency. TechVest's seasoned professionals bring extensive experience in managing complex projects from inception to completion.",
        link: "/services/delivery/program-and-project-management",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    },
    {
        title: "Systems Implementation & Integration",
        description: "Seamless systems implementation and integration are vital for maintaining operational continuity and enhancing business performance. TechVest specializes in the deployment of cutting-edge technologies and the integration of diverse systems.",
        link: "/services/delivery/systems-implementation-and-integration",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
    },
    {
        title: "Outsourcing Transition",
        description: "Whether you're an asset manager shifting to a new service provider or an asset servicer in search of transition support, our outsourcing transition experts will enhance your team and offer expertise throughout the transition lifecycle.",
        link: "/services/delivery/outsourcing-transition",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
    }
];

export default function DeliveryServices() {
    return (
        <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white">
            <Navigation />

            {/* Hero Section */}
            <section className="section-shell relative overflow-hidden pt-32">
                <div className="absolute top-20 right-10 w-96 h-96 bg-[#00D4FF] opacity-20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[#6B3FFF] opacity-15 blur-[150px] rounded-full" />
                <div className="absolute top-1/4 right-10 w-32 h-32 border border-cyan-500/20 rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 left-20 w-24 h-24 border border-purple-500/20 rotate-45" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(107,63,255,0.2),_transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,212,255,0.15),_transparent_60%)]" />

                <div className="relative section-inner text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                                <Code2 className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <SectionHeader
                            eyebrow="Delivery Services"
                            title="Turning Strategy into Reality"
                            subtitle="End-to-end implementation and integration services that turn strategy into reality with precision execution and measurable outcomes."
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
                            <span className="text-white">Delivery Services</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services - Two Column Split Layout */}
            <section className="section-shell relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto space-y-24">
                        {deliveryServices.map((service, index) => {
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
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                            {service.title}
                                        </h2>
                                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                            {service.description}
                                        </p>
                                        <Link
                                            to={service.link}
                                            className="inline-flex items-center gap-2 text-[#00D4FF] hover:text-white transition-colors duration-300 font-medium text-lg group"
                                        >
                                            Learn more
                                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>

                                    {/* Image Column */}
                                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
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