// src/components/layout/Header.tsx
import { Link } from "wouter";
import { Search, Coins, User, Home, Menu, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function Header({ sidebarOpen, onToggleSidebar }: HeaderProps) {
  return (
    <header className="bg-card px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {/* Always show the toggle button; swap icon based on sidebarOpen */}
        <button
          onClick={onToggleSidebar}
          className="p-1.5 rounded-lg text-gray-100 hover:text-white"
        >
          {sidebarOpen ? (
            <ChevronLeft className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>

        <Link href="/for-you">
          <Button variant="ghost" size="icon" className="mr-2">
            <Home className="w-5 h-5" />
          </Button>
        </Link>

        <div className="relative max-w-md">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground"
          />
          <Input
            type="search"
            placeholder="Search characters..."
            className="pl-10 border-0 w-64"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/coins">
          <Button
            variant="outline"
            size="sm"
            className="bg-amber-500/20 border-amber-500/30 hover:bg-amber-500/30"
          >
            <Coins className="w-4 h-4 text-amber-400 mr-2" />
            <span>1,250</span>
          </Button>
        </Link>

        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium">User</span>
        </div>
      </div>
    </header>
  );
}
