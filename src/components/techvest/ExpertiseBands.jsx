import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Layers, Archive, Database as DatabaseIcon, Briefcase, RefreshCw } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "./SectionHeader";

const expertise = [
  {
    icon: TrendingUp,
    title: "Front Office",
    description: "OMS, compliance rules, performance & risk.",
    link: "/service/front-office"
  },
  {
    icon: Layers,
    title: "Middle Office",
    description: "Post-trade, OTC, reference data, IBOR, collateral, attribution, reporting.",
    link: "/service/middle-office"
  },
  {
    icon: Archive,
    title: "Back Office",
    description: "Custody, fund/insurance accounting, valuation, AML/KYC, regulatory.",
    link: "/service/back-office"
  },
  {
    icon: DatabaseIcon,
    title: "Data Management",
    description: "Governance, architecture, information delivery, BI with AI.",
    link: "/service/data-management"
  },
  {
    icon: Briefcase,
    title: "Alternative Ops",
    description: "Hedge/FOF, PE, structured loans, real estate.",
    link: "/service/alternative-operations"
  },
  {
    icon: RefreshCw,
    title: "Outsourcing",
    description: "End-to-end and component transitions; provider onboarding.",
    link: "/service/outsourcing"
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

const item = {
  hidden: {
    opacity: 0,
    x: -40,
    rotateY: -20,
    scale: 0.9
  },
  show: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      mass: 0.8,
    }
  }
};

export default function ExpertiseBands() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section id="expertise" ref={ref} className="section-shell bg-[#0C1117] relative overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#0070CC] rounded-full blur-[120px] opacity-10"
        style={{ y, opacity }}
      />

      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="mb-16"
        >
          <SectionHeader
            title={(
              <>
                Where we {" "}
                <span className="bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] bg-clip-text text-transparent">
                  specialize
                </span>
              </>
            )}
          />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(0, 212, 255, 0.5)",
                  boxShadow: "0 20px 40px rgba(0, 112, 204, 0.3)",
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 20
                  }
                }}
                style={{ perspective: "1000px" }}
              >
                <Link
                  to={item.link}
                  className="group p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 transition-all duration-500 relative block cursor-pointer"
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#0070CC]/0 to-[#6B3FFF]/0 group-hover:from-[#0070CC]/10 group-hover:to-[#6B3FFF]/10 transition-all duration-500 pointer-events-none"
                    style={{ filter: "blur(20px)" }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <Icon className="w-8 h-8 text-[#00D4FF] mb-4" />
                    </motion.div>
                    <motion.h3
                      className="text-lg font-bold text-white mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.05 + 0.2,
                        duration: 0.6
                      }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-400 text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.05 + 0.3,
                        duration: 0.8
                      }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6B3FFF]/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </section>
  );
}
