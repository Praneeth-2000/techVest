import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

const SuccessModal = ({ isOpen, onClose, title, message, positionName, autoCloseDelay = 4000 }) => {
    // Auto-close modal after specified delay (default 4 seconds) 
    useEffect(() => {
        if (isOpen && autoCloseDelay > 0) {
            const timer = setTimeout(() => {
                onClose();
            }, autoCloseDelay);

            // Cleanup timer on unmount or when modal closes
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose, autoCloseDelay]);
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3, type: "spring", damping: 25 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        style={{ pointerEvents: 'none' }}
                    >
                        <div
                            className="relative w-full max-w-md rounded-2xl border border-white/20 bg-gradient-to-br from-[#0B1025] via-[#0A0E27] to-[#05040F] backdrop-blur-xl p-8 shadow-2xl"
                            style={{ pointerEvents: 'auto' }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-200"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Success Icon */}
                            <div className="flex justify-center mb-6">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", damping: 15 }}
                                    className="relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] rounded-full blur-xl opacity-50" />
                                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] flex items-center justify-center">
                                        <CheckCircle className="w-10 h-10 text-white" />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Title */}
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl md:text-3xl font-bold text-center text-white mb-4"
                            >
                                {title || "Success!"}
                            </motion.h3>

                            {/* Position Name (if provided) */}
                            {positionName && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-center mb-4"
                                >
                                    <p className="text-gray-400 text-sm mb-1">Position Applied For:</p>
                                    <p className="text-lg font-semibold bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] bg-clip-text text-transparent">
                                        {positionName}
                                    </p>
                                </motion.div>
                            )}

                            {/* Message */}
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-gray-300 text-center leading-relaxed mb-6"
                            >
                                {message}
                            </motion.p>

                            {/* Close Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex justify-center"
                            >
                                <button
                                    onClick={onClose}
                                    className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300"
                                >
                                    Close
                                </button>
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00D4FF]/10 blur-[80px] rounded-full pointer-events-none" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#6B3FFF]/10 blur-[80px] rounded-full pointer-events-none" />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SuccessModal;
