import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const cookieConsent = localStorage.getItem("cookieConsent");
        if (!cookieConsent) {
            // Show banner after a short delay
            setTimeout(() => setShowBanner(true), 1000);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setShowBanner(false);
    };

    const handleOptOut = () => {
        localStorage.setItem("cookieConsent", "declined");
        setShowBanner(false);
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="relative rounded-2xl border border-white/20 bg-gradient-to-br from-[#0B1025]/95 via-[#1A1F2E]/95 to-[#0B1025]/95 backdrop-blur-xl p-4 sm:p-6 shadow-2xl">
                            {/* Decorative gradient overlay */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00D4FF]/5 via-transparent to-[#6B3FFF]/5 pointer-events-none" />

                            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <p className="text-white text-sm sm:text-base leading-relaxed">
                                        This website uses cookies. By continuing to browse the site, you are agreeing to our{" "}
                                        <a
                                            href="/privacy-policy"
                                            className="text-[#00D4FF] hover:text-white transition-colors underline underline-offset-2"
                                        >
                                            use of cookies
                                        </a>
                                        .
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 w-full sm:w-auto">
                                    <button
                                        onClick={handleOptOut}
                                        className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl border border-white/20 bg-white/5 text-white text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                                    >
                                        Opt out
                                    </button>
                                    <button
                                        onClick={handleAccept}
                                        className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#0070CC] text-white text-sm font-medium hover:shadow-lg hover:shadow-[#00D4FF]/20 transition-all duration-300"
                                    >
                                        Accept
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
