import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";

// Import leadership images
import executiveExcellenceImg from "@/assets/images/leadership-executive-excellence.jpeg";
import strategicGuidanceImg from "@/assets/images/leadership-strategic-guidance.jpeg";
import technicalLeadershipImg from "@/assets/images/technical-leadership.jpeg";
import clientSuccessImg from "@/assets/images/leadership-client-success-leadership.jpeg";
import innovationChampionsImg from "@/assets/images/leadership-innovation-champions.jpeg";
import diversityLeadershipImg from "@/assets/images/leadership-diversity-in-leadership.jpeg";

export default function Leadership() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Custom data for Leadership page
    const data = {
        heading: "Visionary Leadership",
        headingDescription: "Our leadership team brings together decades of experience in financial services, artificial intelligence, and enterprise technology. United by a shared vision of transforming the financial industry through innovation, our leaders drive strategic direction, foster a culture of excellence, and ensure we deliver exceptional value to our clients worldwide.",
        content: [
            {
                id: "executive-excellence",
                heading: "Executive Excellence",
                description: "Our C-suite executives bring a wealth of experience from leading global financial institutions, top-tier technology companies, and innovative startups. With proven track records in driving business transformation, managing large-scale operations, and delivering sustainable growth, our executive team sets the strategic vision and ensures operational excellence across all aspects of our business."
            },
            {
                id: "strategic-guidance",
                heading: "Strategic Guidance",
                description: "Our Board of Directors and Advisory Council comprise distinguished leaders from finance, technology, academia, and regulatory bodies. They provide invaluable strategic guidance, industry insights, and governance oversight. Their diverse perspectives and extensive networks help us navigate complex market dynamics, identify emerging opportunities, and maintain our position at the forefront of financial technology innovation."
            },
            {
                id: "technical-leadership",
                heading: "Technical Leadership",
                description: "Led by our Chief Technology Officer and Vice Presidents of Engineering, our technical leadership team consists of renowned experts in artificial intelligence, machine learning, cloud computing, and software architecture. They drive our technology roadmap, ensure best practices in software development, and lead our teams in building cutting-edge solutions that meet the demanding requirements of the financial services industry."
            },
            {
                id: "client-success",
                heading: "Client Success Leadership",
                description: "Our Client Success and Account Management leaders are dedicated to ensuring every client achieves their business objectives with our solutions. With deep understanding of client needs and industry challenges, they build lasting partnerships, drive adoption, and continuously seek opportunities to deliver additional value. Their customer-centric approach is fundamental to our long-term success and client satisfaction."
            },
            {
                id: "innovation-champions",
                heading: "Innovation Champions",
                description: "Our innovation leaders, including our Chief Innovation Officer and heads of Research & Development, are constantly pushing boundaries and exploring emerging technologies. They lead our innovation labs, manage strategic partnerships with academic institutions, and ensure we stay ahead of technology trends. Their work in generative AI, quantum computing, and blockchain keeps us at the cutting edge of financial technology."
            },
            {
                id: "diversity-leadership",
                heading: "Diversity in Leadership",
                description: "We're committed to building a diverse leadership team that reflects the global markets we serve. Our leaders come from varied backgrounds, cultures, and experiences, bringing unique perspectives that drive innovation and better decision-making. We actively promote diversity, equity, and inclusion at all levels of our organization, believing that diverse teams build better solutions and create more value for our clients and stakeholders."
            }
        ]
    };

    // Leadership images for each section
    const leadershipImages = [
        executiveExcellenceImg,        // Executive Excellence
        strategicGuidanceImg,          // Strategic Guidance
        technicalLeadershipImg,        // Technical Leadership
        clientSuccessImg,              // Client Success Leadership
        innovationChampionsImg,        // Innovation Champions
        diversityLeadershipImg         // Diversity in Leadership
    ];

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
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[#00D4FF] bg-clip-text text-transparent">
                            Leadership
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Meet the team driving AI innovation and transformation.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
                            <Link to="/" className="hover:text-[#00D4FF] transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            <Link to="/about" className="hover:text-[#00D4FF] transition-colors">
                                About
                            </Link>
                            <span>/</span>
                            <span className="text-white">Leadership</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
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
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="section-title mb-6">{data.heading}</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {data.headingDescription}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content - Two Column Split Layout */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                {/* Decorative Grid Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />

                {/* Floating Gradient Orbs */}
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto space-y-24">
                        {data.content.map((item, index) => {
                            const isEven = index % 2 === 1;
                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="grid lg:grid-cols-2 gap-12 items-center"
                                >
                                    {/* Content Column */}
                                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{item.heading}</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                                    </div>

                                    {/* Image Column */}
                                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[16/9] w-full">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <img
                                                src={leadershipImages[index]}
                                                alt={item.heading}
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
            <section className="section-shell relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/5 via-[#6B3FFF]/5 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full" />

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
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}