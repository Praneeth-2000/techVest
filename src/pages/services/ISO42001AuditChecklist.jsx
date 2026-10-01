import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ClipboardCheck, AlertTriangle, XCircle, CheckCircle, Circle, Save, BarChart3, Mail, X, Download } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import * as XLSX from 'xlsx';

// Checklist data structure
const checklistData = [
    {
        clause: "4 - Context of Organization",
        checkpoints: [
            { id: "4.1.1", name: "Internal AI Issues", question: "Are internal AI-related issues (strategy, capability, culture) identified?", evidence: "SWOT/PESTLE analysis; AI Strategy document; Internal risk register", assessment: "Yes" },
            { id: "4.1.2", name: "External AI Issues", question: "Are external AI-related issues (regulatory, societal, market) identified?", evidence: "AI Regulatory landscape report; Legal compliance registry", assessment: "Yes" },
            { id: "4.2.1", name: "Stakeholder Identification", question: "Are stakeholders affected by AI systems identified and documented?", evidence: "Stakeholder Register (listing users, developers, affected parties)", assessment: "Yes" },
            { id: "4.2.2", name: "Stakeholder Expectations", question: "Are stakeholder expectations and obligations assessed?", evidence: "SLA reviews; Documented stakeholder requirements/obligations", assessment: "Partial" },
            { id: "4.3.1", name: "AIMS Scope", question: "Is the AIMS scope formally documented and approved?", evidence: "Formally approved Scope Statement document", assessment: "Yes" },
            { id: "4.4.1", name: "AI Inventory", question: "Is an inventory of AI systems maintained and current?", evidence: "Master AI Asset Register (listing models, purpose, and owners)", assessment: "Yes" }
        ]
    },
    {
        clause: "5 - Leadership",
        checkpoints: [
            { id: "5.1.1", name: "Management Accountability", question: "Has top management demonstrated accountability for the AIMS?", evidence: "Management review minutes; Budget approvals; Org charts", assessment: "Yes" },
            { id: "5.1.2", name: "AI Governance Integration", question: "Is AI governance integrated into enterprise governance structures?", evidence: "AI Committee Terms of Reference (ToR); Board meeting notes", assessment: "Yes" },
            { id: "5.2.1", name: "AI Policy", question: "Is there an approved and communicated AI policy?", evidence: "Formally signed AI Policy; Proof of staff communication", assessment: "Yes" },
            { id: "5.3.1", name: "Roles & Responsibilities", question: "Are AI roles, responsibilities, and authorities clearly defined?", evidence: "Job descriptions for AI roles (e.g., AI Officer, ML Engineer)", assessment: "Yes" }
        ]
    },
    {
        clause: "6 - Planning",
        checkpoints: [
            { id: "6.1.1", name: "Risk Identification", question: "Are AI risks systematically identified prior to deployment?", evidence: "AI Risk Assessment reports; Risk identification methodology", assessment: "Partial" },
            { id: "6.1.2", name: "Risk Categorization", question: "Are AI risks categorized (bias, transparency, security, drift)?", evidence: "Risk Register showing categories for bias, security, and drift", assessment: "Partial" },
            { id: "6.1.3", name: "Risk Treatment", question: "Are risk treatment actions defined and implemented?", evidence: "Risk Treatment Plan (RTP) showing mitigation actions", assessment: "Yes" },
            { id: "6.2.1", name: "AI Objectives", question: "Are AI objectives defined and measurable?", evidence: "Documented AIMS objectives/KPIs (e.g., 99% uptime, <1% drift)", assessment: "Yes" },
            { id: "6.3.1", name: "Change Management", question: "Are changes to AI systems assessed for risk impact?", evidence: "Change Request logs; Impact analysis for model updates", assessment: "Partial" }
        ]
    },
    {
        clause: "7 - Support",
        checkpoints: [
            { id: "7.1.1", name: "Resource Allocation", question: "Are sufficient resources allocated to operate the AIMS?", evidence: "Resource planning docs; GPU/Cloud budget; Staffing plan", assessment: "Yes" },
            { id: "7.2.1", name: "Competence", question: "Are AI personnel competent based on training and experience?", evidence: "CVs; Training certificates; AI competency matrix", assessment: "Yes" },
            { id: "7.3.1", name: "Awareness", question: "Are staff aware of AI policies and obligations?", evidence: "Attendance records from AI awareness sessions; Signed policies", assessment: "Yes" },
            { id: "7.4.1", name: "Communication", question: "Is AI-related communication defined internally and externally?", evidence: "External/Internal communication strategy; Stakeholder notices", assessment: "Partial" },
            { id: "7.5.1", name: "Document Control", question: "Is documented information controlled and maintained?", evidence: "Document Register; Version history records for all policies", assessment: "Yes" },
            { id: "7.5.2", name: "Data Governance", question: "Is data governance enforced for AI training and inference data?", evidence: "Data Management Policy; Data lineage diagrams", assessment: "Yes" },
            { id: "7.5.3", name: "Third-Party Services", question: "Are third-party AI services risk assessed and approved?", evidence: "Vendor Risk Assessments; AI-specific clauses in vendor EULAs", assessment: "Yes" }
        ]
    },
    {
        clause: "8 - Operation",
        checkpoints: [
            { id: "8.1.1", name: "AI Lifecycle", question: "Is there a defined AI system lifecycle?", evidence: "MLOps/SDLC workflow diagram; AI development SOPs", assessment: "Partial" },
            { id: "8.1.2", name: "Development Controls", question: "Are AI design and development activities controlled?", evidence: "Code review logs; Model architecture specs; Design sign-offs", assessment: "Partial" },
            { id: "8.2.1", name: "Human Oversight", question: "Are human oversight mechanisms defined and implemented?", evidence: "Human-in-the-Loop (HITL) procedures; Override logs", assessment: "Yes" },
            { id: "8.3.1", name: "Assumptions & Limitations", question: "Are AI system assumptions and limitations documented?", evidence: "Model Cards; Technical whitepapers listing constraints", assessment: "Partial" },
            { id: "8.4.1", name: "Validation", question: "Are AI systems validated before deployment?", evidence: "Validation/Test reports; UAT sign-offs; Accuracy metrics", assessment: "Yes" },
            { id: "8.5.1", name: "Operational Monitoring", question: "Are AI systems monitored during operation?", evidence: "Monitoring Dashboards (e.g., Grafana); Drift alerts; Uptime logs", assessment: "Yes" },
            { id: "8.6.1", name: "Decommissioning", question: "Is AI system decommissioning controlled and documented?", evidence: "Retirement procedure; Data deletion logs for retired models", assessment: "Not Applicable" }
        ]
    },
    {
        clause: "9 - Performance Evaluation",
        checkpoints: [
            { id: "9.1.1", name: "KPIs & Metrics", question: "Are AI KPIs and performance metrics defined?", evidence: "List of AI metrics (Precision, Recall, F1 score, Latency)", assessment: "Yes" },
            { id: "9.1.2", name: "Performance Monitoring", question: "Is AI system performance regularly monitored and reviewed?", evidence: "Monthly/Quarterly Performance Review Reports", assessment: "Yes" },
            { id: "9.2.1", name: "Incident Logging", question: "Are AI incidents logged, investigated, and escalated?", evidence: "Incident Management Log; Hallucination/Safety failure logs", assessment: "Partial" },
            { id: "9.2.2", name: "Corrective Actions", question: "Are corrective actions taken after incidents?", evidence: "Root Cause Analysis (RCA) reports; Remediation tickets", assessment: "Yes" },
            { id: "9.3.1", name: "Management Review", question: "Does management periodically review the AIMS?", evidence: "Management Review Meeting (MRM) agendas and minutes", assessment: "Yes" },
            { id: "9.3.2", name: "Review Inputs", question: "Are audit results and KPIs inputs to management review?", evidence: "Internal Audit Reports; KPI summary decks for management", assessment: "Yes" }
        ]
    },
    {
        clause: "10 - Improvement",
        checkpoints: [
            { id: "10.1.1", name: "Nonconformity Identification", question: "Are nonconformities identified and documented?", evidence: "Nonconformity Register; Audit finding trackers", assessment: "Yes" },
            { id: "10.1.2", name: "Root Cause Analysis", question: "Is root cause analysis performed for AI issues?", evidence: "RCA reports (Fishbone/5-Whys) for systemic issues", assessment: "Partial" },
            { id: "10.2.1", name: "CAPA Implementation", question: "Are corrective actions implemented and tracked?", evidence: "CAPA (Corrective Action) log showing status of implementation", assessment: "Yes" },
            { id: "10.3.1", name: "Continual Improvement", question: "Is continual improvement of the AIMS demonstrated?", evidence: "Service Improvement Plan (SIP); Evidence of model versioning", assessment: "Yes" }
        ]
    }
];

