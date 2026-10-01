// AI Engineering Services Data

// Import service card icons (66x66)
import aiAdvisoryIcon from "@/assets/images/ai-advisory-icon.svg";
import aiEcosystemIcon from "@/assets/images/ai-ecosystem-icon.svg";
import modelEngineeringIcon from "@/assets/images/model-engineering-icon.svg";
import llmAppDevIcon from "@/assets/images/llm-app-dev-icon.svg";
import platformIntegrationIcon from "@/assets/images/platform-integration-icon.svg";

// Import Gen AI Advisory Services card images (440x250)
import establishingTaskForceImg from "@/assets/images/establishing-gen-ai-task-force.png";
import developingStrategyRoadmapImg from "@/assets/images/developing-gen-ai-strategy-roadmap.png";
import assessingReadinessImg from "@/assets/images/assessing-organizational-readiness.png";
import buildingGovernanceImg from "@/assets/images/building-governance-compliance-security.png";

// Import Gen AI Ecosystem & Innovation card images (440x250)
import infrastructureEvaluationImg from "@/assets/images/gen-ai-infrastructure-evaluation.png";
import pilotPocDevelopmentImg from "@/assets/images/pilot-poc-development.png";
import establishEcosystemImg from "@/assets/images/establish-gen-ai-ecosystem.png";
import coInnovationLabImg from "@/assets/images/co-innovation-gen-ai-lab.png";

// Import Model Engineering & Application card images (440x250)
import modelIdentificationImg from "@/assets/images/model-identification-evaluation.png";
import dataCurationImg from "@/assets/images/data-curation-preparation.png";
import fineTuningDatasetsImg from "@/assets/images/fine-tuning-enterprise-datasets.png";

// Import LLM-Based Application Development card images (440x250)
import agenticAISystemsImg from "@/assets/images/agentic-ai-systems.jpg";
import llmBasedAppsImg from "@/assets/images/llm-based-applications.png";
import verticalSpecificAppsImg from "@/assets/images/vertical-specific-gen-ai-apps.png";
import deployMaintainModelsImg from "@/assets/images/deploy-maintain-gen-ai-models.png";

// Import Gen AI Platform Integration card images (440x250)
import enterpriseAppIntegrationImg from "@/assets/images/enterprise-app-integration.png";
import promptEngineeringImg from "@/assets/images/prompt-engineering.png";
import existingModelIntegrationImg from "@/assets/images/existing-ai-ml-model-integration.png";

