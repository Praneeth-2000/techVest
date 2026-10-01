import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import partnershipImage1 from "@/assets/images/Techvest-patnership-image1.jpeg";
import partnershipImage2 from "@/assets/images/Techvest-patnership-image2.jpeg";
import desipeImage from "@/assets/Desipe Finance Private Limited.jpeg";


export default function Partnership() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Partnership ecosystem data
    const data = {
        heading: "Partnership Ecosystem",
        headingDescription: "At TechVest Global, we believe that collaboration amplifies innovation. Our partnership ecosystem brings together technology providers, service integrators, academic institutions, and industry leaders to create comprehensive solutions that drive value for our clients. Together, we're shaping the future of financial technology through strategic collaboration and shared expertise.",
        content: [
            {
                id: "technology-partners",
                heading: "Technology Partners",
                description: "We collaborate with leading technology platforms and tool providers to deliver integrated, best-in-class solutions. Our technology partnerships span cloud infrastructure providers, AI/ML platforms, data analytics tools, and specialized fintech solutions. These partnerships enable us to offer our clients proven, enterprise-grade technology stacks while maintaining the flexibility to customize solutions to specific needs."
            },
            {
                id: "strategic-alliances",
                heading: "Strategic Alliances",
                description: "Our strategic alliances with major financial institutions, consulting firms, and industry associations help us stay at the forefront of market trends and regulatory changes. These partnerships facilitate knowledge exchange, joint go-to-market initiatives, and collaborative innovation projects. Through these alliances, we gain access to diverse markets and industries, expanding our reach and impact."
            },
            {
                id: "academic-partnerships",
                heading: "Academic Partnerships",
                description: "We partner with leading universities and research institutions to advance the state of AI and financial technology. These collaborations drive cutting-edge research in machine learning, natural language processing, and financial modeling. Our academic partnerships also support talent development through internship programs, research grants, and joint publications, ensuring a pipeline of skilled professionals for the industry."
            },
            {
                id: "channel-partners",
                heading: "Channel Partners",
                description: "Our global network of channel partners, including resellers, distributors, and regional representatives, extends our market reach and provides local expertise in diverse geographies. Channel partners help us deliver localized support, navigate regional regulations, and understand cultural nuances. This network enables us to serve clients worldwide while maintaining a local presence and personalized service."
            },
            {
                id: "implementation-partners",
                heading: "Implementation Partners",
                description: "We work with certified implementation partners and system integrators who specialize in deploying our solutions within complex enterprise environments. These partners bring deep domain expertise, industry-specific knowledge, and proven methodologies to ensure successful project delivery. Their involvement accelerates implementation timelines, reduces risk, and ensures seamless integration with existing systems."
            },
            {
                id: "join-network",
                heading: "Join Our Partner Network",
                description: "We're always looking for innovative organizations to join our partnership ecosystem. Whether you're a technology provider, service integrator, academic institution, or industry specialist, we offer comprehensive partner programs with training, certification, marketing support, and revenue-sharing opportunities. Join us in transforming the financial services industry and creating value for clients worldwide."
            }
        ]
    };

    // Placeholder images for partnership sections
    const placeholderImages = [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop", // Tech workspace for "Technology Partners"
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop", // Handshake for "Strategic Alliances"
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop", // Students/collaboration for "Academic Partnerships"
        "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop", // Global network for "Channel Partners"
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop", // Implementation/planning for "Implementation Partners"
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop" // Team joining for "Join Our Partner Network"
    ];

    // Featured partnership announcements
    const partnerships = [
        {
            id: "qmics-partnership",
            heading: "Strategic Partnership with QMICS Solutions",
            description: "We're pleased to announce a strategic partnership between QMICS Solutions Pvt. Ltd. and TechVest Global.\n\nThis collaboration brings together deep compliance & certification expertise with strong AI engineering and technology implementation capabilities thus helping organizations adopt AI and digital solutions that are not only innovative, but also responsible, secure and compliant by design.",
            sections: [
                {
                    title: "Through this partnership:",
                    content: [
                        "TechVest Global will lead AI engineering, data-driven solutions, advanced analytics and technical implementations",
                        "QMICS will provide regulatory consulting, compliance frameworks and certification support across global standards including Information Security, Quality and Industry-specific regulations",
                        "Together, we will jointly deliver end-to-end solutions that align technology innovation with regulatory readiness"
                    ]
                }
            ],
            closingText: "As enterprises accelerate AI adoption, compliance can no longer be an afterthought. This partnership is focused on ensuring that AI systems are scalable, auditable and trustworthy from day one.\n\nWe look forward to creating measurable impact for organizations across IT, manufacturing, healthcare, finance and emerging AI-led businesses.",
            hashtags: "#PartnershipAnnouncement #AIEngineering #AIGovernance #Compliance #QMICS #TechVestGlobal #ResponsibleAI",
            organizations: [
                "TechVest Global Solutions Inc.",
                "Qmics Solutions Pvt. Ltd."
            ],
            leaders: [
                "Shanker Madishetty",
                "Ramakrishna Chinmaya",
                "Srinivas Bommena",
                "Kiran Kumar Guduguntla",
                "Balaji T S"
            ],
            image: partnershipImage1
        },
        {
            id: "rbvrr-partnership",
            heading: "Academic-Industry Partnership with R.B.V.R.R. Women's College",
            subheading: "Strategic Academic-Industry Partnership Announcement",
            description: "We're delighted to announce the signing of a Memorandum of Understanding (MoU) between TechVest Global and R.B.V.R.R. Women's College, Hyderabad.\n\nThis partnership marks a shared commitment to bridging the gap between academia and industry, with a strong focus on preparing students for the realities of a rapidly evolving, technology-driven workplace.",
            sections: [
                {
                    title: "What this collaboration enables:",
                    content: [
                        "Industry-aligned training programs across emerging technologies, including AI and data-driven domains",
                        "Hands-on projects, internships, and real-world case studies to enhance practical exposure",
                        "Workshops, hackathons, guest lectures, and certification programs",
                        "Faculty Development Programs (FDPs) to strengthen teaching with current industry practices",
                        "Curriculum enrichment aligned to market needs",
                        "Pre-placement engagement and career readiness initiatives"
                    ]
                }
            ],
            visionSection: {
                title: "Our shared vision",
                content: "We believe education becomes truly transformative when learning meets application. Through this MoU, we aim to co-create an ecosystem that nurtures skills, innovation, and employability, empowering students to confidently step into industry roles."
            },
            closingText: "We look forward to a meaningful journey of collaboration, learning, and long-term impact.\n\nTogether, we're shaping future-ready talent.",
            hashtags: "#AcademicIndustryCollaboration #MoUSigning #SkillDevelopment #IndustryReadyGraduates #AIinEducation #FutureOfWork #WomenInSTEM",
            organizations: [
                "TechVest Global Solutions Inc.",
                "RBVRR College for Women"
            ],
            leaders: [
                "Shanker Madishetty",
                "Srinivas Bommena",
                "Kiran Kumar Guduguntla"
            ],
            image: partnershipImage2
        },

        {
            id: "desipe-partnership",
            heading: "Strategic Technology Partnership Announcement",
            description: "We are pleased to announce that Desipe Finance Private Limited has selected TechVest Global Solutions Inc. as its Strategic Technology Partner.\n\nThis collaboration focuses on building a secure, scalable, and compliance-driven fintech platform powered by advanced AI capabilities.",
            sections: [
                // {
                //     title: "Through this partnership:",
                //     content: [
                //         "TechVest Global will lead AI engineering, data-driven solutions, advanced analytics and technical implementations",
                //         "QMICS will provide regulatory consulting, compliance frameworks and certification support across global standards including Information Security, Quality and Industry-specific regulations",
                //         "Together, we will jointly deliver end-to-end solutions that align technology innovation with regulatory readiness"
                //     ]
                // }
                {
                    title: "Our engagement includes:",
                    content: [
                        "Secure, compliance-first system architecture",
                        "AI-powered product development, including predictive analytics, intelligent automation, and fraud detection",
                        "End-to-end product engineering and scalable deployment",
                        "Seamless API integrations across payments and banking ecosystems",
                        "Fintech-grade mobile and web user experience",
                        "Security governance, audit readiness, and regulatory alignment"
                    ]
                },
                {
                    title: "Customer Impact & Benefits:",
                    content: [
                        "Faster, seamless digital onboarding and transactions",
                        "Enhanced security and fraud protection",
                        "Personalized financial insights powered by AI",
                        "Reliable, scalable services with high system availability",
                        "Transparent, compliant, and trustworthy digital experiences"
                    ]
                }
            ],
            closingText: "Together, we are committed to delivering an intelligent, regulation-ready technology foundation that enhances customer trust, operational efficiency, and long-term growth within the evolving fintech ecosystem.\n\nLooking forward to building impactful, customer-centric innovation together.",
            hashtags: "#PartnershipAnnouncement #AIEngineering #AIGovernance #Compliance #QMICS #TechVestGlobal #ResponsibleAI",
            organizations: [
                "Desipe Finance Private Limited",
                "TechVest Global Solutions Inc."
            ],
            leaders: [
                "Shanker Madishetty",
                "Vamsi Krishna Reddy Neelam",
                "Srinivas Bommena",
                "Kiran Kumar Guduguntla"
            ],
            image: desipeImage
        }
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
                            Partnership Opportunities
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Collaborate with us to accelerate AI transformation
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
                            <span className="text-white">Partnership</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Partnership Announcements Section */}
            <section className="section-shell relative overflow-hidden">
                <div className="section-inner relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <h2 className="section-title mb-6">Featured Partnership Announcements</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Explore our latest strategic collaborations that are driving innovation and excellence across industries.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Partnership Announcements - Detailed Cards */}
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
                    <div className="max-w-7xl mx-auto space-y-32">
                        {partnerships.map((partnership, index) => {
                            const isEven = index % 2 === 1;
                            return (
                                <motion.div
                                    key={partnership.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="space-y-12"
                                >
                                    {/* Header with Image */}
                                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                                        {/* Content Column */}
                                        <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{partnership.heading}</h3>
                                            {partnership.subheading && (
                                                <h4 className="text-[#00D4FF]/80 font-medium text-xl mb-6">{partnership.subheading}</h4>
                                            )}
                                            <p className="text-gray-300 text-lg leading-relaxed">{partnership.description}</p>
                                        </div>

                                        {/* Image Column */}
                                        <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <img
                                                    src={partnership.image}
                                                    alt={partnership.heading}
                                                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Detailed Content */}
                                    <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
                                        {/* Sections with bullet points */}
                                        {partnership.sections && partnership.sections.map((section, idx) => (
                                            <div key={idx} className="mb-8">
                                                <h4 className="text-2xl font-bold text-white mb-4">{section.title}</h4>
                                                <ul className="space-y-3">
                                                    {section.content.map((item, itemIdx) => (
                                                        <li key={itemIdx} className="text-gray-300 text-lg flex items-start gap-3">
                                                            <span className="text-[#00D4FF] mt-1.5 text-xl">•</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}

                                        {/* Vision Section (for RBVRR only) */}
                                        {partnership.visionSection && (
                                            <div className="mb-8">
                                                <h4 className="text-2xl font-bold text-white mb-4">{partnership.visionSection.title}</h4>
                                                <p className="text-gray-300 text-lg leading-relaxed">{partnership.visionSection.content}</p>
                                            </div>
                                        )}

                                        {/* Closing Text */}
                                        {partnership.closingText && (
                                            <div className="mb-8">
                                                <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">{partnership.closingText}</p>
                                            </div>
                                        )}

                                        {/* Organizations & Leaders */}
                                        <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
                                            {partnership.organizations && (
                                                <div>
                                                    <h5 className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-3">Organizations</h5>
                                                    <ul className="space-y-2">
                                                        {partnership.organizations.map((org, idx) => (
                                                            <li key={idx} className="text-gray-300">{org}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            {partnership.leaders && (
                                                <div>
                                                    <h5 className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-3">Key Leaders</h5>
                                                    <ul className="space-y-2">
                                                        {partnership.leaders.map((leader, idx) => (
                                                            <li key={idx} className="text-gray-300">{leader}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
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
                        <h2 className="section-title mb-6">Partnership Ecosystem</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            At TechVest Global, we believe that collaboration amplifies innovation. Our partnership ecosystem brings together technology providers, service integrators, academic institutions, and industry leaders to create comprehensive solutions that drive value for our clients. Together, we're shaping the future of financial technology through strategic collaboration and shared expertise.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Partnership Types - Two Column Split Layout */}
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