import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const phases = [
  {
    title: "Decide",
    tagline: "Strategic Intent",
    blurb: "What should we do, and why does it matter? We identify where impact truly matters, focusing on the highest-ROI moves aligned with your strategic goals.",
    bullets: [
      "Portfolio heatmap + value cases",
      "Control & compliance checklist",
      "Decision-ready roadmap",
      "Stakeholder alignment in weeks"
    ],
    gradient: ["#00D4FF", "#47E2FF"],
    progress: 0.33,
    ticks: 0
  },
  {
    title: "Govern",
    tagline: "Control by Design",
    blurb: "How do we ensure trust, accountability, and compliance? We execute with governance built in from day one, ensuring responsible and compliant delivery.",
    bullets: [
      "Built-in governance framework",
      "Release gates + evidence packs",
      "Live dashboards on progress",
      "Risk + compliance guardrails"
    ],
    gradient: ["#6B3FFF", "#B06BF3"],
    progress: 0.66,
    ticks: 12
  },
  {
    title: "Perform",
    tagline: "Sustained Outcomes",
    blurb: "How do we embed this into daily operations? We transition into a measurable operating model that sustains performance without losing momentum.",
    bullets: [
      "Runbooks + training loops",
      "Health metrics + SLAs",
      "Continuous improvement backlog",
      "Optimization roadmap"
    ],
    gradient: ["#06B6D4", "#8DEBFF"],
    progress: 0.95,
    ticks: 36
  }
];

const ORB_SIZE = 210;
const ORB_RADIUS = 82;
const CIRCUMFERENCE = 2 * Math.PI * ORB_RADIUS;

const polarToCartesian = (radius, angleDeg) => {
  const angle = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: ORB_SIZE / 2 + radius * Math.cos(angle),
    y: ORB_SIZE / 2 + radius * Math.sin(angle),
  };
};

export default function ProcessSteps() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="process" className="section-shell bg-[#05060F] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-20 left-32 w-80 h-80 bg-[#3E2D7C] rounded-full blur-[160px]" />
        <div className="absolute top-1/3 right-16 w-96 h-96 bg-[#0C8BD9] rounded-full blur-[180px]" />
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-[#00D4FF] rounded-full blur-[220px]" />
      </div>

      <div className="relative z-10 section-inner lg:w-4/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            eyebrow="Our delivery approach"
            title="Decide. Govern. Perform"
            subtitle="We identify where impact truly matters, execute with governance built in from day one, and transition into a measurable operating model that sustains performance without losing momentum."
          />
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {phases.map((phase, index) => (
            <PhaseOrb
              key={phase.title}
              phase={phase}
              index={index}
              isActive={activeIndex === index}
              onHover={() => setActiveIndex(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function PhaseOrb({ phase, index, isActive, onHover }) {
  const gradientId = `phase-gradient-${index}`;
  const arcLength = CIRCUMFERENCE * phase.progress;
  const handleAngle = phase.progress * 360;
  const handlePosition = polarToCartesian(ORB_RADIUS, handleAngle);

  return (
    <motion.button
      type="button"
      onMouseEnter={onHover}
      onFocus={onHover}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-[36px] border transition-all duration-500 text-left isolate ${isActive
        ? "border-white/30 bg-white/[0.04] shadow-[0_25px_70px_rgba(0,0,0,0.6)]"
        : "border-white/5 bg-white/[0.01]"
        }`}
    >
      <div className="absolute inset-3 rounded-[30px] bg-gradient-to-b from-white/5 to-transparent blur-2xl opacity-40" />
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-10">
        <div className="relative w-full flex justify-center">
          <svg width={ORB_SIZE} height={ORB_SIZE} viewBox={`0 0 ${ORB_SIZE} ${ORB_SIZE}`}>
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={phase.gradient[0]} />
                <stop offset="100%" stopColor={phase.gradient[1]} />
              </linearGradient>
            </defs>
            <circle
              cx={ORB_SIZE / 2}
              cy={ORB_SIZE / 2}
              r={ORB_RADIUS}
              className="fill-none stroke-white/10"
              strokeWidth="1.5"
            />
            <circle
              cx={ORB_SIZE / 2}
              cy={ORB_SIZE / 2}
              r={ORB_RADIUS - 25}
              className="fill-none stroke-white/5"
              strokeWidth="1"
            />
            {phase.ticks > 0 && (
              <TickRing tickCount={phase.ticks} radius={ORB_RADIUS} />
            )}
            <motion.circle
              cx={ORB_SIZE / 2}
              cy={ORB_SIZE / 2}
              r={ORB_RADIUS}
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${arcLength} ${CIRCUMFERENCE}`}
              strokeDashoffset={CIRCUMFERENCE - arcLength}
              transform={`rotate(-90 ${ORB_SIZE / 2} ${ORB_SIZE / 2})`}
              initial={{ strokeDasharray: `0 ${CIRCUMFERENCE}` }}
              whileInView={{ strokeDasharray: `${arcLength} ${CIRCUMFERENCE}` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <circle
              cx={handlePosition.x}
              cy={handlePosition.y}
              r="8"
              fill="#05060F"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
        </div>
        <div className="text-center space-y-2 sm:space-y-3 px-2 sm:px-4">
          <p className="text-[10px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/40">{`Phase 0${index + 1}`}</p>
          <h3 className="text-xl sm:text-2xl font-semibold text-white">{phase.title}</h3>
          <p className="text-white/60 text-xs sm:text-sm font-medium">{phase.tagline}</p>
          {isActive && (
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed pt-1 sm:pt-2">{phase.blurb}</p>
          )}
        </div>
      </div>
    </motion.button>
  );
}

function TickRing({ tickCount, radius }) {
  const ticks = Array.from({ length: tickCount });
  return (
    <g>
      {ticks.map((_, index) => {
        const angle = (360 / tickCount) * index;
        const inner = polarToCartesian(radius - 10, angle);
        const outer = polarToCartesian(radius - 2, angle);
        return (
          <line
            key={index}
            x1={inner.x}
            y1={inner.y}
            x2={outer.x}
            y2={outer.y}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={index % 3 === 0 ? 2 : 1}
          />
        );
      })}
    </g>
  );
}
