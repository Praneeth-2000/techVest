import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import { ArrowRight, ShoppingCart } from "lucide-react";

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

const useCases = [
    {
        id: "ai-shopping-assistant",
        title: "AI Shopping Assistant for Retail Stores",
        businessProblem: "Customers start their journey digitally but complete purchases in-store, leading to drop-offs during complex product selection.",
        businessSolution: [
            "Conversational AI (voice and text) for guided product discovery",
            "Real-time, store-level inventory awareness across 500+ locations",
            "Seamless transition from research to purchase and fulfillment"
        ],
        retailApplicability: "Automotive retail, specialty retail, big-box retail",
        commercialOffering: [
            "Omnichannel AI Shopping Assistant",
            "Store-aware Product Discovery Agent"
        ]
    },
    {
        id: "inventory-intelligence",
        title: "Real-Time Store Inventory Intelligence",
        businessProblem: "Fragmented inventory visibility across stores impacts customer experience and conversion.",
        businessSolution: [
            "Live inventory integration across physical retail locations",
            "Store-specific availability surfaced during digital interactions",
            "Improved digital-to-physical handoff"
        ],
        retailApplicability: "Multi-store retail chains, franchise-based retail models",
        commercialOffering: [
            "Store-level Inventory Intelligence Layer",
            "AI-Driven Stock Visibility Engine"
        ]
    },
    {
        id: "personalization-loyalty",
        title: "Retail Personalization & Loyalty Optimization",
        businessProblem: "Generic promotions reduce loyalty engagement and repeat purchases.",
        businessSolution: [
            "AI-driven personalization using customer and transaction data",
            "SKU-level recommendations aligned with buyer behavior",
            "Loyalty program optimization (Triangle Rewards use case)"
        ],
        retailApplicability: "Loyalty-driven retail ecosystems, membership-based retailers",
        commercialOffering: [
            "Retail Personalization Engine",
            "AI-Powered Loyalty Optimization Platform"
        ]
    },
    {
        id: "merchandising-analytics",
        title: "SKU-Level Merchandising & Product Performance Analytics",
        businessProblem: "Limited visibility into product-level performance weakens merchandising decisions.",
        businessSolution: [
            "SKU-level analytics for product performance tracking",
            "Data-driven insights for category and merchandising teams"
        ],
        retailApplicability: "Category management, merchandising operations",
        commercialOffering: [
            "AI-Driven Merchandising Intelligence",
            "SKU Performance Analytics Platform"
        ]
    },
    {
        id: "data-mesh",
        title: "Retail Data Mesh & Store-Centric Data Ownership",
        businessProblem: "Centralized data models slow decision-making across retail brands and stores.",
        businessSolution: [
            "Federated, domain-driven data ownership across retail verticals",
            "Store, product, and vendor data managed as data products",
            "Enterprise standards with localized retail autonomy"
        ],
        retailApplicability: "Multi-banner retail groups, retail conglomerates",
        commercialOffering: [
            "Retail Data Mesh Operating Model",
            "Store-Centric Data Ownership Framework"
        ]
    },
    {
        id: "master-data-management",
        title: "Retail Master Data Management (Product, Vendor, Store)",
        businessProblem: "Duplicate and inconsistent master data disrupts supply chain and store operations.",
        businessSolution: [
            "Authoritative product, vendor, and store data entities",
            "Elimination of redundant datasets",
            "Standardized master data across retail systems"
        ],
        retailApplicability: "Supply-chain intensive retailers, private-label retailers",
        commercialOffering: [
            "Retail MDM Modernization Program",
            "Product & Store Data Authority Platform"
        ]
    },
    {
        id: "data-quality-trust",
        title: "Retail Data Quality, Lineage & Trust Framework",
        businessProblem: "Inconsistent data quality reduces trust in retail analytics and reporting.",
        businessSolution: [
            "Enterprise retail data inventory",
            "End-to-end data lineage across retail workflows",
            "Data quality metrics aligned with retail KPIs"
        ],
        retailApplicability: "Pricing, promotions, inventory planning, reporting",
        commercialOffering: [
            "Retail Data Quality Assurance Platform",
            "Trusted Retail Analytics Foundation"
        ]
    },
    {
        id: "operations-ai-assistant",
        title: "AI Assistants for Retail Operations & Workforce Productivity",
        businessProblem: "High operational overhead and manual work slow store and corporate retail teams.",
        businessSolution: [
            "Internal AI assistant for retail operations",
            "Support for documentation, reporting, and administrative workflows",
            "Productivity gains for store ops and HQ teams"
        ],
        retailApplicability: "Store operations, retail corporate functions",
        commercialOffering: [
            "Retail Operations AI Assistant",
            "Store Ops Productivity Copilot"
        ]
    },
    {
        id: "ai-innovation-enablement",
        title: "Retail AI Innovation & Enablement Programs",
        businessProblem: "AI adoption is often limited to central teams, reducing business-led innovation.",
        businessSolution: [
            "Retail-focused AI literacy programs",
            "Business-led hackathons for store and category innovation",
            "Continuous learning to embed AI in retail culture"
        ],
        retailApplicability: "Large retail organizations, multi-brand retail groups",
        commercialOffering: [
            "Retail AI Enablement Program",
            "Store-to-HQ Innovation Framework"
        ]
    }
];

