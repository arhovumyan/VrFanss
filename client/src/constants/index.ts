export interface Character {
  id: number;
  avatar: string;
  name: string;
  description: string;
  rating: string;
  nsfw: boolean;
  chatCount: number;
}

export const characters: Character[] = [
  {
    id: 1,
    avatar: "https://example.com/avatar1.jpg",
    name: "Luna",
    description: "You wake up next to Luna. You have no memory of the night before...",
    rating: "R",
    nsfw: true,
    chatCount: 13500,
  },
  {
    id: 2,
    avatar: "https://example.com/avatar2.jpg",
    name: "Nova",
    description: "Nova is your childhood friend... or something more?",
    rating: "PG",
    nsfw: false,
    chatCount: 8200,
  },
];