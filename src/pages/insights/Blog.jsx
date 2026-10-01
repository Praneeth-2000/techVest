import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight, Clock } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import blogData from "@/data/blogDataComplete";

export default function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const blogs = Object.values(blogData);
    const featuredBlog = blogs[0]; // First blog as featured
    const remainingBlogs = blogs;

    return (
        <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white">
            <Navigation />

            {/* Hero Section */}
            <section className="section-shell relative overflow-hidden pt-32">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-20 right-10 w-96 h-96 bg-[#00D4FF] opacity-20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[#6B3FFF] opacity-15 blur-[150px] rounded-full" />

                {/* Decorative  Shapes */}
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
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[#00D4FF] bg-clip-text text-transparent pb-2">
                            Insights & Perspectives
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Explore perspectives shared by our consulting team and senior thought leaders on the latest trends in financial technology and asset management.
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
                            <span className="text-white">Blog</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Blog Post */}
            {featuredBlog && (
                <section className="section-shell relative overflow-hidden">
                    {/* Background Accent */}
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
                            <Link
                                to={`/insights/blog/${featuredBlog.slug}`}
                                className="group block relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm overflow-hidden hover:border-[#00D4FF]/50 transition-all duration-500"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 via-transparent to-[#6B3FFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative grid lg:grid-cols-2 gap-0">
                                    {/* Image Side */}
                                    <div className="relative h-64 lg:h-auto overflow-hidden">
                                        {featuredBlog.image && (
                                            <>
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#040615] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#040615] z-10" />
                                                <img
                                                    src={featuredBlog.image}
                                                    alt={featuredBlog.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                                {/* Featured Badge */}
                                                <div className="absolute top-6 left-6 z-20">
                                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-sm font-semibold">
                                                        ⭐ Featured
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* Content Side */}
                                    <div className="relative p-8 lg:p-12 flex flex-col justify-center">
                                        {/* Meta Info */}
                                        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                                            {featuredBlog.date && (
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4 text-[#00D4FF]" />
                                                    <span>{new Date(featuredBlog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                                </div>
                                            )}
                                            {featuredBlog.category && (
                                                <div className="flex items-center gap-2">
                                                    <Tag className="w-4 h-4 text-[#00D4FF]" />
                                                    <span className="text-[#00D4FF]">{featuredBlog.category}</span>
                                                </div>
                                            )}
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-[#00D4FF]" />
                                                <span>5 min read</span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-[#00D4FF] transition-colors duration-300">
                                            {featuredBlog.title}
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="text-gray-300 text-lg leading-relaxed mb-6 line-clamp-3">
                                            {featuredBlog.excerpt}
                                        </p>

                                        {/* Read More Button */}
                                        <div className="inline-flex items-center gap-2 text-[#00D4FF] font-semibold group-hover:gap-4 transition-all duration-300">
                                            <span>Read Full Article</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Latest Articles Grid */}
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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-7xl mx-auto mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Articles</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] rounded-full" />
                    </motion.div>

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {remainingBlogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link
                                    to={`/insights/blog/${blog.slug}`}
                                    className="group block h-full relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-[#00D4FF]/50 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative h-full flex flex-col">
                                        {/* Image */}
                                        {blog.image && (
                                            <div className="w-full h-48 overflow-hidden rounded-t-2xl relative">
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#040615]/80 to-transparent z-10" />
                                                <img
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                {/* Category Badge */}
                                                {blog.category && (
                                                    <div className="absolute top-4 right-4 z-20">
                                                        <span className="inline-block px-3 py-1 rounded-full bg-[#00D4FF]/20 backdrop-blur-md border border-[#00D4FF]/30 text-[#00D4FF] text-xs font-semibold">
                                                            {blog.category}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            {/* Date */}
                                            {blog.date && (
                                                <div className="flex items-center gap-2 mb-3 text-sm text-gray-400">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                                </div>
                                            )}

                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#00D4FF] transition-colors duration-300">
                                                {blog.title}
                                            </h3>

                                            {/* Excerpt */}
                                            <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3 flex-1">
                                                {blog.excerpt}
                                            </p>

                                            {/* Read More Link */}
                                            <div className="flex items-center gap-2 text-[#00D4FF] font-medium group-hover:gap-3 transition-all duration-200">
                                                <span>Read More</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
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
                            Ready to Transform Your <span className="text-[#00D4FF]">Business</span>?
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            Get in touch with our experts to discuss your specific requirements and discover how we can help you achieve your goals.
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
