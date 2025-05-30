import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Star, MessageCircle, Heart, Users, CheckCircle, Calendar } from "lucide-react";
import type { Character } from "@shared/schema";

export default function CharacterProfilePage() {
  const { id } = useParams<{ id: string }>();
  
  const { data: character, isLoading } = useQuery<Character>({
    queryKey: [`/api/characters/${id}`],
  });

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
        {hasHalfStar && <Star className="w-4 h-4 text-yellow-400 fill-current opacity-50" />}
        {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-muted-foreground" />
        ))}
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="mb-8">
          <Skeleton className="h-64 w-full rounded-lg" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-48 w-full rounded-lg" />
          </div>
          <div className="space-y-6">
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-32 w-full rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Character not found</h1>
          <p className="text-muted-foreground">The character you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // Mock creator data - in real app this would come from joined query
  const mockCreator = {
    id: 1,
    name: "Creator Name",
    username: "creator123",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
    bio: "Creating amazing AI characters",
    verified: true,
    followers: 15600,
  };

  // Mock related characters
  const relatedCharacters = [
    { id: 2, name: "Aria", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100", chats: 14200 },
    { id: 3, name: "Nova", avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100", chats: 13600 },
    { id: 4, name: "Echo", avatar: "https://images.unsplash.com/photo-1544376664-80b17f09d399?w=100", chats: 17200 },
  ];

  const sampleMessages = [
    {
      role: "character",
      content: `Hello there! I'm ${character.name}. What brings you to my realm today?`,
    },
    {
      role: "user", 
      content: "Hi! I'd love to learn more about your world.",
    },
    {
      role: "character",
      content: "Wonderful! My world is filled with ancient magic and mysterious creatures. Would you like me to show you around?",
    },
  ];

  return (
    <div className="p-6">
      {/* Character Header */}
      <Card className="mb-8 overflow-hidden">
        <div className="relative h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
          <img
            src={character.avatar}
            alt={character.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-end space-x-6">
              <img
                src={character.avatar}
                alt={character.name}
                className="w-24 h-24 rounded-lg border-4 border-white object-cover"
              />
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white mb-2">{character.name}</h1>
                <p className="text-gray-200 mb-3">{character.description}</p>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    {renderStars(character.rating || 0)}
                    <span className="ml-2 text-white font-medium">{character.rating}</span>
                  </div>
                  <span className="text-gray-200">
                    {formatNumber(character.messageCount || 0)} chats
                  </span>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Chat
                </Button>
                <Button variant="outline" size="icon" className="bg-black/20 border-white/20 text-white hover:bg-black/40">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Character Details */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">About {character.name}</h2>
              <p className="text-muted-foreground mb-6">
                {character.description} This character has been carefully crafted with a unique personality, 
                rich backstory, and engaging conversation style that will provide you with hours of entertaining 
                and meaningful interactions.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {character.tags?.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/20 text-primary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-400">
                    {formatNumber(character.messageCount || 0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Chats</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">
                    {formatNumber(character.followerCount || 0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">
                    {character.rating}
                  </div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-400">Premium</div>
                  <div className="text-sm text-muted-foreground">Tier</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sample Conversation */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Sample Conversation</h2>
              <div className="space-y-4">
                {sampleMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.role === 'character' && (
                      <img
                        src={character.avatar}
                        alt={character.name}
                        className="w-8 h-8 rounded-full object-cover mr-3 mt-1"
                      />
                    )}
                    <div
                      className={`max-w-xs rounded-lg p-3 ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                    {message.role === 'user' && (
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center ml-3 mt-1">
                        <div className="w-4 h-4 bg-muted-foreground rounded-full" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Creator Info */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Created by</h3>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={mockCreator.avatar}
                  alt={mockCreator.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">{mockCreator.name}</span>
                    {mockCreator.verified && (
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {formatNumber(mockCreator.followers)} followers
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{mockCreator.bio}</p>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
                Follow Creator
              </Button>
            </CardContent>
          </Card>

          {/* Related Characters */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">More from this creator</h3>
              <div className="space-y-3">
                {relatedCharacters.map((char) => (
                  <div
                    key={char.id}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                  >
                    <img
                      src={char.avatar}
                      alt={char.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-sm">{char.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {formatNumber(char.chats)} chats
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Features */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Chat Features</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Voice Messages</span>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Image Generation</span>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">NSFW Content</span>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Memory (8K)</span>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
