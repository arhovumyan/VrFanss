//SidebarInfo.tsx
import { 
  LayoutDashboard, 
  User, 
  Settings, 
  BarChart, 
  BarChart3 
} from "lucide-react";

export const sidebarItems = [
  { icon: <LayoutDashboard size={20} />, text: "Dashboard", alert: true },
  { icon: <BarChart3 size={20} />, text: "Analytics" },
  { icon: <BarChart size={20} />, text: "Reports" },
  { icon: <User size={20} />, text: "Profile" },
  { icon: <Settings size={20} />, text: "Settings" },
  { icon: <LayoutDashboard size={20} />, text: "Dashboard" },
  // a divider
  { divider: true },
  { icon: <LayoutDashboard size={20} />, text: "Dashboard" },
  { icon: <LayoutDashboard size={20} />, text: "Dashboard" },
];