import { useLayoutEffect } from 'react';
import Layout from "./Layout.jsx";

import TechVestHome from "./TechVestHome";
import GlobalFinancialTrends from "./insights/GlobalFinancialTrends";
import GenAIPocBreaksInProduction from "./insights/GenAIPocBreaksInProduction";
import IBORAborImpacts from "./insights/IBORAborImpacts";
import FrontOfficeBestPractices from "./insights/FrontOfficeBestPractices";
import ServicesOverview from "./services/ServicesOverview";
import ConsultingServices from "./services/ConsultingServices";
import ConsultingServiceDetail from "./services/ConsultingServiceDetail";
import ProfessionalServices from "./services/ProfessionalServices";
import DeliveryServices from "./services/DeliveryServices";
import FinancialServices from "./services/FinancialServices";
import Retail from "./services/Retail";
import AIEngineering from "./services/AIEngineering";
import AIEngineeringDetail from "./services/AIEngineeringDetail";
import AIAcademy from "./services/AIAcademy";
import InvestmentManagement from "./services/InvestmentManagement";
import DataEngineering from "./services/DataEngineering";
import AnalyticsDataScience from "./services/AnalyticsDataScience";
import AIGovernance from "./services/AIGovernance";
import ISO42001ReadinessAssessment from "./services/ISO42001ReadinessAssessment";
import ISO42001AuditChecklist from "./services/ISO42001AuditChecklist";

import AILifecycle from "./frameworks/AILifecycle";
import AIMaturityFramework from "./frameworks/AIMaturityFramework";
import AIGovernanceTrustFramework from "./frameworks/AIGovernanceTrustFramework";
import Frameworks from "./frameworks/Frameworks";

import WhitePapers from "./resources/WhitePapers";
import CaseStudies from "./resources/CaseStudies";
import Webinars from "./resources/Webinars";

import AdvisoryServiceDetail from "./services/AdvisoryServiceDetail";
import DeliveryServiceDetail from "./services/DeliveryServiceDetail";
import ExpertiseOverview from "./expertise/ExpertiseOverview";
import ExpertiseDetail from "./expertise/ExpertiseDetail";

