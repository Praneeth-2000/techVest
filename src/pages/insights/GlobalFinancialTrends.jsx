import React from "react";
import insightsContent from "@/content/insights";
import InsightDetailTemplate from "@/components/insights/InsightDetailTemplate";

export default function GlobalFinancialTrends() {
  const insight = insightsContent.find((item) => item.slug === "2024-global-financial-services");
  return <InsightDetailTemplate insight={insight} />;
}
