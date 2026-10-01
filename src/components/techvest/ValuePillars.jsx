import React, { useState } from "react";
import { Target, Shield, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const blocks = [
  {
    icon: Target,
    headline: "Outcome Driven Delivery",
    subheadline: "Work anchored in measurable progress, not activity.",
    points: [
      "Success metrics defined upfront to align teams on what truly matters",
      "Delivery cycles structured to demonstrate visible progress at every stage",
      "Continuous feedback loops that adapt solutions to evolving business needs",
      "A focus on meaningful impact, ensuring every effort drives real results",
    ],
    accent: "#00D4FF",
  },
  {
    icon: Shield,
    headline: "Governed Intelligence",
    subheadline: "AI that operates with clarity, boundaries, and accountability.",
    points: [
      "Decision frameworks that define when and how AI should be applied responsibly",
      "Guardrails that ensure consistent, predictable behavior across varied conditions",
      "Data practices that reinforce privacy, lineage, and responsible use",
      "Oversight mechanisms that keep humans informed, empowered, and in control",
    ],
    accent: "#6B3FFF",
  },
  {
    icon: GitBranch,
    headline: "Structured Evolution",
    subheadline: "A clear path for teams to modernize without disruption.",
    points: [
      "Transformation roadmaps that break change into manageable, predictable phases",
      "Modular components that let organizations modernize at their own pace",
      "Repeatable patterns that reduce uncertainty and accelerate delivery",
      "Support models that help teams sustain momentum long after launch",
    ],
    accent: "#06B6D4",
  },
];

const DomainIllustration = () => (
  <motion.svg
    viewBox="0 0 220 220"
    className="w-full max-w-[220px]"
    initial={{ opacity: 0.8 }}
    animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.04, 1] }}
    transition={{ duration: 4, repeat: Infinity }}
  >
    <circle cx="110" cy="110" r="80" className="fill-none stroke-white/15" strokeWidth="1" />
    {[0, 72, 144].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x = 110 + Math.cos(rad) * 70;
      const y = 110 + Math.sin(rad) * 70;
      return (
        <g key={angle}>
          <motion.circle
            cx={x}
            cy={y}
            r="10"
            stroke="#6366F1"
            strokeWidth="2"
            fill="transparent"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: angle / 100 }}
          />
          <motion.line
            x1="110"
            y1="110"
            x2={x}
            y2={y}
            stroke="#6366F1"
            strokeWidth="1"
            strokeDasharray="5 4"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </g>
      );
    })}
    <motion.circle
      cx="110"
      cy="110"
      r="22"
      fill="#6366F1"
      fillOpacity="0.35"
      animate={{ r: [18, 26, 18], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 2.8, repeat: Infinity }}
    />
  </motion.svg>
);

