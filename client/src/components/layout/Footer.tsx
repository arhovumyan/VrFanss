// src/components/layout/MobileNav.tsx
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Home, Star, MessageCircle, Crown } from "lucide-react";

const navigation = [
  { name: "Home", href: "/for-you", icon: Home },
  { name: "Creators", href: "/creators", icon: Star },
  { name: "Chats", href: "/recent-chats", icon: MessageCircle },
  { name: "Premium", href: "/subscribe", icon: Crown },
];

export function MobileNav() {
  const [location] = useLocation();

  return (
    <nav
      className={`
        fixed 
        bottom-0 
        left-0 
        right-0 
        h-14 
        bg-black 
        z-40 
        flex 
        justify-around 
        items-center 
        border-t border-gray-700
      `}
    >
      {navigation.map((item) => {
        const Icon = item.icon;
        const isActive =
          location === item.href ||
          (location === "/" && item.href === "/for-you");

        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors",
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className="w-5 h-5" />
            <span className="text-xs font-medium">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
