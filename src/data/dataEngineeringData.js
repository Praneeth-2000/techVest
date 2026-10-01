// Data Engineering Services Data

// Import images
import dataEngineeringHeroImg from "@/assets/images/data-engineering-hero.png";
import aiReadyDataImg from "@/assets/images/data-engineering-hero.png";
import selfHealingDataOpsImg from "@/assets/images/SelfHealingDataOpsPlatform.jpg";
import modernArchitectureImg from "@/assets/images/modern-data-architecture.png";
import intelligentFoundationImg from "@/assets/images/IntelligentDataFoundation.jpg";

// Import AI-Ready Foundation spoke icons
import spokeIcon1 from "@/assets/images/data-engineering1.svg";
import spokeIcon2 from "@/assets/images/data-engineering2.svg";
import spokeIcon3 from "@/assets/images/data-engineering3.svg";
import spokeIcon4 from "@/assets/images/data-engineering4.svg";


import AIReadyDataFoundation1 from "@/assets/images/AIReadyDataFoundation1.jpg";

import ModernDataArchitectureConsulting from "@/assets/images/ModernDataArchitectureConsulting.jpg";

// AI-Ready Data Foundation - Hub & Spoke Data
export const aiReadyDataFoundation = {
    title: "AI-Ready Data Foundation",
    introParagraph: "Every company is investing in AI, yet traditional engineering doesn't address the specialized infrastructure requirements of modern ML applications. Safety company, accelerating outcomes, pre-vetted solutions, and trusted by global enterprises.",
    image: AIReadyDataFoundation1,
    centerHub: {
        title: "AI-Ready Data Infrastructure",
        description: "Build end-to-end pipelines purpose-built for modern AI/ML applications"
    },
    spokes: [
        {
            id: "rag-optimised",
            title: "RAG-Optimised Preparation",
            description: "Vector database integration & semantic search capabilities",
            icon: spokeIcon1
        },
        {
            id: "real-time-feature",
            title: "Real-Time Feature Stores",
            description: "Low-latency model serving infrastructure at scale",
            icon: spokeIcon2
        },
        {
            id: "data-versioning",
            title: "Data Versioning",
            description: "Complete lineage tracking for model reproducibility",
            icon: spokeIcon3
        },
        {
            id: "llm-fine-tuning",
            title: "LLM Fine-Tuning Pipelines",
            description: "Streamlined data workflows for model customisation",
            icon: spokeIcon4
        }
    ]
};

// Self-Healing DataOps Platform Data
export const selfHealingDataOps = {
    title: "Self-Healing DataOps Platform",
    description: "Fully managed, intelligent pipelines that eliminate manual intervention.",
    image: selfHealingDataOpsImg,
    features: [
        {
            id: "automated-anomaly",
            title: "Automated Anomaly Detection",
            description: "Intelligent error recovery without human intervention"
        },
        {
            id: "ci-cd-data",
            title: "CI/CD for Data",
            description: "Automated testing and validation at every stage"
        },
        {
            id: "real-time-quality",
            title: "Real-Time Quality Monitoring",
            description: "Instant alerts with actionable insights"
        },
        {
            id: "adaptive-performance",
            title: "Adaptive Performance",
            description: "Self-optimising systems that learn and improve"
        }
    ],
    concludingText: "Organisations waste 60-80% of engineering resources on pipeline maintenance. Automated, resilient systems dramatically reduce operational overhead whilst improving reliability."
};

// Modern Data Architecture Consulting Data
export const modernDataArchitecture = {
    title: "Modern Data Architecture Consulting",
    subtitle: "Strategic transformation for organisations ready to modernise",
    image: ModernDataArchitectureConsulting,
    services: [
        {
            id: "data-mesh",
            title: "Data Mesh Implementation",
            description: "Decentralised, domain-oriented ownership model",
            bulletPoints: [
                "Autonomous domain data teams",
                "Self-serve infrastructure platform",
                "Federated computational governance"
            ]
        },
        {
            id: "cloud-agnostic",
            title: "Cloud-Agnostic Lakehouse",
            description: "Unified architecture combining data lake flexibility with warehouse performance",
            bulletPoints: [
                "Open table formats (Delta, Iceberg)",
                "Multi-cloud portability strategy"
            ]
        },
        {
            id: "legacy-migration",
            title: "Legacy System Migration",
            description: "Risk-managed modernisation pathways",
            bulletPoints: [
                "Phased transition strategies",
                "Zero-downtime migrations"
            ]
        },
        {
            id: "streaming-batch",
            title: "Streaming & Batch Processing",
            description: "Scalable hybrid architectures for diverse workloads",
            bulletPoints: [
                "Lambda and Kappa patterns",
                "Real-time analytics at scale"
            ]
        }
    ]
};

// Intelligent Data Foundation Data
export const intelligentDataFoundation = {
    title: "Intelligent Data Foundation",
    description: "From lakehouse modernisation to LLM-ready feature stores, we engineer the intelligent data foundation that turns your organisation into an AI-powered enterprise, delivering insights at machine speed with human precision.",
    image: intelligentFoundationImg,
    stats: [
        {
            id: "faster-deployment",
            value: "10x",
            title: "Faster Deployment",
            description: "AI models to production"
        },
        {
            id: "reduced-overhead",
            value: "80%",
            title: "Reduced Overhead",
            description: "Pipeline maintenance costs"
        },
        {
            id: "system-reliability",
            value: "99.9%",
            title: "System Reliability",
            description: "Self-healing architecture"
        }
    ]
};

// Hero Section Data
export const dataEngineeringHero = {
    title: "Engineering Services with AI Native Architecture",
    subtitle: "Transforming traditional infrastructure into intelligent, AI-powered systems that drive real competitive advantage",
    image: dataEngineeringHeroImg
};