export default function Retail() {
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
                            Retail
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Business-Driven Retail AI Solutions at Enterprise Scale
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
                            <Link to="/" className="hover:text-[#00D4FF] transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            <Link to="/industries" className="hover:text-[#00D4FF] transition-colors">
                                Industries
                            </Link>
                            <span>/</span>
                            <span className="text-white">Retail</span>
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
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#6B3FFF] flex items-center justify-center shadow-lg">
                                <ShoppingCart className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="section-title">Retail</h2>
                        </div>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            TechVest has been working with various retail customers in implementing business-driven retail AI solutions addressing customer experience, inventory intelligence, merchandising performance, loyalty optimization, data trust and retail operations, proven at Enterprise-Scale Retail Organization.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Use Cases */}
            {useCases.map((useCase, index) => (
                <section key={useCase.id} className={`section-shell ${index % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                    <div className="section-inner">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="max-w-6xl mx-auto"
                        >
                            {/* Use Case Header */}
                            <div className="mb-8">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#6B3FFF] flex items-center justify-center shadow-lg text-white font-bold text-lg">
                                        {index + 1}️⃣
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white flex-1">
                                        {useCase.title}
                                    </h3>
                                </div>

                                {/* Business Problem */}
                                <div className="mb-6">
                                    <h4 className="text-xl font-bold text-[#00D4FF] mb-3">Business Problem</h4>
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        {useCase.businessProblem}
                                    </p>
                                </div>

                                {/* Business Solution */}
                                <div className="mb-6">
                                    <h4 className="text-xl font-bold text-[#00D4FF] mb-3">Business Solution</h4>
                                    <ul className="space-y-2">
                                        {useCase.businessSolution.map((solution, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                <span className="text-[#00D4FF] mt-1">•</span>
                                                <span className="text-lg leading-relaxed">{solution}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Retail Applicability */}
                                <div className="mb-6">
                                    <h4 className="text-xl font-bold text-[#00D4FF] mb-3">Retail applicability</h4>
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        {useCase.retailApplicability}
                                    </p>
                                </div>

                                {/* Commercial Offering */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#00D4FF] mb-3">Commercial offering</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {useCase.commercialOffering.map((offering, idx) => (
                                            <div
                                                key={idx}
                                                className="px-4 py-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 text-gray-200"
                                            >
                                                {offering}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Separator line */}
                            {index < useCases.length - 1 && (
                                <div className="mt-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            )}
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
                            Ready to transform your retail operations with{" "}
                            <span className="text-[#00D4FF]">AI-driven solutions?</span>
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
