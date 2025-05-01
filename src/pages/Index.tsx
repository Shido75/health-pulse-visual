
import React, { useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import ProgressCard from "@/components/dashboard/ProgressCard";
import ActivityChart from "@/components/dashboard/ActivityChart";
import UserProfile from "@/components/dashboard/UserProfile";
import GoalSettingDialog from "@/components/dashboard/GoalSettingDialog";
import { Activity, Flag, Heart } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

// Mock data for weekly activity
const weeklyData = [
  { name: "Mon", steps: 7500, calories: 320, distance: 5.2 },
  { name: "Tue", steps: 9200, calories: 410, distance: 6.5 },
  { name: "Wed", steps: 8400, calories: 390, distance: 5.9 },
  { name: "Thu", steps: 7900, calories: 370, distance: 5.5 },
  { name: "Fri", steps: 11200, calories: 480, distance: 7.8 },
  { name: "Sat", steps: 10500, calories: 460, distance: 7.3 },
  { name: "Sun", steps: 8100, calories: 380, distance: 5.7 },
];

const Dashboard = () => {
  const [goals, setGoals] = useState({
    steps: 10000,
    calories: 500,
    distance: 8,
  });
  
  const [currentStats, setCurrentStats] = useState({
    steps: 8345,
    calories: 372,
    distance: 5.8,
    activeMinutes: 62,
    heartRate: 68,
    sleep: 7.2,
  });

  const handleSaveGoals = (newGoals: {
    steps: number;
    calories: number;
    distance: number;
  }) => {
    setGoals(newGoals);
    toast.success("Your fitness goals have been updated!");
  };

  // Simulate walking more steps
  const handleExerciseMore = () => {
    const newSteps = currentStats.steps + 1000;
    const newCalories = currentStats.calories + 45;
    const newDistance = parseFloat((currentStats.distance + 0.7).toFixed(1));
    
    setCurrentStats({
      ...currentStats,
      steps: newSteps,
      calories: newCalories,
      distance: newDistance,
    });
    
    toast.success("You've added a walking exercise to your day!");
  };

  return (
    <DashboardLayout>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Fitness Dashboard</h1>
          <p className="text-muted-foreground">
            Track your daily activity, set goals, and monitor your progress
          </p>
        </div>
        <div className="flex space-x-2">
          <Button onClick={handleExerciseMore} variant="outline">
            Simulate Walking
          </Button>
          <GoalSettingDialog currentGoals={goals} onSaveGoals={handleSaveGoals} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <ProgressCard
          title="Daily Steps"
          current={currentStats.steps}
          goal={goals.steps}
          icon={<Activity size={18} className="text-fitness-steps" />}
          unit="steps"
          progressColor="bg-fitness-steps"
        />
        <ProgressCard
          title="Calories Burned"
          current={currentStats.calories}
          goal={goals.calories}
          icon={<Flag size={18} className="text-fitness-calories" />}
          unit="kcal"
          progressColor="bg-fitness-calories"
        />
        <ProgressCard
          title="Distance Covered"
          current={currentStats.distance}
          goal={goals.distance}
          icon={<Flag size={18} className="text-fitness-distance" />}
          unit="km"
          progressColor="bg-fitness-distance"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard
          title="Active Minutes"
          value={currentStats.activeMinutes}
          description="Target: 60 mins daily"
          icon={<Activity size={18} className="text-fitness-primary" />}
        />
        <StatCard
          title="Avg. Heart Rate"
          value={`${currentStats.heartRate} bpm`}
          description="Resting"
          icon={<Heart size={18} className="text-fitness-primary" />}
          iconColor="bg-fitness-light"
        />
        <StatCard
          title="Sleep"
          value={`${currentStats.sleep} hrs`}
          description="Last night"
          icon={<Activity size={18} className="text-fitness-primary" />}
          iconColor="bg-fitness-light"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="md:col-span-3">
          <ActivityChart title="Weekly Activity" data={weeklyData} />
        </div>
        <div className="md:col-span-1">
          <UserProfile
            name="Alex Johnson"
            streak={7}
            level="Gold"
            achievements={["10K Steps", "Week Streak", "Early Bird"]}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
