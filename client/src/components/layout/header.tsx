import { useState } from "react";
import { Link } from "wouter";
import { Search, Coins, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="bg-card border-b border-border px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="w-5 h-5" />
        </Button>
        
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search characters..."
            className="pl-10 w-64"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/coins">
          <Button variant="outline" size="sm" className="bg-amber-500/20 border-amber-500/30 hover:bg-amber-500/30">
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
