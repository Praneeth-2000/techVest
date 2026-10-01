import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";

export default function ProgramsAndLearning() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const learningPrograms = [
        {
            id: 1,
            title: "TechVest Academy: Overview",
            description: "At our core, we believe that the pursuit of knowledge is the key to fostering collective growth. Our commitment to prioritizing continuous learning has shaped our approach to development initiatives, ensuring that every TechVest Academy program empowers you to reach your full potential.",
            fullContent: "TechVest Academy is more than a training ground; it's a sanctuary where ambition meets expertise. It empowers you at every stage of your career through a dynamic array of learning programs meticulously designed to cater to the ever-changing landscape of AI and technology. TechVest Academy offers a curated, diverse range of learning and development initiatives.\n\nThese initiatives are pathways to personal and professional growth, underscoring our belief that by investing in learning, we invest in your future.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
            listItems: [
                "TechLearn: Learning platform providing AI/ML skill development and certification opportunities for all team members.",
                "Innovators: A solid foundation for fresh talent in AI and technology.",
                "Fast-Track Leadership: Accelerated program for high-potential technology graduates.",
                "Leadership Excellence: Support and mentorship for high-performing leaders.",
                "Client Success Academy: Customer-centric learning for our delivery teams."
            ]
        },
        {
            id: 2,
            title: "Our Learning Framework: TechLearn",
            subtitle: "The TechLearn framework fuels your learning journey through industry-leading AI/ML certifications, communities, hackathons, and external courses. Plus, earn attractive incentives and bonuses along the way.",
            description: "TechLearn is TechVest Global's cutting-edge learning framework crafted to propel your career toward unparalleled excellence in AI, data engineering, and technology. TechLearn isn't just a framework; it's a commitment to your holistic growth. We understand that learning is an ongoing process, and TechLearn reflects this belief by offering 300+ external certifications in AI, ML, data science, and cloud technologies, plus 200+ carefully curated learning paths. With the flexibility to choose from a multitude of options, TechLearn ensures that your learning experience is tailored to your unique needs.",
            fullContent: "With generous support for external certifications including AWS, Azure, Google Cloud, and specialized AI/ML certifications, plus the added incentive of a learning bonus, TechLearn aligns seamlessly with TechVest Global's dedication to your continuous growth and development. Your journey to personal and professional mastery starts with TechLearn – because at TechVest Global, your growth is our commitment.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
        },
        {
            id: 3,
            title: "Emerging Talent Program: Innovators",
            subtitle: "The Innovators program is designed for engineering and technology graduates joining TechVest Global from universities worldwide.",
            description: "As a recent graduate, joining the Innovators program means stepping into a world where AI innovation and your growth are our priorities.",
            fullContent: "At our core lies a commitment to nurturing innovation in AI and emerging technologies. We empower young talent to transcend boundaries, challenge norms, and channel AI/ML expertise towards impactful innovation, benefiting TechVest Global and its clients on their AI transformation journeys.\n\nEvery day in the Innovators program brings new learning opportunities, guided by our ethos of 'learning to grow' and 'learning by doing.' Comprehensive training in AI, machine learning, and data engineering sets a strong foundation, followed by specialized training tailored to your chosen role in AI engineering, data science, or cloud technologies.\n\nOur goal is simple: to foster continuous learning in cutting-edge technologies and equip you with the confidence to tackle complex AI challenges. Join us and let your innovative spirit soar as you excel in your career.",
            image: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=800&h=600&fit=crop"
        },
        {
            id: 4,
            title: "Fast-Track Leadership Program",
            subtitle: "TechVest Global's Fast-Track Leadership program aims to develop recent B-school and technology management graduates into leadership and strategic roles through AI-driven projects and accelerated career opportunities.",
            description: "The Fast-Track Leadership program is the ultimate launchpad for management trainees, aimed at nurturing their leadership potential in technology consulting and AI services. Participants experience leadership through a structured induction program and real-world AI/ML projects with client engagements. Exceptional performers may fast-track to promotion within the first year itself.",
            fullContent: "Fast-Track Leaders benefit from rotational assignments across AI Engineering, Data Engineering, and Analytics practices, gaining a holistic organizational perspective. Additionally, participants can choose from a curated selection of courses offered by renowned global institutes in AI strategy, technology innovation, and digital transformation, enhancing their skills and knowledge in areas relevant to their career goals and TechVest Global's strategic needs.",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
        },
        {
            id: 5,
            title: "Leadership Excellence Program",
            subtitle: "The Leadership Excellence initiative nurtures TechVest Global's leaders as they navigate the challenges of evolving roles, processes, and structures within a dynamic AI and technology environment.",
            description: "At TechVest Global, our Leadership Excellence program is more than just an organizational development initiative; it's a pathway to leadership excellence tailored for aspiring technology leaders like you.",
            fullContent: "Our Leadership Excellence program is centered around nurturing key competencies crucial for your growth: strategic thinking in AI/technology domains, accountability and ownership, effective planning for complex projects, collaboration across global teams, and a strong customer focus, all linked to role-specific KPIs. By joining us, you will have the opportunity to refine these skills, adopt action-oriented approaches in AI service delivery, and unleash your leadership potential. This program is not just about honing leadership skills; it's about providing a platform for leaders like you to thrive and drive AI transformation success in a collaborative and dynamic environment.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
        },
        {
            id: 6,
            title: "Client Success Academy",
            subtitle: "Client Success Academy is a custom-built, account-specific learning program that fosters a true \"one team\" ethos with our clients.",
            description: "TechVest Global's Client Success Academy is an all-in-one resource hub for teams working on client AI and technology engagements. At the heart of this academy is our commitment to not just understand, but to immerse ourselves in our client's environment, culture, and technology landscape.",
            fullContent: "This deep dive approach ensures that our teams don't just work for the client, but with the client, fostering a true \"one team\" ethos in AI transformation projects. As a part of this program, you'll be equipped with not only the technical AI/ML skills but also the domain expertise and cultural acumen necessary to deliver exceptional results, leading to transformative outcomes for both your career and our client's AI success.",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
        }
    ];

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
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[#00D4FF] bg-clip-text text-transparent">
                            Programs & Learning
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            TechVest Academy Learning and Development Initiatives
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
                            <Link to="/" className="hover:text-[#00D4FF] transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            <Link to="/careers" className="hover:text-[#00D4FF] transition-colors">
                                Careers
                            </Link>
                            <span>/</span>
                            <span className="text-white">Programs & Learning</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="section-shell relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B3FFF]/5 to-transparent" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full" />
                <div className="section-inner relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <h2 className="section-title mb-6">Empowering Growth Through Learning</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Our comprehensive learning and development programs are designed to equip our team with the skills and knowledge needed to excel in today's rapidly evolving technological landscape. From certifications to hands-on training, we invest in your continuous growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Programs Grid - Two Column Split Layout */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />
                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto space-y-24">
                        {learningPrograms.map((program, index) => {
                            const isEven = index % 2 === 1;

                            return (
                                <motion.div
                                    key={program.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                                    className="grid lg:grid-cols-2 gap-12 items-center"
                                >
                                    {/* Content Column */}
                                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{program.title}</h3>
                                        {program.subtitle && (
                                            <h5 className="text-[#00D4FF]/80 font-medium text-xl mb-4">{program.subtitle}</h5>
                                        )}
                                        <p className="text-gray-300 text-lg leading-relaxed mb-4">{program.description}</p>

                                        {/* List items for HexaVarsity */}
                                        {program.listItems && (
                                            <ul className="space-y-3 mb-4">
                                                {program.listItems.map((item, idx) => (
                                                    <li key={idx} className="text-gray-300 text-base leading-relaxed flex items-start">
                                                        <span className="text-[#00D4FF] mr-2 mt-1">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Additional content */}
                                        {program.fullContent && (
                                            <div className="text-gray-300 text-base leading-relaxed">
                                                {program.fullContent.split('\n\n').map((paragraph, idx) => (
                                                    <p key={idx} className={idx > 0 ? 'mt-4' : ''}>
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Image Column */}
                                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[16/9] w-full">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <img
                                                src={program.image}
                                                alt={program.title}
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/5 via-[#6B3FFF]/5 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full" />
                <div className="section-inner text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Ready to <span className="text-[#00D4FF]">Advance Your Career</span> with Continuous Learning?
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            Join our team and take advantage of our comprehensive learning and development programs designed to help you grow and excel in your career.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300"
                        >
                            Get Started
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
