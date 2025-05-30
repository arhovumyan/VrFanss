import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Heart, Home, Users, Star, MessageCircle, Plus, Image, Crown } from "lucide-react";

const navigation = [
  { name: "For You", href: "/for-you", icon: Home },
  { name: "Following", href: "/following", icon: Users },
  { name: "Top Creators", href: "/creators", icon: Star },
  { name: "Recent Chats", href: "/recent-chats", icon: MessageCircle },
];

const createItems = [
  { name: "Create Character", href: "/create-character", icon: Plus },
  { name: "Generate Images", href: "/generate-images", icon: Image },
];

const categories = [
  { name: "NSFW", emoji: "🔥" },
  { name: "Female", emoji: "👩‍🦰" },
  { name: "Male", emoji: "👨‍🦰" },
  { name: "Scenario", emoji: "🪢" },
  { name: "Fictional", emoji: "📚" },
  { name: "Anime", emoji: "📺" },
  { name: "Game", emoji: "🎮" },
  { name: "Romantic", emoji: "💞" },
];

export function Sidebar() {
  const [location] = useLocation();

  return (
    <aside className="hidden lg:flex w-64 flex-col bg-card border-r border-border">
      {/* Logo */}
      <div className="p-4 border-b border-border">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Heart className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            GirlfriendGPT
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  location === item.href || (location === "/" && item.href === "/for-you")
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Create Section */}
        <div className="mt-8">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Create
          </h3>
          <div className="space-y-2">
            {createItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Categories */}
        <div className="mt-8">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Explore
          </h3>
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.name}
                className="flex items-center space-x-3 w-full px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors text-left"
              >
                <span className="text-base">{category.emoji}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Subscription CTA */}
      <div className="p-4 border-t border-border">
        <Link href="/subscribe">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Crown className="w-5 h-5 text-purple-400" />
              <h4 className="font-semibold text-sm">Upgrade to Premium</h4>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Unlock unlimited conversations and premium features
            </p>
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
              Subscribe Now
            </button>
          </div>
        </Link>
      </div>
    </aside>
  );
}
