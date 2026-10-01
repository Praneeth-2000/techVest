import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import techvestLogo from "@/assets/brand/techvest-logo.svg";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [frameworksDropdownOpen, setFrameworksDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [careersDropdownOpen, setCareersDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileFrameworksOpen, setMobileFrameworksOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileCareersOpen, setMobileCareersOpen] = useState(false);
  const servicesDropdownRef = useRef(null);
  const industriesDropdownRef = useRef(null);
  const frameworksDropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  const resourcesDropdownRef = useRef(null);
  const careersDropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
      if (industriesDropdownRef.current && !industriesDropdownRef.current.contains(event.target)) {
        setIndustriesDropdownOpen(false);
      }
      if (frameworksDropdownRef.current && !frameworksDropdownRef.current.contains(event.target)) {
        setFrameworksDropdownOpen(false);
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
      }
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target)) {
        setResourcesDropdownOpen(false);
      }
      if (careersDropdownRef.current && !careersDropdownRef.current.contains(event.target)) {
        setCareersDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    // Products - Hidden placeholder for future launch (after 3 months)
    {
      label: "Products",
      href: "/products",
      hidden: true // Remove this flag when ready to launch
    },
    {
      label: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        { label: "AI Governance", href: "/services/ai-governance" },
        { label: "AI Engineering", href: "/services/ai-engineering" },
        { label: "AI Academy", href: "/services/ai-academy" },
        { label: "Investment Management", href: "/services/investment-management", isSubItem: true },
        { label: "Data Engineering", href: "/services/data-engineering" },
        { label: "Analytics & Data Science", href: "/services/analytics-data-science" },
        { label: "ISO 42001-2023 Readiness Assessment", href: "/services/ai-governance/iso-42001-readiness-assessment", isSubItem: true }
      ]
    },
    {
      label: "Industries",
      href: "/industries",
      hasDropdown: true,
      dropdownItems: [
        { label: "Financial Services", href: "/industries/financial-services" },
        { label: "Retail", href: "/industries/retail" }
      ]
    },
    {
      label: "Frameworks",
      href: "/frameworks",
      hasDropdown: true,
      dropdownItems: [
        { label: "AI Lifecycle", href: "/frameworks/ai-lifecycle" },
        { label: "AI Maturity Framework", href: "/frameworks/ai-maturity-framework" },
        { label: "AI Governance & Trust Framework", href: "/frameworks/ai-governance-trust-framework" }
      ]
    },
    {
      label: "About Us",
      href: "/about",
      hasDropdown: true,
      dropdownItems: [
        { label: "About TechVest", href: "/about/techvest" },
        { label: "Leadership", href: "/about/leadership" },
        { label: "Partnership", href: "/about/partnership" },
        { label: "Events", href: "/about/events" }
      ]
    },
    {
      label: "Resources",
      href: "#", // Changed to # to make it unclickable
      hasDropdown: true,
      noNavigation: true, // Flag to prevent navigation
      dropdownItems: [
        { label: "Insights", href: "/insights/blog" },
        { label: "White Papers", href: "/resources/white-papers" },
        { label: "Case Studies", href: "/resources/case-studies" },
        { label: "Webinars", href: "/resources/webinars" }
      ]
    },
    {
      label: "Careers",
      href: "/careers",
      hasDropdown: true,
      dropdownItems: [
        { label: "Opportunities", href: "/careers/opportunities" },
        { label: "Benefits and Culture", href: "/careers/benefits-culture" },
        { label: "Programs & Learning", href: "/careers/programs-learning" }
      ]
    },
  ];

  const handleNavigation = (href) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
      setIndustriesDropdownOpen(false);
      setFrameworksDropdownOpen(false);
      setAboutDropdownOpen(false);
      setResourcesDropdownOpen(false);
      setCareersDropdownOpen(false);
      setMobileServicesOpen(false);
      setMobileIndustriesOpen(false);
      setMobileFrameworksOpen(false);
      setMobileAboutOpen(false);
      setMobileResourcesOpen(false);
      setMobileCareersOpen(false);
    } else if (href.startsWith('/')) {
      navigate(href);
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
      setIndustriesDropdownOpen(false);
      setFrameworksDropdownOpen(false);
      setAboutDropdownOpen(false);
      setResourcesDropdownOpen(false);
      setMobileServicesOpen(false);
      setMobileIndustriesOpen(false);
      setMobileFrameworksOpen(false);
      setMobileAboutOpen(false);
      setMobileResourcesOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0A0E27]/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
          }`}
      >
        <div className="w-full px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.02 }}
            >
              <a href="/" onClick={(e) => { e.preventDefault(); handleNavigation("/"); }}>
                <img
                  src={techvestLogo}
                  alt="TechVest Global"
                  className="h-12 w-auto drop-shadow-[0_0_25px_rgba(0,212,255,0.18)]"
                  loading="lazy"
                />
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.filter(link => !link.hidden).map((link) => {
                // Map dropdown state based on link label
                const getDropdownState = () => {
                  switch (link.label) {
                    case "Services": return { open: servicesDropdownOpen, setOpen: setServicesDropdownOpen, ref: servicesDropdownRef };
                    case "Industries": return { open: industriesDropdownOpen, setOpen: setIndustriesDropdownOpen, ref: industriesDropdownRef };
                    case "Frameworks": return { open: frameworksDropdownOpen, setOpen: setFrameworksDropdownOpen, ref: frameworksDropdownRef };
                    case "About Us": return { open: aboutDropdownOpen, setOpen: setAboutDropdownOpen, ref: aboutDropdownRef };
                    case "Resources": return { open: resourcesDropdownOpen, setOpen: setResourcesDropdownOpen, ref: resourcesDropdownRef };
                    case "Careers": return { open: careersDropdownOpen, setOpen: setCareersDropdownOpen, ref: careersDropdownRef };
                    default: return { open: false, setOpen: null, ref: null };
                  }
                };
                const { open: dropdownOpen, setOpen: setDropdownOpen, ref: dropdownRef } = getDropdownState();

                return link.hasDropdown ? (
                  <div
                    key={link.href}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={() => setDropdownOpen && setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen && setDropdownOpen(false)}
                  >
                    <div className="flex items-center gap-1">
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          if (!link.noNavigation) {
                            handleNavigation(link.href);
                          }
                        }}
                        className={`text-sm font-normal text-gray-300 transition-colors duration-200 ${link.noNavigation ? 'cursor-default' : 'hover:text-white'}`}
                      >
                        {link.label}
                      </a>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setDropdownOpen && setDropdownOpen(!dropdownOpen);
                        }}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-[#0A0E27]/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl overflow-hidden"
                        >
                          {link.dropdownItems.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(item.href);
                              }}
                              className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                            >
                              {item.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavigation(link.href); }}
                    className="text-sm font-normal text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                )
              })}
              <Button
                onClick={() => handleNavigation("/contact")}
                variant="ghost"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-4 py-2 text-sm font-medium text-white hover:text-[#00D4FF] hover:border-[#00D4FF] hover:bg-transparent transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0A0E27] md:hidden pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
              {navLinks.filter(link => !link.hidden).map((link) => {
                // Map mobile dropdown state based on link label
                const getMobileDropdownState = () => {
                  switch (link.label) {
                    case "Services": return { open: mobileServicesOpen, setOpen: setMobileServicesOpen };
                    case "Industries": return { open: mobileIndustriesOpen, setOpen: setMobileIndustriesOpen };
                    case "Frameworks": return { open: mobileFrameworksOpen, setOpen: setMobileFrameworksOpen };
                    case "About Us": return { open: mobileAboutOpen, setOpen: setMobileAboutOpen };
                    case "Resources": return { open: mobileResourcesOpen, setOpen: setMobileResourcesOpen };
                    case "Careers": return { open: mobileCareersOpen, setOpen: setMobileCareersOpen };
                    default: return { open: false, setOpen: null };
                  }
                };
                const { open: mobileDropdownOpen, setOpen: setMobileDropdownOpen } = getMobileDropdownState();

                return link.hasDropdown ? (
                  <div key={link.href} className="w-full text-center">
                    <div className="flex items-center justify-center gap-2">
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          if (!link.noNavigation) {
                            handleNavigation(link.href);
                          }
                        }}
                        className={`text-2xl font-normal text-gray-300 ${link.noNavigation ? '' : 'hover:text-white'}`}
                      >
                        {link.label}
                      </a>
                      <button
                        onClick={() => setMobileDropdownOpen && setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {mobileDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-4 space-y-3 overflow-hidden"
                        >
                          {link.dropdownItems.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(item.href);
                              }}
                              className="block text-lg text-gray-400 hover:text-white transition-colors duration-200"
                            >
                              {item.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavigation(link.href); }}
                    className="text-2xl font-normal text-gray-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                )
              })}
              <Button
                onClick={() => handleNavigation("/contact")}
                variant="ghost"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-transparent w-full py-3 text-lg font-medium text-white hover:text-[#00D4FF] hover:border-[#00D4FF] hover:bg-transparent transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}