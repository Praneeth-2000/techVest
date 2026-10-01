import React from "react";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  kickerClass = "",
  titleClass = "",
  subtitleClass = "",
  className = "",
}) {
  const alignClasses =
    align === "left"
      ? "items-start text-left"
      : align === "right"
        ? "items-end text-right"
        : "items-center text-center";

  return (
    <div className={`section-header ${alignClasses} ${className}`}>
      {eyebrow && (
        <p className={`section-kicker ${align !== "center" ? "text-left" : ""} ${kickerClass}`}>
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className={`section-title ${titleClass}`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`section-subtitle ${align === "center" ? "text-center" : "text-left"} ${subtitleClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
