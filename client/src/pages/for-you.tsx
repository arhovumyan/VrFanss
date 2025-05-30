import { useQuery } from "@tanstack/react-query";
import { CharacterCard } from "@/components/character-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Character } from "@shared/schema";

export default function ForYouPage() {
  const { data: characters, isLoading } = useQuery<Character[]>({
    queryKey: ["/api/characters"],
  });

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="mb-8">
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-4 w-96" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
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

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">For You</h1>
        <p className="text-muted-foreground">
          Discover personalized AI companions tailored to your interests
        </p>
      </div>

      {/* Featured Characters */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="mr-2">🔥</span>
          Trending Now
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters?.slice(0, 4).map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </section>

      {/* All Characters */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="mr-2">✨</span>
          All Characters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {characters?.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </section>
    </div>
  );
}
