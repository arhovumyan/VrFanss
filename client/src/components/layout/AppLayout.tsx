// src/components/layout/AppLayout.tsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/*
        2) Overlay: only rendered when sidebarOpen is true.
           It sits under the sidebar (z-40) and above the blurred content.
           Clicking it will close the sidebar.
      */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-transparent z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/*
        3) Wrap the rest of the app (header, main, footer) in a blur wrapper.
           When sidebarOpen is true, apply `filter blur-sm`.
      */}
      <div className={`
          transition-all duration-500 ease-in-out
          ${sidebarOpen ? "filter blur-sm" : ""}
        `}
      >
        {/* 4) Header is visible (blurred when sidebarOpen) */}
        <Header
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((open) => !open)}
        />

        {/* 5) Main content */}
        <main className="p-6">{children}</main>

        {/* 6) Footer always spans full width */}
        <Footer />
      </div>
    </div>
  );
}
