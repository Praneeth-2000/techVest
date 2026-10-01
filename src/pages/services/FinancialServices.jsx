import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import { ArrowRight, Building2, Landmark, Shield, TrendingUp, Store, Gem } from "lucide-react";

const marketServedData = {
    AssetOwners: {
        id: "AssetOwners",
        url: "AssetOwners",
        BannerText: "Asset Owners",
        SubBannerText: "Expert Consulting Services for Asset Owners",
        Heading: "Empower your advanced investment strategies with state-of-the-art technology and streamlined, adaptable operations.",
        HeadingDescription: "For pension funds, insurers, foundations, endowments, OCIOs, and family offices, the array of challenges faced is extensive, whether positioned solely as allocators or operating within a hybrid model incorporating internally managed investments. The transition towards alternative and private market investments for alpha generation introduces additional operational and data complexities to this landscape of challenges. Your organization likely grapples with information overload, struggling to consolidate disparate datasets into timely and actionable portfolio information. Techvest Global aids asset owners in comprehending purpose-built operating models, leveraging an optimal blend of technology and services. Employing a strategic approach yields meaningful data, streamlined operations, and a resilient control environment to effectively manage and monitor diverse multi-asset portfolios, fulfilling obligations efficiently.",
        content: [
            {
                id: "Align Operations with Your Multi-Asset Class Strategies",
                haeding: "Align Operations with Your Multi-Asset Class Strategies",
                subheading: "Craft an operational framework that aligns with your portfolio management objectives.",
                descritpion: "At TechVest, we understand the unique challenges asset owners face, including pension funds, endowments, and foundations. Our specialized consulting services are designed to help you optimize portfolio performance, manage risk, and achieve your long-term financial goals. We leverage our extensive industry expertise and advanced analytics to provide tailored investment strategies that align with your specific objectives and fiduciary responsibilities.",
            },
            {
                id: "Address the Requirements of Your End Investors",
                haeding: "Address the Requirements of Your End Investors",
                subheading: "Evaluate and pinpoint solutions to fulfill your investor commitments.",
                descritpion: "Our consultants work closely with you to assess your current investment portfolio, identify areas for improvement, and develop strategies to enhance returns while mitigating risk. We provide ongoing support to ensure your investments are managed effectively, including performance monitoring, rebalancing, and compliance with regulatory requirements.",
            },
            {
                id: "Leverage the Provider Market to Enhance Core Competencies",
                haeding: "Leverage the Provider Market to Enhance Core Competencies",
                subheading: "Align your operational model with your firm's strategic priorities.",
                descritpion: "TechVest's holistic approach considers all aspects of asset management, from strategic asset allocation to manager selection and performance evaluation. We help you navigate market volatility, capitalize on investment opportunities, and achieve sustainable growth. With our deep understanding of the asset owner landscape, we offer insights and solutions that drive success and ensure the long-term viability of your investments.",
            },
        ],
    },
    Institutional: {
        id: "Institutional",
        url: "Institutional",
        BannerText: "Institutional",
        SubBannerText: "Comprehensive Solutions for Institutional Investors",
        Heading: "Empower your investment process with an optimized operating model.",
        HeadingDescription: "Amidst mounting challenges like cost pressures, intricate product landscapes, and the call for integrated operations, having a reliable partner is essential. We stand ready to collaborate with you in navigating these complexities by seamlessly integrating cutting-edge solutions and operating models. Whether it's deploying new software solutions, revolutionizing your data ecosystem, or modernizing operating frameworks, rely on our seasoned expertise to steer you towards successful outcomes.",
        content: [
            {
                id: "Revitalize the heart of your business",
                haeding: "Revitalize the heart of your business",
                subheading: "Equip your front office with state-of-the-art technology and streamlined processes.",
                descritpion: "Institutional investors face a complex landscape that demands tailored solutions and expert guidance. TechVest provides comprehensive consulting services designed to meet the unique needs of institutional clients, including pension funds, sovereign wealth funds, and large-scale investment firms. Our experienced consultants bring extensive knowledge and a deep understanding of institutional investment strategies, market trends, and regulatory requirements.",
            },
            {
                id: "Demonstrate unparalleled client service excellence",
                haeding: "Demonstrate unparalleled client service excellence",
                subheading: "Deliver timely and transparent communication to asset owners and end investors.",
                descritpion: "We work closely with institutional investors to enhance portfolio management, improve governance, and achieve superior investment outcomes. Our services include strategic asset allocation, risk management, performance analysis, and compliance support. We utilize advanced analytics and robust methodologies to provide insights that inform decision-making and drive success.",
            },
            {
                id: "Focus on your core strengths",
                haeding: "Focus on your core strengths",
                subheading: "Enhance your operational model and optimize human capital deployment.",
                descritpion: "TechVest's consultants are adept at navigating the complexities of institutional investments, including managing large-scale portfolios, optimizing investment strategies, and ensuring regulatory compliance. We offer customized solutions that address your specific challenges and opportunities, helping you achieve your investment objectives and maintain a competitive edge.",
            },
        ],
    },
    Insurance: {
        id: "Insurance",
        url: "Insurance",
        BannerText: "Insurance",
        SubBannerText: "Optimized Solutions for Insurance Asset Management",
        Heading: "Simplify, streamline, and modernize your operational framework.",
        HeadingDescription: "Insurers grapple with the intricate task of navigating regulatory compliance, fulfilling liabilities, maintaining stringent risk management protocols, and addressing complex multi-basis accounting demands. All the while, they must invest in sophisticated private market, derivative, and fixed income strategies. Compounded by aging technology and a dynamic vendor landscape, fulfilling these obligations while controlling costs presents unprecedented challenges. Whether your investment mandates are allocated, sub-advised, part of joint ventures, or managed internally, we specialize in crafting tailored solutions encompassing the optimal blend of personnel, processes, and technology to cater to your distinct requirements.",
        content: [
            {
                id: "Optimize operational effectiveness",
                haeding: "Optimize operational effectiveness",
                subheading: "Revamp your outdated architecture to achieve streamlined, adaptable operations.",
                descritpion: "For insurance companies, managing assets and liabilities efficiently is crucial to maintaining financial stability and regulatory compliance. TechVest provides specialized consulting services designed to address the unique challenges faced by insurers. Our expertise covers investment strategies, risk management, and regulatory compliance, ensuring that your assets are managed effectively and in line with industry standards.",
            },
            {
                id: "Address regulatory mandates",
                haeding: "Address regulatory mandates",
                subheading: "Tailor your processes to fulfill reporting mandates efficiently.",
                descritpion: "We work with insurance companies to develop and implement investment strategies that optimize returns while managing risk. Our consultants conduct thorough assessments of your asset and liability management practices, identifying areas for improvement and recommending tailored solutions. We provide ongoing support to ensure that your investment portfolio is aligned with your long-term financial goals and regulatory requirements.",
            },
            {
                id: "Reduce operational expenses",
                haeding: "Reduce operational expenses",
                subheading: "Revamp your operational model for optimal cost efficiency.",
                descritpion: "TechVest's deep understanding of the insurance industry allows us to offer insights and strategies that enhance your financial performance and stability. We help you navigate complex regulatory environments, optimize your asset allocation, and implement robust risk management practices. Our goal is to support your business in achieving sustainable growth and financial security.",
            },
        ],
    },
    PrivateMarket: {
        id: "PrivateMarket",
        url: "PrivateMarket",
        BannerText: "Private Markets",
        SubBannerText: "Expert Guidance for Navigating Private Markets",
        Heading: "Optimize your alternative investment operations by leveraging data integration and strategic partnerships.",
        HeadingDescription: "In the realm of private equity, private debt, and real estate, establishing a robust operational framework for scalable expansion presents significant hurdles. Traditional technology and service provisions in these sectors cater to specific operational facets based on the investor's role and the nature of investments.Today's asset managers pursue diverse multi-asset strategies across private markets, resulting in fragmented workflows and disparate solutions for asset allocation, risk management, performance tracking, and operations. We collaborate closely with your organization to conduct a comprehensive assessment spanning front to back-office requirements. Our aim is to harmonize strategies around unified data management, streamlined workflows, automation potentials, and outsourcing strategies.",
        content: [
            {
                id: "Navigate data intricacies and chart a course for your operational future.",
                haeding: "Navigate data intricacies and chart a course for your operational future.",
                subheading: "In grappling with the complexities of data aggregation, validation, and normalization across diverse sources, you confront a formidable task. ",
                descritpion: "Navigating private markets requires specialized expertise and a deep understanding of alternative investments. TechVest provides comprehensive consulting services for clients involved in private equity, real estate, and other private market investments. Our experienced consultants offer tailored solutions to help you identify opportunities, conduct due diligence, and optimize your investment strategies.",
            },
            {
                id: "Leverage purpose-built technology tailored to your needs",
                haeding: "Leverage purpose-built technology tailored to your needs",
                subheading: "Equip your organization to navigate the intricacies of complex investment strategies with precision-engineered tools.",
                descritpion: "We work closely with private market participants to develop and implement investment strategies that maximize returns and manage risk. Our services include market research, investment analysis, portfolio construction, and performance monitoring. We leverage our extensive industry knowledge and advanced analytics to provide insights that inform decision-making and drive success.",
            },
            {
                id: "Stay at the forefront with outsourcing solutions",
                haeding: "Stay at the forefront with outsourcing solutions",
                subheading: "Discover the ideal strategic ally to expedite your transformation journey.",
                descritpion: "TechVest's consultants are skilled at managing the complexities of private market investments, including conducting thorough due diligence, negotiating transactions, and optimizing portfolio performance. We provide ongoing support to ensure that your investments are managed effectively and aligned with your long-term financial goals.",
            },
        ],
    },
    Retail: {
        id: "Retail",
        url: "Retail",
        BannerText: "Retail",
        SubBannerText: "Customized Solutions for Retail Financial Services",
        Heading: "Achieve seamless integration, operational efficiency, and harness the power of new technology.",
        HeadingDescription: "In the competitive landscape of retail asset management, whether through mutual funds or ETFs, staying ahead necessitates not only superior performance but also exceptional client service while contending with relentless fee pressure. Today's market dynamics underscore the imperative for operational efficiency and cost reduction to attract and retain shareholders.Establishing and sustaining a comprehensive end-to-end operating model that caters to both internal investment management and fund shareholders poses significant challenges, particularly amid stringent operating budgets. To thrive, you require streamlined operations and data management, optimized ROI on internal investment systems and external services, and the ability to scale your business effectively. Our expertise enables us to assess your technology stack, refine operational processes, and fortify data infrastructure, empowering your front office to meet these demands head-on.",
        content: [
            {
                id: "Address technical debt",
                haeding: "Address technical debt",
                subheading: "Upgrade your systems to reduce costs and mitigate risk.",
                descritpion: "In the retail financial services sector, delivering tailored solutions and exceptional service is key to client satisfaction and business growth. TechVest offers specialized consulting services designed to enhance customer engagement, streamline service delivery, and optimize product offerings. Our expertise helps retail financial service providers deliver superior results and build lasting customer relationships.",
            },
            {
                id: "Optimize your operational efficiency",
                haeding: "Optimize your operational efficiency",
                subheading: "Unlock potential by partnering with the right outsourcing provider.",
                descritpion: "We work with retail financial service providers to assess their current operations, identify areas for improvement, and implement strategies that enhance efficiency and client satisfaction. Our services include market analysis, customer segmentation, product development, and performance monitoring. We leverage advanced analytics and industry insights to provide recommendations that drive growth and improve service delivery.",
            },
            {
                id: "Address compliance requirements",
                haeding: "Address compliance requirements",
                subheading: "Effortlessly navigate regulatory obligations.",
                descritpion: "TechVest's consultants bring extensive experience and deep industry knowledge to each engagement. We help you develop and implement solutions that address your unique challenges and opportunities, ensuring that you remain competitive in a dynamic market. Our goal is to support your business in achieving sustainable growth and delivering exceptional value to your clients.",
            },
        ],
    },
    Wealth: {
        id: "Wealth",
        url: "Wealth",
        BannerText: "Wealth",
        SubBannerText: "Expert Consulting for Wealth Management",
        Heading: "Provide tailored client experiences while maintaining scalability and efficiency.",
        HeadingDescription: "Your clients expect personalized attention and reliable service, but your company also needs to operate efficiently at scale. Achieving this delicate balance requires a strategic approach that combines operational sophistication with a human touch. Citisoft is prepared to assist you in devising and implementing innovative solutions that address your unique business challenges while delivering customized experiences to your clients.",
        content: [
            {
                id: "Provide an exceptional client experience",
                haeding: "Provide an exceptional client experience",
                subheading: "Balancing high-touch services with low-touch processes.",
                descritpion: "For wealth managers, providing personalized financial advice and exceptional service is essential to building trust and fostering long-term client relationships. TechVest offers comprehensive consulting services designed to enhance client engagement, improve portfolio management, and streamline operations. Our strategies help wealth managers deliver superior results and achieve their clients' financial goals.",
            },
            {
                id: "Equip your team and clients with cutting-edge technology",
                haeding: "Equip your team and clients with cutting-edge technology",
                subheading: "Discover tailored technology solutions for your enterprise.",
                descritpion: "We work closely with wealth managers to assess their current practices, identify areas for improvement, and develop tailored solutions. Our services include client segmentation, investment strategy development, risk management, and performance monitoring. We leverage advanced analytics and industry best practices to provide insights that drive success and ensure client satisfaction.",
            },
            {
                id: "Refocus on client service excellence",
                haeding: "Refocus on client service excellence",
                subheading: "Unlock your potential through strategic service provider collaborations.",
                descritpion: "TechVest's consultants bring a wealth of experience and deep industry knowledge to each engagement. We help you implement solutions that enhance your service delivery, optimize your investment strategies, and improve operational efficiency. Our goal is to support your business in delivering exceptional value to your clients and achieving sustainable growth.",
            },
        ],
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function FinancialServices() {
    const segments = Object.values(marketServedData);

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
                            Financial Services
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Expert Financial Consulting for Diverse Markets
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
                            <Link to="/" className="hover:text-[#00D4FF] transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            <Link to="/services" className="hover:text-[#00D4FF] transition-colors">
                                Services
                            </Link>
                            <span>/</span>
                            <span className="text-white">Financial Services</span>
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
                        <h2 className="section-title">We know your business.</h2>
                        <p className="text-xl text-gray-300 leading-relaxed mt-6">
                            At TechVest, we have a deep understanding of the unique challenges and opportunities within your business. Our comprehensive financial consulting services are tailored to meet the specific needs of a wide range of market segments. Whether you are an asset owner, institutional investor, insurer, or involved in private markets, retail, or wealth management, TechVest provides the expertise and insights necessary to drive success in your sector.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Market Segments */}
            {segments.map((segment, segmentIndex) => (
                <section key={segment.id} className={`section-shell ${segmentIndex % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                    <div className="section-inner">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="max-w-6xl mx-auto"
                        >
                            {/* Segment Header */}
                            <div className="text-center mb-12">
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    {/* Icon based on segment */}
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#6B3FFF] flex items-center justify-center shadow-lg">
                                        {segment.id === 'AssetOwners' && <Building2 className="w-8 h-8 text-white" />}
                                        {segment.id === 'Institutional' && <Landmark className="w-8 h-8 text-white" />}
                                        {segment.id === 'Insurance' && <Shield className="w-8 h-8 text-white" />}
                                        {segment.id === 'PrivateMarket' && <TrendingUp className="w-8 h-8 text-white" />}
                                        {segment.id === 'Retail' && <Store className="w-8 h-8 text-white" />}
                                        {segment.id === 'Wealth' && <Gem className="w-8 h-8 text-white" />}
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent pb-2">
                                        {segment.BannerText}
                                    </h2>
                                </div>
                                <p className="text-xl text-[#00D4FF] mb-6">{segment.SubBannerText}</p>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{segment.Heading}</h3>
                                <p className="text-lg text-gray-300 leading-relaxed">{segment.HeadingDescription}</p>
                            </div>

                            {/* Content Cards */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="grid md:grid-cols-3 gap-6"
                            >
                                {segment.content.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        variants={itemVariants}
                                        className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                    >
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="relative">
                                            <h4 className="text-xl font-bold text-white mb-3">{item.haeding}</h4>
                                            <p className="text-sm text-[#00D4FF] mb-4">{item.subheading}</p>
                                            <p className="text-gray-300 leading-relaxed">{item.descritpion}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            ))}

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
