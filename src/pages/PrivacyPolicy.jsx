import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white">
            <Navigation />

            {/* Hero Section */}
            <section className="section-shell relative overflow-hidden pt-32">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-20 right-10 w-96 h-96 bg-[#00D4FF] opacity-20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[#6B3FFF] opacity-15 blur-[150px] rounded-full" />
                {/* Decorative Shapes */}
                <div className="absolute top-1/4 right-10 w-32 h-32 border border-cyan-500/20 rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 left-20 w-24 h-24 border border-purple-500/20 rotate-45" />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(107,63,255,0.2),_transparent_65%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,212,255,0.15),_transparent_70%)]" />

                <div className="relative section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00D4FF]/20 to-[#6B3FFF]/20 mb-6">
                            <Shield className="w-8 h-8 text-[#00D4FF]" />
                        </div>
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[#00D4FF] bg-clip-text text-transparent">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Techvest Global Solutions Inc. is committed to protecting the privacy of your information.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
                            <Link to="/" className="hover:text-[#00D4FF] transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            <span className="text-white">Privacy Policy</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Effective Date */}
            <section className="section-shell relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B3FFF]/5 to-transparent" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full" />
                <div className="section-inner relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <p className="text-lg text-gray-400">
                            <strong>Effective Date:</strong> April 28, 2025
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                {/* Floating Orbs */}
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* Introduction */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="prose prose-invert max-w-none"
                        >
                            <p className="text-gray-300 text-lg leading-relaxed">
                                This Privacy Policy outlines the types of information we may collect from you or that you may provide to us when you use our website, products, or services (collectively, our "Services"). It also describes our practices for collecting, using, maintaining, protecting, and disclosing that information.
                            </p>
                        </motion.div>

                        {/* Section 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <h2 className="text-3xl font-bold text-white mb-6">1. Information We Collect</h2>
                                <div className="space-y-4 text-gray-300">
                                    <p>We may collect several types of information from and about users of our Services, including:</p>
                                    <ul className="space-y-3 ml-6">
                                        <li><strong className="text-white">Personal Information:</strong> This includes information that can be used to identify you, such as your name, email address, phone number, and any other information you provide to us voluntarily.</li>
                                        <li><strong className="text-white">Non-Personal Information:</strong> This includes information that does not directly identify you, such as your IP address, browser type, operating system, and information about your use of our Services.</li>
                                        <li><strong className="text-white">Cookies and Similar Technologies:</strong> We may use cookies, web beacons, and other similar technologies to collect information about your browsing activities and preferences.</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Section 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <h2 className="text-3xl font-bold text-white mb-6">2. How We Use Your Information</h2>
                                <div className="space-y-4 text-gray-300">
                                    <p>We may use the information we collect for various purposes, including:</p>
                                    <ul className="space-y-2 ml-6">
                                        <li>• To provide and improve our Services.</li>
                                        <li>• To communicate with you, including responding to your inquiries and providing customer support.</li>
                                        <li>• To personalize your experience and deliver content and advertisements that are relevant to your interests.</li>
                                        <li>• To analyze trends and gather statistical information.</li>
                                        <li>• To detect, prevent, and address technical issues, security breaches, or fraud.</li>
                                        <li>• To comply with any legal obligations.</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Section 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <h2 className="text-3xl font-bold text-white mb-6">3. How We Share Your Information</h2>
                                <div className="space-y-4 text-gray-300">
                                    <p>We may share your information with third parties in the following circumstances:</p>
                                    <ul className="space-y-3 ml-6">
                                        <li><strong className="text-white">Service Providers:</strong> We may share your information with third-party service providers who assist us in providing and maintaining our Services.</li>
                                        <li><strong className="text-white">Business Partners:</strong> We may share your information with our business partners to offer you certain products or services.</li>
                                        <li><strong className="text-white">Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to a valid legal request.</li>
                                        <li><strong className="text-white">Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
                                        <li><strong className="text-white">With Your Consent:</strong> We may share your information with third parties with your consent.</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Section 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <h2 className="text-3xl font-bold text-white mb-6">4. Your Choices</h2>
                                <div className="space-y-4 text-gray-300">
                                    <p>You have certain choices regarding your information:</p>
                                    <ul className="space-y-3 ml-6">
                                        <li><strong className="text-white">Access and Correction:</strong> You may access and update your personal information by contacting us.</li>
                                        <li><strong className="text-white">Opt-Out:</strong> You may opt out of receiving promotional emails from us by following the instructions in those emails.</li>
                                        <li><strong className="text-white">Cookies:</strong> You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our Services.</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Section 5 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <h2 className="text-3xl font-bold text-white mb-6">5. Data Security</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    We have implemented reasonable measures to protect your information from unauthorized access, use, and disclosure. However, no data transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.
                                </p>
                            </div>
                        </motion.div>

                        {/* Section 6 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <h2 className="text-3xl font-bold text-white mb-6">6. International Data Transfers</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Your information may be transferred to and maintained on servers located outside of your country or other governmental jurisdiction, where the data protection laws may differ from those in your jurisdiction.
                                </p>
                            </div>
                        </motion.div>

                        {/* Section 7 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <h2 className="text-3xl font-bold text-white mb-6">7. Children's Privacy</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Our Services are not intended for children under the age of 18, and we do not knowingly collect personal information from children under that age. If you believe that we have collected personal information from a child under 18, please contact us immediately.
                                </p>
                            </div>
                        </motion.div>

                        {/* Section 8 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <h2 className="text-3xl font-bold text-white mb-6">8. Changes to This Privacy Policy</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website.
                                </p>
                            </div>
                        </motion.div>

                        {/* Section 9 - Contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <h2 className="text-3xl font-bold text-white mb-6">9. Contact Us</h2>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    If you have any questions about this Privacy Policy, please contact us at:
                                </p>
                                <div className="space-y-2 text-gray-300">
                                    <p className="font-semibold text-white">Techvest Global Solutions Inc.</p>
                                    <p>Street W, Suite # 2500 Toronto, Ontario, M5G 1Z3 Canada</p>
                                    <p>Email: <a href="mailto:techvestgtm@techvestglobal.com" className="text-[#00D4FF] hover:underline">techvestgtm@techvestglobal.com</a></p>
                                    <p>Phone: <a href="tel:+16475354940" className="text-[#00D4FF] hover:underline">+1 647-535-4940</a></p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Section 10 - Disclaimer */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-[#00D4FF]/50 transition-all duration-300"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <h2 className="text-3xl font-bold text-white mb-6">10. Disclaimer</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent. This information will not be shared with any third parties.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-shell relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/5 via-[#6B3FFF]/5 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full" />
                <div className="section-inner text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Know what you need? Submit your <span className="text-[#00D4FF]">Request</span> for information{" "}
                            <span className="text-[#00D4FF]">Here.</span>
                        </h2>
                        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300">
                            Contact Us
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
