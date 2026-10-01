import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Briefcase, Building2, Sparkles, Database, BarChart3, ArrowRight, CheckCircle2, TrendingUp, Target } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import SectionHeader from "./SectionHeader";

const services = [
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Consulting, delivery, and managed services for complex change—operating model design, roadmap, vendor selection, and execution at pace.",
    cta: "Consult now",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconGradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.5)",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    detailedDescription: "We partner with asset managers and financial institutions to design and execute complex transformation programs that deliver measurable business outcomes.",
    keyDifferentiators: [
      "20+ years combined experience in investment operations",
      "Proven frameworks for operating model transformation",
      "End-to-end delivery from strategy to execution",
      "Risk-managed approach with built-in controls"
    ],
    potentialOutcomes: [
      "30-40% reduction in operational costs",
      "Accelerated time-to-market for new products",
      "Improved regulatory compliance and risk management",
      "Enhanced operational resilience and scalability"
    ]
  },
  {
    icon: Building2,
    title: "Financial Services",
    description: "Solutions tailored to asset owners, institutional managers, insurers, private markets, and wealth—target ops, compliance, reporting, and servicing.",
    cta: "Consult now",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconGradient: "from-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.5)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    detailedDescription: "Domain-specific solutions that address the unique challenges of different financial services segments, from front office trading to back office operations.",
    keyDifferentiators: [
      "Deep expertise across asset classes and segments",
      "Regulatory compliance embedded in every solution",
      "Integration with major platforms and vendors",
      "Best-practice workflows and templates"
    ],
    potentialOutcomes: [
      "Faster trade settlement and reconciliation",
      "Real-time compliance monitoring and reporting",
      "Improved client service and satisfaction",
      "Reduced operational and regulatory risk"
    ]
  },
  {
    icon: Sparkles,
    title: "AI Engineering",
    description: "GenAI advisory, model & agent engineering, LLM applications, platform integration, and governance to ship safe, useful AI.",
    cta: "Start an AI pilot",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconGradient: "from-violet-500 to-purple-500",
    glowColor: "rgba(139, 92, 246, 0.5)",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    detailedDescription: "We help you harness the power of AI and GenAI with responsible, governed implementations that deliver real business value without compromising security or compliance.",
    keyDifferentiators: [
      "Production-ready AI solutions, not just proofs of concept",
      "Built-in governance, security, and explainability",
      "Integration with existing systems and workflows",
      "Continuous model monitoring and improvement"
    ],
    potentialOutcomes: [
      "35% faster research and analysis workflows",
      "Automated document processing and extraction",
      "Enhanced investment decision support",
      "Improved client engagement through AI-powered insights"
    ]
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Modern data architecture, ingestion, quality and lineage, lakehouse/mesh, and self-healing DataOps to make data AI-ready.",
    cta: "Assess your data",
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconGradient: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.5)",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    detailedDescription: "Build a modern data foundation that supports analytics, AI, and operational excellence with automated quality controls and self-healing capabilities.",
    keyDifferentiators: [
      "Cloud-native architecture with proven scalability",
      "Automated data quality and lineage tracking",
      "Real-time and batch processing capabilities",
      "AI-ready data pipelines and feature stores"
    ],
    potentialOutcomes: [
      "90% reduction in data quality issues",
      "Real-time data availability for decision-making",
      "50% faster time-to-insight for analytics",
      "Foundation for advanced AI and ML applications"
    ]
  },
  {
    icon: BarChart3,
    title: "Analytics & Data Science",
    description: "BI modernization, semantic layers, predictive models, MLOps, and decision dashboards that drive front-line actions.",
    cta: "See a demo",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconGradient: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.5)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    detailedDescription: "Transform your analytics from passive reporting to active decision intelligence with embedded ML, real-time insights, and action-oriented interfaces.",
    keyDifferentiators: [
      "Self-service analytics with governed access",
      "Predictive models integrated into workflows",
      "Real-time dashboards and alerting",
      "MLOps for continuous model improvement"
    ],
    potentialOutcomes: [
      "60% faster decision-making cycles",
      "Increased adoption of analytics across teams",
      "Predictive insights driving proactive actions",
      "Measurable ROI from data-driven decisions"
    ]
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.85,
    rotateX: -15
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.8,
    }
  }
};

