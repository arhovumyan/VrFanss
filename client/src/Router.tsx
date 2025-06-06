import { Switch, Route } from "wouter";
import ForYouPage from "@/pages/ForYouPage";
import FollowingPage from "@/pages/following";
import CreatorsPage from "@/pages/creators";
import CreatorProfilePage from "@/pages/creator-profile";
import RecentChatsPage from "@/pages/recent-chats";
import SubscribePage from "@/pages/SubscribePage";
import CoinsPage from "@/pages/CoinsPage";
import CharacterProfilePage from "@/pages/character-profile";
import CharacterShowcase from "@/components/CharacterShowcase";
import NotFound from "@/pages/not-found";
import RecentChats from "./pages/RecentChats";
import ChatPage from "./pages/Chat/ChatPage";
import CharacterProfile from "./pages/CharacterProfile";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserProfilePage from "./pages/UserProfilePage";
import CharacterGallery from "./pages/CharacterGallery";

export default function Router() {
  return (
    <Switch>
      <Route path="/" component={ForYouPage} />
      <Route path="/test-chat" component={ChatPage} />
      <Route path="/chat" component={RecentChats} />
      <Route path="/ForYouPage" component={ForYouPage} />
      <Route path="/following" component={FollowingPage} />
      <Route path="/creators" component={CreatorsPage} />
      <Route path="/creators/:id" component={CreatorProfilePage} />
      <Route path="/character/:id" component={CharacterProfilePage} />
      <Route path="/recent-chats" component={RecentChatsPage} />
      <Route path="/subscribe" component={SubscribePage} />
      <Route path="/coins" component={CoinsPage} />
      <Route path="/showcase" component={CharacterGallery} />
      <Route path="/character-profile" component={CharacterProfile} />
      <Route path="/favorites" component={FavoritesPage} />
      <Route path="/not-found" component={NotFoundPage} />
      <Route path="/user-profile/:id" component={UserProfilePage} />
      <Route component={NotFound} />
    </Switch>
  );
}