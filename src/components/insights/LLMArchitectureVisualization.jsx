import React from "react";
import { motion } from "framer-motion";

export default function LLMArchitectureVisualization() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 mb-12"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent">
                Production-Ready LLM Architecture
            </h2>

            {/* Architecture Layers */}
            <div className="space-y-6">
                {/* Layer 1 - Reasoning/Orchestration */}
                <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative border border-purple-400/30 bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-xl p-6 backdrop-blur-sm hover:border-purple-400/60 transition-all">
                        <h3 className="text-xl font-semibold text-purple-300 mb-2">Reasoning / Orchestration Layer</h3>
                        <p className="text-gray-400 text-sm">Coordinates AI decision-making and workflow execution</p>
                    </div>
                </div>

                {/* Layer 2 - Guardrails & Controls + Observability */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                        <div className="relative border border-orange-400/30 bg-gradient-to-r from-orange-900/20 to-orange-800/20 rounded-xl p-6 backdrop-blur-sm hover:border-orange-400/60 transition-all h-full">
                            <h3 className="text-xl font-semibold text-orange-300 mb-2">Guardrails & Controls</h3>
                            <p className="text-gray-400 text-sm">Safety boundaries and policy enforcement</p>
                        </div>
                    </div>
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                        <div className="relative border border-cyan-400/30 bg-gradient-to-r from-cyan-900/20 to-cyan-800/20 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-400/60 transition-all h-full">
                            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Observability</h3>
                            <p className="text-gray-400 text-sm">Monitoring, logging, and performance tracking</p>
                        </div>
                    </div>
                </div>

                {/* Layer 3 - Context Management + Context Hygiene */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                        <div className="relative border border-blue-400/30 bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-xl p-6 backdrop-blur-sm hover:border-blue-400/60 transition-all h-full">
                            <h3 className="text-xl font-semibold text-blue-300 mb-2">Context Management</h3>
                            <p className="text-gray-400 text-sm">Intelligent context handling and optimization</p>
                        </div>
                    </div>
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                        <div className="relative border border-teal-400/30 bg-gradient-to-r from-teal-900/20 to-teal-800/20 rounded-xl p-6 backdrop-blur-sm hover:border-teal-400/60 transition-all h-full">
                            <h3 className="text-xl font-semibold text-teal-300 mb-2">Context Hygiene</h3>
                            <p className="text-gray-400 text-sm">Data cleaning and normalization</p>
                        </div>
                    </div>
                </div>

                {/* Layer 4 - Retrieval Quality + Semantic Testing */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                        <div className="relative border border-indigo-400/30 bg-gradient-to-r from-indigo-900/20 to-indigo-800/20 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-400/60 transition-all h-full">
                            <h3 className="text-xl font-semibold text-indigo-300 mb-2">Retrieval Quality</h3>
                            <p className="text-gray-400 text-sm">Accurate and relevant data retrieval</p>
                        </div>
                    </div>
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                        <div className="relative border border-pink-400/30 bg-gradient-to-r from-pink-900/20 to-pink-800/20 rounded-xl p-6 backdrop-blur-sm hover:border-pink-400/60 transition-all h-full">
                            <h3 className="text-xl font-semibold text-pink-300 mb-2">Semantic Testing</h3>
                            <p className="text-gray-400 text-sm">Behavioral validation and regression testing</p>
                        </div>
                    </div>
                </div>

                {/* Layer 5 - RAG Evaluation + Model Versioning */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                        <div className="relative border border-violet-400/30 bg-gradient-to-r from-violet-900/20 to-violet-800/20 rounded-xl p-6 backdrop-blur-sm hover:border-violet-400/60 transition-all h-full">
                            <h3 className="text-xl font-semibold text-violet-300 mb-2">RAG Evaluation</h3>
                            <p className="text-gray-400 text-sm">Retrieval-Augmented Generation assessment</p>
                        </div>
                    </div>
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                        <div className="relative border border-amber-400/30 bg-gradient-to-r from-amber-900/20 to-amber-800/20 rounded-xl p-6 backdrop-blur-sm hover:border-amber-400/60 transition-all h-full">
                            <h3 className="text-xl font-semibold text-amber-300 mb-2">Model Versioning</h3>
                            <p className="text-gray-400 text-sm">Version control and deployment management</p>
                        </div>
                    </div>
                </div>

                {/* Layer 6 - Vector Databases */}
                <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative border border-emerald-400/30 bg-gradient-to-r from-emerald-900/20 to-emerald-800/20 rounded-xl p-6 backdrop-blur-sm hover:border-emerald-400/60 transition-all">
                        <h3 className="text-xl font-semibold text-emerald-300 mb-2">Vector Databases</h3>
                        <p className="text-gray-400 text-sm">Embedding storage and similarity search</p>
                    </div>
                </div>

                {/* Layer 7 - Embedding Store (Dashed Border) */}
                <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-gray-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative border-2 border-dashed border-gray-400/30 bg-gradient-to-r from-gray-900/20 to-gray-800/20 rounded-xl p-6 backdrop-blur-sm hover:border-gray-400/60 transition-all">
                        <h3 className="text-xl font-semibold text-gray-300 mb-2">Embedding Store</h3>
                        <p className="text-gray-400 text-sm">Persistent vector embeddings repository</p>
                    </div>
                </div>

                {/* Layer 8 - Prompts */}
                <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative border border-sky-400/30 bg-gradient-to-r from-sky-900/20 to-sky-800/20 rounded-xl p-6 backdrop-blur-sm hover:border-sky-400/60 transition-all">
                        <h3 className="text-xl font-semibold text-sky-300 mb-2">Prompts</h3>
                        <p className="text-gray-400 text-sm">Versioned, tested prompt templates</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