import AboutTechVest from "./about/AboutTechVest";
import Leadership from "./about/Leadership";
import Partnership from "./about/Partnership";
import About from "./about/About";
import SocialResponsibility from "./about/SocialResponsibility";
import Events from "./about/Events";
import Insights from "./insights/Insights";
import Blog from "./insights/Blog";
import BlogDetail from "./insights/BlogDetail";
import ISOFrameworksBlog from "./insights/ISOFrameworksBlog";
import Resources from "./insights/Resources";
import Careers from "./careers/Careers";
import CareersList from "./careers/CareersList";
import BenefitsAndCulture from "./careers/BenefitsAndCulture";
import OpportunitiesInner from "./careers/OpportunitiesInner";
import ProgramsAndLearning from "./careers/ProgramsAndLearning";
import Contact from "./Contact";
import PrivacyPolicy from "./PrivacyPolicy";
import ScrollToTop from "@/components/techvest/ScrollToTop";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    TechVestHome: TechVestHome,
    GlobalFinancialTrends: GlobalFinancialTrends,
    GenAIPocBreaksInProduction: GenAIPocBreaksInProduction,
    IBORAborImpacts: IBORAborImpacts,
    FrontOfficeBestPractices: FrontOfficeBestPractices,
    ServicesOverview: ServicesOverview,
    ConsultingServices: ConsultingServices,
    ProfessionalServices: ProfessionalServices,
    DeliveryServices: DeliveryServices,
    AdvisoryServiceDetail: AdvisoryServiceDetail,
    DeliveryServiceDetail: DeliveryServiceDetail,
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Page wrapper component to ensure scroll reset
const PageWrapper = ({ children }) => {
    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname, location.key]);

    return <>{children}</>;
};

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);

    return (
        <>
            <ScrollToTop />
            <Layout currentPageName={currentPage}>
                <PageWrapper>
                    <Routes>
                        <Route path="/" element={<TechVestHome />} />
                        <Route path="/TechVestHome" element={<TechVestHome />} />

                        {/* About Routes */}
                        <Route path="/about/techvest" element={<AboutTechVest />} />
                        <Route path="/about/leadership" element={<Leadership />} />
                        <Route path="/about/partnership" element={<Partnership />} />
                        <Route path="/about" element={<About />} />
                        {/* <Route path="/about/social-responsibility" element={<SocialResponsibility />} /> */}
                        <Route path="/about/events" element={<Events />} />

                        {/* Insights Routes */}
                        <Route path="/insights" element={<Insights />} />
                        <Route path="/insights/blog" element={<Blog />} />
                        <Route path="/insights/blog/iso-42001-vs-nist-ai-rmf-vs-eu-ai-act-vs-oecd-ai-principles" element={<ISOFrameworksBlog />} />
                        <Route path="/insights/blog/:slug" element={<BlogDetail />} />
                        <Route path="/insights/resources" element={<Resources />} />
                        <Route path="/insights/2024-global-financial-services" element={<GlobalFinancialTrends />} />
                        <Route path="/insights/genai-poc-breaks-production" element={<GenAIPocBreaksInProduction />} />
                        <Route path="/insights/ibor-abor-2024-outlook" element={<IBORAborImpacts />} />
                        <Route path="/insights/front-office-implementation-guide" element={<FrontOfficeBestPractices />} />

                        {/* Resources Routes */}
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/resources/white-papers" element={<WhitePapers />} />
                        <Route path="/resources/case-studies" element={<CaseStudies />} />
                        <Route path="/resources/webinars" element={<Webinars />} />

                        {/* Careers Routes */}
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/careers/opportunities" element={<CareersList />} />
                        <Route path="/careers/benefits-culture" element={<BenefitsAndCulture />} />
                        <Route path="/careers/programs-learning" element={<ProgramsAndLearning />} />
                        <Route path="/careers/opportunities/:id" element={<OpportunitiesInner />} />

                        {/* Contact Route */}
                        <Route path="/contact" element={<Contact />} />

                        {/* Privacy Policy Route */}
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                        {/* Services Routes */}
                        <Route path="/services" element={<ServicesOverview />} />
                        <Route path="/services/consulting" element={<ConsultingServices />} />
                        <Route path="/services/consulting/:slug" element={<ConsultingServiceDetail />} />
                        <Route path="/services/professional" element={<ProfessionalServices />} />
                        <Route path="/services/delivery" element={<DeliveryServices />} />
                        <Route path="/industries/financial-services" element={<FinancialServices />} />
                        <Route path="/industries/retail" element={<Retail />} />
                        <Route path="/services/ai-engineering" element={<AIEngineering />} />
                        <Route path="/services/ai-engineering/:slug" element={<AIEngineeringDetail />} />
                        <Route path="/services/ai-academy" element={<AIAcademy />} />
                        <Route path="/services/investment-management" element={<InvestmentManagement />} />
                        <Route path="/services/data-engineering" element={<DataEngineering />} />
                        <Route path="/services/analytics-data-science" element={<AnalyticsDataScience />} />
                        <Route path="/services/ai-governance" element={<AIGovernance />} />
                        <Route path="/services/ai-governance/iso-42001-readiness-assessment" element={<ISO42001ReadinessAssessment />} />
                        <Route path="/services/ai-governance/iso-42001-audit-checklist" element={<ISO42001AuditChecklist />} />

                        <Route path="/services/professional/:slug" element={<AdvisoryServiceDetail />} />
                        <Route path="/services/delivery/:slug" element={<DeliveryServiceDetail />} />

                        {/* Expertise Routes */}
                        <Route path="/industries" element={<ExpertiseOverview />} />
                        <Route path="/industries/:slug" element={<ExpertiseDetail />} />
                        <Route path="/service/:slug" element={<ExpertiseDetail />} />

                        {/* Framework Routes */}
                        <Route path="/frameworks" element={<Frameworks />} />
                        <Route path="/frameworks/ai-lifecycle" element={<AILifecycle />} />
                        <Route path="/frameworks/ai-maturity-framework" element={<AIMaturityFramework />} />
                        <Route path="/frameworks/ai-governance-trust-framework" element={<AIGovernanceTrustFramework />} />
                    </Routes>
                </PageWrapper>
            </Layout>
        </>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}