const AiIllustration = () => (
  <motion.svg
    viewBox="0 0 220 220"
    className="w-full max-w-[220px]"
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    <defs>
      <radialGradient id="aiGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="110" cy="110" r="60" fill="url(#aiGlow)" />
    {[20, 45, 70].map((r, idx) => (
      <motion.circle
        key={r}
        cx="110"
        cy="110"
        r={r}
        fill="none"
        stroke="#8B5CF6"
        strokeOpacity={0.4 - idx * 0.08}
        strokeWidth="1.4"
        strokeDasharray="4 6"
        animate={{ strokeDashoffset: [0, 80] }}
        transition={{ duration: 4 + idx, repeat: Infinity, ease: "linear" }}
      />
    ))}
    {[0, 120, 240].map((angle, idx) => {
      const rad = (angle * Math.PI) / 180;
      const x = 110 + Math.cos(rad) * 80;
      const y = 110 + Math.sin(rad) * 80;
      return (
        <motion.circle
          key={angle}
          cx={x}
          cy={y}
          r="6"
          fill="#8B5CF6"
          fillOpacity="0.8"
          animate={{ r: [4, 7, 4], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 1.8 + idx * 0.5, repeat: Infinity }}
        />
      );
    })}
  </motion.svg>
);

const PredictableIllustration = () => (
  <svg viewBox="0 0 220 220" className="w-full max-w-[220px]">
    {[0, 1, 2, 3].map((level) => (
      <motion.rect
        key={level}
        x={40 + level * 20}
        y={110 - level * 20}
        width={110 - level * 10}
        height="18"
        rx="9"
        fill="#06B6D4"
        fillOpacity={0.2 + level * 0.15}
        animate={{ opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 2.2, repeat: Infinity, delay: level * 0.4 }}
      />
    ))}
    <motion.path
      d="M50 150 Q110 60 170 100"
      fill="none"
      stroke="#06B6D4"
      strokeWidth="3"
      strokeDasharray="6 8"
      animate={{ strokeDashoffset: [0, -60] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
    <motion.circle
      cx="170"
      cy="100"
      r="8"
      fill="#06B6D4"
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </svg>
);

const illustrations = [DomainIllustration, AiIllustration, PredictableIllustration];

function PillarIllustration({ activeIndex }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {illustrations.map((Illustration, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: activeIndex === index ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="absolute"
        >
          <Illustration />
        </motion.div>
      ))}
    </div>
  );
}

function GradientPanel({ activeIndex }) {
  return (
    <div className="relative w-full min-h-[520px] lg:min-h-[65vh] rounded-[36px] border border-white/10 bg-gradient-to-br from-[#221144] via-[#090B18] to-[#030307] shadow-[0_45px_100px_rgba(3,6,24,0.85)] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(107,63,255,0.5),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.4),transparent_60%)]" />
      </div>
      <div className="absolute inset-10 rounded-[28px] border border-white/15 opacity-60" />
      <div className="absolute inset-16 rounded-[32px] bg-gradient-to-br from-transparent via-[#ffffff12] to-transparent blur-3xl" />
      <PillarIllustration activeIndex={activeIndex} />
    </div>
  );
}

function PillarCard({ block, isActive, style }) {
  const Icon = block.icon;

  return (
    <motion.div
      className="absolute inset-0 rounded-[28px] border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(3,5,18,0.7)] space-y-4 sm:space-y-6 min-h-[520px] lg:min-h-[65vh] flex flex-col justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      style={style}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: `${block.accent}1A` }}
        >
          <Icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: block.accent }} />
        </div>
        <div>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.45em] text-white/45">{block.headline}</p>
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mt-1 sm:mt-2">{block.subheadline}</h3>
        </div>
      </div>

      <div className="space-y-2 sm:space-y-3">
        {block.points.map((point, index) => (
          <div key={index} className="flex items-start gap-2 sm:gap-3 text-white/80">
            <span className="mt-1.5 sm:mt-2 inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: block.accent }} />
            <p className="leading-relaxed text-sm sm:text-base">{point}</p>
          </div>
        ))}
      </div>

    </motion.div>
  );
}

export default function ValuePillars() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="why" className="section-shell relative bg-[#05060F] overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-10 left-1/3 w-96 h-96 bg-[#6B3FFF] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-[#00D4FF] rounded-full blur-[220px]" />
      </div>

      <div className="relative z-10 section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <SectionHeader
            eyebrow="Our value pillars"
            title="Why partner with TechVest Global"
            subtitle="We combine deep domain expertise with cutting-edge technology to deliver measurable business outcomes."
          />
        </motion.div>

        <div className="mt-16 flex flex-col lg:flex-row gap-10 items-start">
          <div className="lg:w-2/5 w-full lg:sticky top-24 self-start h-[520px] lg:h-[65vh]">
            <GradientPanel activeIndex={activeIndex} />
          </div>
          <div className="lg:w-3/5 w-full flex gap-6 lg:gap-10 items-center">
            <div className="flex-1">
              <div className="relative min-h-[520px] lg:min-h-[65vh]">
                {blocks.map((block, index) => (
                  <PillarCard
                    key={block.headline}
                    block={block}
                    isActive={activeIndex === index}
                    style={{ pointerEvents: activeIndex === index ? "auto" : "none" }}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              {blocks.map((block, index) => (
                <button
                  key={`${block.headline}-dot`}
                  onClick={() => setActiveIndex(index)}
                  className="relative group focus-visible:outline-none"
                  aria-label={`Show ${block.headline} pillar`}
                >
                  <span
                    className={`block rounded-full transition-all duration-300 border border-white/30 ${activeIndex === index ? "h-4 w-4 bg-white" : "h-3 w-3 bg-white/20 group-hover:bg-white/40"
                      }`}
                    style={{ boxShadow: activeIndex === index ? `0 0 15px ${block.accent}` : "none" }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
