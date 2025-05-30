import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Clock } from "lucide-react";
import { Link } from "wouter";

interface ChatWithCharacter {
  id: number;
  userId: number;
  characterId: number;
  lastMessage: string;
  lastActivity: Date;
  unreadCount: number;
  character: {
    id: number;
    name: string;
    avatar: string;
    tags: string[];
  };
}

export default function RecentChatsPage() {
  // Mock user ID - in real app this would come from auth context
  const userId = 1;
  
  const { data: chats, isLoading } = useQuery<ChatWithCharacter[]>({
    queryKey: [`/api/chats/user/${userId}`],
  });

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - new Date(date).getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return "Just now";
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="mb-8">
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-4 w-96" />
        </div>
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-20 w-full rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (!chats || chats.length === 0) {
    return (
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Recent Chats</h1>
          <p className="text-muted-foreground">
            Continue your conversations
          </p>
        </div>

        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <MessageCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No recent chats</h3>
            <p className="text-muted-foreground mb-6">
              Start a conversation with your favorite characters
            </p>
            <Link href="/for-you">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
                Discover Characters
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Recent Chats</h1>
        <p className="text-muted-foreground">
          Continue your conversations
        </p>
      </div>

      <div className="space-y-4">
        {chats.map((chat) => (
          <Card key={chat.id} className="hover:ring-2 hover:ring-primary/50 transition-all cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={chat.character.avatar}
                    alt={chat.character.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30"
                  />
                  {chat.unreadCount > 0 && (
                    <div className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                      {chat.unreadCount}
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-lg">{chat.character.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {formatTimeAgo(chat.lastActivity)}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-2 line-clamp-1">
                    {chat.lastMessage || "Start a conversation..."}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {chat.character.tags?.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-primary/20 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-end space-y-2">
                  {chat.unreadCount > 0 && (
                    <div className="w-3 h-3 bg-purple-500 rounded-full" />
                  )}
                  <Link href={`/character/${chat.character.id}`}>
                    <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
                      Continue Chat
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
