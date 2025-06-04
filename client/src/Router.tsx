import { Switch, Route } from "wouter";
import ForYouPage from "@/pages/ForYouPage";
import FollowingPage from "@/pages/following";
import CreatorsPage from "@/pages/creators";
import CreatorProfilePage from "@/pages/creator-profile";
import RecentChatsPage from "@/pages/recent-chats";
import SubscribePage from "@/pages/subscribe";
import CoinsPage from "@/pages/coins";
import CharacterProfilePage from "@/pages/character-profile";
import CharacterShowcase from "@/pages/CharacterShowcase";
import NotFound from "@/pages/not-found";
import RecentChats from "./pages/RecentChats";
import ChatPage from "./pages/Chat/ChatPage";

export default function Router() {
  return (
    <Switch>
      <Route path="/" component={ForYouPage} />
      <Route path="testChat" component={ChatPage} />
      <Route path="/chat" component={RecentChats} />
      <Route path="/ForYouPage" component={ForYouPage} />
      <Route path="/following" component={FollowingPage} />
      <Route path="/creators" component={CreatorsPage} />
      <Route path="/creators/:id" component={CreatorProfilePage} />
      <Route path="/character/:id" component={CharacterProfilePage} />
      <Route path="/recent-chats" component={RecentChatsPage} />
      <Route path="/subscribe" component={SubscribePage} />
      <Route path="/coins" component={CoinsPage} />
      <Route path="/showcase" component={CharacterShowcase} />
      <Route component={NotFound} />
    </Switch>
  );
}