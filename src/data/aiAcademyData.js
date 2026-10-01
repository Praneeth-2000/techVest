// AI Academy program images
import aiStrategyImage from "@/assets/images/AI Strategy & Leadership.jpg";
import corporateTrainingImage from "@/assets/images/Corporate AI Training Programs.jpg";
import bootcampImage from "@/assets/images/Hands-On AI Project Bootcamps.jpg";
import campusTrainingImage from "@/assets/images/Campus Training Program.jpg";





// AI Academy data
export const aiAcademyPrograms = [
    {
        id: "ai-strategy-leadership",
        title: "AI Strategy & Leadership",
        subtitle: "Lead the transformation, don't just manage it.",
        description: "Designed for C-suite executives, department heads, and senior managers, this program translates AI potential into business strategy. Participants leave with a clear framework for AI investment decisions, risk management, and organizational change.",
        bullets: [
            "Executive workshops and leadership intensives",
            "AI opportunity mapping for your business functions",
            "Governance, ethics, and responsible AI frameworks",
            "Competitive landscape analysis and future-readiness planning"
        ],
        image: aiStrategyImage
    },
    {
        id: "corporate-ai-training",
        title: "Corporate AI Training Programs",
        subtitle: "Build organizational fluency in AI — at scale.",
        description: "We design and deliver customized training programs for businesses at every stage of their AI journey. From introductory workshops for non-technical staff to advanced modules for your engineering and data teams, our curriculum is practical, role-specific, and immediately applicable.",
        bullets: [
            "Role-based learning tracks (technical, non-technical, managerial)",
            "Customized to your industry and existing tech stack",
            "Delivered on-site, virtually, or in a blended format",
            "Ongoing learning paths with assessments and certifications"
        ],
        image: corporateTrainingImage
    },
    {
        id: "hands-on-bootcamps",
        title: "Hands-On AI Project Bootcamps",
        subtitle: "Don't just learn AI. Build with it.",
        description: "Our intensive bootcamps take participants from concept to working prototype in days, not months. Teams tackle real-world challenges using modern AI tools and frameworks, guided by TechVest's expert practitioners every step of the way.",
        bullets: [
            "3 to 5-day immersive formats",
            "Teams work on real business problems, not generic case studies",
            "Access to curated AI toolkits, sandbox environments, and expert mentors",
            "Deliverable at the end: a working AI prototype or pilot-ready solution"
        ],
        image: bootcampImage
    },
    {
        id: "campus-training",
        title: "Campus Training Program",
        subtitle: "Shaping the Next Generation of AI Innovators.",
        description: "TechVest AI Academy partners with universities, colleges, and educational institutions to bring industry-relevant AI education directly to students. Our campus programs bridge the gap between academic learning and real-world application, giving students a competitive edge before they even enter the workforce.",
        bullets: [
            "Structured AI curriculum designed for undergraduate and postgraduate students",
            "Guest lectures, workshops, and seminars delivered by TechVest practitioners",
            "Capstone AI projects tied to real industry challenges",
            "Internship and placement support for top-performing participants",
            "Institutional partnerships for semester-long learning integrations"
        ],
        image: campusTrainingImage
    }
];

export const programFormats = [
    {
        format: "Awareness Workshop",
        duration: "Half-day / Full-day",
        bestFor: "All-staff AI introduction"
    },
    {
        format: "Skills Bootcamp",
        duration: "3–5 Days",
        bestFor: "Project teams & technical staff"
    },
    {
        format: "Leadership Intensive",
        duration: "2 Days",
        bestFor: "Executives & senior managers"
    },
    {
        format: "Campus Program",
        duration: "4–16 Weeks",
        bestFor: "University & college students"
    },
    {
        format: "Custom Learning Path",
        duration: "4–12 Weeks",
        bestFor: "Organization-wide transformation"
    }
];

export const targetAudience = [
    "Enterprises looking to build internal AI capability across departments",
    "Mid-sized businesses aiming to accelerate AI adoption without hiring a full data science team",
    "Leadership teams that need to make confident, informed decisions about AI investments",
    "Operational and functional teams in finance, HR, marketing, operations, and more",
    "Students & Academic Institutions looking to integrate practical AI education into their curriculum and prepare graduates for the AI-first job market"
];
