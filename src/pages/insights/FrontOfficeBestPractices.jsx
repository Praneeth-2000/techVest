import React from "react";
import insightsContent from "@/content/insights";
import InsightDetailTemplate from "@/components/insights/InsightDetailTemplate";

export default function FrontOfficeBestPractices() {
  const insight = insightsContent.find((item) => item.slug === "front-office-implementation-guide");
  return <InsightDetailTemplate insight={insight} />;
}
