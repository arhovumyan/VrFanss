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
  { icon: <Bookmark size={20} />,      text: "For You",        route: "/ForYouPage" },
  { icon: <User size={20} />,          text: "Profile",        route: "/user-profile/:id" },
  { icon: <MessageCircle size={20} />, text: "Chat",           route: "/chat" },
  { icon: <Bot size={20} />,           text: "Characters",     route: "/user-characters" },
  { icon: <Image size={20} />,         text: "Gallery",        route: "/showcase" },
  { icon: <Flame size={20} />,         text: "Favorites",      route: "/favorites" },
  { icon: <HandCoins size={20} />,     text: "Coins",          route: "/coins" },
  { icon: <Goal size={20} />,          text: "Membership",     route: "/subscribe" },
  { divider: true },
  { icon: <BookHeart size={20} />,     text: "Create a Model" },
  { icon: <FileImage size={20} />,     text: "Generate images" },
  { divider: true },
  { icon: <LayoutDashboard size={20} />, text: "Dashboard" },
  { icon: <LayoutDashboard size={20} />, text: "Dashboard" },
  { icon: <LayoutDashboard size={20} />, text: "Dashboard" },
  { icon: <LayoutDashboard size={20} />, text: "Dashboard" },
  { icon: <LayoutDashboard size={20} />, text: "Dashboard" },
  { icon: <LayoutDashboard size={20} />, text: "Dashboard" },
];

