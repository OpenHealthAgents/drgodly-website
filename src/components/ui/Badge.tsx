import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "vital" | "intel" | "warning" | "neutral" | "clinical" | "critical" | "success";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "vital",
  size = "md",
  className,
  icon,
}) => {
  const variantStyles = {
    vital: "bg-vital-50 text-vital-800 border-vital-200",
    intel: "bg-intel-50 text-intel-800 border-intel-200",
    warning: "bg-amber-50 text-amber-800 border-amber-200",
    critical: "bg-red-50 text-red-800 border-red-200",
    success: "bg-emerald-50 text-emerald-800 border-emerald-200",
    neutral: "bg-clinical-100 text-clinical-700 border-clinical-200",
    clinical: "bg-clinical-900 text-white border-clinical-800",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[10px] gap-1",
    md: "px-2.5 py-1 text-xs gap-1.5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full border tracking-wide transition-colors select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