export const aiEngineeringServices = [
    {
        id: "gen-ai-advisory-services",
        title: "Gen AI Advisory Services",
        slug: "gen-ai-advisory-services",
        description: "Comprehensive advisory services to guide you from strategy to deployment and ongoing optimization of your Generative AI journey.",
        icon: aiAdvisoryIcon,
        hasIntro: true,
        introText: "Embark on your Generative AI (Gen AI) journey with our comprehensive advisory services, designed to guide you from strategy to deployment and ongoing optimization.",
        cards: [
            {
                id: "establishing-gen-ai-task-force",
                heading: "Establishing Gen AI Task Force",
                description: "We help you establish a dedicated Gen AI task force to champion adoption, align with business objectives, and oversee implementation across your organization.",
                image: establishingTaskForceImg
            },
            {
                id: "developing-gen-ai-strategy-roadmap",
                heading: "Developing Gen AI Strategy & Roadmap",
                description: "Leveraging our AI/ML frameworks and solutions, we craft an inclusive Gen AI adoption strategy with a clear roadmap using leading Gen AI technologies.",
                image: developingStrategyRoadmapImg
            },
            {
                id: "assessing-organizational-readiness",
                heading: "Assessing Your Organizational Readiness",
                description: "Using our proprietary evaluation frameworks, we assess your capabilities against industry best practices to accelerate your Gen AI readiness.",
                image: assessingReadinessImg
            },
            {
                id: "building-governance-compliance-security",
                heading: "Building Governance, Compliance & Security Framework",
                description: "We prioritize robust governance in all Gen AI implementations, developing strategies that ensure regulatory compliance and address security and privacy concerns.",
                image: buildingGovernanceImg
            }
        ]
    },
    {
        id: "gen-ai-ecosystem-innovation",
        title: "Gen AI Ecosystem & Innovation",
        slug: "gen-ai-ecosystem-innovation",
        description: "Building a comprehensive environment for AI-powered growth with co-innovation labs and proof-of-concept development.",
        icon: aiEcosystemIcon,
        hasIntro: true,
        introText: "Building a comprehensive environment for AI-powered growth",
        cards: [
            {
                id: "gen-ai-infrastructure-evaluation",
                heading: "Gen AI Environment & Infrastructure Evaluation",
                description: "We assess your current infrastructure's capabilities using specialized utilities, identifying areas for enhancement or modernization to optimally support Gen AI services, whether on-premise or in cloud environments.",
                image: infrastructureEvaluationImg
            },
            {
                id: "pilot-poc-development",
                heading: "Pilot & Proof-of-Concept Development",
                description: "We develop scalable and reliable pilot programs and POCs, leveraging AI services of leading cloud platforms to effectively assess how Gen AI can address your specific business needs.",
                image: pilotPocDevelopmentImg
            },
            {
                id: "establish-gen-ai-ecosystem",
                heading: "Establish Gen AI Ecosystem",
                description: "We'll help you create a vibrant Gen AI ecosystem by integrating essential tools, technologies, models, programming languages, and sandboxes. This fosters an environment where your teams can experiment, co-innovate, and develop cutting-edge solutions.",
                image: establishEcosystemImg
            },
            {
                id: "co-innovation-gen-ai-lab",
                heading: "Co-Innovation Gen AI Lab",
                description: "Our co-innovation Gen AI lab, built on leading cloud infrastructure, offers a collaborative space for your teams to work alongside our experts to explore new AI possibilities and prototype customized solutions.",
                image: coInnovationLabImg
            }
        ]
    },
    {
        id: "model-engineering-application",
        title: "Model Engineering & Application",
        slug: "model-engineering-application",
        description: "Expert model identification, evaluation, data curation, and fine-tuning services tailored to your business objectives.",
        icon: modelEngineeringIcon,
        hasIntro: false,
        cards: [
            {
                id: "model-identification-evaluation",
                heading: "Model Identification & Evaluation",
                description: "Leveraging our specialized frameworks, we help you identify and evaluate Gen AI models that directly align with your business objectives. By utilizing built-in algorithms and frameworks, we ensure optimal outcomes tailored to your specific use cases.",
                image: modelIdentificationImg
            },
            {
                id: "data-curation-preparation",
                heading: "Data Curation & Preparation",
                description: "We meticulously curate and prepare datasets using advanced data tools, leveraging the vast data storage and processing capabilities of cloud platforms. This ensures your data is clean, organized, and highly relevant, setting the stage for effective AI applications.",
                image: dataCurationImg
            },
            {
                id: "fine-tuning-enterprise-datasets",
                heading: "Fine-Tuning with Enterprise/Domain Datasets",
                description: "Our model tuning feature allows us to customize Gen AI models precisely to your business requirements. We fine-tune models by ingesting your specific domain datasets, ensuring they excel within your industry and achieve unparalleled relevance and precision.",
                image: fineTuningDatasetsImg
            }
        ]
    },
    {
        id: "llm-based-application-development",
        title: "LLM-Based Application Development",
        slug: "llm-based-application-development",
        description: "Design and develop powerful applications leveraging Large Language Models for content generation, translation, and analysis.",
        icon: llmAppDevIcon,
        hasIntro: false,
        cards: [
            {
                id: "llm-based-applications",
                heading: "LLM-Based Applications",
                description: "Leveraging the power of Large Language Models (LLMs), we design applications that deeply understand and generate human-like text. These solutions facilitate advanced content generation, accurate language translation, and intelligent data analysis, significantly enhancing user experiences across various domains.",
                image: llmBasedAppsImg
            },
            {
                id: "vertical-specific-gen-ai-apps",
                heading: "Vertical-Specific Gen AI Apps",
                description: "We design and develop industry-specific Gen AI applications, customized to address unique challenges within your sector. These specialized solutions deliver enhanced efficiency and innovation tailored to your vertical.",
                image: verticalSpecificAppsImg
            },
            {
                id: "deploy-maintain-gen-ai-models",
                heading: "Deploy & Maintain Gen AI Models",
                description: "We manage the deployment and ongoing maintenance of your Gen AI models. Our service ensures they perform optimally, adapt to changing needs, and deliver long-term value to your organization.",
                image: deployMaintainModelsImg
            },
            {
                id: "agentic-ai-systems",
                heading: "Agentic AI Systems",
                description: "We build autonomous, goal-oriented AI agents that plan, reason, and act across systems. These agentic solutions orchestrate tools, data, and workflows with built-in controls and human oversight, enabling scalable intelligent automation beyond traditional Gen AI applications.",
                image: agenticAISystemsImg
            }
        ]
    },
    {
        id: "gen-ai-platform-integration",
        title: "Gen AI Platform Integration",
        slug: "gen-ai-platform-integration",
        description: "Seamlessly integrate Gen AI services with your enterprise applications and develop sophisticated prompt-based solutions.",
        icon: platformIntegrationIcon,
        hasIntro: false,
        cards: [
            {
                id: "enterprise-app-integration",
                heading: "Enterprise Application Integration",
                description: "We integrate Gen AI services with your critical enterprise applications, such as ERP, ServiceNow, and Salesforce (SFDC), as well as custom applications. This streamlines your business processes and simplifies the utilization of Gen AI capabilities within your existing workflows.",
                image: enterpriseAppIntegrationImg
            },
            {
                id: "prompt-engineering",
                heading: "Prompt Engineering",
                description: "We specialize in developing prompt-based Gen AI solutions. Whether it's sophisticated chatbots, automated content creation, or intelligent assistants, our solutions enable human-like communication and significant productivity enhancements.",
                image: promptEngineeringImg
            },
            {
                id: "existing-ai-ml-model-integration",
                heading: "Existing AI/ML Model Integration",
                description: "We seamlessly integrate new Gen AI services with your existing AI/ML models.",
                image: existingModelIntegrationImg
            }
        ]
    },
    // {
    //     id: "investment-management",
    //     title: "Investment Management",
    //     slug: "investment-management",
    //     description: "Comprehensive investment management solutions across front office, middle office, back office, data management, outsourcing, and alternative operations.",
    //     icon: platformIntegrationIcon,
    //     hasIntro: false,
    //     cards: []
    // }
];
