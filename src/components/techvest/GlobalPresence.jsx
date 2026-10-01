import React, { useMemo, useState } from "react";
import { MapPin, Globe, Users, Clock, TrendingUp, Phone, MapPinned } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import worldData from "@/data/world-110m.json";

const offices = [
  {
    name: "Canada",
    city: "Toronto",
    address: "1 Dundas Street W, Suite # 2500 Toronto, Ontario, M5G 1Z3 Canada",
    gradient: "from-blue-500 to-cyan-500",
    specialties: ["Asset Management", "Data Engineering", "AI Solutions"],
    label: "Corporate Office",
    timezone: "EST",
    phone: "+1 647-535-4940",
    description: "Hub for North American asset management transformation",
    coords: [-79.3832, 43.6532]
  },
  {
    name: "Canada",
    city: "Edmonton, Alberta",
    address: "10180 - 101 Street, Suite 3400, Edmonton, Alberta, T5J 3S4 Canada",
    gradient: "from-cyan-500 to-blue-600",
    specialties: ["Operations", "Analytics", "Technology Consulting"],
    label: "Regional Office",
    timezone: "MST",
    phone: "+1 647-535-4940",
    description: "Western Canada operations and delivery center",
    coords: [-113.4909, 53.5444]
  },
  {
    name: "USA",
    city: "Wilmington, DE",
    address: "913 N. Market Street, Suite 200 Wilmington, DE 19801 United States",
    gradient: "from-purple-500 to-pink-500",
    specialties: ["Front Office", "Operations", "Compliance"],
    label: "US Headquarters",
    timezone: "EST",
    phone: "+1 302-487-0449",
    description: "Financial services innovation center",
    coords: [-75.5467, 39.7459]
  },
  {
    name: "UAE",
    city: "Dubai",
    address: "Al Khaimah Building II Office 1F-50, AI Barsha First, Dubai, United Arab Emirates",
    gradient: "from-orange-500 to-red-500",
    specialties: ["Wealth Management", "Islamic Finance", "RegTech"],
    label: "Middle East Hub",
    timezone: "GST",
    phone: "+971 56-417-4556",
    description: "Gateway to Middle East financial markets",
    coords: [55.2962, 25.2769]
  },
  {
    name: "India",
    city: "Hyderabad",
    address: "RAM SVR, 2nd Floor HUDA Techno Enclave, Hitec City, Hyderabad, India - 500081",
    gradient: "from-green-500 to-emerald-500",
    specialties: ["Analytics", "Data Science", "Technology Delivery"],
    label: "Tech Delivery Center",
    timezone: "IST",
    phone: "+91 96424-44450",
    description: "Tech delivery and innovation powerhouse",
    coords: [78.4867, 17.385]
  },
  {
    name: "Malta",
    city: "San Gwann",
    address: "12, J.F Marks Street, San Gwann - Malta",
    gradient: "from-violet-500 to-purple-500",
    specialties: ["Alternative Assets", "Fund Services", "European Markets"],
    label: "European Office",
    timezone: "CET",
    phone: "+356 9999-9323",
    description: "European financial services expertise",
    coords: [14.4758, 35.9094]
  },
];

const stats = [
  { label: "Global Offices", value: "6", icon: Globe },
  { label: "Team Members", value: "90+", icon: Users },
  { label: "Follow-the-sun", value: "24/7", icon: Clock },
  { label: "Years Experience", value: "12+", icon: TrendingUp }
];

const keyLocations = [
  { name: "Toronto", coords: [-79.3832, 43.6532] },
  { name: "London", coords: [-0.1276, 51.5072] },
  { name: "Dubai", coords: [55.2962, 25.2769] },
  { name: "Hyderabad", coords: [78.4867, 17.385] },
  { name: "San Gwann", coords: [14.4758, 35.9094] },
  { name: "Edmonton", coords: [-113.4909, 53.5444] }
];

const AnimatedWorldMap = () => {
  const { paths, pulses, arcs } = useMemo(() => {
    const world = feature(worldData, worldData.objects.countries);
    const projection = geoMercator().scale(140).translate([450, 260]);
    const pathGenerator = geoPath(projection);

    const projectedPaths = world.features.map((feat, idx) => ({
      d: pathGenerator(feat),
      delay: (idx % 20) * 0.05
    }));

    const projectedLocations = keyLocations
      .map((location) => {
        const projected = projection(location.coords);
        return projected ? { ...location, x: projected[0], y: projected[1] } : null;
      })
      .filter(Boolean);

    const arcsData = projectedLocations.slice(0, 4).map((from, idx) => {
      const to = projectedLocations[(idx + 2) % projectedLocations.length];
      return {
        id: `${from?.name}-${to?.name}`,
        path: from && to
          ? `M ${from.x} ${from.y} Q ${(from.x + to.x) / 2} ${Math.min(from.y, to.y) - 60} ${to.x} ${to.y}`
          : null,
        delay: idx * 0.2
      };
    }).filter((arc) => arc.path);

    return { paths: projectedPaths, pulses: projectedLocations, arcs: arcsData };
  }, []);

  return (
    <motion.svg viewBox="0 0 900 500" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="tech-lines" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(59,130,246,0.5)" />
          <stop offset="100%" stopColor="rgba(14,165,233,0.2)" />
        </linearGradient>
      </defs>

      <g stroke="url(#tech-lines)" strokeWidth="0.6" opacity="0.5">
        {Array.from({ length: 30 }).map((_, idx) => (
          <line
            key={`v-${idx}`}
            x1={(idx + 1) * 30}
            y1="0"
            x2={(idx + 1) * 25}
            y2="500"
          />
        ))}
        {Array.from({ length: 12 }).map((_, idx) => (
          <line
            key={`h-${idx}`}
            x1="0"
            y1={(idx + 1) * 40}
            x2="900"
            y2={(idx + 1) * 38}
          />
        ))}
      </g>

      <g>
        {paths.map((shape, idx) => (
          <motion.path
            key={`country-${idx}`}
            d={shape.d}
            fill="rgba(17,24,39,0.6)"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="0.6"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, delay: shape.delay }}
          />
        ))}
      </g>

      <g>
        {arcs.map((arc) => (
          <motion.path
            key={arc.id}
            d={arc.path}
            fill="none"
            stroke="rgba(0,212,255,0.45)"
            strokeWidth="1.5"
            strokeDasharray="6 10"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.6, delay: arc.delay }}
          />
        ))}
      </g>

      <g>
        {pulses.map((point, index) => (
          <motion.circle
            key={point.name}
            cx={point.x}
            cy={point.y}
            r="6"
            fill="rgba(0,212,255,0.7)"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="1"
            animate={{ scale: [1, 1.7, 1], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.3 }}
          />
        ))}
      </g>
    </motion.svg>
  );
};

