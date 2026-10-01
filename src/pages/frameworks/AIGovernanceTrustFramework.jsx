import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";

// Import images for each layer
import governanceStructureImg from "@/assets/images/Governance Structure.png";
import corePrinciplesImg from "@/assets/images/Core Principles.png";
import riskManagementImg from "@/assets/images/Risk Management Framework.jpg";
import lifecycleGovernanceImg from "@/assets/images/Lifecycle Governance.png";
import trustTransparencyImg from "@/assets/images/Trust and Transparency.png";
import legalStandardsImg from "@/assets/images/Legal and Standards Alignment.png";
import documentationAuditImg from "@/assets/images/Documentation and Audit Trail.png";
import incidentManagementImg from "@/assets/images/Incident Management.png";
import trainingCultureImg from "@/assets/images/Training and Culture.png";
import metricsImprovementImg from "@/assets/images/Metrics and Continuous Improvement.png";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

export default function AIGovernanceTrustFramework() {
    const frameworkLayers = [
        {
            id: 1,
            heading: "Strategic Oversight Layer: The Governance Structure",
            purpose: "Establishes ultimate authority, direction, and accountability for AI across the organization.",
            image: governanceStructureImg,
            keyComponents: [
                "AI Governance Board: Executive-level committee (CEO, CTO/CAIO, Legal, Risk, Compliance, Ethics heads)",
                "AI Ethics Committee: Cross-functional body addressing fairness, bias, and societal impact",
                "Risk Owner Designation: Clear executive accountability for AI risks",
                "RACI Matrix: Defines who is Responsible, Accountable, Consulted, and Informed for all AI activities"
            ],
            deliverables: [
                "✅ AI Governance Charter: Authority, structure, and escalation procedures",
                "✅ Roles and Responsibilities: Clear ownership across the organization",
                "✅ Meeting Cadence: Regular governance reviews and decision forums",
                "✅ Escalation Protocols: When and how issues reach executive leadership"
            ],
            boardQuestion: "Who is in charge of AI in our organization and what is their mandate?"
        },
        {
            id: 2,
            heading: "Foundation Layer: Core Principles",
            purpose: "Defines the ethical foundation and non-negotiable values that guide all AI decisions and activities.",
            image: corePrinciplesImg,
            keyComponents: [
                "Principle Framework: Transparency, fairness, accountability, privacy, safety, human oversight",
                "Ethical Boundaries: What the organization will and will not do with AI",
                "Stakeholder Commitments: Promises made to customers, employees, and society",
                "Principle-to-Practice Translation: How principles translate into operational requirements"
            ],
            deliverables: [
                "✅ AI Ethics Policy: Published principles and values",
                "✅ Red Lines Document: Prohibited AI uses and applications",
                "✅ Stakeholder Commitments: Public-facing promises and guarantees",
                "✅ Decision Framework: How to resolve ethical dilemmas"
            ],
            boardQuestion: "What are our values and boundaries for AI use?"
        },
        {
            id: 3,
            heading: "Protection Layer: Risk Management Framework",
            purpose: "Systematically identifies, assesses, and mitigates AI-related risks to protect the organization and stakeholders.",
            image: riskManagementImg,
            keyComponents: [
                "AI System Inventory: Complete catalog with risk classifications (minimal, limited, high, unacceptable)",
                "Risk Assessment Methodology: Standardized approach to evaluate potential harms",
                "Control Framework: Preventive, detective, and corrective controls based on risk tier",
                "Risk Monitoring: Ongoing surveillance for emerging risks and control effectiveness"
            ],
            deliverables: [
                "✅ AI Risk Register: Living document of all AI systems and their risk profiles",
                "✅ Risk Appetite Statement: How much risk the organization will accept",
                "✅ Control Requirements: Mandatory safeguards by risk category",
                "✅ Risk Dashboard: Real-time view of AI risk exposure"
            ],
            boardQuestion: "What are our AI risks and how are we managing them?"
        },
        {
            id: 4,
            heading: "Quality Assurance Layer: Lifecycle Governance",
            purpose: "Ensures appropriate controls, reviews, and quality gates are applied throughout the AI system lifecycle.",
            image: lifecycleGovernanceImg,
            keyComponents: [
                "Stage Gates: Mandatory reviews at design, development, pre-deployment, and operation phases",
                "Approval Authority: Defined who can approve progression to next stage based on risk level",
                "Documentation Standards: Required artifacts at each lifecycle stage",
                "Change Management: Controls for modifications to deployed systems"
            ],
            deliverables: [
                "✅ Lifecycle Policy: Stage-gate requirements and approval authorities",
                "✅ Quality Standards: Technical and ethical criteria for progression",
                "✅ Testing Protocols: Required validation before deployment",
                "✅ Decommissioning Process: How to retire AI systems safely"
            ],
            boardQuestion: "How do we ensure AI quality from concept to retirement?"
        },
        {
            id: 5,
            heading: "Confidence Layer: Trust and Transparency",
            purpose: "Builds and maintains stakeholder confidence through openness, engagement, and external validation.",
            image: trustTransparencyImg,
            keyComponents: [
                "Transparency Standards: What information must be disclosed about AI systems",
                "Stakeholder Engagement: Mechanisms for user input, feedback, and concerns",
                "External Validation: Third-party audits, certifications, and independent review",
                "Explainability Requirements: How AI decisions are communicated to affected parties"
            ],
            deliverables: [
                "✅ Transparency Policy: What, when, and how we disclose AI use",
                "✅ Stakeholder Engagement Plan: Regular touchpoints with affected communities",
                "✅ Audit Schedule: Planned independent assessments",
                "✅ Transparency Report: Annual public disclosure of AI practices"
            ],
            boardQuestion: "How do we build trust with customers and the public?"
        },
        {
            id: 6,
            heading: "Compliance Layer: Legal and Standards Alignment",
            purpose: "Ensures AI activities comply with all applicable laws, regulations, and industry standards.",
            image: legalStandardsImg,
            keyComponents: [
                "Regulatory Mapping: Identification of all applicable AI regulations by jurisdiction",
                "Standards Adoption: Alignment with ISO 42001, NIST AI RMF, and industry frameworks",
                "Compliance Monitoring: Ongoing assessment of regulatory adherence",
                "Change Management: Process to adapt to new regulations and standards"
            ],
            deliverables: [
                "✅ Compliance Matrix: All applicable regulations and compliance status",
                "✅ Gap Assessment: Areas of non-compliance and remediation plans",
                "✅ Standards Roadmap: Path to certification (ISO, SOC 2, etc.)",
                "✅ Regulatory Watch: Process to track and respond to new requirements"
            ],
            boardQuestion: "Are we compliant with AI regulations and standards?"
        },
        {
            id: 7,
            heading: "Evidence Layer: Documentation and Audit Trail",
            purpose: "Creates comprehensive records to demonstrate accountability, enable audits, and support continuous improvement.",
            image: documentationAuditImg,
            keyComponents: [
                "Documentation Standards: Required artifacts for each AI system",
                "Version Control: Tracking of model changes, data updates, and system modifications",
                "Audit Trails: Immutable logs of decisions, approvals, and system actions",
                "Retention Policies: How long records are maintained and when they're archived"
            ],
            deliverables: [
                "✅ Documentation Standards: Templates and requirements for all AI systems",
                "✅ Data Lineage Tracking: Full traceability of training data and model provenance",
                "✅ Decision Logs: Records of all significant AI-related decisions",
                "✅ Audit-Ready Repository: Centralized access to governance evidence"
            ],
            boardQuestion: "Can we prove we've governed AI responsibly?"
        },
        {
            id: 8,
            heading: "Response Layer: Incident Management",
            purpose: "Enables rapid detection, containment, and resolution of AI-related incidents while learning from failures.",
            image: incidentManagementImg,
            keyComponents: [
                "Incident Classification: Severity tiers and definitions of what constitutes an incident",
                "Response Protocols: Playbooks for different incident types (bias, security, safety)",
                "Crisis Communication: Internal and external notification procedures",
                "Post-Incident Review: Root cause analysis and control improvement process"
            ],
            deliverables: [
                "✅ Incident Response Plan: Clear protocols for AI failures and harms",
                "✅ Crisis Communication Templates: Pre-approved messaging for different scenarios",
                "✅ Escalation Matrix: When incidents reach executive leadership and board",
                "✅ Lessons Learned Process: How incidents drive improvements"
            ],
            boardQuestion: "What happens when something goes wrong with AI?"
        },
        {
            id: 9,
            heading: "Capability Layer: Training and Culture",
            purpose: "Develops organizational competence and embeds responsible AI practices into company culture.",
            image: trainingCultureImg,
            keyComponents: [
                "Training Curriculum: Role-based learning (executives, practitioners, general staff)",
                "Awareness Programs: Ongoing communication about AI risks and responsibilities",
                "Communities of Practice: Forums for sharing knowledge and challenges",
                "Culture Indicators: Metrics showing adoption of responsible AI behaviors"
            ],
            deliverables: [
                "✅ Training Strategy: Required learning by role and frequency",
                "✅ Competency Standards: Skills required for AI-related roles",
                "✅ Awareness Campaign: Regular internal communications and events",
                "✅ Culture Metrics: Surveys and indicators of responsible AI mindset"
            ],
            boardQuestion: "Do our people know how to use AI responsibly?"
        },
        {
            id: 10,
            heading: "Performance Layer: Metrics and Continuous Improvement",
            purpose: "Measures governance effectiveness and drives ongoing enhancement of AI practices through data-driven insights.",
            image: metricsImprovementImg,
            keyComponents: [
                "KPI Framework: Metrics across performance, fairness, safety, compliance, and trust",
                "Reporting Cadence: Regular updates to governance bodies at appropriate levels",
                "Benchmarking: Comparison to industry peers and best practices",
                "Improvement Process: How metrics trigger reviews and enhancements"
            ],
            deliverables: [
                "✅ AI Governance Dashboard: Real-time metrics on key indicators",
                "✅ Reporting Schedule: Monthly operational, quarterly strategic, annual comprehensive",
                "✅ Maturity Assessment: Annual evaluation against governance frameworks",
                "✅ Improvement Roadmap: Action plan based on metrics and gaps"
            ],
            boardQuestion: "How effective is our AI governance and how are we improving?"
        }
    ];

    return (
        <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white">
            <Navigation />

            {/* Hero Section */}
            <section className="section-shell relative overflow-hidden pt-32 pb-20">
                {/* Background Elements */}
                <div className="absolute top-10 right-20 w-[500px] h-[500px] bg-[#00D4FF] opacity-[0.15] blur-[120px] rounded-full animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-[#6B3FFF] opacity-[0.12] blur-[130px] rounded-full" />
                <div className="absolute top-40 right-32 w-40 h-40 border border-cyan-400/30 rounded-full animate-pulse" />
                <div className="absolute bottom-1/2 left-16 w-28 h-28 border border-purple-400/20 rotate-45 animate-pulse" />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,212,255,0.15),_transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(107,63,255,0.15),_transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_0%,_rgba(10,10,15,0.4)_100%)]" />

                <div className="relative section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                                AI Governance &
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-[#00D4FF] via-[#6B3FFF] to-[#00D4FF] bg-clip-text text-transparent animate-gradient">
                                Trust Framework
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-10">
                            A comprehensive 10-layer framework for building responsible, trustworthy, and compliant AI systems at enterprise scale.
                        </p>

                        {/* Breadcrumb */}
                        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                            <Link to="/" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">
                                Home
                            </Link>
                            <span className="text-gray-600">/</span>
                            <Link to="/frameworks" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">
                                Frameworks
                            </Link>
                            <span className="text-gray-600">/</span>
                            <span className="text-white font-medium">AI Governance & Trust Framework</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
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
                        <p className="section-kicker mb-4">Comprehensive Governance</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent pb-2">
                            10 Layers of AI Governance Excellence
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Each layer addresses critical governance needs, from executive oversight to continuous improvement, ensuring your AI systems are built on a foundation of trust, compliance, and accountability.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Framework Layers - Two Column Layout */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto space-y-24">
                        {frameworkLayers.map((layer, index) => {
                            const isEven = index % 2 === 1;

                            return (
                                <motion.div
                                    key={layer.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                                    className="grid lg:grid-cols-2 gap-12 items-center"
                                >
                                    {/* Content Column */}
                                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <div className="mb-6">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#6B3FFF] text-white font-bold text-xl flex items-center justify-center">
                                                    {layer.id}
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-bold text-white">{layer.heading}</h3>
                                            </div>
                                            <p className="text-[#00D4FF] font-semibold text-lg mb-4">Purpose:</p>
                                            <p className="text-gray-300 text-lg leading-relaxed mb-6">{layer.purpose}</p>
                                        </div>

                                        <div className="space-y-6">
                                            {/* Key Components */}
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-3">Key Components:</h4>
                                                <ul className="space-y-2">
                                                    {layer.keyComponents.map((component, idx) => (
                                                        <li key={idx} className="text-gray-300 leading-relaxed flex items-start gap-2">
                                                            <span className="text-[#00D4FF] mt-1">•</span>
                                                            <span>{component}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Executive Deliverables */}
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-3">Executive Deliverables:</h4>
                                                <ul className="space-y-2">
                                                    {layer.deliverables.map((deliverable, idx) => (
                                                        <li key={idx} className="text-gray-300 leading-relaxed">
                                                            {deliverable}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Board Question */}
                                            <div className="rounded-xl border border-[#00D4FF]/30 bg-[#00D4FF]/5 p-4">
                                                <p className="text-sm text-gray-400 mb-1">Board Question Answered:</p>
                                                <p className="text-white font-semibold italic">"{layer.boardQuestion}"</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Column */}
                                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group w-full">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <img
                                                src={layer.image}
                                                alt={layer.heading}
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
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Ready to Build <span className="text-[#00D4FF]">Trustworthy AI</span>?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Let us help you implement this comprehensive governance framework to ensure your AI systems are responsible, compliant, and trusted by all stakeholders.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300 hover:scale-105"
                        >
                            Get Started with AI Governance
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