// Assessment options with icons
const assessmentOptions = [
    { value: "Yes", label: "✓ Yes", icon: "✓" },
    { value: "Partial", label: "⚠ Partial", icon: "⚠" },
    { value: "No", label: "✗ No", icon: "✗" },
    { value: "Not Applicable", label: "○ Not Applicable", icon: "○" }
];

// Assessment status styling
const getAssessmentStyle = (status) => {
    switch (status) {
        case "Yes":
            return "bg-emerald-50/10 border-2 border-emerald-500 text-emerald-400";
        case "Partial":
            return "bg-amber-50/10 border-2 border-amber-500 text-amber-400";
        case "No":
            return "bg-red-50/10 border-2 border-red-500 text-red-400";
        case "Not Applicable":
            return "bg-gray-50/10 border-2 border-gray-400 text-gray-400";
        default:
            return "bg-gray-50/10 border-2 border-gray-400 text-gray-400";
    }
};

// Assessment icon
const getAssessmentIcon = (status) => {
    switch (status) {
        case "Yes":
            return <CheckCircle className="w-4 h-4" />;
        case "Partial":
            return <AlertTriangle className="w-4 h-4" />;
        case "No":
            return <XCircle className="w-4 h-4" />;
        case "Not Applicable":
            return <Circle className="w-4 h-4" />;
        default:
            return <Circle className="w-4 h-4" />;
    }
};

