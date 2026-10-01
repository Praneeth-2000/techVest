import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";

// Import custom images
import ourStoryImg from "@/assets/images/about-techvest-our-story.jpeg";
import globalReachImg from "@/assets/images/about-techvest-global-reach-local-expertise.jpeg";
import innovationImg from "@/assets/images/about-techvest-innovation-at-our-core.jpeg";
import industryLeadershipImg from "@/assets/images/about-techvest-industry-leadership.jpeg";
import ourPeopleImg from "@/assets/images/about-techvest-our-people-make-the-difference.jpeg";
import ourVisionImg from "@/assets/images/about-techvest-our-vision-for-the-future.jpeg";

export default function AboutTechVest() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Custom data for About TechVest Global page
    const data = {
        heading: "Who We Are",
        headingDescription: "TechVest Global is a pioneering technology consulting firm dedicated to transforming the financial services industry through cutting-edge AI solutions and innovative technology. Founded with a vision to bridge the gap between traditional financial services and modern technology, we've become a trusted partner for institutions worldwide.",
        content: [
            {
                id: "our-story",
                heading: "Our Story",
                description: "Founded by industry veterans with decades of combined experience in financial technology, TechVest Global was born from a simple belief: that AI and advanced technology could revolutionize how financial institutions operate and serve their clients. From our humble beginnings, we've grown into a global force for innovation, serving clients across continents while maintaining our commitment to personalized, impactful solutions."
            },
            {
                id: "global-reach",
                heading: "Global Reach, Local Expertise",
                description: "With offices strategically located across major financial hubs worldwide, TechVest Global combines global scale with local market knowledge. Our diverse team of experts brings deep understanding of regional regulations, market dynamics, and cultural nuances, ensuring our solutions are not just technically sound but also contextually relevant for each market we serve."
            },
            {
                id: "innovation-core",
                heading: "Innovation at Our Core",
                description: "At TechVest Global, innovation isn't just a buzzword—it's embedded in our DNA. We invest heavily in research and development, constantly exploring emerging technologies like generative AI, machine learning, and blockchain. Our innovation labs work closely with academic institutions and technology leaders to stay at the forefront of technological advancement, ensuring our clients always have access to the latest and most effective solutions."
            },
            {
                id: "industry-leadership",
                heading: "Industry Leadership",
                description: "We don't just follow industry trends—we help shape them. Our thought leaders regularly contribute to industry publications, speak at global conferences, and participate in regulatory discussions. We're active members of key industry associations and standards bodies, working to establish best practices for AI adoption in financial services and advocating for responsible, ethical use of technology."
            },
            {
                id: "our-people",
                heading: "Our People Make the Difference",
                description: "Our greatest asset is our people. We've assembled a world-class team of data scientists, AI specialists, financial experts, and technology architects who share a passion for excellence and innovation. We foster a culture of continuous learning, collaboration, and creative problem-solving, where every team member is empowered to contribute their unique perspective and expertise to deliver exceptional results for our clients."
            },
            {
                id: "our-vision",
                heading: "Our Vision for the Future",
                description: "We envision a future where AI and human expertise work seamlessly together to create more efficient, transparent, and inclusive financial services. A future where technology democratizes access to sophisticated financial tools, where institutions can make faster and smarter decisions, and where innovation drives sustainable growth. At TechVest Global, we're committed to making this vision a reality, one partnership at a time."
            }
        ]
    };

    // Custom images for About TechVest sections
    const placeholderImages = [
        ourStoryImg, // Our Story
        globalReachImg, // Global Reach, Local Expertise
        innovationImg, // Innovation at Our Core
        industryLeadershipImg, // Industry Leadership
        ourPeopleImg, // Our People Make the Difference
        ourVisionImg // Our Vision for the Future
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
                            About TechVest Global
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Accelerating responsible AI adoption across the investment lifecycle.
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
                            <span className="text-white">About TechVest Global</span>
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
                                        {item.subheading && (
                                            <h4 className="text-[#00D4FF]/80 font-medium text-xl mb-4">{item.subheading}</h4>
                                        )}
                                        <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                                    </div>

                                    {/* Image Column */}
                                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[16/9] w-full">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <img
                                                src={placeholderImages[index]}
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