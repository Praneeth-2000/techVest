import React, { useEffect } from "react";
import Navigation from "@/components/techvest/Navigation";
import Footer from "@/components/techvest/Footer";

export default function Resources() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gradient-to-br from-[#040615] via-[#0B1025] to-[#05040F] text-white min-h-screen">
            <Navigation />

            <section className="section-shell relative overflow-hidden pt-32 pb-20">
                <div className="absolute top-10 right-20 w-[500px] h-[500px] bg-[#00D4FF] opacity-[0.15] blur-[120px] rounded-full animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-[#6B3FFF] opacity-[0.12] blur-[130px] rounded-full" />

                <div className="relative section-inner">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent">
                            Resources
                        </h1>

                        <p className="text-2xl text-gray-300 mb-8">
                            Coming Soon
                        </p>

                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500/20 border border-yellow-500/30 rounded-xl">
                            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                            <span className="text-yellow-200 font-medium">Under Development</span>
                        </div>

                        <p className="text-lg text-gray-400 mt-12 max-w-2xl mx-auto">
                            We're currently working on creating comprehensive resources including white papers, case studies, and webinars covering AI governance, engineering best practices, and industry insights. Check back soon!
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
