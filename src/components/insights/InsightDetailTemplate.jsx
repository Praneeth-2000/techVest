import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import SectionHeader from "@/components/techvest/SectionHeader";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";

export default function InsightDetailTemplate({ insight }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [insight?.slug]);

  if (!insight) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white flex flex-col">
        <Navigation />
        <div className="flex-1 section-shell">
          <div className="section-inner lg:w-4/5 space-y-6">
            <SectionHeader
              align="left"
              title="Insight not found"
              subtitle="The article you are looking for may have moved."
            />
            <Link to="/" className="btn-inline">
              <ArrowLeft className="w-4 h-4" />
              Return home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white flex flex-col">
      <Navigation />
      <article className="flex-1">
        {/* Hero Section */}
        <div className="section-shell relative overflow-hidden pt-20">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#00D4FF] opacity-20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[#6B3FFF] opacity-15 blur-[150px] rounded-full" />
          {/* Decorative Shapes */}
          <div className="absolute top-1/4 right-10 w-32 h-32 border border-cyan-500/20 rounded-full animate-pulse" />
          <div className="absolute bottom-1/3 left-20 w-24 h-24 border border-purple-500/20 rotate-45" />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(107,63,255,0.2),_transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,212,255,0.15),_transparent_70%)]" />

          <div className="section-inner lg:w-4/5 space-y-10 relative">
            <Link to="/" className="btn-inline text-sm">
              <ArrowLeft className="w-4 h-4" />
              Back to homepage
            </Link>

            <div className="space-y-6">
              <SectionHeader
                align="left"
                eyebrow="In-depth insight"
                title={insight.title}
                subtitle={insight.subtitle}
              />
              <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-300" />
                  {insight.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-300" />
                  {insight.readTime}
                </span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/10">
              <img src={insight.image} alt={insight.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="section-shell relative overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
            backgroundSize: "100px 100px"
          }} />
          {/* Floating Orbs */}
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

          <div className="section-inner lg:w-4/5 relative">
            <div className="space-y-5 text-white/80 leading-relaxed mb-10">
              {insight.overview?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="space-y-10">
              {insight.sections?.map((section) => (
                <section key={section.title} className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-3">
                  <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
                  {section.body?.map((paragraph, idx) => (
                    <p key={idx} className="text-white/80 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
