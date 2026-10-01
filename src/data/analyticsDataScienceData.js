// Analytics & Data Science Services Data

// Import service card icons
import predictiveAnalyticsIcon from "@/assets/images/predictive-analytics-icon.svg";
import advancedAnalyticsBIIcon from "@/assets/images/advanced-analytics-bi-icon.svg";
import mlopsDataScienceIcon from "@/assets/images/mlops-data-science-icon.svg";

// Import detail page images (844x478)
import predictiveAnalyticsImg from "@/assets/images/ai-powered-predictive-analytics.png";
import advancedAnalyticsImg from "@/assets/images/advanced-analytics-bi-modernisation.png";
import mlopsProductionImg from "@/assets/images/mlops-production-data-science.png";

export const analyticsDataScienceServices = [
    {
        id: "ai-powered-predictive-analytics",
        title: "AI-Powered Predictive Analytics",
        slug: "ai-powered-predictive-analytics",
        description: "Deploy intelligent forecasting and decision-making systems.",
        icon: predictiveAnalyticsIcon,
        subtitle: "Deploy intelligent forecasting and decision-making systems with:",
        mainImage: predictiveAnalyticsImg,
        features: [
            {
                id: "custom-ml-models",
                heading: "Custom Machine Learning Models",
                text: "Demand forecasting, churn prediction, and risk assessment"
            },
            {
                id: "predictive-feature-2",
                heading: "Automated Insight Generation",
                text: "Translates data patterns into business recommendations"
            },
            {
                id: "predictive-feature-3",
                heading: "Real-Time Predictive Dashboards",
                text: "Update and learn continuously"
            },
            {
                id: "predictive-feature-4",
                heading: "Prescriptive Analytics",
                text: "Recommend optimal actions, not just predictions"
            }
        ],
        bottomText: "Businesses need to move from 'what happened' to 'what will happen' and 'what should we do'—AI-powered predictions deliver actionable foresight."
    },
    {
        id: "advanced-analytics-bi-modernisation",
        title: "Advanced Analytics & BI Modernisation",
        slug: "advanced-analytics-bi-modernisation",
        description: "Transform data into strategic assets with:",
        icon: advancedAnalyticsBIIcon,
        subtitle: "Transform data into strategic assets with:",
        mainImage: advancedAnalyticsImg,
        features: [
            {
                id: "bi-feature-1",
                heading: "Self-Service Analytics Platforms",
                text: "With embedded AI recommendations"
            },
            {
                id: "bi-feature-2",
                heading: "Real-Time Streaming Analytics",
                text: "For instant operational insights"
            },
            {
                id: "bi-feature-3",
                heading: "Customer 360° Analytics",
                text: "With behavioural segmentation and journey mapping"
            },
            {
                id: "bi-feature-4",
                heading: "Automated Anomaly Detection",
                text: "And intelligent alerting systems"
            }
        ],
        bottomText: "Traditional BI is reactive and manual. Modern analytics platforms with AI augmentation democratise insights and enable data-driven culture at scale."
    },
    {
        id: "mlops-production-data-science",
        title: "MLOps & Production Data Science",
        slug: "mlops-production-data-science",
        description: "Industrialise data science with enterprise-grade infrastructure:",
        icon: mlopsDataScienceIcon,
        subtitle: "Industrialise data science with enterprise-grade infrastructure:",
        mainImage: mlopsProductionImg,
        features: [
            {
                id: "mlops-feature-1",
                heading: "End-to-End ML Lifecycle Management",
                text: "From experimentation to deployment"
            },
            {
                id: "mlops-feature-2",
                heading: "Model Monitoring & Versioning",
                text: "Automated retraining pipelines"
            },
            {
                id: "mlops-feature-3",
                heading: "A/B Testing Frameworks",
                text: "And experiment tracking"
            },
            {
                id: "mlops-feature-4",
                heading: "Scalable Infrastructure",
                text: "Feature engineering and model serving"
            }
        ],
        bottomText: "Enterprise data science requires robust infrastructure, automated workflows, and continuous monitoring to deliver reliable AI solutions at scale."
    }
];