export default function GlobalPresence({ showStats = true }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [80, -120]);

  return (
    <section id="presence" ref={ref} className="section-shell relative bg-[#020617] overflow-hidden">
      <motion.div
        className="absolute -top-24 right-0 w-[420px] h-[420px] bg-[#1d4ed8] opacity-30 blur-[150px]"
        style={{ y: glowY }}
      />
      <motion.div
        className="absolute -bottom-40 left-10 w-[480px] h-[480px] bg-[#0ea5e9] opacity-20 blur-[180px]"
        style={{ y: glowY }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030a1b] to-[#01040b]" />

      <div className="relative z-10 section-inner lg:w-4/5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <SectionHeader
            eyebrow="Global presence"
            title={(
              <>
                We operate <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">where you do</span>
              </>
            )}
            subtitle="Follow-the-sun delivery with deep local expertise across every critical asset management hub."
          />
        </motion.div>

        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#030711] via-[#030820] to-[#01030b] shadow-[0_50px_120px_rgba(2,6,23,0.95)]"
          >
            <div className="absolute inset-[1px] rounded-[34px] bg-gradient-to-br from-white/5 via-transparent to-transparent" />
            <div className="relative aspect-[2/1.05]">
              <div className="absolute inset-0">
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    backgroundImage: "radial-gradient(circle at 20% 20%, rgba(14,165,233,0.35), transparent 45%)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-40 mix-blend-screen"
                  style={{
                    backgroundImage: "radial-gradient(rgba(56,189,248,0.22) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                  }}
                />
                <AnimatedWorldMap />
              </div>

              {offices.map((office, index) => {
                const projected = office.coords
                  ? geoMercator().scale(140).translate([450, 260])(office.coords)
                  : null;
                if (!projected) return null;
                const top = `${((projected[1] / 500) * 100).toFixed(2)}%`;
                const left = `${((projected[0] / 900) * 100).toFixed(2)}%`;
                const alignRight = parseFloat(left) > 55;

                return (
                  <motion.button
                    key={office.city}
                    type="button"
                    className="group absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                    style={{ top, left }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.12, type: "spring", stiffness: 180, damping: 14 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onFocus={() => setHoveredIndex(index)}
                    onBlur={() => setHoveredIndex(null)}
                  >
                    <span
                      className={`absolute inline-flex h-14 w-14 rounded-full opacity-40 blur-lg bg-gradient-to-r ${office.gradient}`}
                    />
                    <span
                      className={`absolute inline-flex h-20 w-20 rounded-full opacity-40 animate-ping bg-gradient-to-r ${office.gradient}`}
                    />
                    <span
                      className={`relative flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/40 shadow-lg backdrop-blur-sm transition group-hover:scale-110 bg-gradient-to-r ${office.gradient}`}
                    >
                      <MapPin className="h-5 w-5 text-white" />
                    </span>

                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 20, scale: 0.95 }}
                          className={`pointer-events-none absolute top-16 w-[280px] ${alignRight ? "right-0 origin-top-right" : "left-0 origin-top-left"
                            }`}
                        >
                          <div className="rounded-3xl border border-white/15 bg-[#040b16]/95 px-5 py-4 text-left shadow-2xl backdrop-blur-2xl">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-slate-300">{office.name}</p>
                                <p className="text-xl font-semibold text-white">{office.city}</p>
                              </div>
                              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/40 to-blue-500/40 text-white">
                                <MapPinned className="h-5 w-5" />
                              </div>
                            </div>
                            <p className="mt-2 text-sm text-slate-300 leading-relaxed">{office.description}</p>
                            <p className="mt-3 text-xs text-slate-400">{office.address}</p>
                            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-200">
                              <span className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-cyan-300" />
                                {office.timezone}
                              </span>
                              <span className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-cyan-300" />
                                {office.phone}
                              </span>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {office.specialties.map((pill) => (
                                <span
                                  key={`${office.city}-${pill}`}
                                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-100"
                                >
                                  {pill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>


        {showStats && (
          <motion.div
            className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/40 to-blue-500/40 text-white">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
