import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import ForYouPage from "@/pages/for-you";
import FollowingPage from "@/pages/following";
import CreatorsPage from "@/pages/creators";
import CreatorProfilePage from "@/pages/creator-profile";
import RecentChatsPage from "@/pages/recent-chats";
import SubscribePage from "@/pages/subscribe";
import CoinsPage from "@/pages/coins";
import CharacterProfilePage from "@/pages/character-profile";
import NotFound from "@/pages/not-found";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
      <MobileNav />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={ForYouPage} />
      <Route path="/for-you" component={ForYouPage} />
      <Route path="/following" component={FollowingPage} />
      <Route path="/creators" component={CreatorsPage} />
      <Route path="/creators/:id" component={CreatorProfilePage} />
      <Route path="/character/:id" component={CharacterProfilePage} />
      <Route path="/recent-chats" component={RecentChatsPage} />
      <Route path="/subscribe" component={SubscribePage} />
      <Route path="/coins" component={CoinsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
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
