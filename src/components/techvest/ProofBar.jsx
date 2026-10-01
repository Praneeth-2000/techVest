import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    label: "TEAM STRENGTH",
    value: 90,
    suffix: "+",
    unit: "members",
    description: "Expert Practitioners with AI and Deep Experience across Investment Management Front, Middle and Back office Applications and Business workflows.",
    gradient: "from-purple-900/40 via-purple-800/30 to-purple-900/40"
  },
  {
    label: "ENGAGEMENTS",
    value: 65,
    suffix: "+",
    unit: "clients",
    description: "Projects/Program – Successfully transformation and implementations across investment asset management, Insurance, Retail, Private Equity and Wealth Management clients.",
    gradient: "from-indigo-900/40 via-indigo-800/30 to-indigo-900/40"
  },
  {
    label: "Client Success Rate",
    value: 100,
    suffix: "%",
    unit: "success rate",
    description: "100% success rate in implementation of AI and Investment programs, projects and Investment Operations",
    gradient: "from-blue-900/40 via-blue-800/30 to-blue-900/40"
  },
  {
    label: "GLOBAL PRESENCE",
    value: 6,
    suffix: "",
    unit: "offices",
    description: "Strategic locations across major financial hubs enabling 24/7 support and local expertise.",
    gradient: "from-slate-900/40 via-slate-800/30 to-slate-900/40"
  },
];

function Counter({ end, duration = 2, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setHasAnimated(true)}
    >
      {prefix}{count}{suffix}
    </motion.div>
  );
}

export default function ProofBar() {
  return (
    <section className="relative overflow-hidden bg-[#05050B] py-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(98,0,234,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(0,212,255,0.3),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5/0 via-white/5/5 to-white/0 opacity-50" />
      </div>

      <div className="relative z-10 section-inner">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`relative group rounded-[24px] overflow-hidden border border-white/10 bg-gradient-to-b from-[#12131C] via-[#0C0D15] to-[#06070C] shadow-[0_25px_60px_rgba(2,2,8,0.7)] min-h-[340px] flex flex-col`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: index * 0.1,
                duration: 0.6
              }}
              whileHover={{ y: -10, scale: 1.01 }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(133,92,248,0.15), rgba(0,212,255,0.08) 60%, transparent)"
                }}
              />

              <div className="relative z-10 p-8 flex flex-col h-full gap-4">
                <motion.div
                  className="text-[11px] tracking-[0.45em] text-white/45 mb-7"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {stat.label}
                </motion.div>

                <motion.div
                  className="mb-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <div className="text-5xl font-semibold text-white mb-2">
                    <Counter
                      end={stat.value}
                      prefix={stat.prefix || ""}
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </div>
                  <div className="text-2xl font-light text-white/80">
                    {stat.unit}
                  </div>
                </motion.div>

                <motion.p
                  className="text-sm text-white/70 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {stat.description}
                </motion.p>
              </div>

              <div className="pointer-events-none absolute inset-0 border border-white/5 rounded-[24px]" style={{ mixBlendMode: "screen", opacity: 0.15 }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
