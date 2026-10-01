import React from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";
import insightsContent from "@/content/insights";

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

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
    }
  })
};

const featuredInsights = insightsContent.slice(0, 3);

export default function InsightsCards() {

  return (
    <>
      <section id="insights" className="section-shell bg-[#0C1117] relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6B3FFF] rounded-full blur-[180px] opacity-10"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="section-inner relative z-10 lg:w-4/5">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <motion.div variants={textVariants} custom={0}>
              <SectionHeader
                title={(
                  <>
                    Latest {" "}
                    <span className="bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] bg-clip-text text-transparent">
                      insights
                    </span>
                  </>
                )}
                subtitle="Thought leadership on AI, data, and operations transformation"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {featuredInsights.map((insight) => (
              <motion.div
                key={insight.title}
                variants={item}
                whileHover={{ y: -10, boxShadow: "0 25px 60px rgba(8, 145, 178, 0.35)", borderColor: "rgba(0,212,255,0.4)" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl text-left flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white/80">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                      <Calendar className="w-3 h-3" />
                      {insight.date}
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                      <Clock className="w-3 h-3" />
                      {insight.readTime}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-white leading-snug">{insight.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{insight.excerpt}</p>
                  </div>
                  <Link
                    to={insight.link}
                    className="btn-inline mt-auto inline-flex items-center"
                  >
                    Read full insight
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link to="/insights/blog" className="btn-primary inline-flex">
              View all insights
            </Link>
          </motion.div>
        </div>
      </section>

    </>
  );
}
