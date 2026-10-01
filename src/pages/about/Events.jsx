import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";

// Import event images
import annualConferenceImg from "@/assets/images/event-techvest-global-annual-conference.jpeg";
import industryWebinarsImg from "@/assets/images/event-monthly-industry-webinars.jpeg";
import aiSummitImg from "@/assets/images/event-ai-innovation-summit.jpeg";
import clientWorkshopsImg from "@/assets/images/event-client-success-workshops.jpeg";
import speakingEngagementsImg from "@/assets/images/event-speaking-engagements.jpeg";
import stayConnectedImg from "@/assets/images/event-stay-connected.jpeg";

export default function Events() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Custom data for Events page
    const data = {
        heading: "Events & Thought Leadership",
        headingDescription: "TechVest Global is committed to advancing industry knowledge and fostering meaningful connections through our diverse portfolio of events, conferences, and educational programs. From flagship annual conferences to intimate client workshops, we create opportunities for learning, networking, and collaboration that drive innovation in financial technology.",
        content: [
            {
                id: "annual-conference",
                heading: "TechVest Global Annual Conference",
                description: "Our flagship annual conference brings together industry leaders, innovators, and practitioners from around the globe. Featuring keynote speakers, panel discussions, hands-on workshops, and networking events, the conference covers the latest trends in AI, financial technology, and digital transformation. It's an unparalleled opportunity to learn from experts, share best practices, and connect with peers who share your passion for innovation."
            },
            {
                id: "industry-webinars",
                heading: "Monthly Industry Webinars",
                description: "Join our monthly webinar series featuring deep dives into specific topics, technologies, and use cases. Led by our subject matter experts and guest speakers from leading institutions, these sessions provide practical insights, real-world case studies, and actionable strategies. All webinars are recorded and available on-demand, ensuring accessibility for our global audience across different time zones."
            },
            {
                id: "ai-summit",
                heading: "AI Innovation Summit",
                description: "Our specialized AI Innovation Summit focuses exclusively on artificial intelligence applications in financial services. This intensive event features technical workshops, live demonstrations of cutting-edge AI solutions, regulatory discussions, and ethical AI frameworks. Designed for data scientists, AI practitioners, and technology leaders, the summit provides deep technical knowledge and hands-on experience with the latest AI technologies."
            },
            {
                id: "client-workshops",
                heading: "Client Success Workshops",
                description: "We regularly host exclusive workshops for our clients, offering hands-on training, best practice sharing, and collaborative problem-solving sessions. These intimate events allow clients to gain deeper insights into our platforms, learn advanced features, and network with peers facing similar challenges. Workshop topics are tailored based on client feedback and emerging industry needs, ensuring maximum relevance and value."
            },
            {
                id: "speaking-engagements",
                heading: "Speaking Engagements",
                description: "Our leaders and experts frequently speak at major industry conferences, academic symposiums, and regulatory forums worldwide. We share our insights on AI adoption, financial technology innovation, regulatory compliance, and digital transformation. Visit this page regularly to see where our team will be speaking next, and join us at these events to engage in meaningful discussions about the future of financial services."
            },
            {
                id: "stay-connected",
                heading: "Stay Connected",
                description: "Never miss an event or learning opportunity. Subscribe to our events newsletter to receive updates about upcoming conferences, webinars, workshops, and speaking engagements. We also share exclusive content, early-bird registration opportunities, and special offers for our community members. Join our growing network of professionals committed to advancing innovation in financial services."
            }
        ]
    };

    // Event images for each section
    const eventImages = [
        annualConferenceImg,        // TechVest Global Annual Conference
        industryWebinarsImg,        // Monthly Industry Webinars
        aiSummitImg,                // AI Innovation Summit
        clientWorkshopsImg,         // Client Success Workshops
        speakingEngagementsImg,     // Speaking Engagements
        stayConnectedImg            // Stay Connected
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
                            Events
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Participate in industry discussions by attending our conferences, events, and webinars.
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
                            <span className="text-white">Events</span>
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
                                                src={eventImages[index]}
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
