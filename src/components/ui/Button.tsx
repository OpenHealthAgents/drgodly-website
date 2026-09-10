import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "vital" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-vital-500/40 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 select-none";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5 font-semibold",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
    };

    const variantStyles = {
      primary:
        "bg-clinical-900 text-white hover:bg-clinical-800 shadow-clinical-md hover:shadow-clinical-lg hover:-translate-y-0.5 border border-clinical-700/40",
      vital:
        "bg-vital-600 text-white hover:bg-vital-700 shadow-clinical-md shadow-vital-600/20 hover:shadow-clinical-lg hover:shadow-vital-600/30 hover:-translate-y-0.5",
      secondary:
        "bg-clinical-100 text-clinical-900 hover:bg-clinical-200/80 border border-clinical-200/60 shadow-clinical-sm",
      outline:
        "bg-white/80 backdrop-blur text-clinical-800 border border-clinical-300/80 hover:bg-clinical-50 hover:border-clinical-400 shadow-clinical-sm",
      ghost:
        "text-clinical-700 hover:text-clinical-900 hover:bg-clinical-100/70",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {icon && iconPosition === "left" && (
              <span className="shrink-0">{icon}</span>
            )}
            <span>{children}</span>
            {icon && iconPosition === "right" && (
              <span className="shrink-0">{icon}</span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
