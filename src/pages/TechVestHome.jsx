import React, { useState, useEffect } from "react";
import Hero from "../components/techvest/Hero";
import ProofBar from "../components/techvest/ProofBar";
import ValuePillars from "../components/techvest/ValuePillars";
import ServiceCards from "../components/techvest/ServiceCards";
import ExpertiseBands from "../components/techvest/ExpertiseBands";
import ProcessSteps from "../components/techvest/ProcessSteps";
import ResultsMetrics from "../components/techvest/ResultsMetrics";
import Testimonials from "../components/techvest/Testimonials";
import InsightsCards from "../components/techvest/InsightsCards";
import GlobalPresence from "../components/techvest/GlobalPresence";
import ContactSection from "../components/techvest/ContactSection";
import Footer from "../components/techvest/Footer";
import Navigation from "../components/techvest/Navigation";
import SEO from "../components/techvest/SEO";

export default function TechVestHome() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0A0E27] text-white overflow-x-hidden">
      <SEO
        path="/"
        title="AI Consulting for Financial Services"
        description="TechVest Global is a strategic AI partner for banking, financial services and investment management, delivering AI governance, engineering, data and ISO 42001."
      />
      <Navigation />

      <Hero scrollY={scrollY} />
      <ProofBar />
      <ValuePillars />
      {/* <ServiceCards /> */}
      {/* <ExpertiseBands /> */}
      <ProcessSteps />
      {/* <ResultsMetrics /> */}
      <Testimonials />
      <InsightsCards />
      <GlobalPresence />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
}