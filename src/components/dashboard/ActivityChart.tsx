
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

interface ActivityChartProps {
  title: string;
  data: {
    name: string;
    steps: number;
    calories: number;
    distance: number;
  }[];
  className?: string;
}

const ActivityChart = ({ title, data, className }: ActivityChartProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pl-0">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #f1f1f1",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="steps"
              stroke="#4E9BF5"
              strokeWidth={2}
              activeDot={{ r: 8 }}
              name="Steps"
            />
            <Line
              type="monotone"
              dataKey="calories"
              stroke="#F5874E"
              strokeWidth={2}
              name="Calories"
            />
            <Line
              type="monotone"
              dataKey="distance"
              stroke="#4EF58F"
              strokeWidth={2}
              name="Distance (km)"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ActivityChart;
