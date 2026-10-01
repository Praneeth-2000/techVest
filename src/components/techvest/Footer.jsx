import React from "react";
import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import techvestLogo from "@/assets/brand/techvest-logo.svg";

export default function Footer() {
  const aboutLinks = [
    { label: "About TechVest", href: "/about/techvest" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Partnership", href: "/about/partnership" },
    { label: "Events", href: "/about/events" },
  ];

  const services = [
    { label: "AI Governance", href: "/services/ai-governance" },
    { label: "AI Engineering", href: "/services/ai-engineering" },
    { label: "Investment Management", href: "/services/investment-management" },
    { label: "Data Engineering", href: "/services/data-engineering" },
    { label: "Analytics & Data Science", href: "/services/analytics-data-science" },
    { label: "ISO 42001-2023 Readiness Assessment", href: "/services/ai-governance/iso-42001-readiness-assessment" },
  ];

  const industries = [
    { label: "Financial Services", href: "/industries/financial-services" },
    { label: "Retail", href: "/industries/retail" }
  ];

  const frameworks = [
    { label: "AI Lifecycle", href: "/frameworks/ai-lifecycle" },
    { label: "AI Maturity Framework", href: "/frameworks/ai-maturity-framework" },
    { label: "AI Governance & Trust Framework", href: "/frameworks/ai-governance-trust-framework" }
  ];

  const resources = [
    { label: "Insights", href: "/insights/blog" },
    { label: "White Papers", href: "/resources/white-papers" },
    { label: "Case Studies", href: "/resources/case-studies" },
    { label: "Webinars", href: "/resources/webinars" }
  ];

  const careers = [
    { label: "Opportunities", href: "/careers/opportunities" },
    { label: "Benefits and Culture", href: "/careers/benefits-culture" },
    { label: "Programs & Learning", href: "/careers/programs-learning" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <footer className="bg-[#0C1117] border-t border-white/10 py-16">
      <div className="section-inner">
        {/* Logo and Company Info */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={techvestLogo}
              alt="TechVest Global"
              className="h-12 w-auto mb-4"
              loading="lazy"
            />
            <p className="text-gray-400 text-sm max-w-md">
              Human Inspired, AI Powered
            </p>
          </motion.div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* About Us */}
          <div>
            <h4 className="text-white font-semibold mb-4">About Us</h4>
            <div className="space-y-3">
              {aboutLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm relative group block"
                  >
                    <span className="relative">
                      {link.label}
                      <motion.span className="absolute -bottom-1 left-0 h-px bg-[#00D4FF] w-0 group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <div className="space-y-3">
              {services.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm relative group block"
                  >
                    <span className="relative">
                      {link.label}
                      <motion.span className="absolute -bottom-1 left-0 h-px bg-[#00D4FF] w-0 group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-semibold mb-4">Industries</h4>
            <div className="space-y-3">
              {industries.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm relative group block"
                  >
                    <span className="relative">
                      {link.label}
                      <motion.span className="absolute -bottom-1 left-0 h-px bg-[#00D4FF] w-0 group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h4 className="text-white font-semibold mb-4">Frameworks</h4>
            <div className="space-y-3">
              {frameworks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm relative group block"
                  >
                    <span className="relative">
                      {link.label}
                      <motion.span className="absolute -bottom-1 left-0 h-px bg-[#00D4FF] w-0 group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <div className="space-y-3">
              {resources.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm relative group block"
                  >
                    <span className="relative">
                      {link.label}
                      <motion.span className="absolute -bottom-1 left-0 h-px bg-[#00D4FF] w-0 group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Careers */}
          <div>
            <h4 className="text-white font-semibold mb-4">Careers</h4>
            <div className="space-y-3">
              {careers.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm relative group block"
                  >
                    <span className="relative">
                      {link.label}
                      <motion.span className="absolute -bottom-1 left-0 h-px bg-[#00D4FF] w-0 group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright, Contact, Legal, and Social */}
        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 TECHVEST GLOBAL. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm"
              >
                Contact Us
              </Link>
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <motion.a
            href="https://www.linkedin.com/company/techvestglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#00D4FF] flex items-center justify-center transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-[#00D4FF] opacity-0 group-hover:opacity-20"
              initial={false}
              whileHover={{ scale: [0, 1.5] }}
              transition={{ duration: 0.4 }}
            />
            <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-[#00D4FF] transition-colors relative z-10" />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}
