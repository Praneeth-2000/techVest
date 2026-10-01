import React from "react";
import insightsContent from "@/content/insights";
import InsightDetailTemplate from "@/components/insights/InsightDetailTemplate";

export default function IBORAborImpacts() {
  const insight = insightsContent.find((item) => item.slug === "ibor-abor-2024-outlook");
  return <InsightDetailTemplate insight={insight} />;
}
