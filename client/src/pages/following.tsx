import { useQuery } from "@tanstack/react-query";
import { CharacterCard } from "@/components/character-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { Link } from "wouter";
import type { Character } from "@shared/schema";

export default function FollowingPage() {
  // Mock user ID - in real app this would come from auth context
  const userId = 1;
  
  const { data: characters, isLoading } = useQuery<Character[]>({
    queryKey: [`/api/characters/following/${userId}`],
  });

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="mb-8">
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-4 w-96" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!characters || characters.length === 0) {
    return (
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Following</h1>
          <p className="text-muted-foreground">
            Characters from creators you follow
          </p>
        </div>

        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No followed characters yet</h3>
            <p className="text-muted-foreground mb-6">
              Start following creators to see their characters here
            </p>
            <Link href="/creators">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
                Discover Creators
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
        <h1 className="text-3xl font-bold mb-2">Following</h1>
        <p className="text-muted-foreground">
          Characters from creators you follow
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {characters.map((character) => (
          <CharacterCard 
            key={character.id} 
            character={character} 
            showFollowButton={true}
          />
        ))}
      </div>
    </div>
  );
}
