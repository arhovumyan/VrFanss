import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { CharacterCard } from "@/components/character-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Bot, MessageCircle, CalendarDays } from "lucide-react";
import type { Creator, User, Character } from "@shared/schema";

export default function CreatorProfilePage() {
  const { id } = useParams<{ id: string }>();
  
  const { data: creator, isLoading: creatorLoading } = useQuery<Creator>({
    queryKey: [`/api/creators/${id}`],
  });

  const { data: characters, isLoading: charactersLoading } = useQuery<Character[]>({
    queryKey: [`/api/characters/creator/${id}`],
    enabled: !!id,
  });

  // Mock user data - in real app this would come from joined query
  const mockUser: User = {
    id: 1,
    username: "aro11",
    email: "aro@example.com",
    password: "",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
    bio: "Creating immersive AI characters with depth and personality. Specializing in fantasy and sci-fi companions.",
    verified: true,
    coins: 0,
    createdAt: new Date()
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long' 
    }).format(date);
  };

  if (creatorLoading) {
    return (
      <div className="p-6">
        <div className="mb-8">
          <Skeleton className="h-32 w-full rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-64 w-full rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (!creator) {
    return (
      <div className="p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Creator not found</h1>
          <p className="text-muted-foreground">The creator you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Creator Header */}
      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-8 mb-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="relative">
            <img
              src={mockUser.avatar}
              alt={creator.displayName}
              className="w-24 h-24 rounded-full object-cover ring-4 ring-primary/30"
            />
            {mockUser.verified && (
              <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-2">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            )}
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl font-bold">{creator.displayName}</h1>
                  <Badge className="bg-primary/20 text-primary">
                    @{mockUser.username}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  {mockUser.bio}
                </p>
              </div>
              
              <div className="flex space-x-3">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
                  Follow
                </Button>
                <Button variant="outline">
                  Message
                </Button>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {creator.badges?.map((badge, index) => (
                <Badge key={index} variant="secondary" className="bg-amber-500/20 text-amber-400">
                  {badge}
                </Badge>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-400">
                  {formatNumber(creator.followerCount)}
                </div>
                <div className="text-sm text-muted-foreground flex items-center justify-center">
                  <Users className="w-4 h-4 mr-1" />
                  Followers
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">
                  {creator.characterCount}
                </div>
                <div className="text-sm text-muted-foreground flex items-center justify-center">
                  <Bot className="w-4 h-4 mr-1" />
                  Characters
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">
                  {formatNumber(creator.totalMessages)}
                </div>
                <div className="text-sm text-muted-foreground flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Messages
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">
                  {formatDate(creator.joinDate!)}
                </div>
                <div className="text-sm text-muted-foreground flex items-center justify-center">
                  <CalendarDays className="w-4 h-4 mr-1" />
                  Joined
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Characters Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">
          Characters by {creator.displayName}
        </h2>
        
        {charactersLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-64 w-full rounded-lg" />
            ))}
          </div>
        ) : characters && characters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Bot className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No characters yet</h3>
            <p className="text-muted-foreground">
              This creator hasn't published any characters yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
