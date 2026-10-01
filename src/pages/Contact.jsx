import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import GlobalPresence from "@/components/techvest/GlobalPresence";
import CookieConsent from "@/components/techvest/CookieConsent";
import SuccessModal from "@/components/techvest/SuccessModal";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Location from "../assets/images/location-1.svg";
import "../phone-input.css";
import { TailSpin } from "react-loader-spinner";

function ContactUs() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [region, setRegion] = useState("");
    const [message, setMessage] = useState("");
    const [hearAbout, setHearAbout] = useState("");
    const [division, setDivision] = useState("");
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };



    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        // Only firstName, email, and message are required
        if (!firstName.trim()) {
            tempErrors["firstName"] = "First Name is required";
            isValid = false;
        }
        if (!email.trim()) {
            tempErrors["email"] = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors["email"] = "Email address is invalid";
            isValid = false;
        }
        if (!message.trim()) {
            tempErrors["message"] = "Message is required";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const onSubmitContactBtn = async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            setSuccessMessage("");
            setErrorMessage("");

            const postData = async () => {
                const formData = new FormData();
                formData.append("firstname", firstName);
                formData.append("lastname", lastName);
                formData.append("email", email);
                formData.append("phonenum", phoneNumber);
                formData.append("companyname", companyName);
                formData.append("job_title", jobTitle);
                formData.append("region", region);
                formData.append("hear_about_us", hearAbout);
                formData.append("division", division);
                formData.append("message", message);

                try {
                    const response = await fetch(
                        "https://techvestglobal.com/api/contactReq",
                        {
                            method: "POST",
                            body: formData,
                        }
                    );

                    if (response.ok === true) {
                        const data1 = await response.json();
                        console.log("response from post", data1);
                        setIsSubmitting(false);
                        setShowSuccessModal(true);

                        // Clear the input fields
                        setFirstName("");
                        setLastName("");
                        setEmail("");
                        setPhoneNumber("");
                        setCompanyName("");
                        setRegion("");
                        setMessage("");
                        setJobTitle("");
                        setHearAbout("");
                        setDivision("");
                    } else {
                        const errorText = await response.text();
                        console.error("Server response:", errorText);
                        setErrorMessage("Oops! Something went wrong. Please try again.");
                        setIsSubmitting(false);
                        setTimeout(() => setErrorMessage(""), 5000);
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setErrorMessage("Network error. Please check your connection and try again.");
                    setIsSubmitting(false);
                    setTimeout(() => setErrorMessage(""), 5000);
                }
            };

            postData();
        }
    };

    return (
        <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white">
            <Navigation />

            {/* Success Modal */}
            <SuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                title="Message Sent!"
                message="Thank you for reaching out to us. We have received your message and will get back to you shortly. Our team typically responds within 24-48 hours."
            />

            {/* Error Popup Notification */}
            <AnimatePresence>
                {errorMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-20 right-4 z-50 max-w-md"
                    >
                        <div className="rounded-2xl border border-red-400/30 bg-gradient-to-br from-red-500/20 to-orange-500/10 backdrop-blur-xl p-6 shadow-2xl">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-semibold text-lg mb-1">Error</h4>
                                    <p className="text-gray-200 text-sm">{errorMessage}</p>
                                </div>
                                <button
                                    onClick={() => setErrorMessage("")}
                                    className="flex-shrink-0 text-white/60 hover:text-white transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero */}
            <section className="section-shell relative overflow-hidden pt-32">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-20 right-10 w-96 h-96 bg-[#00D4FF] opacity-20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[#6B3FFF] opacity-15 blur-[150px] rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-[100px] rounded-full" />

                {/* Decorative Shapes */}
                <div className="absolute top-1/4 right-10 w-32 h-32 border border-cyan-500/20 rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 left-20 w-24 h-24 border border-purple-500/20 rotate-45" />
                <div className="absolute top-2/3 right-1/4 w-16 h-16 border-2 border-cyan-400/10 rounded-lg rotate-12" />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(107,63,255,0.2),_transparent_65%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,212,255,0.15),_transparent_70%)]" />

                <div className="relative section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[#00D4FF] bg-clip-text text-transparent">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            For further information about Techvest Global, our team, and our capabilities, please feel free to reach out to any of our listed locations below. We're here to assist you in any way we can.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
                            <Link to="/" className="hover:text-[#00D4FF] transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            <span className="text-white">Contact</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Form + Locations */}
            <section className="section-shell relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />

                <div className="section-inner relative">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Get In Touch</h2>
                            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        className="w-full rounded-xl bg-white/[0.05] border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:border-[#00D4FF] focus:outline-none transition-colors"
                                        type="text"
                                        placeholder="First Name*"
                                        name="firstName"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                                </div>
                                <div>
                                    <input
                                        className="w-full rounded-xl bg-white/[0.05] border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:border-[#00D4FF] focus:outline-none transition-colors"
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                                </div>
                                <div>
                                    <input
                                        className="w-full rounded-xl bg-white/[0.05] border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:border-[#00D4FF] focus:outline-none transition-colors"
                                        type="text"
                                        placeholder="Email*"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <PhoneInput
                                        country={'us'}
                                        value={phoneNumber}
                                        onChange={phone => setPhoneNumber(phone)}
                                        containerClass="phone-input-container"
                                        inputClass="phone-input"
                                        buttonClass="phone-dropdown"
                                        placeholder="Phone Number"
                                        enableSearch={true}
                                        searchPlaceholder="Search country"
                                    />
                                    {errors.phoneNumber && <p className="text-red-400 text-sm mt-1">{errors.phoneNumber}</p>}
                                </div>
                                <div>
                                    <input
                                        className="w-full rounded-xl bg-white/[0.05] border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:border-[#00D4FF] focus:outline-none transition-colors"
                                        type="text"
                                        placeholder="Company Name"
                                        name="companyName"
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                        className="w-full rounded-xl bg-white/[0.05] border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:border-[#00D4FF] focus:outline-none transition-colors"
                                        type="text"
                                        placeholder="Job Title"
                                        name="jobTitle"
                                        value={jobTitle}
                                        onChange={(e) => setJobTitle(e.target.value)}
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <input
                                        className="w-full rounded-xl bg-white/[0.05] border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:border-[#00D4FF] focus:outline-none transition-colors"
                                        type="text"
                                        placeholder="Region"
                                        name="region"
                                        value={region}
                                        onChange={(e) => setRegion(e.target.value)}
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="relative">
                                        <select
                                            className="w-full rounded-xl bg-white/[0.05] border border-white/20 px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none transition-colors appearance-none cursor-pointer pr-10"
                                            style={{ color: hearAbout ? 'white' : 'rgba(255, 255, 255, 0.5)' }}
                                            value={hearAbout}
                                            onChange={(e) => setHearAbout(e.target.value)}
                                        >
                                            <option value="" disabled className="bg-[#1A1F2E]">How did you hear about us?</option>
                                            <option value="Advertisement/Media Article" className="bg-[#1A1F2E] text-white">Advertisement/Media Article</option>
                                            <option value="Analyst/Sourcing Advisory" className="bg-[#1A1F2E] text-white">Analyst/Sourcing Advisory</option>
                                            <option value="Search Engine" className="bg-[#1A1F2E] text-white">Search Engine</option>
                                            <option value="Social Media" className="bg-[#1A1F2E] text-white">Social Media</option>
                                            <option value="Webinar" className="bg-[#1A1F2E] text-white">Webinar</option>
                                            <option value="Other" className="bg-[#1A1F2E] text-white">Other</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    {errors.hearAbout && <p className="text-red-400 text-sm mt-1">{errors.hearAbout}</p>}
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="relative">
                                        <select
                                            className="w-full rounded-xl bg-white/[0.05] border border-white/20 px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none transition-colors appearance-none cursor-pointer pr-10"
                                            style={{ color: division ? 'white' : 'rgba(255, 255, 255, 0.5)' }}
                                            value={division}
                                            onChange={(e) => setDivision(e.target.value)}
                                        >
                                            <option value="" disabled className="bg-[#1A1F2E]">Which division should we connect you to?</option>
                                            <option value="Our Services" className="bg-[#1A1F2E] text-white">Our Services</option>
                                            <option value="Analyst/Sourcing Advisory" className="bg-[#1A1F2E] text-white">Analyst/Sourcing Advisory</option>
                                            <option value="Investor Relations" className="bg-[#1A1F2E] text-white">Investor Relations</option>
                                            <option value="Media/News" className="bg-[#1A1F2E] text-white">Media/News</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    {errors.division && <p className="text-red-400 text-sm mt-1">{errors.division}</p>}
                                </div>
                                <div className="sm:col-span-2">
                                    <textarea
                                        className="w-full rounded-xl bg-white/[0.05] border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:border-[#00D4FF] focus:outline-none transition-colors min-h-36 resize-none"
                                        placeholder="Message*"
                                        name="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                                </div>
                                <div className="sm:col-span-2 text-left">
                                    <b><Link to="/privacy-policy" className="text-[#00D4FF] hover:text-white transition-colors">Read Our Privacy Policy Here</Link></b>
                                </div>
                                <ul className="sm:col-span-2 text-gray-400 text-sm list-disc pl-5 space-y-1">
                                    <li>By clicking SUBMIT you consent to receiving SMS messages</li>
                                    <li>Messages and Data rates may apply. Message frequency will vary</li>
                                    <li>Reply Help to get more assistance</li>
                                    <li>Reply Stop to Opt-out of messaging</li>
                                </ul>

                                <div className="sm:col-span-2">
                                    <button
                                        className="btn-primary w-full sm:w-auto relative overflow-hidden group flex items-center justify-center gap-3 min-w-[140px]"
                                        onClick={onSubmitContactBtn}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <TailSpin
                                                    height="20"
                                                    width="20"
                                                    color="#ffffff"
                                                    ariaLabel="loading"
                                                    radius="1"
                                                    visible={true}
                                                />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            'Submit'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </motion.div>

                        {/* Locations */}
                        <div className="space-y-6">
                            {/* Corporate Office */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative flex items-start gap-4">
                                    <img src={Location} alt="Location" className="w-6 h-6 opacity-80 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-3">Corporate Office Address:</h4>
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div>
                                                <h5 className="font-semibold text-white mb-2">Canada:</h5>
                                                <p className="text-gray-300 text-sm leading-relaxed">1 Dundas Street W, Suite # 2500 Toronto, Ontario, M5G 1Z3 Canada</p>
                                                <p className="text-gray-300 text-sm mt-1">+1 6475354940</p>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-white mb-2">Alberta:</h5>
                                                <p className="text-gray-300 text-sm leading-relaxed">10180 - 101 Street, Suite 3400, Edmonton, Alberta, T5J 3S4 Canada</p>
                                                <p className="text-gray-300 text-sm mt-1">+1 6475354940</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Other Locations */}
                            {[
                                { title: "USA", addr: "913 N. Market Street, Suite 200 Wilmington, DE 19801 United States", phone: "+1 302-487-0449" },
                                { title: "Dubai", addr: "Al Khaimah Building II Office 1F-50, AI Barsha First, Dubai, United Arab Emirates", phone: "+ 971 564174556" },
                                { title: "India", addr: "RAM SVR, 2nd Floor HUDA Techno Enclave, Hitec City, Hyderabad, India - 500081", phone: "+ 91 9642444450" },
                                { title: "Malta", addr: "12 , J.F Marks Street, San Gwann - Malta", phone: "+ 356 9999 9323" },
                            ].map((loc, index) => (
                                <motion.div
                                    key={loc.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-[#00D4FF]/50 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative flex items-start gap-4">
                                        <img src={Location} alt="Location" className="w-6 h-6 opacity-80 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">{loc.title}</h4>
                                            <p className="text-gray-300 text-sm leading-relaxed">{loc.addr}</p>
                                            <p className="text-gray-300 text-sm mt-1">{loc.phone}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Presence Map */}
            <GlobalPresence showStats={false} />

            <Footer />

            <CookieConsent />
        </div>
    );
}

export default ContactUs;
