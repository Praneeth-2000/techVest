import { useState, useEffect, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";
import SuccessModal from "@/components/techvest/SuccessModal";
import { ArrowRight } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { TailSpin } from "react-loader-spinner";

export default function OpportunitiesInner() {
    const [jobDetails, setJobDetails] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [region, setRegion] = useState("");
    const [message, setMessage] = useState("");
    const [linkedIn, setLinkedIn] = useState("");
    const [resume, setResume] = useState(null);
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [isLoadingJob, setIsLoadingJob] = useState(true);

    const fileInputRef = useRef(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const jobId = parseInt(id);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchCareerData = async () => {
            try {
                const response = await fetch(`https://techvestglobal.com/api/careerdetail.php/${jobId}`);
                if (!response.ok) throw new Error("Network response was not ok");
                const jobData = await response.json();
                if (jobData && jobData.data) {
                    setJobDetails(jobData.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoadingJob(false);
            }
        };
        fetchCareerData();
    }, [jobId]);

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!firstName.trim()) {
            newErrors.firstName = "First Name is required";
            valid = false;
        }

        if (!lastName.trim()) {
            newErrors.lastName = "Last Name is required";
            valid = false;
        }

        if (!email.trim()) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
            valid = false;
        }

        if (!phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone Number is required";
            valid = false;
        }

        if (!companyName.trim()) {
            newErrors.companyName = "Company Name is required";
            valid = false;
        }

        if (!jobTitle.trim()) {
            newErrors.jobTitle = "Job Title is required";
            valid = false;
        }

        if (!region.trim()) {
            newErrors.region = "Region is required";
            valid = false;
        }

        if (!message.trim()) {
            newErrors.message = "Message is required";
            valid = false;
        }

        if (!linkedIn) {
            newErrors.linkedIn = "LinkedIn Profile is required";
            valid = false;
        }

        if (!resume) {
            newErrors.resume = "Resume upload is required";
            valid = false;
        }

        if (!recaptchaToken) {
            newErrors.recaptcha = "Please complete the reCAPTCHA verification";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const onChangeFileUpload = (e) => {
        const file = e.target.files[0];
        setResume(file);
    };

    const onSubmitCareerFormData = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            console.log("Form has errors, cannot submit");
            return;
        }

        setIsSubmitting(true);

        const formData = new FormData();
        formData.append("firstname", firstName);
        formData.append("lastname", lastName);
        formData.append("email", email);
        formData.append("phonenum", phoneNumber);
        formData.append("job_id", jobId);
        formData.append("job_title", jobTitle);
        formData.append("companyname", companyName);
        formData.append("region", region);
        formData.append("message", message);
        formData.append("linkedIn", linkedIn);
        formData.append("resume", resume);

        try {
            const response = await fetch("https://techvestglobal.com/api/careerapi", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data1 = await response.json();
            console.log("response from post", data1);

            // Clear form fields
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhoneNumber("");
            setCompanyName("");
            setJobTitle("");
            setRegion("");
            setMessage("");
            setLinkedIn("");
            setResume(null);
            setRecaptchaToken(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }

            setIsSubmitting(false);
            setShowSuccessModal(true);
        } catch (error) {
            console.error("Error submitting application:", error);
            setIsSubmitting(false);
            alert("There was an error submitting your application. Please try again.");
        }
    };

    // Still fetching → full-page spinner
    if (isLoadingJob) {
        return (
            <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white min-h-screen flex flex-col items-center justify-center gap-6">
                <Navigation />
                {/* Animated spinner ring */}
                <div className="relative flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border-4 border-white/10 border-t-[#00D4FF] animate-spin" />
                    <div className="absolute w-12 h-12 rounded-full border-4 border-white/5 border-b-[#6B3FFF] animate-spin" style={{ animationDuration: "1.4s", animationDirection: "reverse" }} />
                </div>
                <p className="text-gray-400 text-lg tracking-wide animate-pulse">Loading job details…</p>
            </div>
        );
    }

    // Fetch done but no data → genuine not-found
    if (!jobDetails) {
        return (
            <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white min-h-screen flex items-center justify-center">
                <Navigation />
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Job not found</h1>
                    <Link to="/careers/opportunities" className="btn-primary">
                        Back to Opportunities
                    </Link>
                </div>
            </div>
        );
    }

    console.log(jobDetails);

    return (
        <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white">
            <Navigation />

            {/* Success Modal */}
            <SuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                title="Application Submitted!"
                message="Thank you for your application. We have received your submission and will review it shortly. Our team will contact you if your profile matches our requirements."
                positionName={jobTitle}
            />

            {/* Hero Section with Job Title */}
            <section className="section-shell relative overflow-hidden pt-28 sm:pt-32 pb-6 sm:pb-8">
                <div className="absolute top-20 right-10 w-96 h-96 bg-[#00D4FF] opacity-20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[#6B3FFF] opacity-15 blur-[150px] rounded-full" />
                <div className="absolute top-1/4 right-10 w-32 h-32 border border-cyan-500/20 rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 left-20 w-24 h-24 border border-purple-500/20 rotate-45" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(107,63,255,0.2),_transparent_65%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,212,255,0.15),_transparent_70%)]" />

                <div className="relative section-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-2 sm:px-0 leading-snug">
                            {jobDetails.job_title}
                        </h1>

                        <button
                            onClick={() => navigate("/careers/opportunities")}
                            className="inline-flex items-center gap-2 text-[#00D4FF] font-medium hover:gap-3 transition-all duration-200 text-sm sm:text-base"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Opportunities
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="section-shell bg-white/[0.02] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "100px 100px"
                }} />
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />
                <div className="section-inner relative">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4 sm:p-8"
                        >
                            <div className="mb-8 border-b border-white/10 pb-6">
                                {/* <h2 className="text-xl sm:text-2xl font-bold text-white">
                                    Applying for: <span className="text-[#00D4FF]">{jobTitle}</span>
                                </h2> */}
                                <p className="text-gray-400 mt-2 text-sm sm:text-base">
                                    Please fill out the form below to submit your application.
                                </p>
                            </div>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={onSubmitCareerFormData}>
                                <div>
                                    <label className="block text-sm text-gray-300 mb-2">First Name</label>
                                    <input
                                        className="w-full bg-[#0A0E27] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    {errors.firstName && <span className="text-red-400 text-sm">{errors.firstName}</span>}
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-300 mb-2">Last Name</label>
                                    <input
                                        className="w-full bg-[#0A0E27] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    {errors.lastName && <span className="text-red-400 text-sm">{errors.lastName}</span>}
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-[#0A0E27] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {errors.email && <span className="text-red-400 text-sm">{errors.email}</span>}
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-300 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-[#0A0E27] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                    {errors.phoneNumber && <span className="text-red-400 text-sm">{errors.phoneNumber}</span>}
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-300 mb-2">Company Name</label>
                                    <input
                                        className="w-full bg-[#0A0E27] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors"
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                    />
                                    {errors.companyName && <span className="text-red-400 text-sm">{errors.companyName}</span>}
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-300 mb-2">Job Title</label>
                                    <input
                                        className="w-full bg-[#0A0E27] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors"
                                        value={jobTitle}
                                        onChange={(e) => setJobTitle(e.target.value)}
                                    />
                                    {errors.jobTitle && <span className="text-red-400 text-sm">{errors.jobTitle}</span>}
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-300 mb-2">Upload Resume</label>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={onChangeFileUpload}
                                        className="w-full bg-[#0A0E27] border border-white/10 rounded-lg px-4 py-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#00D4FF] file:text-white hover:file:bg-[#00D4FF]/80 transition-colors"
                                    />
                                    {errors.resume && <span className="text-red-400 text-sm">{errors.resume}</span>}
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-300 mb-2">Region</label>
                                    <input
                                        className="w-full bg-[#0A0E27] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors"
                                        value={region}
                                        onChange={(e) => setRegion(e.target.value)}
                                    />
                                    {errors.region && <span className="text-red-400 text-sm">{errors.region}</span>}
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm text-gray-300 mb-2">LinkedIn Profile URL</label>
                                    <input
                                        type="url"
                                        className="w-full bg-[#0A0E27] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors"
                                        value={linkedIn}
                                        onChange={(e) => setLinkedIn(e.target.value)}
                                    />
                                    {errors.linkedIn && <span className="text-red-400 text-sm">{errors.linkedIn}</span>}
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm text-gray-300 mb-2">Message</label>
                                    <textarea
                                        className="w-full bg-[#0A0E27] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors"
                                        rows="4"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    {errors.message && <span className="text-red-400 text-sm">{errors.message}</span>}
                                </div>

                                <div className="md:col-span-2 flex items-center gap-3">
                                    <Link to="/privacy-policy" className="text-[#00D4FF] hover:text-white transition-colors font-medium">Read Our Privacy Policy Here</Link>
                                </div>

                                <div className="md:col-span-2">
                                    <ReCAPTCHA
                                        sitekey="6LcRC0MsAAAAACK8BDkaJZwe3dJNHDphRwSbU0cW"
                                        onChange={(token) => setRecaptchaToken(token)}
                                        onExpired={() => setRecaptchaToken(null)}
                                        theme="dark"
                                    />
                                    {errors.recaptcha && <span className="text-red-400 text-sm mt-2 block">{errors.recaptcha}</span>}
                                </div>

                                <div className="md:col-span-2">
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto btn-primary flex items-center justify-center gap-3 min-w-[140px]"
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
                                                <span>Submitting...</span>
                                            </>
                                        ) : (
                                            'Submit'
                                        )}
                                    </button>
                                </div>
                            </form>
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
