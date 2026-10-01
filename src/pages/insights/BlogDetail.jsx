import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import blogData from "@/data/blogDataComplete";
import LLMArchitectureVisualization from "@/components/insights/LLMArchitectureVisualization";

export default function BlogDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const blog = Object.values(blogData).find(b => b.slug === slug);

    if (!blog) {
        return (
            <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white min-h-screen flex items-center justify-center">
                <Navigation />
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
                    <Link to="/insights/blog" className="btn-primary">
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white">
            <Navigation />

            {/* Hero Section with Banner Image */}
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
                        className="max-w-5xl mx-auto"
                    >
                        {blog.bannerImage && (
                            <div className="w-full h-64 md:h-96 overflow-hidden rounded-2xl mb-8 border border-white/10">
                                <img
                                    src={blog.bannerImage}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                            {blog.date && (
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                </div>
                            )}
                            {blog.category && (
                                <div className="flex items-center gap-1">
                                    <Tag className="w-4 h-4" />
                                    <span>{blog.category}</span>
                                </div>
                            )}
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[#00D4FF] bg-clip-text text-transparent">
                            {blog.title}
                        </h1>

                        <p className="text-xl text-gray-300 leading-relaxed">
                            {blog.excerpt}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
                            <Link to="/" className="hover:text-[#00D4FF] transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            <Link to="/insights" className="hover:text-[#00D4FF] transition-colors">
                                Insights
                            </Link>
                            <span>/</span>
                            <Link to="/insights/blog" className="hover:text-[#00D4FF] transition-colors">
                                Blog
                            </Link>
                            <span>/</span>
                            <span className="text-white">{blog.title.substring(0, 30)}...</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="section-shell relative overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                {/* Floating Orbs */}
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />
                <div className="section-inner relative">
                    <div className="max-w-4xl mx-auto space-y-8">
                        {blog.content.map((section, index) => (
                            <motion.div
                                key={section.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative">
                                    <h2 className="text-2xl font-bold text-white mb-4">{section.heading}</h2>
                                    <div className="text-gray-300 leading-relaxed space-y-4">
                                        {typeof section.description === 'string' ? (
                                            <p>{section.description}</p>
                                        ) : Array.isArray(section.description) ? (
                                            section.description.map((item, idx) => {
                                                if (typeof item === 'string') {
                                                    return <p key={idx}>{item}</p>;
                                                } else if (typeof item === 'object' && item.heading) {
                                                    return (
                                                        <div key={idx} className="mt-4">
                                                            <h3 className="text-lg font-semibold text-[#00D4FF] mb-2">{item.heading}</h3>
                                                            <p>{item.describe}</p>
                                                        </div>
                                                    );
                                                }
                                                return null;
                                            })
                                        ) : null}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Architecture Visualization for GenAI POC Article */}
                        {blog.slug === "genai-poc-breaks-production" && <LLMArchitectureVisualization />}
                    </div>
                </div>
            </section>

            {/* Back to Blog Button */}
            <section className="section-shell bg-white/[0.02]">
                <div className="section-inner text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <button
                            onClick={() => navigate('/insights/blog')}
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blog
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
