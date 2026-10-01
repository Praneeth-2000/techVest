import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Code2 } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";

const serviceCategories = [
    {
        id: "consulting",
        title: "Consulting Services",
        description: "Our consulting services excel in executing transformational projects at scale, backed by a proven track record and seasoned consultants. With decades of hands-on experience, we drive innovation and modernization, navigating complexities to deliver optimal outcomes. Trust our expertise to guide you through large-scale transformations, ensuring success and sustained growth.",
        icon: Briefcase,
        gradient: "from-blue-500/20 to-cyan-500/20",
        iconGradient: "from-blue-500 to-cyan-500",
        link: "/services/consulting",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
        id: "delivery",
        title: "Delivery Services",
        description: "Our delivery services ensure seamless, reliable, and efficient deployment of technology solutions. Utilizing advanced methodologies and a skilled team, we guarantee timely and secure implementation. Focused on excellence and client satisfaction, we offer customized IT solutions that meet your specific needs, ensuring optimal performance and business growth.",
        icon: Code2,
        gradient: "from-purple-500/20 to-pink-500/20",
        iconGradient: "from-purple-500 to-pink-500",
        link: "/services/delivery",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    }
];

export default function ServicesOverview() {
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
                            Our Services
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Industry experts, available to support your needs and goals. With our expert consultants embedded in your team, you'll confidently and seamlessly launch projects that cover every dimension of the asset management lifecycle.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
                            <Link to="/" className="hover:text-[#00D4FF] transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            <span className="text-white">Services</span>
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
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent pb-2">
                            We stand by your side through every phase, from outlining the plan to realizing your objectives
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            We have traversed extensive terrain. Drawing on decades of practical expertise, our consultants enable you to
                            envision and attain success. Whether innovating new pathways or modernizing your technology, rely on us to
                            navigate complexities and steer you towards optimal results.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Service Categories - Two Column Split Layout */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />
                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto space-y-24">
                        {serviceCategories.map((category, index) => {
                            const isEven = index % 2 === 1;
                            const Icon = category.icon;
                            return (
                                <motion.div
                                    key={category.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="grid lg:grid-cols-2 gap-12 items-center"
                                >
                                    {/* Content Column */}
                                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${category.iconGradient} shadow-lg`}>
                                                <Icon className="w-7 h-7 text-white" />
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-bold text-white">{category.title}</h2>
                                        </div>
                                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                            {category.description}
                                        </p>
                                        <Link
                                            to={category.link}
                                            className="inline-flex items-center gap-2 text-[#00D4FF] hover:text-white transition-colors duration-300 font-medium text-lg group"
                                        >
                                            Read more
                                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>

                                    {/* Image Column */}
                                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                            <img
                                                src={category.image}
                                                alt={category.title}
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

            {/* Features Section */}
            <section className="section-shell">
                <div className="section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                title: "Proven Expertise",
                                description: "Decades of hands-on experience across the entire asset management lifecycle",
                                icon: "🎯"
                            },
                            {
                                title: "Scalable Solutions",
                                description: "From strategic planning to full-scale implementation and beyond",
                                icon: "📈"
                            },
                            {
                                title: "Client-Centric Approach",
                                description: "Customized solutions tailored to your specific business needs and goals",
                                icon: "🤝"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
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
                            Know what you need? Submit your <span className="text-[#00D4FF]">Request</span> for information{" "}
                            <span className="text-[#00D4FF]">Here.</span>
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            Get in touch with our experts to discuss your specific requirements and discover how we can help transform your business.
                        </p>
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