import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "../../phone-input.css";

export default function ContactSection() {
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

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!firstName.trim()) {
      tempErrors["firstName"] = "First Name is required";
      isValid = false;
    }
    if (!lastName.trim()) {
      tempErrors["lastName"] = "Last Name is required";
      isValid = false;
    }
    if (!email.trim()) {
      tempErrors["email"] = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors["email"] = "Email address is invalid";
      isValid = false;
    }
    if (!phoneNumber || phoneNumber.length < 10) {
      tempErrors["phoneNumber"] = "Valid Phone Number is required";
      isValid = false;
    }
    if (!hearAbout) {
      tempErrors["hearAbout"] = "Please select how you heard about us";
      isValid = false;
    }
    if (!division) {
      tempErrors["division"] = "Please select a division";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const onSubmitContactBtn = async (e) => {
    e.preventDefault();
    if (validate()) {
      const newData = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        phone: phoneNumber,
        job_title: jobTitle,
        companyname: companyName,
        region: region,
        message: message,
        hear_about: hearAbout,
        division: division,
      };

      console.log(newData);

      const postData = async () => {
        try {
          const response = await fetch(
            "https://techvestglobal.com/api/contact-form.php",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newData),
            }
          );

          if (response.ok === true) {
            const data1 = await response.json();
            console.log("response from post", data1);
            setSuccessMessage("Form submitted successfully!");

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
            throw new Error("Failed to upload");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      postData();
    }
  };

  return (
    <section id="contact" className="section-shell bg-gradient-to-b from-[#0C1117] to-[#1A1F2E] relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0070CC] rounded-full blur-[250px] opacity-5"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <SectionHeader
            title={(<>Ready to move from{" "}<span className="bg-gradient-to-r from-[#00D4FF] to-[#6B3FFF] bg-clip-text text-transparent">roadmap to results?</span></>)}
            subtitle="Book a zero-obligation discovery call with our senior consultants."
          />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 p-8 sm:p-12 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Get In Touch</h2>
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
                placeholder="Last Name*"
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
                placeholder="Phone Number*"
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
                  <option value="" disabled className="bg-[#1A1F2E]">How did you hear about us?*</option>
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
                  <option value="" disabled className="bg-[#1A1F2E]">Which division should we connect you to?*</option>
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
                placeholder="Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="sm:col-span-2 text-left">
              <b><a href="/PrivacyPolicy" className="text-[#00D4FF] hover:text-white transition-colors">Read Our Privacy Policy Here</a></b>
            </div>
            <ul className="sm:col-span-2 text-gray-400 text-sm list-disc pl-5 space-y-1">
              <li>By clicking SUBMIT you consent to receiving SMS messages</li>
              <li>Messages and Data rates may apply. Message frequency will vary</li>
              <li>Reply Help to get more assistance</li>
              <li>Reply Stop to Opt-out of messaging</li>
            </ul>

            <div className="sm:col-span-2">
              <button className="btn-primary w-full sm:w-auto" onClick={onSubmitContactBtn}>Submit</button>
            </div>
            {successMessage && <p className="text-green-400 sm:col-span-2">{successMessage}</p>}
          </form>
        </motion.div>
      </div>
    </section >
  );
}
