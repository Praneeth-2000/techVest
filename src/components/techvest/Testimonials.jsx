import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    id: 1,
    name: "Dhiman",
    title: "Front Office - Technology Manager",
    company: "Investment Management",
    quote: "Working with TechVest was refreshing. They understand the investment lifecycle inside-out and delivered a robust OMS integration ahead of schedule. True partners, not just vendors.",
    rating: 5,
  },
  {
    id: 2,
    name: "George",
    title: "AVP, Enterprise AI & Data Governance",
    company: "Retail",
    quote: "The AI Governance and Data Governance platform they built transformed how we make decisions. Real-time dashboards with embedded ML models have given us predictive insights. ROI was evident within the first quarter.",
    rating: 5,
  },
  {
    id: 3,
    name: "Paul Q",
    title: "Director",
    company: "Investment Mgmt.",
    quote: "Working with TechVest was excellent. TechVest Experience in Investment Management Applications and Testing expertise helped in successfully implementation and maintenance of Front, Middle and Back office applications.",
    rating: 5,
  },
  {
    id: 4,
    name: "David S",
    title: "Director Asset Management",
    company: "Asset Management",
    quote: "TechVest Team have been integral part of successful implementation of Front Middle and Back office applications SimCorp, Charles River, Markit EDM, Calypso, Eagle PACE, Aladdin, eFront and Performance applications .",
    rating: 5,
  },
  {
    id: 5,
    name: "Mike J",
    title: "SimCorp - Transformation Leader",
    company: "Investment Management",
    quote: "TechVest Global Leadership and Team have vast experience and expertise in Investment Management applications and business processes. TechVest Team have successfully implemented SimCorp Dimension - ABOR, IBOR and Blackrock Aladdin in our past and current programs.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, []);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const getNeighbor = (offset) => {
    const idx = (currentIndex + offset + testimonials.length) % testimonials.length;
    return testimonials[idx];
  };

  return (
    <section id="testimonials" ref={ref} className="section-shell bg-gradient-to-b from-[#1A1F2E] to-[#0C1117] relative overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#0070CC] rounded-full blur-[150px] opacity-10"
        style={{ y }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#6B3FFF] rounded-full blur-[130px] opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            className="mb-16"
            title={(
              <>
                What our {" "}
                <span className="bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] bg-clip-text text-transparent">
                  clients say
                </span>
              </>
            )}
            subtitle="Real results from real partnerships across asset management and financial services"
          />
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 30 },
                opacity: { duration: 0.25 },
                scale: { duration: 0.25 },
              }}
              className="rounded-[32px] border border-white/15 bg-white/[0.03] p-10 backdrop-blur-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0070CC]/15 via-transparent to-[#6B3FFF]/15" />
              <div className="relative z-10 flex flex-col gap-6">
                <Quote className="w-14 h-14 text-[#00D4FF] opacity-50" />
                <p className="text-2xl lg:text-3xl text-white leading-relaxed font-light">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div>
                    <p className="text-white text-lg font-semibold">{testimonials[currentIndex].name}</p>
                    <p className="text-[#00D4FF] text-sm font-medium">{testimonials[currentIndex].title}</p>
                    <p className="text-white/60 text-sm">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <motion.button
                onClick={() => paginate(-1)}
                className="btn-circle"
                whileHover={{ scale: 1.05, x: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5 mx-auto" />
              </motion.button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => paginate(index - currentIndex)}
                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                      ? "w-8 bg-gradient-to-r from-[#0070CC] to-[#00D4FF]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
              <motion.button
                onClick={() => paginate(1)}
                className="btn-circle"
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5 mx-auto" />
              </motion.button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-left">
              {[1, 2, 3].map((offset) => {
                const neighbor = getNeighbor(offset);
                return (
                  <motion.div
                    key={neighbor.id}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 0.8, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm uppercase tracking-[0.3em] text-white/40">Next up</p>
                    <p className="text-white font-medium">{neighbor.name}</p>
                    <p className="text-white/60 text-sm">{neighbor.company}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
