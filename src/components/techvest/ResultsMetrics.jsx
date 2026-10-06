import React from "react";
import { TrendingUp, Clock, DollarSign, Shield } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "./SectionHeader";

const metrics = [
  { 
    icon: TrendingUp, 
    value: 35, 
    suffix: "%", 
    label: "Faster workflows",
    description: "Cross-functional pods accelerate scenario modeling and research output across the investment lifecycle."
  },
  { 
    icon: Clock, 
    value: 50, 
    suffix: "%", 
    label: "Time to value",
    description: "Reference architectures and playbooks cut execution time in half for new product launches."
  },
  { 
    icon: DollarSign, 
    value: 40, 
    suffix: "%", 
    label: "Cost reduction",
    description: "Automation, data remediation, and managed services lower operational cost bases by double digits."
  },
  { 
    icon: Shield, 
    value: 99, 
    suffix: "%", 
    label: "Uptime SLA",
    description: "Telemetry-rich runbooks sustain mission-critical platforms with near-perfect availability."
  },
];

function Counter({ end, suffix = "", duration = 2 }) {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (!isVisible) return;
    
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
  }, [end, duration, isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
    >
      {count}{suffix}
    </motion.div>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    }
  }
};

export default function ResultsMetrics() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [120, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id="results" ref={ref} className="section-shell bg-[#05060F] relative overflow-hidden">
      <motion.div 
        className="absolute -top-20 left-40 w-96 h-96 bg-[#6B3FFF] rounded-full blur-[180px] opacity-20"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute top-1/3 right-24 w-[28rem] h-[28rem] bg-[#00D4FF] rounded-full blur-[220px] opacity-10"
        style={{ y: y2 }}
      />
      
      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            eyebrow="Proven results"
            title="Programs that ship measurable results"
            subtitle="Real metrics from real transformations across the investment lifecycle"
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  y: -10,
                  scale: 1.01,
                  boxShadow: "0 25px 60px rgba(8, 145, 178, 0.35)",
                  borderColor: "rgba(0, 212, 255, 0.4)"
                }}
                className="relative group rounded-[24px] overflow-hidden border border-white/10 bg-gradient-to-b from-[#12131C] via-[#0C0D15] to-[#06070C] text-left transition-colors duration-300"
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, rgba(133,92,248,0.15), rgba(0,212,255,0.08) 60%, transparent)"
                  }}
                />
                <div className="relative z-10 p-8 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] tracking-[0.45em] text-white/45">{metric.label}</p>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="text-5xl font-semibold text-white">
                    <Counter end={metric.value} suffix={metric.suffix} />
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed flex-grow">
                    {metric.description}
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 border border-white/5 rounded-[24px]" style={{ mixBlendMode: "screen", opacity: 0.15 }} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Case studies removed per request */}
      </div>
    </section>
  );
}
