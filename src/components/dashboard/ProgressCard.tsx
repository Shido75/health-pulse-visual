
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ProgressCardProps {
  title: string;
  current: number;
  goal: number;
  icon: React.ReactNode;
  unit: string;
  className?: string;
  progressColor?: string;
}

const ProgressCard = ({
  title,
  current,
  goal,
  icon,
  unit,
  className,
  progressColor = "bg-fitness-primary",
}: ProgressCardProps) => {
  const percentage = Math.min(Math.round((current / goal) * 100), 100);
  
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="p-2 rounded-full bg-fitness-light">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <div className="text-2xl font-bold">
            {current.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">{unit}</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Goal: {goal.toLocaleString()} {unit}
          </div>
        </div>
        <div className="relative pt-1">
          <Progress 
            value={percentage} 
            className={cn("h-2", progressColor)}
          />
          <div className="flex justify-end mt-1">
            <span className="text-xs font-semibold text-muted-foreground">{percentage}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressCard;
