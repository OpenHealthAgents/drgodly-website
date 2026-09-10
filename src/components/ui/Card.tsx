import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "glass" | "solid" | "dark" | "gradient" | "outline" | "vitalSubtle";
  elevation?: "none" | "sm" | "md" | "lg";
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "solid",
  elevation = "sm",
  hoverEffect = false,
  className,
  ...props
}) => {
  const elevationStyles = {
    none: "shadow-none",
    sm: "shadow-clinical-sm",
    md: "shadow-clinical-md",
    lg: "shadow-clinical-lg",
  };

  const variantStyles = {
    solid: "bg-white border border-clinical-200",
    glass: "bg-white/90 backdrop-blur-md border border-clinical-200/90",
    dark: "bg-clinical-950 text-white border border-clinical-800",
    gradient: "bg-gradient-to-b from-white to-clinical-50/70 border border-clinical-200",
    outline: "bg-transparent border border-clinical-200",
    vitalSubtle: "bg-vital-50/50 border border-vital-200/80 text-clinical-900",
  };

  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-200",
        variantStyles[variant],
        elevationStyles[elevation],
        hoverEffect && "hover:shadow-clinical-md hover:border-vital-500/40 hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
