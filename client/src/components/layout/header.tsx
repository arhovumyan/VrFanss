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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black px-2 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-1">
        {/* 1) Sidebar toggle button */}
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-lg text-gray-100 hover:text-white cursor-pointer hover:scale-110 transition-transform duration-150"
        >
          {sidebarOpen ? (
            <Menu className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* 2) Home button */}
        <Link href="/ForYouPage">
          <Button variant="ghost" size="icon" className="mr-1 cursor-pointer hover:scale-110 transition-transform duration-150">
            <Home className="w-6 h-6" />
          </Button>
        </Link>

        {/* 3) Search input with search icon */}
        <div className="relative max-w-md flex items-center">
          <Search className="ml-1 mr-1 w-4 h-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search characters..."
            className="pl-2 border-0 w-56"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {/* 4) Coins button */}
        <Link href="/coins">
          <Button
            variant="outline"
            size="sm"
            className="bg-amber-500/20 border-amber-500/30 hover:bg-amber-500/30 cursor-pointer hover:scale-110 transition-transform duration-150"
          >
            <Coins className="w-6 h-6 text-amber-400 mr-2" />
            <span>1,250</span>
          </Button>
        </Link>

        {/* 5) User avatar icon */}
        <div className="flex items-center space-x-1">
          <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-150">
            <User className="w-6 h-6" />
          </div>
          <span className="text-sm font-medium pr-6">User</span>
        </div>
      </div>
    </header>
);
}
