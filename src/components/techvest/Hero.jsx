import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Briefcase,
  Shield,
  Database,
  Building2
} from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const pipelineCards = [
  {
    title: "AI Strategy & Roadmap Development",
    subtitle: "Strategic Planning & Assessment",
    description: "Overview: Define enterprise AI vision, prioritize high-impact use cases and deliver a phased, value-driven roadmap aligned to business goals, risk appetite, and operating maturity.\n\nKey Deliverables: AI Maturity Assessment, Capability Gap Analysis, Adoption Roadmap, Portfolio Prioritization Matrix, AI Use Case Blueprints, KPIs & value realization plan.",
    section: "#services",
    icon: Briefcase,
  },
  {
    title: "AI & Data Governance Foundations",
    subtitle: "Policies & Compliance Framework",
    description: "Overview: Establish a robust enterprise governance foundation for AI and data by defining policies, controls, accountability, and risk management mechanisms aligned to regulatory requirements, ethical principles, and organizational operating maturity.\n\nKey Deliverables: Enterprise AI Governance Framework (ISO42001, NIST AI RMF, AIDA, OECD AI), AI Policy Suite (Acceptable Use, Safety, Transparency, Human Oversight), Data Governance Policies, Data Stewardship Charter.",
    section: "#services",
    icon: Shield,
  },
  {
    title: "AI & Data Engineering",
    subtitle: "Platforms & Infrastructure",
    description: "Overview: Build enterprise-grade data and AI engineering foundations to support scalable, reliable, and governed AI systems from experimentation to production.\n\nKey Deliverables: Enterprise AI & Data Architecture Blueprint, Scalable Data & AI Platforms, Model Development and Deployment Pipelines, LLMOps Frameworks, Secure AI Runtime and Integration Services.",
    section: "#services",
    icon: Database,
  },
  {
    title: "Financial Services Foundations",
    subtitle: "Domain-Aligned Solutions",
    description: "Overview: Establish domain-aligned foundations that enable compliant, resilient, and scalable AI and data initiatives across financial services in regulatory, risk management and core business operating models.\n\nKey Deliverables: Financial-services domain architecture, regulatory and compliance baseline (risk, conduct, data protection), business process and control mapping (front, middle, back office).",
    section: "#services",
    icon: Building2,
  },
];

export default function Hero({ scrollY = 0 }) {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const [activePipeline, setActivePipeline] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 120 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    if (typeof navigator !== "undefined" && navigator.webdriver) return;
    const timer = setInterval(() => {
      setActivePipeline((prev) => (prev + 1) % pipelineCards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const parallaxShift = Math.min(scrollY * 0.08, 60);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F]"
      onMouseMove={handleMouseMove}
    >
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(107,63,255,0.35),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(14,165,233,0.35),_transparent_60%)]" />

      {/* Interactive cursor-following glow */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute pointer-events-none"
            style={{
              left: x,
              top: y,
              x: "-60%",
              y: "-60%",
            }}
          >
            <div className="w-[520px] h-[520px] bg-[#6B3FFF] rounded-full blur-[140px] opacity-25" />
          </motion.div>
          <motion.div
            className="absolute pointer-events-none"
            style={{
              left: x,
              top: y,
              x: "-30%",
              y: "-10%",
            }}
          >
            <div className="w-[360px] h-[360px] bg-[#00D4FF] rounded-full blur-[120px] opacity-20" />
          </motion.div>
        </>
      )}

      {/* Parallax gradient responding to scroll */}
      <motion.div
        className="absolute -right-20 top-0 w-1/2 h-full bg-gradient-to-b from-[#0ea5e9]/30 via-transparent to-transparent blur-[120px]"
        style={{ y: -parallaxShift }}
      />

      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="section-inner py-16 sm:py-20 lg:py-28">
          <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:gap-16">
            <div className="w-full lg:max-w-[640px] space-y-6 sm:space-y-8 text-left flex flex-col justify-center min-h-[320px]">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.6rem] font-semibold text-white leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Accelerating Responsible AI Adoption
              </motion.h1>

              <motion.div
                className="space-y-4 sm:space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                  TechVest Global is built to accelerate responsible, scalable, and high-trust adoption of AI, data, and digital transformation for organizations across sectors specifically focused on Investment Lifecycle.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg font-semibold text-white">TechVest Global provides:</p>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start gap-2 sm:gap-3 text-gray-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-2 sm:mt-2.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base"><strong className="text-white">Strategy & Governance</strong> (AI Strategy, Data Governance, Risk, Compliance & Ethics)</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3 text-gray-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-2 sm:mt-2.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base"><strong className="text-white">Enablement & Operating Model Design</strong> (Processes, Policies, Frameworks, PMO, Capability Building)</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3 text-gray-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-2 sm:mt-2.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base"><strong className="text-white">Implementation Support</strong> (Roadmaps, Tool Evaluation, Workflow Redesign, Proofs of Concept)</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3 text-gray-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-2 sm:mt-2.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base"><strong className="text-white">Upskilling & Organizational Change</strong> (Training, Leader Enablement, Workforce Integration)</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="pt-2 sm:pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Button
                  onClick={() => navigate("/contact")}
                  variant="ghost"
                  className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-white/15 bg-transparent px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium text-white hover:text-[#00D4FF] hover:border-[#00D4FF] hover:bg-transparent transition-all duration-300"
                >
                  Get started
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
            </div>

            <div className="w-full lg:max-w-[520px]">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {pipelineCards.map((card, index) => {
                  const Icon = card.icon;
                  const isActive = index === activePipeline;
                  return (
                    <motion.button
                      key={card.title}
                      onClick={() => {
                        setActivePipeline(index);
                        document.querySelector(card.section)?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full rounded-3xl border border-white/15 bg-white/[0.08] px-4 py-5 text-left backdrop-blur-xl transition"
                      animate={{
                        opacity: isActive ? 1 : 0.25,
                        scale: isActive ? 1 : 0.92,
                        y: (index - activePipeline) * 16,
                        filter: isActive ? "blur(0px)" : "blur(1.5px)",
                      }}
                      transition={{ type: "spring", stiffness: 240, damping: 30 }}
                      whileHover={{ scale: isActive ? 1.02 : 0.92 }}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                    >
                      <div className="flex items-center gap-3 text-white">
                        <div
                          className={`hidden sm:flex w-10 h-10 rounded-xl border items-center justify-center transition ${isActive
                            ? "border-[#00D4FF]/70 text-white shadow-[0_10px_20px_rgba(0,212,255,0.3)]"
                            : "border-white/15 text-white/60"
                            }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-[10px] uppercase tracking-[0.5em] text-white/40">{card.subtitle}</p>
                          <p className="text-lg font-semibold mb-2">{card.title}</p>
                          <div
                            className={`grid transition-[grid-template-rows] duration-500 ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                          >
                            <div className="overflow-hidden text-sm text-gray-300 leading-relaxed">
                              {card.description.split('\n\n').map((paragraph, idx) => (
                                <p key={idx} className={idx > 0 ? 'mt-3' : ''}>
                                  {paragraph.split(/(Overview:|Key Deliverables:)/).map((part, partIdx) => {
                                    if (part === 'Overview:' || part === 'Key Deliverables:') {
                                      return <strong key={partIdx} className="text-white font-semibold">{part}</strong>;
                                    }
                                    return part;
                                  })}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
