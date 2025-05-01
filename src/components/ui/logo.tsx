
import React from "react";
import { Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, showText = true, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="bg-fitness-gradient rounded-full p-1.5 flex items-center justify-center">
        <Activity 
          size={iconSizes[size]} 
          className="text-white" 
          strokeWidth={2.5}
        />
      </div>
      {showText && (
        <span className={cn("font-bold tracking-tight text-fitness-primary", sizeClasses[size])}>
          Health<span className="text-fitness-secondary">Pulse</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
