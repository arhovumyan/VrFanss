import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/Footer";
import Router from "./Router";
import ForYouPage from "@/pages/ForYouPage";
import FollowingPage from "@/pages/following";
import CreatorsPage from "@/pages/creators";
import CreatorProfilePage from "@/pages/creator-profile";
import RecentChatsPage from "@/pages/recent-chats";
import SubscribePage from "@/pages/subscribe";
import CoinsPage from "@/pages/coins";
import CharacterProfilePage from "@/pages/character-profile";
import NotFound from "@/pages/not-found";
import CharacterShowcase from "@/pages/CharacterShowcase";
import AppLayout from "./components/layout/AppLayout";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppLayout>
          <Router />
        </AppLayout>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}


export default App;
