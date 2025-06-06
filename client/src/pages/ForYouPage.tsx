// src/pages/ForYouPage.tsx
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import CharacterShowcase from "@/components/CharacterShowcase";
import type { Character } from "@/constants";
import "@/index.css";

export default function ForYouPage() {
  const { data: characters, isLoading } = useQuery<Character[]>({
    queryKey: ["/api/characters"],
  });

  if (isLoading) {
    return (
      <div className="page-container mx-auto px-4 lg:px-0">
        <div className="section">
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-4 w-96" />
        </div>
        <div className="grid-all">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="skeleton-container">
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
    <div className=" pt-10 pb-10 page-container mx-auto px-4 lg:px-0">
      <div className="section ">
        <p className="page-subheading"></p>
      </div>

      <CharacterShowcase />
    </div>
  );
}
