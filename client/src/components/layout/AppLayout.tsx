// src/components/layout/AppLayout.tsx
import React, { useState } from "react";
import Sidebar2 from "./Sidebar2";
import { Header } from "./Header";
import { MobileNav } from "./Footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  // 1) State for whether the sidebar is open
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 
        2) Sidebar2 is always fixed on top of everything else.
           No need to shift the main content. 
      */}
      <Sidebar2
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* 
        3) Header stays in the normal document flow.
           It does not shift; the sidebar will simply overlay on top of it.
      */}
      <Header
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((open) => !open)}
      />

      {/* 
        4) Main content sits “underneath” the sidebar. 
           We removed any ml-64 / ml-0 logic so it never shifts.
      */}
      <main className="p-6">
        {children}
      </main>

      {/* 
        5) MobileNav also stays in place; if you want it above the sidebar, 
           adjust z-index inside MobileNav. 
      */}
      <MobileNav sidebarOpen={sidebarOpen} />
    </div>
  );
}
