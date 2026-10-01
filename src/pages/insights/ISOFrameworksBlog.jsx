import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowLeft, CheckCircle2, AlertTriangle, Shield, Globe, BookOpen, Layers } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import ISO42001vsNISTAIActOECDAIPrinciples from "@/assets/images/blogs/ISO42001vsNISTAIActOECDAIPrinciples.jpeg";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay: i * 0.08, ease: "easeOut" },
    }),
};

/* ── Reusable styled components ── */

function SectionCard({ children, className = "" }) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-cyan-400/40 transition-all duration-300 group ${className}`}
        >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="relative">{children}</div>
        </motion.div>
    );
}

function H2({ children, icon: Icon }) {
    return (
        <div className="flex items-center gap-3 mb-5">
            {Icon && (
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-cyan-400" />
                </div>
            )}
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                {children}
            </h2>
        </div>
    );
}

function H3({ children }) {
    return (
        <h3 className="text-lg font-semibold text-cyan-400 mb-2 mt-5 first:mt-0">
            {children}
        </h3>
    );
}

function Para({ children }) {
    return <p className="text-gray-300 leading-relaxed">{children}</p>;
}

function BulletList({ items }) {
    return (
        <ul className="mt-3 space-y-2">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
            ))}
        </ul>
    );
}

function StyledTable({ headers, rows }) {
    return (
        <div className="overflow-x-auto mt-4 rounded-xl border border-white/10">
            <table className="w-full text-sm">
                <thead>
                    <tr className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                        {headers.map((h, i) => (
                            <th
                                key={i}
                                className="px-4 py-3 text-left text-white font-semibold border-b border-white/10 whitespace-nowrap"
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, ri) => (
                        <tr
                            key={ri}
                            className={`border-b border-white/5 transition-colors ${ri % 2 === 0 ? "bg-white/[0.02]" : "bg-white/[0.015]"} hover:bg-cyan-500/5`}
                        >
                            {row.map((cell, ci) => (
                                <td
                                    key={ci}
                                    className={`px-4 py-3 text-gray-300 leading-relaxed ${ci === 0 ? "font-semibold text-white" : ""}`}
                                    dangerouslySetInnerHTML={{ __html: cell }}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function LevelTable({ headers, rows }) {
    const tierColors = ["from-cyan-500/20 to-cyan-400/10", "from-purple-500/20 to-purple-400/10", "from-indigo-500/20 to-indigo-400/10"];
    return (
        <div className="overflow-x-auto mt-4 rounded-xl border border-white/10">
            <table className="w-full text-sm">
                <thead>
                    <tr className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20">
                        {headers.map((h, i) => (
                            <th key={i} className="px-4 py-3 text-left text-white font-semibold border-b border-white/10">
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, ri) => (
                        <tr key={ri} className={`border-b border-white/5 bg-gradient-to-r ${tierColors[ri % 3]} hover:brightness-125 transition-all`}>
                            {row.map((cell, ci) => (
                                <td
                                    key={ci}
                                    className={`px-4 py-4 text-gray-300 leading-relaxed align-top ${ci === 0 ? "font-bold text-white whitespace-nowrap" : ""}`}
                                    dangerouslySetInnerHTML={{ __html: cell }}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function CalloutBox({ type = "info", children }) {
    const styles = {
        info: "border-cyan-500/40 bg-cyan-500/10",
        warning: "border-amber-500/40 bg-amber-500/10",
        success: "border-emerald-500/40 bg-emerald-500/10",
        insight: "border-purple-500/40 bg-purple-500/10",
    };
    const icons = {
        info: <Shield className="w-4 h-4 text-cyan-400" />,
        warning: <AlertTriangle className="w-4 h-4 text-amber-400" />,
        success: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
        insight: <BookOpen className="w-4 h-4 text-purple-400" />,
    };
    return (
        <div className={`mt-5 rounded-xl border p-4 flex gap-3 ${styles[type]}`}>
            <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>
            <div className="text-gray-300 leading-relaxed text-sm">{children}</div>
        </div>
    );
}

function Divider() {
    return <div className="my-5 border-t border-white/10" />;
}

/* ══════════════════════════════════════════════════════════ */
/*  MAIN COMPONENT                                           */
/* ══════════════════════════════════════════════════════════ */

export default function ISOFrameworksBlog() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white min-h-screen">
            <Navigation />

            {/* ── HERO ── */}
            <section className="relative overflow-hidden pt-32 pb-16">
                <div className="absolute top-20 right-10 w-96 h-96 bg-[#00D4FF] opacity-15 blur-[130px] rounded-full animate-pulse" />
                <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[#6B3FFF] opacity-12 blur-[150px] rounded-full" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(107,63,255,0.2),_transparent_65%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,212,255,0.12),_transparent_70%)]" />

                <div className="relative max-w-5xl mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" animate="visible">
                        {/* Banner image */}
                        <div className="w-full h-64 md:h-80 overflow-hidden rounded-2xl mb-10 border border-white/10">
                            <img
                                src={ISO42001vsNISTAIActOECDAIPrinciples}
                                alt="ISO 42001 vs NIST AI RMF vs EU AI Act vs OECD AI Principles"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                            {/* <div className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                <span>March 30, 2026</span>
                            </div> */}
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                                <Tag className="w-3.5 h-3.5 text-cyan-400" />
                                <span className="text-cyan-400">AI Governance</span>
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-white via-white to-cyan-400 bg-clip-text text-transparent leading-tight">
                            ISO 42001 vs NIST AI RMF vs EU AI Act vs OECD AI Principles
                        </h1>
                        <p className="text-2xl font-semibold text-cyan-300 mb-3">Which Framework Should Your Company Actually Use?</p>
                        <p className="text-lg text-gray-400 italic">
                            A practitioner's guide for enterprise AI leaders who are tired of framework theater
                        </p>

                        {/* Breadcrumb */}
                        <div className="mt-8 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                            <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
                            <span>/</span>
                            <Link to="/insights" className="hover:text-cyan-400 transition-colors">Insights</Link>
                            <span>/</span>
                            <Link to="/insights/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
                            <span>/</span>
                            <span className="text-gray-300">ISO Frameworks Comparison</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── CONTENT ── */}
            <section className="relative overflow-hidden pb-24">
                {/* Grid bg */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "80px 80px"
                }} />

                {/* <div className="relative max-w-4xl mx-auto px-6 space-y-8"> */}
                <div className="relative max-w-4xl mx-auto px-6 pt-8 space-y-8">

                    {/* ── 1. Framework Proliferation Problem ── */}
                    <SectionCard>
                        <H2 icon={Layers}>The Framework Proliferation Problem</H2>
                        <Para>
                            If you've sat in an AI governance meeting recently, you've probably heard these names thrown
                            around — sometimes in the same breath, often by people who haven't read any of them in full.
                        </Para>
                        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {["ISO 42001", "NIST AI RMF", "EU AI Act", "OECD AI Principles"].map((f) => (
                                <div
                                    key={f}
                                    className="rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-3 text-center"
                                >
                                    <span className="text-sm font-semibold text-white">{f}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4 text-gray-400 text-sm italic">
                            Four frameworks. Four acronyms. One very confused boardroom.
                        </p>
                        <Divider />
                        <Para>
                            The honest answer to <span className="text-white font-medium">"which one should we use?"</span> is:{" "}
                            <em className="text-cyan-300">it depends</em> — and here's exactly what it depends on.
                        </Para>
                    </SectionCard>

                    {/* ── 2. What Each Framework Actually Is ── */}
                    <SectionCard>
                        <H2 icon={BookOpen}>What Each Framework Actually Is</H2>

                        <H3>NIST AI Risk Management Framework (AI RMF)</H3>
                        <Para>
                            Published by the U.S. National Institute of Standards and Technology in January 2023, the AI
                            RMF is a voluntary framework structured around four core functions:{" "}
                            <span className="text-cyan-300 font-semibold">GOVERN, MAP, MEASURE,</span> and{" "}
                            <span className="text-cyan-300 font-semibold">MANAGE</span>. It is not a certification
                            standard. There is no audit, no badge, no registrar. It's a thinking tool — a structured
                            vocabulary for operationalizing AI risk across an organization.
                        </Para>

                        <H3>ISO/IEC 42001:2023</H3>
                        <Para>
                            An international management system standard published by the International Organization for
                            Standardization. Think of it as the ISO 27001 of AI. It specifies requirements for
                            establishing, implementing, maintaining, and continually improving an AI Management System
                            (AIMS). Unlike NIST AI RMF,{" "}
                            <span className="text-emerald-400 font-semibold">ISO 42001 is certifiable</span>. You can
                            get audited by an accredited body and walk away with a certificate.
                        </Para>

                        <H3>EU AI Act</H3>
                        <Para>
                            Enacted in 2024 and entering phased enforcement through 2026, the EU AI Act is{" "}
                            <span className="text-amber-400 font-semibold">binding law</span> — not a voluntary
                            framework. It applies a risk-based classification to AI systems: Unacceptable Risk (banned),
                            High Risk (heavily regulated), Limited Risk (transparency obligations), and Minimal Risk
                            (largely unregulated). Non-compliance carries fines of up to{" "}
                            <span className="text-amber-300 font-semibold">€35 million or 7%</span> of global annual
                            turnover, whichever is higher.
                        </Para>

                        <H3>OECD AI Principles</H3>
                        <Para>
                            First adopted in 2019 and updated in 2023, the OECD AI Principles are a set of
                            intergovernmental policy guidelines endorsed by over 40 countries. They cover five
                            value-based principles: inclusive growth, human-centred values, transparency, robustness,
                            and accountability. They are non-binding but have been explicitly referenced in the EU AI
                            Act, the U.S. Executive Order on AI, and numerous national AI strategies. Think of them as
                            the diplomatic lingua franca of global AI governance — the shared foundation that most
                            national frameworks are built on.
                        </Para>
                    </SectionCard>

                    {/* ── 3. Fundamental Distinction table ── */}
                    <SectionCard>
                        <H2 icon={Shield}>The Fundamental Distinction: Law vs. Standard vs. Framework vs. Principles</H2>
                        <Para>
                            Before comparing them side by side, it helps to understand what kind of thing each one is:
                        </Para>

                        <StyledTable
                            headers={["Framework", "Nature", "Binding?", "Certifiable?", "Enforced By"]}
                            rows={[
                                ["EU AI Act", "Regulation (Law)", "✅ Yes", "Conformity assessment", "EU regulators, national authorities"],
                                ["ISO 42001", "Management System Standard", "No (but contractually required)", "✅ Yes", "Accredited certification bodies"],
                                ["NIST AI RMF", "Voluntary Framework", "❌ No", "❌ No", "Self-assessment"],
                                ["OECD AI Principles", "Intergovernmental Guidelines", "❌ No", "❌ No", "Political/diplomatic pressure"],
                            ]}
                        />

                        <CalloutBox type="insight">
                            <strong>This distinction matters enormously.</strong> The EU AI Act isn't something you
                            adopt — it's something you <em>comply with</em>. The others are tools you choose to
                            implement.
                        </CalloutBox>
                    </SectionCard>

                    {/* ── 4. FinTech Case Study ── */}
                    <SectionCard>
                        <H2 icon={Globe}>When the Framework Stack Became Real: A FinTech Case Study</H2>
                        <p className="text-gray-400 italic text-sm mb-5">
                            The following is based on a composite of real engagements. Details have been anonymised.
                        </p>
                        <Para>
                            A Singapore-headquartered FinTech — let's call them <strong className="text-white">NovaCred</strong> —
                            had built a proprietary credit scoring engine used by retail banks across Southeast Asia. In
                            early 2024, they signed their first European client: a mid-sized German savings bank looking
                            to automate SME lending decisions.
                        </Para>
                        <Para className="mt-3">
                            The sales team celebrated. The engineering team started integration. Nobody thought about the EU AI Act.
                        </Para>
                        <Para className="mt-3">
                            Three months in, their legal counsel flagged it: NovaCred's credit scoring model almost
                            certainly qualified as a <span className="text-amber-400 font-semibold">High-Risk AI system
                                under Annex III of the EU AI Act</span>. That triggered a cascade of obligations: conformity
                            assessments, technical documentation, human oversight mechanisms, bias testing, and
                            registration in the EU AI systems database. They had none of it.
                        </Para>

                        <Divider />
                        <p className="text-white font-semibold mb-3">Here is how they sequenced their recovery:</p>
                        <BulletList
                            items={[
                                "<strong>Month 1–2:</strong> Anchored their AI ethics policy in OECD AI Principles. Quick win — gave the board a values framework and bought credibility with the German client's compliance team.",
                                "<strong>Month 2–5:</strong> Ran a NIST AI RMF assessment across their credit scoring pipeline. Identified 14 risk categories they hadn't formally documented. Built an AI risk register for the first time.",
                                "<strong>Month 5–12:</strong> Used the NIST output as the foundation for an ISO 42001 implementation. Fast-tracked to certification in 11 months because the documentation groundwork was already laid.",
                                "<strong>Parallel track:</strong> Engaged an EU AI Act specialist to build their High-Risk compliance dossier — technical documentation, conformity assessment, human oversight SOP, and bias audit.",
                            ]}
                        />

                        <CalloutBox type="success">
                            <strong>Outcome:</strong> They closed the German deal, satisfied the client's vendor due
                            diligence, and now use their ISO 42001 certificate as a sales asset in every new enterprise
                            conversation. The lesson: The frameworks aren't bureaucratic overhead. For NovaCred, they
                            were the difference between closing a seven-figure contract and losing it.
                        </CalloutBox>
                    </SectionCard>

                    {/* ── 5. The Four Dimensions ── */}
                    <SectionCard>
                        <H2 icon={Layers}>The Four Dimensions That Matter</H2>

                        {/* Dimension 1 */}
                        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5 mb-4">
                            <h3 className="text-lg font-bold text-cyan-300 mb-3">
                                1. Your Audience: Internal Stakeholders vs. External Ones
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { fw: "NIST AI RMF", desc: "Built for internal governance. Its strength is in giving cross-functional teams — legal, risk, engineering, product — a shared language to identify, prioritize, and respond to AI risks." },
                                    { fw: "ISO 42001", desc: "Built with external trust in mind. A third-party certification speaks louder than a self-assessment in B2B contexts, especially in financial services, healthcare, and government contracting." },
                                    { fw: "EU AI Act", desc: "Built for regulators and consumers. Its conformity assessments, technical documentation requirements, and human oversight mandates are designed to be externally verifiable." },
                                    { fw: "OECD AI Principles", desc: "Speak primarily to policymakers and boards. Most useful for framing your AI ethics narrative at the governance level." },
                                ].map((item) => (
                                    <div key={item.fw} className="flex gap-3">
                                        <span className="text-cyan-400 font-semibold text-sm whitespace-nowrap min-w-[120px]">{item.fw}</span>
                                        <span className="text-gray-300 text-sm leading-relaxed">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                            <CalloutBox type="info">
                                <strong>Ask yourself:</strong> Are you solving an internal alignment problem, or a market trust problem?
                            </CalloutBox>
                        </div>

                        {/* Dimension 2 */}
                        <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-5 mb-4">
                            <h3 className="text-lg font-bold text-purple-300 mb-3">
                                2. Your Regulatory Context: U.S.-Centric vs. Global vs. European
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { fw: "NIST AI RMF", desc: "Designed primarily for U.S. federal agencies and contractors. The Biden Executive Order on AI (2023) explicitly referenced NIST AI RMF — cementing its role in U.S. public sector AI governance." },
                                    { fw: "ISO 42001", desc: "An international standard that travels well across geographies. For companies in Europe, the UK, Asia, the Middle East, and Latin America — where ISO norms dominate procurement — it offers strong regulatory coherence." },
                                    { fw: "EU AI Act", desc: "Applies if you're an AI provider, deployer, importer, or distributor operating within the EU, or whose AI systems affect EU residents. Extraterritorial reach is real." },
                                    { fw: "OECD AI Principles", desc: "Underpin the policy frameworks of over 40 member countries — Canada, Japan, South Korea, Australia. The common thread running through each nation's AI strategy." },
                                ].map((item) => (
                                    <div key={item.fw} className="flex gap-3">
                                        <span className="text-purple-400 font-semibold text-sm whitespace-nowrap min-w-[120px]">{item.fw}</span>
                                        <span className="text-gray-300 text-sm leading-relaxed">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dimension 3 */}
                        <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-5 mb-4">
                            <h3 className="text-lg font-bold text-indigo-300 mb-3">
                                3. Your Maturity: Starting Out vs. Scaling Up vs. Operating at Scale
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { fw: "NIST AI RMF", desc: "Has the gentlest on-ramp. Its AI RMF Playbook provides hundreds of suggested actions mapped to each function, accessible for organizations at early AI maturity stages." },
                                    { fw: "OECD Principles", desc: "Require even less structural commitment — principle-level statements that can inform your AI ethics policy without demanding a full management system build-out." },
                                    { fw: "ISO 42001", desc: "Demands structured commitment, following the Annex SL high-level structure. If you've implemented ISO 9001 or ISO 27001, integration is very achievable. Otherwise, expect a 6–12 month journey." },
                                    { fw: "EU AI Act", desc: "Most demanding operationally for organizations in scope. High-risk AI system providers must maintain technical documentation, conduct conformity assessments, and register in the EU database." },
                                ].map((item) => (
                                    <div key={item.fw} className="flex gap-3">
                                        <span className="text-indigo-400 font-semibold text-sm whitespace-nowrap min-w-[120px]">{item.fw}</span>
                                        <span className="text-gray-300 text-sm leading-relaxed">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dimension 4 */}
                        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                            <h3 className="text-lg font-bold text-emerald-300 mb-2">
                                4. Your Goal: Think Better, Demonstrate Credibility, Achieve Compliance, or Signal Values
                            </h3>
                            <Para>Each framework excels at a different goal — choose based on what your organisation actually needs to prove, and to whom.</Para>
                        </div>
                    </SectionCard>

                    {/* ── 6. OECD Three Levels ── */}
                    <SectionCard>
                        <H2 icon={Globe}>OECD AI Principles: Three Levels, Not One Timeline</H2>
                        <Para>
                            The OECD Principles are not something you implement in the same sense as ISO 42001 or NIST
                            AI RMF. There is no checklist, no audit, no deliverable that says done. What organisations
                            actually do is adopt them at one of three levels of seriousness — and regulators are
                            increasingly able to tell the difference.
                        </Para>

                        <LevelTable
                            headers={["Level", "What It Actually Means", "Realistic Timeline"]}
                            rows={[
                                [
                                    "Level 1: Policy Adoption",
                                    "AI Ethics Policy drafted, references OECD principles, board endorsed, published. Necessary starting point but performative on its own.",
                                    "2–3 weeks",
                                ],
                                [
                                    "Level 2: Operationalised",
                                    "Principles translated into internal standards per AI use case. Ethics review committee established with real authority. Assessment criteria embedded in the AI development lifecycle. First ethics reviews conducted on live systems.",
                                    "2–4 months",
                                ],
                                [
                                    "Level 3: Embedded",
                                    "Systematic ethics assessments documented for every AI system. Board receives regular AI ethics reporting tied to OECD criteria. Evidenced and auditable — not just declared.",
                                    "6–12 months",
                                ],
                            ]}
                        />

                        <CalloutBox type="info">
                            Most organisations are at <strong>Level 1</strong>. Most regulators want to see{" "}
                            <strong>Level 2</strong>. Level 3 is where governance becomes genuinely defensible.
                        </CalloutBox>
                    </SectionCard>

                    {/* ── 7. NIST AI RMF Levels ── */}
                    <SectionCard>
                        <H2 icon={Shield}>NIST AI RMF: Fast to Start, Hard to Sustain</H2>

                        <LevelTable
                            headers={["Level", "What It Actually Means", "Realistic Timeline"]}
                            rows={[
                                [
                                    "Level 1: MVP Assessment",
                                    "GOVERN structure in place. AI inventory drafted. Initial risk categorisation complete. Gap list produced. You now have a defensible baseline.",
                                    "6–8 weeks",
                                ],
                                [
                                    "Level 2: Operationalised",
                                    "MAP and MEASURE functions running. AI risk register live and maintained. Impact assessments completed for priority systems. Cross-functional ownership formally established.",
                                    "3–6 months",
                                ],
                                [
                                    "Level 3: Continuous Programme",
                                    "MANAGE function fully active. Quarterly review cycle embedded. AI incident response tested. NIST runs as a living programme with governance metrics reported to leadership.",
                                    "Ongoing from month 6",
                                ],
                            ]}
                        />

                        <CalloutBox type="warning">
                            <strong>The real bottleneck at Level 1:</strong> AI inventory discovery. Most organisations
                            genuinely do not know every AI system running across their business. Shadow AI is pervasive.
                            Budget time for discovery — not just documentation.
                        </CalloutBox>
                    </SectionCard>

                    {/* ── 8. ISO 42001 Levels ── */}
                    <SectionCard>
                        <H2 icon={CheckCircle2}>ISO 42001: Faster Than You Think, If You Already Have ISO Infrastructure</H2>

                        <LevelTable
                            headers={["Level", "What It Actually Means", "Realistic Timeline"]}
                            rows={[
                                [
                                    "Level 1: Gap Analysis",
                                    "Current state assessed against ISO 42001 clauses. Remediation roadmap produced. No certification yet — but you know exactly what you need to build.",
                                    "4–6 weeks",
                                ],
                                [
                                    "Level 2: Implementation",
                                    "Management system built. Policies, procedures, AI asset register, and internal audit complete. Certification-ready.",
                                    "3–5 months",
                                ],
                                [
                                    "Level 3: Certified",
                                    "External audit passed. Certificate issued. Surveillance audits scheduled annually. The constraint here is auditor availability, not implementation readiness.",
                                    "Add 1–3 months to Level 2",
                                ],
                            ]}
                        />

                        <CalloutBox type="success">
                            <strong>If you already have ISO 27001 or ISO 9001:</strong> your Level 2 timeline drops by
                            30–40%. The Annex SL management system structure is identical. You are closing a delta, not
                            building from scratch.
                        </CalloutBox>
                        <CalloutBox type="warning">
                            <strong>The real bottleneck at Level 3:</strong> ISO 42001-certified auditors are still
                            scarce globally. You can be implementation-ready in 3 months and wait another 2 for an audit
                            slot. Factor this into your planning.
                        </CalloutBox>
                    </SectionCard>

                    {/* ── 9. EU AI Act Timeline ── */}
                    <SectionCard>
                        <H2 icon={AlertTriangle}>EU AI Act: The Timeline Depends on Your Risk Class and Your Technical Debt</H2>
                        <Para>
                            Unlike the other three frameworks, EU AI Act compliance is not a single programme. It is a
                            differentiated obligation set depending on where your AI systems sit in the risk
                            classification. And crucially — if compliance takes you a long time, the EU AI Act probably
                            did not create that work. Your undocumented models, absent oversight mechanisms, and missing
                            evaluation pipelines did. <span className="text-amber-300 font-semibold">The Act just made the debt visible.</span>
                        </Para>

                        <StyledTable
                            headers={["Risk Class", "Who It Affects", "Core Obligations", "Realistic Timeline"]}
                            rows={[
                                [
                                    "🚫 Unacceptable Risk",
                                    "Anyone building prohibited AI systems",
                                    "Do not deploy. Full stop.",
                                    "Immediate legal review",
                                ],
                                [
                                    "🔴 High Risk",
                                    "Credit scoring, insurance pricing, hiring AI, biometric systems, critical infrastructure",
                                    "Technical documentation, conformity assessment (mostly self-assessment), human oversight mechanisms, bias testing, EU database registration, post-market monitoring",
                                    "6–10 weeks (mature org) / 3–4 months (average org) / longer if paying down pre-existing technical debt",
                                ],
                                [
                                    "🟡 Limited Risk",
                                    "Chatbots, deepfakes, AI-generated content",
                                    "Transparency disclosures to users",
                                    "2–4 weeks",
                                ],
                                [
                                    "🟢 Minimal Risk",
                                    "Spam filters, recommendation engines (most cases)",
                                    "No mandatory obligations",
                                    "N/A",
                                ],
                            ]}
                        />

                        <CalloutBox type="warning">
                            <strong>The key insight on High-Risk timelines:</strong> If it takes your organisation 6–9
                            months to comply, the EU AI Act is not the cause. Poor model documentation, absent human
                            oversight design, and missing evaluation pipelines are the cause. Good AI engineering
                            practice is what makes compliance fast. The Act just makes the gap visible.
                        </CalloutBox>
                        <CalloutBox type="warning">
                            <strong>Enforcement deadline:</strong> High-Risk AI system obligations become enforceable{" "}
                            <span className="text-amber-300 font-bold">August 2026</span>. For FS firms with credit
                            scoring, insurance pricing, or hiring AI systems — start now.
                        </CalloutBox>
                    </SectionCard>

                    {/* ── 10. Real Bottlenecks ── */}
                    <SectionCard>
                        <H2 icon={AlertTriangle}>The Real Bottlenecks Across All Four Frameworks</H2>
                        <Para>
                            The timelines above assume implementation complexity is the primary constraint. In most
                            enterprises, it is not. The actual bottlenecks are:
                        </Para>
                        <BulletList
                            items={[
                                "<strong>Internal stakeholder alignment</strong> — getting Legal, Risk, Engineering, and Product aligned on the same priorities. This is a politics problem, not a technical one, and it does not appear on any implementation plan.",
                                "<strong>AI inventory discovery</strong> — most organisations do not know all the AI systems running across their business. Shadow AI is real and pervasive. Discovery always takes longer than expected.",
                                "<strong>Auditor availability</strong> — ISO 42001-certified auditors are scarce. Being implementation-ready does not mean being audit-ready immediately.",
                                "<strong>Board bandwidth</strong> — OECD and NIST GOVERN functions require genuine board engagement. Scheduling and executive attention are the constraint, not the content.",
                            ]}
                        />
                        <CalloutBox type="warning">
                            <strong>The hidden cost that never appears in any framework document:</strong> Internal
                            opportunity cost. Every hour a product manager spends in a governance workshop is an hour
                            not spent building product. Every engineer pulled into documentation is not shipping code.
                            Acknowledge this upfront with leadership rather than discovering it mid-programme.
                        </CalloutBox>
                    </SectionCard>

                    {/* ── 11. Five Anti-Patterns ── */}
                    <SectionCard>
                        <H2 icon={AlertTriangle}>What Goes Wrong: Five Anti-Patterns to Avoid</H2>
                        <Para>
                            After advising enterprises across multiple geographies on AI governance implementations,
                            the same failure modes appear repeatedly.
                        </Para>

                        <div className="mt-6 space-y-5">
                            {[
                                {
                                    num: "01",
                                    title: "Certificate Theater",
                                    color: "from-red-500/20 to-red-400/5 border-red-500/30",
                                    titleColor: "text-red-400",
                                    body: "Organisations pursue ISO 42001 certification before building actual governance substance. They hire a consultant, produce the required documentation, pass the audit — and then file the certificate and change nothing operationally. The management system exists on paper; AI risk is still managed ad hoc.",
                                    tell: "When you ask an engineer \"what's your AI risk register entry for this model?\" and they look at you blankly. Certification without culture is theater.",
                                },
                                {
                                    num: "02",
                                    title: "Treating EU AI Act as an IT Problem",
                                    color: "from-amber-500/20 to-amber-400/5 border-amber-500/30",
                                    titleColor: "text-amber-400",
                                    body: "The EU AI Act obligations sound technical, so they get delegated to engineering. But the EU AI Act is fundamentally a business risk and legal compliance problem. The decisions about which systems to deploy, how to document intended purpose, how to design human oversight workflows — these are product, legal, and risk decisions, not just engineering tasks.",
                                    tell: null,
                                },
                                {
                                    num: "03",
                                    title: "Using NIST AI RMF as a One-Time Assessment",
                                    color: "from-orange-500/20 to-orange-400/5 border-orange-500/30",
                                    titleColor: "text-orange-400",
                                    body: "NIST AI RMF is not a maturity assessment you do once and frame on the wall. Its GOVERN-MAP-MEASURE-MANAGE structure is designed as a continuous cycle. Organisations that run it as a point-in-time exercise miss entirely the MEASURE and MANAGE functions — which is where the actual risk reduction happens.",
                                    tell: "\"We did our NIST assessment last year.\" If that sentence ends there, the program isn't working.",
                                },
                                {
                                    num: "04",
                                    title: "Dismissing OECD Principles as 'Just Guidelines'",
                                    color: "from-yellow-500/20 to-yellow-400/5 border-yellow-500/30",
                                    titleColor: "text-yellow-400",
                                    body: "The EU AI Act, the U.S. AI Executive Order, the UK AI Principles, and the Singapore FEAT framework all explicitly draw from OECD thinking — dismissing the source while trying to comply with the derivatives is backwards. When regulators ask \"what values underpin your AI governance program?\" a board-level policy anchored in OECD Principles is a far stronger answer than silence.",
                                    tell: null,
                                },
                                {
                                    num: "05",
                                    title: "Treating Governance as a Pre-Deployment Checklist",
                                    color: "from-purple-500/20 to-purple-400/5 border-purple-500/30",
                                    titleColor: "text-purple-400",
                                    body: "Perhaps the most pervasive mistake: AI governance is treated as a gate — something you do before you launch a model — rather than a lifecycle discipline. Models drift. Data distributions shift. Regulatory requirements evolve. A governance program that ends at deployment is not a governance program. It's a launch ritual.",
                                    tell: "Build for the lifecycle, not the launch.",
                                },
                            ].map((ap) => (
                                <div key={ap.num} className={`rounded-xl border bg-gradient-to-br p-5 ${ap.color}`}>
                                    <div className="flex items-start gap-4">
                                        <span className={`text-3xl font-black opacity-40 ${ap.titleColor} leading-none mt-1`}>{ap.num}</span>
                                        <div className="flex-1">
                                            <h3 className={`text-base font-bold mb-2 ${ap.titleColor}`}>Anti-Pattern {ap.num}: {ap.title}</h3>
                                            <p className="text-gray-300 text-sm leading-relaxed">{ap.body}</p>
                                            {ap.tell && (
                                                <p className="mt-3 text-sm italic text-gray-400 border-l-2 border-white/20 pl-3">
                                                    <strong className="text-white not-italic">The tell:</strong> {ap.tell}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionCard>

                    {/* ── 12. Accountability Map ── */}
                    <SectionCard>
                        <H2 icon={Layers}>Who Owns What? Clarifying the Accountability Map</H2>
                        <Para>
                            One of the most common sources of governance program failure isn't lack of knowledge —
                            it's lack of ownership. When everyone is responsible, no one is.
                        </Para>

                        <StyledTable
                            headers={["Framework", "Primary Owner", "Day-to-Day Lead", "Supporting Functions"]}
                            rows={[
                                ["OECD AI Principles", "Board / CEO", "Chief AI Officer", "Ethics Council, Legal, Communications"],
                                ["NIST AI RMF", "Chief AI Officer", "AI Risk Lead", "All AI product teams, Risk, Engineering"],
                                ["ISO 42001", "Chief AI Officer", "AI Governance Manager", "Risk, Legal, Engineering, Audit"],
                                ["EU AI Act", "Chief Compliance Officer / General Counsel", "AI Act Programme Manager", "CAIO, CTO, Product, Data Science"],
                            ]}
                        />

                        <Divider />
                        <p className="text-white font-semibold mb-3">Key tension points to manage:</p>
                        <BulletList
                            items={[
                                "<strong>CAIO vs. CCO:</strong> On the EU AI Act, there is often a genuine jurisdictional tension between the Chief AI Officer and the Chief Compliance Officer. Resolve this with a RACI before the programme starts, not during an audit.",
                                "<strong>Legal vs. Engineering:</strong> Technical documentation under the EU AI Act requires deep collaboration between legal (who understands what regulators want to see) and engineering (who understands what the system actually does).",
                                "<strong>Risk vs. Product on AI Inventory:</strong> The MAP function of NIST AI RMF requires a comprehensive AI inventory. Frame it as a product risk tool — not a compliance exercise — to get buy-in.",
                                "<strong>Board Engagement:</strong> The OECD Principles and the GOVERN function of NIST AI RMF both require board-level engagement with AI risk. The CAIO's job is to change the framing from strategic opportunity to governance responsibility.",
                            ]}
                        />
                    </SectionCard>

                    {/* ── 13. Tooling Reality ── */}
                    <SectionCard>
                        <H2 icon={BookOpen}>Frameworks Don't Run Themselves: The Tooling Reality</H2>
                        <Para>
                            A governance framework without tooling is a policy document. It describes what should
                            happen; it doesn't make it happen. As you operationalize the framework stack, here is
                            the tooling landscape to be aware of.
                        </Para>

                        <div className="mt-5 grid sm:grid-cols-2 gap-4">
                            {[
                                {
                                    title: "AI Inventory & Cataloguing",
                                    color: "border-cyan-500/30 bg-cyan-500/5",
                                    headColor: "text-cyan-400",
                                    body: "Before you can govern your AI systems, you need to know what you have. Tools like IBM OpenPages, ServiceNow AI Governance, and Credo AI provide AI system registries that feed directly into your NIST MAP function and ISO 42001 asset management requirements.",
                                },
                                {
                                    title: "Model Risk & Bias Monitoring",
                                    color: "border-purple-500/30 bg-purple-500/5",
                                    headColor: "text-purple-400",
                                    body: "For ongoing MEASURE and MANAGE functions — and for EU AI Act post-market monitoring obligations — you need model observability. Fiddler AI, Arize, WhyLabs, and Azure ML's responsible AI dashboard all provide drift detection, bias monitoring, and explainability tooling that maps to framework requirements.",
                                },
                                {
                                    title: "GRC Platform Extensions",
                                    color: "border-indigo-500/30 bg-indigo-500/5",
                                    headColor: "text-indigo-400",
                                    body: "Enterprise GRC platforms are being rapidly extended for AI governance. ServiceNow, MetricStream, and OneTrust all have AI governance modules that allow you to manage AI risk alongside your existing enterprise risk framework — particularly valuable for ISO 42001 integration with existing ISMS.",
                                },
                                {
                                    title: "Assessment Workbooks",
                                    color: "border-emerald-500/30 bg-emerald-500/5",
                                    headColor: "text-emerald-400",
                                    body: "For organisations not yet ready for enterprise tooling, structured Excel-based assessment workbooks — covering NIST AI RMF readiness scoring, ISO 42001 gap analysis, and EU AI Act risk classification — provide a practical starting point.",
                                },
                            ].map((tool) => (
                                <div key={tool.title} className={`rounded-xl border p-4 ${tool.color}`}>
                                    <h3 className={`font-semibold mb-2 text-sm ${tool.headColor}`}>{tool.title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">{tool.body}</p>
                                </div>
                            ))}
                        </div>

                        <CalloutBox type="insight">
                            <strong>The honest caveat:</strong> No tool substitutes for governance judgment. Buy tools
                            to scale your governance capacity, not to replace it.
                        </CalloutBox>
                    </SectionCard>

                    {/* ── 14. How Frameworks Relate ── */}
                    <SectionCard>
                        <H2 icon={Globe}>How the Four Frameworks Relate to Each Other</H2>
                        <Para>
                            These frameworks are not siloed — they reference and reinforce each other in important ways.
                        </Para>
                        <div className="mt-4 space-y-3 text-gray-300 text-sm leading-relaxed">
                            <p>
                                The <span className="text-cyan-300 font-semibold">OECD AI Principles</span> are the
                                philosophical foundation. The EU AI Act explicitly draws from them. NIST AI RMF's GOVERN
                                function echoes OECD themes of accountability and transparency. ISO 42001's ethical use
                                clauses map to OECD human-centred values.
                            </p>
                            <p>
                                <span className="text-purple-300 font-semibold">NIST AI RMF and ISO 42001</span> are
                                operationally the closest pair. NIST provides the risk vocabulary; ISO 42001 provides
                                the management system structure. Many organisations use NIST to design their AI risk
                                approach and ISO 42001 to systematize and certify it.
                            </p>
                            <p>
                                <span className="text-amber-300 font-semibold">EU AI Act and ISO 42001</span> are
                                increasingly being positioned as complementary. ISO 42001 certification is widely
                                expected to serve as evidence of good governance practice — particularly for the
                                conformity assessment process for High-Risk AI systems.
                            </p>
                        </div>

                        <p className="mt-5 text-white font-semibold mb-3">Think of it as a layered architecture:</p>
                        <StyledTable
                            headers={["Layer", "Framework", "Primary Role"]}
                            rows={[
                                ["Values & Policy Direction", "OECD AI Principles", "Philosophical foundation, board-level AI governance charter"],
                                ["Legal Obligations", "EU AI Act", "Risk-tiered legal obligations (ban / conform / disclose)"],
                                ["Management System", "ISO 42001", "External certification, management system structure and continual improvement"],
                                ["Operational Risk Practice", "NIST AI RMF", "Internal risk culture, day-to-day AI risk management, continuous programme"],
                            ]}
                        />
                    </SectionCard>

                    {/* ── 15. Who Should Default to Which ── */}
                    <SectionCard>
                        <H2 icon={CheckCircle2}>Who Should Default to Which?</H2>

                        <StyledTable
                            headers={["Scenario", "Recommended Starting Point"]}
                            rows={[
                                ["U.S. federal contractor or supplier", "NIST AI RMF"],
                                ["EU-regulated financial institution", "EU AI Act + ISO 42001"],
                                ["Global enterprise with multi-jurisdiction presence", "All four — layered approach"],
                                ["Early-stage startup building AI trust narrative", "ISO 42001 + OECD Principles"],
                                ["Large enterprise with existing ISO certifications", "ISO 42001 (leverage existing ISMS)"],
                                ["Internal AI governance program, no external mandate", "NIST AI RMF"],
                                ["FinTech/InsurTech selling to enterprise clients globally", "NIST + ISO 42001 + EU AI Act awareness"],
                                ["Board-level AI ethics charter", "OECD AI Principles"],
                            ]}
                        />
                    </SectionCard>

                    {/* ── 16. Practical Sequencing ── */}
                    <SectionCard>
                        <H2 icon={Layers}>The Practical Sequencing Strategy</H2>
                        <Para>
                            For most global enterprises, the optimal path is not 'pick one' — it's a deliberate
                            sequencing:
                        </Para>

                        <div className="mt-5 space-y-4">
                            {[
                                {
                                    phase: "Phase 1",
                                    label: "Foundation",
                                    timeline: "Months 1–3",
                                    color: "from-cyan-500 to-cyan-400",
                                    bg: "border-cyan-500/30 bg-cyan-500/5",
                                    desc: "Adopt the OECD AI Principles as the values layer. Draft your AI ethics policy and board-level AI governance charter anchored in them.",
                                },
                                {
                                    phase: "Phase 2",
                                    label: "Operationalize",
                                    timeline: "Months 3–9",
                                    color: "from-purple-500 to-purple-400",
                                    bg: "border-purple-500/30 bg-purple-500/5",
                                    desc: "Implement NIST AI RMF to build your internal AI risk management capability. Conduct AI inventory, risk categorization, and impact assessments. Build the muscle before the certification.",
                                },
                                {
                                    phase: "Phase 3",
                                    label: "Systematize",
                                    timeline: "Months 9–18",
                                    color: "from-indigo-500 to-indigo-400",
                                    bg: "border-indigo-500/30 bg-indigo-500/5",
                                    desc: "Map your NIST work to ISO 42001 clauses and build the management system scaffolding. Pursue certification once the substance is operational.",
                                },
                                {
                                    phase: "Phase 4",
                                    label: "Comply",
                                    timeline: "Ongoing",
                                    color: "from-emerald-500 to-emerald-400",
                                    bg: "border-emerald-500/30 bg-emerald-500/5",
                                    desc: "Run EU AI Act compliance in parallel for any AI systems in scope. Use your ISO 42001 documentation as a head start for technical documentation requirements.",
                                },
                            ].map((p, i) => (
                                <div key={p.phase} className={`rounded-xl border p-5 flex gap-4 items-start ${p.bg}`}>
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex flex-col items-center justify-center flex-shrink-0 text-white`}>
                                        <span className="text-xs font-bold opacity-80">{p.phase}</span>
                                        {/* <span className="text-[10px] opacity-60">{i + 1}</span> */}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="text-white font-bold">{p.label}</span>
                                            <span className="text-xs text-gray-400 bg-white/10 px-2 py-0.5 rounded-full">{p.timeline}</span>
                                        </div>
                                        <p className="text-gray-300 text-sm leading-relaxed">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionCard>

                    {/* ── 17. The Horizon ── */}
                    <SectionCard>
                        <H2 icon={Globe}>The Horizon: What's Changing in the Next 18 Months</H2>

                        <div className="space-y-5 mt-2">
                            {[
                                {
                                    fw: "NIST AI RMF",
                                    sub: "Agentic AI Coverage",
                                    color: "text-cyan-400",
                                    border: "border-l-cyan-400",
                                    desc: "The original AI RMF was designed primarily for predictive and generative AI systems. The rapid emergence of agentic AI — autonomous systems that plan, act, and self-correct across extended tasks — creates governance challenges that the current framework doesn't fully address. NIST has signalled that updated guidance covering agentic AI, including multi-agent systems, is in development.",
                                },
                                {
                                    fw: "ISO 42001",
                                    sub: "Sector-Specific Extensions",
                                    color: "text-purple-400",
                                    border: "border-l-purple-400",
                                    desc: "ISO is developing sector-specific application guidance for 42001, including extensions for financial services, healthcare, and public sector. These will provide more prescriptive implementation guidance for high-stakes domains — reducing the interpretive burden that currently makes ISO 42001 implementation feel ambiguous in regulated industries.",
                                },
                                {
                                    fw: "EU AI Act",
                                    sub: "Enforcement Ramp",
                                    color: "text-amber-400",
                                    border: "border-l-amber-400",
                                    desc: "The EU AI Act's phased enforcement timeline means that while the prohibited AI practices ban was effective February 2025, High-Risk AI system obligations become enforceable in August 2026. That deadline is closer than it appears. Many organisations that have been watching and waiting need to begin compliance programmes now to avoid a last-minute scramble.",
                                },
                                {
                                    fw: "UK AI Regulation",
                                    sub: "",
                                    color: "text-indigo-400",
                                    border: "border-l-indigo-400",
                                    desc: "The UK government has deliberately taken a pro-innovation, sector-led approach to AI regulation. However, the AI Safety Institute and the FCA's growing AI supervisory activity suggest that while the UK won't pass prescriptive AI legislation soon, regulatory expectations are hardening in practice.",
                                },
                                {
                                    fw: "Singapore and UAE",
                                    sub: "Rising Standards",
                                    color: "text-emerald-400",
                                    border: "border-l-emerald-400",
                                    desc: "Both the MAS in Singapore and the CBUAE/DFSA in the UAE are actively raising their AI governance expectations. For FS firms with APAC and Gulf operations, these markets are moving faster than many Western compliance teams realise.",
                                },
                            ].map((item) => (
                                <div key={item.fw} className={`border-l-4 pl-4 ${item.border}`}>
                                    <h3 className={`font-semibold text-sm mb-1 ${item.color}`}>
                                        {item.fw}{item.sub ? ` — ${item.sub}` : ""}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <CalloutBox type="insight">
                            <strong>The Meta-Trend: From Voluntary to Mandatory.</strong> The most important trend
                            across all jurisdictions is the steady migration from voluntary frameworks to binding
                            regulation. What NIST AI RMF describes voluntarily today, a U.S. AI Act may mandate
                            tomorrow. The organisations that invest in genuine governance capability now will face
                            far lower compliance costs when that shift happens.
                        </CalloutBox>
                    </SectionCard>

                    {/* ── 18. Bottom Line ── */}
                    <SectionCard>
                        <H2 icon={CheckCircle2}>The Bottom Line</H2>
                        <Para>
                            The question isn't which framework is better — it's which combination solves your problem
                            at your current stage.
                        </Para>

                        <div className="mt-5 grid sm:grid-cols-2 gap-3">
                            {[
                                { p: "If your board is asking", q: "\"How do we manage AI risk responsibly?\"", a: "Start with NIST AI RMF", color: "border-cyan-500/40 bg-cyan-500/8", qc: "text-cyan-300", ac: "text-cyan-400" },
                                { p: "If your customers are asking", q: "\"Can you prove it?\"", a: "You need ISO 42001", color: "border-purple-500/40 bg-purple-500/8", qc: "text-purple-300", ac: "text-purple-400" },
                                { p: "If your lawyers are asking", q: "\"Are we compliant?\"", a: "You must address the EU AI Act", color: "border-amber-500/40 bg-amber-500/8", qc: "text-amber-300", ac: "text-amber-400" },
                                { p: "If your policy team is asking", q: "\"Are we aligned with global norms?\"", a: "Anchor in the OECD AI Principles", color: "border-emerald-500/40 bg-emerald-500/8", qc: "text-emerald-300", ac: "text-emerald-400" },
                            ].map((item) => (
                                <div key={item.q} className={`rounded-xl border p-4 ${item.color}`}>
                                    <p className={`text-sm italic mb-2 ${item.qc}`}>{item.p} {item.q}</p>
                                    <p className={`text-sm font-bold ${item.ac}`}>→ {item.a}</p>
                                </div>
                            ))}
                        </div>

                        <Divider />
                        <Para>
                            The companies that get this right won't treat frameworks as compliance checkboxes. They'll
                            treat them as the <span className="text-white font-semibold">architecture of trust</span> —
                            layered, complementary, and strategically sequenced. In the age of AI, trust is the most
                            defensible competitive advantage. These four frameworks, used together, are how you build it.
                        </Para>
                    </SectionCard>

                    {/* ── 19. Next Steps CTA ── */}
                    <SectionCard>
                        <H2 icon={Shield}>Your Next Step: Don't Boil the Ocean</H2>
                        <Para>
                            If this article has done its job, you're now thinking about your own framework stack —
                            where you are, where the gaps are, and what to prioritise.
                        </Para>

                        <div className="mt-5 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/5 p-5">
                            <h3 className="text-white font-bold mb-3">Do this in the next two weeks:</h3>
                            <Para>
                                Run a rapid AI inventory. List every AI system your organisation currently deploys or
                                is building. For each one, answer three questions:{" "}
                                <span className="text-cyan-300">What decisions does it influence?</span>{" "}
                                <span className="text-cyan-300">Who is affected?</span>{" "}
                                <span className="text-cyan-300">Is it in scope for the EU AI Act?</span>
                            </Para>
                            <p className="text-gray-400 text-sm italic mt-3">
                                That exercise alone will tell you more about your governance priorities than any
                                framework document.
                            </p>
                        </div>

                        <div className="mt-4 rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-indigo-500/5 p-5">
                            <h3 className="text-white font-bold mb-3">For a structured assessment:</h3>
                            <Para>
                                A formal NIST AI RMF Readiness Assessment — covering all four functions across your AI
                                portfolio — typically takes{" "}
                                <span className="text-purple-300 font-semibold">4–6 weeks</span> and gives you a
                                scored baseline, a gap analysis, and a prioritised roadmap. It's the most efficient
                                entry point into the framework stack for most enterprises.
                            </Para>
                        </div>

                        <CalloutBox type="success">
                            If you found this useful, share it with your risk, legal, or AI team. The best AI
                            governance programmes start with a shared vocabulary — and that's exactly what this
                            article is designed to build.
                        </CalloutBox>
                    </SectionCard>

                </div>
            </section>

            {/* ── BACK BUTTON ── */}
            <section className="pb-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <button
                            onClick={() => navigate("/insights/blog")}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-white font-semibold hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300"
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