export default function ServiceCards() {
  const [selectedService, setSelectedService] = useState(null);
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.2, 1, 1, 0.2]);

  return (
    <>
      <section ref={ref} className="section-shell relative bg-[#05060F] overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-72 h-72 bg-[#6B3FFF] rounded-full blur-[160px] opacity-20"
          style={{ y: y1, opacity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#00D4FF] rounded-full blur-[180px] opacity-20"
          style={{ y: y2, opacity }}
        />

        <div className="relative section-inner z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            className="max-w-3xl mx-auto"
          >
            {/* Section header "Precision services for every change program" removed as requested - service cards still display below */}
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{
                    scale: 1.05,
                    y: -15,
                    z: 50,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }
                  }}
                  onClick={() => setSelectedService(service)}
                  className={`group relative rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl cursor-pointer overflow-hidden`}
                  style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d"
                  }}
                >
                  {/* Base gradient background */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.02]" />
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`} />

                  {/* Animated glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${service.glowColor} 0%, transparent 70%)`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 pointer-events-none"
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, ${service.glowColor} 50%, transparent 70%)`,
                      backgroundSize: '200% 200%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="relative z-10 p-8">
                    <motion.div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.iconGradient} mb-6 shadow-lg relative`}
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent blur-md"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                      />
                      <Icon className="w-7 h-7 text-white relative z-10" />
                    </motion.div>
                    <motion.h3
                      className="text-xl font-bold text-white mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.05 + 0.3,
                        duration: 0.6,
                        ease: [0.43, 0.13, 0.23, 0.96]
                      }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-300 mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.05 + 0.4,
                        duration: 0.8
                      }}
                    >
                      {service.description}
                    </motion.p>
                    <motion.button
                      type="button"
                      onClick={(event) => event.stopPropagation()}
                      whileHover={{ x: 5 }}
                      className="btn-inline"
                    >
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.p
            className="text-center text-gray-400 mt-12 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
          >
            Need a combined program? We blend services into one plan with milestones and KPIs.
          </motion.p>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
            <DialogContent className="bg-gradient-to-br from-[#1A1F2E] to-[#0C1117] border-white/10 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${selectedService.iconGradient} shadow-lg`}>
                      <selectedService.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] bg-clip-text text-transparent">
                        {selectedService.title}
                      </DialogTitle>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {selectedService.detailedDescription}
                  </p>
                </motion.div>
              </DialogHeader>

              <motion.div
                className="mt-6 space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {/* Key Differentiators */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="w-5 h-5 text-[#00D4FF]" />
                    <h3 className="text-xl font-bold text-white">Key Differentiators</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedService.keyDifferentiators.map((diff, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm leading-relaxed">{diff}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Potential Outcomes */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-[#00D4FF]" />
                    <h3 className="text-xl font-bold text-white">Potential Outcomes</h3>
                  </div>
                  <div className="space-y-3">
                    {selectedService.potentialOutcomes.map((outcome, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-[#0070CC]/10 to-transparent border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-[#00D4FF] rounded-full flex-shrink-0 mt-2" />
                        <span className="text-gray-300 leading-relaxed">{outcome}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button
                    onClick={() => {
                      setSelectedService(null);
                      setTimeout(() => {
                        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                      }, 300);
                    }}
                    className="btn-primary w-full justify-center py-5 text-lg"
                  >
                    {selectedService.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    onClick={() => setSelectedService(null)}
                    variant="ghost"
                    className="btn-primary w-full justify-center py-5 text-lg"
                  >
                    Close
                  </Button>
                </motion.div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
