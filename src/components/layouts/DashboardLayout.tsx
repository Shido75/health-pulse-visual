
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Activity, BarChart, Bell, Heart, List, Settings, User } from "lucide-react";
import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger } from "@/components/ui/sidebar";
import Logo from "@/components/ui/logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const menuItems = [
  {
    icon: <Activity size={20} />,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: <BarChart size={20} />,
    label: "Progress",
    href: "/progress",
  },
  {
    icon: <Heart size={20} />,
    label: "Workouts",
    href: "/workouts",
  },
  {
    icon: <List size={20} />,
    label: "Goals",
    href: "/goals",
  },
  {
    icon: <User size={20} />,
    label: "Profile",
    href: "/profile",
  },
  {
    icon: <Settings size={20} />,
    label: "Settings",
    href: "/settings",
  },
];

const DashboardLayout = ({ children, className }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r">
          <div className="py-6 px-4 flex items-center justify-center">
            <Logo size="md" />
          </div>
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      asChild
                    >
                      <a href={item.href} className="flex items-center space-x-2">
                        {item.icon}
                        <span>{item.label}</span>
                      </a>
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="border-b bg-background h-16 flex items-center px-6">
            <SidebarTrigger className="mr-4" />
            <div className="flex items-center justify-between w-full">
              <h2 className="font-medium text-lg">Fitness Dashboard</h2>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button variant="ghost" size="icon">
                  <Bell size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <User size={20} />
                </Button>
              </div>
            </div>
          </header>
          <main className={cn("flex-1 overflow-auto p-6", className)}>
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
