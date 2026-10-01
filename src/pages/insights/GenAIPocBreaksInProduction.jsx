import React from "react";
import insightsContent from "@/content/insights";
import InsightDetailTemplate from "@/components/insights/InsightDetailTemplate";

export default function GenAIPocBreaksInProduction() {
    const insight = insightsContent.find((item) => item.slug === "genai-poc-breaks-production");
    return <InsightDetailTemplate insight={insight} />;
}