export default function ISO42001AuditChecklist() {
    const [assessments, setAssessments] = useState(() => {
        const initial = {};
        checklistData.forEach(section => {
            section.checkpoints.forEach(checkpoint => {
                initial[checkpoint.id] = checkpoint.assessment;
            });
        });
        return initial;
    });


    const [showResults, setShowResults] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [customerEmail, setCustomerEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleAssessmentChange = (checkpointId, value) => {
        setAssessments(prev => ({
            ...prev,
            [checkpointId]: value
        }));
    };

    // Calculate readiness score
    const calculateReadinessScore = () => {
        const totalQuestions = Object.keys(assessments).filter(key => assessments[key] !== "Not Applicable").length;
        const totalYes = Object.values(assessments).filter(value => value === "Yes").length;
        const percentage = totalQuestions > 0 ? Math.round((totalYes / totalQuestions) * 100) : 0;

        return {
            totalYes,
            totalQuestions,
            percentage
        };
    };

    const handleAssessClick = () => {
        setShowResults(true);
        // Smooth scroll to results section
        setTimeout(() => {
            document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    };

    // Generate and Download Excel file
    const generateAndDownloadExcel = () => {
        const score = calculateReadinessScore();

        // Create workbook
        const wb = XLSX.utils.book_new();

        // Prepare data for Excel
        const excelData = [];

        // Add header row
        excelData.push(['CLAUSE', 'CHECKPOINT ID', 'CHECKPOINT NAME', 'AUDIT QUESTION', 'EVIDENCE REQUIRED', 'CLIENT ASSESSMENT']);

        // Add all checkpoint data
        checklistData.forEach(section => {
            section.checkpoints.forEach(checkpoint => {
                excelData.push([
                    checkpoint.id.split('.')[0],
                    checkpoint.id,
                    checkpoint.name,
                    checkpoint.question,
                    checkpoint.evidence,
                    assessments[checkpoint.id]
                ]);
            });
        });

        // Add spacing and summary
        excelData.push([]);
        excelData.push([]);
        excelData.push(['ASSESSMENT SUMMARY']);
        excelData.push(['Total Questions', score.totalQuestions]);
        excelData.push(['Total Yes Responses', score.totalYes]);
        excelData.push(['Readiness Score', `${score.percentage}%`]);
        excelData.push(['Customer Email', customerEmail]);
        excelData.push(['Submission Date', new Date().toLocaleDateString()]);

        // Create worksheet
        const ws = XLSX.utils.aoa_to_sheet(excelData);

        // Set column widths
        ws['!cols'] = [
            { wch: 10 }, { wch: 15 }, { wch: 30 },
            { wch: 60 }, { wch: 60 }, { wch: 20 }
        ];

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(wb, ws, 'ISO42001 Assessment');

        // Generate filename
        const fileName = `ISO42001_Assessment_${new Date().toISOString().split('T')[0]}.xlsx`;

        // Download the file
        XLSX.writeFile(wb, fileName);

        return fileName;
    };

    // Handle email submission
    const handleEmailSubmit = async (e) => {
        e.preventDefault();

        if (!customerEmail || !customerEmail.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);

        try {
            // Generate and download Excel file
            const fileName = generateAndDownloadExcel();
            const score = calculateReadinessScore();

            // Create email body
            const emailBody = `Dear TechVest Global Team,

I am submitting my ISO 42001 Audit Readiness Assessment for detailed analysis.

Assessment Summary:
- Total Questions: ${score.totalQuestions}
- Total Yes Responses: ${score.totalYes}
- Readiness Score: ${score.percentage}%
- Customer Email: ${customerEmail}
- Submission Date: ${new Date().toLocaleDateString()}

═══════════════════════════════════════════════
⚠️ IMPORTANT - PLEASE READ BEFORE SENDING ⚠️
═══════════════════════════════════════════════

The Excel file "${fileName}" has been downloaded automatically to your computer.

*** PLEASE ATTACH THIS FILE TO THIS EMAIL BEFORE SENDING ***

═══════════════════════════════════════════════

Best regards,
${customerEmail}`;

            // Open email client with pre-filled content
            const mailtoLink = `mailto:seshug362@gmail.com?subject=ISO 42001 Assessment Submission - ${customerEmail}&body=${encodeURIComponent(emailBody)}`;
            window.location.href = mailtoLink;

            // Show success
            setSubmitSuccess(true);
            setTimeout(() => {
                setShowEmailModal(false);
                setSubmitSuccess(false);
                setCustomerEmail("");
            }, 3000);

        } catch (error) {
            console.error('Error generating Excel:', error);
            alert('An error occurred while generating the Excel file. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white">
            <Navigation />

            {/* Hero Section */}
            <section className="section-shell relative overflow-hidden pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
                {/* Background Elements */}
                <div className="absolute top-10 right-5 sm:right-10 md:right-20 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-[#00D4FF] opacity-[0.15] blur-[60px] sm:blur-[90px] md:blur-[120px] rounded-full animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-[#6B3FFF] opacity-[0.12] blur-[80px] sm:blur-[100px] md:blur-[130px] rounded-full" />
                <div className="absolute top-40 right-8 sm:right-20 md:right-32 w-20 sm:w-28 md:w-40 h-20 sm:h-28 md:h-40 border border-cyan-400/30 rounded-full animate-pulse" />
                <div className="absolute bottom-1/2 left-4 sm:left-10 md:left-16 w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 border border-purple-400/20 rotate-45 animate-pulse" />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,212,255,0.15),_transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(107,63,255,0.15),_transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_0%,_rgba(10,10,15,0.4)_100%)]" />

                <div className="relative section-inner px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
                            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                                ISO/IEC 42011:2023
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-[#00D4FF] via-[#6B3FFF] to-[#00D4FF] bg-clip-text text-transparent animate-gradient">
                                Organizational Audit Readiness Assessment Checklist
                            </span>
                        </h1>

                        {/* Subtitle */}
                        {/* <div className="mb-4 sm:mb-6 md:mb-8">
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto px-4">
                                Complete the assessment by selecting the appropriate status for each checkpoint
                            </p>
                        </div> */}

                        {/* Breadcrumb */}
                        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm px-4">
                            <Link to="/" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">
                                Home
                            </Link>
                            <span className="text-gray-600">/</span>
                            <Link to="/services" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">
                                Services
                            </Link>
                            <span className="text-gray-600">/</span>
                            <Link to="/services/ai-governance" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300 hidden xs:inline">
                                AI Governance
                            </Link>
                            <span className="text-gray-600 hidden xs:inline">/</span>
                            <Link to="/services/ai-governance/iso-42001-readiness-assessment" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300 hidden sm:inline">
                                ISO Readiness
                            </Link>
                            <span className="text-gray-600 hidden sm:inline">/</span>
                            <span className="text-white font-medium text-center">Audit Checklist</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Checklist Section */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden py-10 sm:py-12 md:py-16">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "50px 50px, 100px 100px"
                }} />
                <div className="absolute top-1/4 -left-20 sm:-left-32 w-48 sm:w-64 h-48 sm:h-64 bg-purple-600/10 blur-[80px] sm:blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-20 sm:-right-32 w-56 sm:w-80 h-56 sm:h-80 bg-cyan-500/10 blur-[100px] sm:blur-[120px] rounded-full" />

                <div className="section-inner relative px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Stage-1 Title Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-8 bg-gradient-to-r from-[#5B6FD8] to-[#7B8CEB] rounded-t-xl overflow-hidden"
                        >
                            <div className="p-6 sm:p-8">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                                    ISO/IEC 42011:2023 Organizational Audit Readiness Assessment Checklist
                                </h2>
                                <p className="text-sm sm:text-base text-white/90 uppercase tracking-wide">
                                    Complete the assessment by selecting the appropriate status for each checkpoint
                                </p>
                            </div>
                        </motion.div>

                        {/* Desktop Table - Single Unified Table */}
                        <div className="hidden lg:block overflow-x-auto">
                            <motion.table
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="w-full border-collapse"
                            >
                                <thead>
                                    <tr className="bg-gradient-to-r from-[#1e3a8a] via-[#4338ca] to-[#1e3a8a]">
                                        <th className="border border-white/10 px-4 py-3 text-left text-sm font-semibold text-white">CLAUSE</th>
                                        <th className="border border-white/10 px-4 py-3 text-left text-sm font-semibold text-white">CHECKPOINT ID</th>
                                        <th className="border border-white/10 px-4 py-3 text-left text-sm font-semibold text-white">AUDIT QUESTION</th>
                                        <th className="border border-white/10 px-4 py-3 text-left text-sm font-semibold text-white">EVIDENCE REQUIRED</th>
                                        <th className="border border-white/10 px-4 py-3 text-left text-sm font-semibold text-white w-48">CLIENT ASSESSMENT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {checklistData.map((section, sectionIndex) => (
                                        <React.Fragment key={`section-${sectionIndex}`}>
                                            {/* Section Separator Row */}
                                            <tr className="bg-gradient-to-r from-emerald-900/40 via-teal-800/40 to-emerald-900/40">
                                                <td colSpan="5" className="border border-white/10 px-4 py-3 text-left text-sm font-bold text-white">
                                                    {section.clause}
                                                </td>
                                            </tr>
                                            {/* Section Checkpoints */}
                                            {section.checkpoints.map((checkpoint, checkpointIndex) => (
                                                <tr key={`${sectionIndex}-${checkpointIndex}`} className="hover:bg-white/[0.02] transition-colors duration-200">
                                                    <td className="border border-white/10 px-4 py-3 text-sm text-gray-300 font-mono">{checkpoint.id}</td>
                                                    <td className="border border-white/10 px-4 py-3 text-sm text-gray-300">{checkpoint.name}</td>
                                                    <td className="border border-white/10 px-4 py-3 text-sm text-gray-300">{checkpoint.question}</td>
                                                    <td className="border border-white/10 px-4 py-3 text-sm text-gray-400">{checkpoint.evidence}</td>
                                                    <td className="border border-white/10 px-4 py-3">
                                                        <select
                                                            value={assessments[checkpoint.id]}
                                                            onChange={(e) => handleAssessmentChange(checkpoint.id, e.target.value)}
                                                            className={`w-full px-3 py-2 rounded-lg ${getAssessmentStyle(assessments[checkpoint.id])} bg-transparent font-semibold text-sm cursor-pointer transition-all duration-200 hover:scale-[1.02] focus:outline-none`}
                                                        >
                                                            {assessmentOptions.map(option => (
                                                                <option key={option.value} value={option.value} className="bg-[#0B1025] text-white">
                                                                    {option.label}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </td>
                                                </tr>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </motion.table>
                        </div>

                        {/* Mobile Cards */}
                        <div className="lg:hidden space-y-6">
                            {checklistData.map((section, sectionIndex) => (
                                <div key={sectionIndex}>
                                    {/* Section Separator */}
                                    <div className="bg-gradient-to-r from-emerald-900/40 via-teal-800/40 to-emerald-900/40 border border-white/10 rounded-lg px-4 py-3 mb-4">
                                        <h3 className="text-base font-bold text-white">{section.clause}</h3>
                                    </div>

                                    {/* Section Checkpoints */}
                                    <div className="space-y-4">
                                        {section.checkpoints.map((checkpoint, checkpointIndex) => (
                                            <motion.div
                                                key={checkpointIndex}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: checkpointIndex * 0.05 }}
                                                className="border border-white/10 rounded-xl bg-white/[0.03] backdrop-blur-sm p-4"
                                            >
                                                <div className="flex items-start justify-between mb-3">
                                                    <span className="text-xs font-mono text-[#00D4FF] font-semibold">{checkpoint.id}</span>
                                                    <span className="text-xs text-gray-400">{checkpoint.name}</span>
                                                </div>

                                                <h4 className="text-sm font-semibold text-white mb-2">{checkpoint.question}</h4>

                                                <div className="mb-3">
                                                    <p className="text-xs text-gray-500 mb-1">Evidence Required:</p>
                                                    <p className="text-xs text-gray-400">{checkpoint.evidence}</p>
                                                </div>

                                                <div>
                                                    <p className="text-xs text-gray-500 mb-2">Assessment:</p>
                                                    <select
                                                        value={assessments[checkpoint.id]}
                                                        onChange={(e) => handleAssessmentChange(checkpoint.id, e.target.value)}
                                                        className={`w-full px-3 py-2 rounded-lg ${getAssessmentStyle(assessments[checkpoint.id])} bg-transparent font-semibold text-sm cursor-pointer transition-all duration-200 focus:outline-none`}
                                                    >
                                                        {assessmentOptions.map(option => (
                                                            <option key={option.value} value={option.value} className="bg-[#0B1025] text-white">
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Assess My Audit Readiness Button Section */}
            <section className="section-shell relative overflow-hidden py-8 sm:py-12">
                <div className="section-inner relative px-4 sm:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <button
                                onClick={handleAssessClick}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4F78FF] to-[#5B6FD8] text-white font-semibold text-lg rounded-xl hover:shadow-2xl hover:shadow-[#4F78FF]/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                            >
                                <Save className="w-5 h-5" />
                                Assess My Audit Readiness
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            {showResults && (
                <section id="results-section" className="section-shell relative overflow-hidden py-8 sm:py-12 bg-white/[0.02]">
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "50px 50px, 100px 100px"
                    }} />

                    <div className="section-inner relative px-4 sm:px-6">
                        <div className="max-w-4xl mx-auto">
                            {/* Results Calculation Display */}
                            {/* <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="mb-8 text-center"
                            >
                                <p className="text-gray-300 text-lg sm:text-xl font-semibold">
                                    {calculateReadinessScore().totalYes} Yes out of {calculateReadinessScore().totalQuestions} - {calculateReadinessScore().totalYes}/{calculateReadinessScore().totalQuestions} = {calculateReadinessScore().percentage}%
                                </p>
                            </motion.div> */}

                            {/* Readiness Score Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="max-w-md mx-auto"
                            >
                                <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 rounded-2xl p-8 sm:p-10 text-center shadow-xl border-4 border-blue-200/50">
                                    {/* Icon */}
                                    <div className="mb-4 flex justify-center">
                                        <BarChart3 className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" strokeWidth={2} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-sm sm:text-base font-semibold text-gray-600 uppercase tracking-wide mb-3">
                                        Your Audit Readiness Score
                                    </h3>

                                    {/* Percentage */}
                                    <div className="text-6xl sm:text-7xl font-bold text-gray-800 mb-2">
                                        {calculateReadinessScore().percentage}%
                                    </div>

                                    {/* Summary */}
                                    <p className="text-sm text-gray-600 mt-4">
                                        {calculateReadinessScore().totalYes} out of {calculateReadinessScore().totalQuestions} requirements met
                                    </p>
                                </div>
                            </motion.div>

                            {/* Submit for Detail Analysis Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="mt-8 text-center"
                            >
                                <button
                                    onClick={() => setShowEmailModal(true)}
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white font-semibold text-lg rounded-xl hover:shadow-2xl hover:shadow-[#00D4FF]/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                                >
                                    <Mail className="w-5 h-5" />
                                    Submit your assessment for Detail Analysis
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}

            {/* Email Modal */}
            {showEmailModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gradient-to-br from-[#0B1025] to-[#05040F] border border-white/10 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl"
                    >
                        {/* Close Button */}
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Submit Assessment</h3>
                            <button
                                onClick={() => setShowEmailModal(false)}
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {submitSuccess ? (
                            <div className="text-center py-8">
                                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                                <p className="text-lg text-green-400 font-semibold">Assessment Submitted Successfully!</p>
                                <p className="text-sm text-gray-400 mt-2">Check your email for confirmation.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleEmailSubmit}>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Enter your email address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={customerEmail}
                                        onChange={(e) => setCustomerEmail(e.target.value)}
                                        required
                                        placeholder="your.email@example.com"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 transition-all duration-200"
                                    />
                                </div>

                                <p className="text-xs text-gray-400 mb-6">
                                    Your assessment data will be sent to TechVest Global for detailed analysis. We'll send the results to your email address.
                                </p>

                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setShowEmailModal(false)}
                                        className="flex-1 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-200"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-1 px-6 py-3 bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] hover:shadow-lg hover:shadow-[#00D4FF]/40 text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>
            )}

            {/* Back to Readiness Assessment CTA */}
            {/* <section className="section-shell relative overflow-hidden py-12 sm:py-16">
                <div className="section-inner relative px-4 sm:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link
                                to="/services/ai-governance/iso-42001-readiness-assessment"
                                className="inline-block px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#00D4FF]/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                            >
                                ← Back to ISO 42001 Readiness Assessment
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section> */}

            <Footer />
        </div>
    );
}
