
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GoalSettingDialogProps {
  currentGoals: {
    steps: number;
    calories: number;
    distance: number;
  };
  onSaveGoals: (goals: { steps: number; calories: number; distance: number }) => void;
}

const GoalSettingDialog = ({ currentGoals, onSaveGoals }: GoalSettingDialogProps) => {
  const [goals, setGoals] = useState(currentGoals);
  const [isOpen, setIsOpen] = useState(false);

  const handleGoalChange = (type: "steps" | "calories" | "distance", value: string) => {
    const numValue = parseInt(value) || 0;
    setGoals({ ...goals, [type]: numValue });
  };

  const handleSave = () => {
    onSaveGoals(goals);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Update Goals</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Set Your Fitness Goals</DialogTitle>
          <DialogDescription>
            Customize your daily fitness targets to meet your health objectives.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="steps" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="steps">Steps</TabsTrigger>
            <TabsTrigger value="calories">Calories</TabsTrigger>
            <TabsTrigger value="distance">Distance</TabsTrigger>
          </TabsList>

          <TabsContent value="steps">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="steps" className="text-right col-span-1">
                  Daily Steps
                </Label>
                <Input
                  id="steps"
                  type="number"
                  className="col-span-3"
                  value={goals.steps}
                  onChange={(e) => handleGoalChange("steps", e.target.value)}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Recommended daily step count is between 8,000-10,000 steps.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="calories">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="calories" className="text-right col-span-1">
                  Daily Calories
                </Label>
                <Input
                  id="calories"
                  type="number"
                  className="col-span-3"
                  value={goals.calories}
                  onChange={(e) => handleGoalChange("calories", e.target.value)}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Calorie burn goals will vary based on your activity level and weight.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="distance">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="distance" className="text-right col-span-1">
                  Daily Distance (km)
                </Label>
                <Input
                  id="distance"
                  type="number"
                  step="0.1"
                  className="col-span-3"
                  value={goals.distance}
                  onChange={(e) => handleGoalChange("distance", e.target.value)}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Around 6-8 km per day is recommended for maintaining good health.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Goals</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GoalSettingDialog;
