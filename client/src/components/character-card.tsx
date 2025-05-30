import { Link } from "wouter";
import { Star, MessageCircle, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Character } from "@shared/schema";

interface CharacterCardProps {
  character: Character;
  showFollowButton?: boolean;
}

export function CharacterCard({ character, showFollowButton = false }: CharacterCardProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <Card className="group overflow-hidden hover:ring-2 hover:ring-primary/50 transition-all duration-300 hover:scale-105">
      <div className="relative">
        <img
          src={character.avatar}
          alt={character.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 rounded-lg text-sm flex items-center space-x-1">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          <span className="text-white">{character.rating}</span>
        </div>

        {/* Follow Button */}
        {showFollowButton && (
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-3 left-3 bg-black/70 hover:bg-black/90 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="w-4 h-4" />
          </Button>
        )}

        {/* Character Info Overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-bold text-lg text-white mb-1">{character.name}</h3>
          <p className="text-xs text-gray-300">by Creator</p>
        </div>
      </div>

      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {character.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {character.tags?.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-primary/20 text-primary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1 text-muted-foreground">
            <MessageCircle className="w-4 h-4" />
            <span>{formatNumber(character.messageCount || 0)}</span>
          </div>
          
          <Link href={`/character/${character.id}`}>
            <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
              Chat
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
