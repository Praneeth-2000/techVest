import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import { aiEngineeringServices } from "@/data/aiEngineeringData";

export default function AIEngineeringDetail() {
    const { slug } = useParams();
    const service = aiEngineeringServices.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link to="/services/ai-engineering" className="text-[#00D4FF] hover:underline">
                        Back to AI Engineering
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
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[#00D4FF] bg-clip-text text-transparent pb-2">
                            {service.title}
                        </h1>

                        {/* Intro Paragraph (only for first 2 pages) */}
                        {service.hasIntro && (
                            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                                {service.introText}
                            </p>
                        )}

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
                            <span className="text-white">{service.title}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Cards - Two Column Split Layout */}
            <section className="section-shell bg-white/[0.02]">
                <div className="section-inner">
                    <div className="max-w-7xl mx-auto space-y-24">
                        {service.cards.map((card, index) => {
                            const isEven = index % 2 === 1;
                            return (
                                <motion.div
                                    key={card.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="grid lg:grid-cols-2 gap-12 items-center"
                                >
                                    {/* Content Column */}
                                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                            {card.heading}
                                        </h2>
                                        <p
                                            className="text-gray-300 text-lg leading-relaxed"
                                            dangerouslySetInnerHTML={{
                                                __html: card.description.replace(
                                                    /establish a dedicated Gen AI task force|comprehensive readiness assessment|tailored Gen AI strategy and roadmap|innovation labs|strategic partnerships|proof of concept solutions|governance frameworks|custom Gen AI models|fine-tune existing models|end-to-end model deployment|conversational AI applications|automate document analysis|content generation systems|intelligent knowledge management solutions|LLM-powered tools|LLM-based analytics platforms/gi,
                                                    match => `<strong>${match}</strong>`
                                                )
                                            }}
                                        />
                                    </div>

                                    {/* Image Column */}
                                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <img
                                                src={card.image}
                                                alt={card.heading}
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
                            to="/services/ai-engineering"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-transparent text-white hover:text-[#00D4FF] hover:border-[#00D4FF] transition-all duration-300"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to AI Engineering
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
