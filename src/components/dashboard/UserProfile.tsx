
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface UserProfileProps {
  name: string;
  avatar?: string;
  streak: number;
  level: string;
  achievements: string[];
}

const UserProfile = ({
  name,
  avatar,
  streak,
  level,
  achievements,
}: UserProfileProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="h-16 w-16 border-2 border-fitness-primary">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="text-lg bg-fitness-light text-fitness-primary">
              {name?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <div className="flex items-center mt-1 space-x-2">
              <Badge variant="outline" className="bg-fitness-light border-fitness-primary text-fitness-primary">
                Level: {level}
              </Badge>
              <Badge variant="outline" className="bg-fitness-light border-fitness-primary text-fitness-primary">
                {streak} Day Streak 🔥
              </Badge>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2">Recent Achievements</h4>
          <div className="flex flex-wrap gap-2">
            {achievements.map((achievement, i) => (
              <Badge key={i} className="bg-fitness-primary">
                {achievement}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
