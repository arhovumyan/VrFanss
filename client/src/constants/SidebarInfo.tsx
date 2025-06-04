//SidebarInfo.tsx
import { 
  LayoutDashboard, 
  User, 
  Settings, 
  BarChart, 
  BarChart3,
  Bookmark,
  MessageCircle,
  Bot,
  Image,
  Flame,
  HandCoins,
  Goal,
  BookHeart,
  FileImage,


  
} from "lucide-react";

export const sidebarItems = [
  { icon: <Bookmark size={20} />, text: "For You", route: "/ForYouPage", alert: true },
  { icon: <User size={20} />, text: "Profile" },
  { icon: <MessageCircle size={20} />, text: "Chat", route: "/chat" },
  { icon: <Bot size={20} />, text: "Characters" },
  { icon: <Image size={20} />, text: "gllery" },
  { icon: <Flame size={20} />, text: "Favorites" },
  { icon: <HandCoins size={20} />, text: "Coins" },
  { icon: <Goal size={20} />, text: "Membership" },
    //divider
  { divider: true },
  { icon: <BookHeart size={20} />, text: "Create a Model" },
  { icon: <FileImage size={20} />, text: "Generate images" },
  { divider: true },
  { icon: <LayoutDashboard size={20} />, text: "Dashboard" },
  { icon: <LayoutDashboard size={20} />, text: "Dashboard" },
  { icon: <LayoutDashboard size={20} />, text: "Dashboard" },
  { icon: <LayoutDashboard size={20} />, text: "Dashboard" },
  { icon: <LayoutDashboard size={20} />, text: "Dashboard" },
  { icon: <LayoutDashboard size={20} />, text: "Dashboard" },



];

