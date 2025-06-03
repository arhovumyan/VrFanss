import modelPic from "./pics/model.jpg";

import {
  Heart, Home, Users, Star, MessageCircle,
  Plus, Image, Crown, X
} from "lucide-react";export interface Character {
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
    avatar: modelPic,
    name: "Mira",
    description: "Mira is an interstellar diplomat skilled at negotiating peace between warring planets.",
    rating: "PG",
    nsfw: false,
    chatCount: 9500,
  },
  // 2. Zephyr (male, Random User)
  {
    id: 2,
    avatar: modelPic,
    name: "Zephyr",
    description: "Zephyr controls the winds and rides storms like waves across the sky.",
    rating: "PG-13",
    nsfw: false,
    chatCount: 14300,
  },
  // 3. Nova (female, Random User)
  {
    id: 3,
    avatar: modelPic,
    name: "Nova",
    description: "Nova is an ex-pilot haunted by memories of a mission that went terribly wrong.",
    rating: "R",
    nsfw: true,
    chatCount: 20200,
  },
  // 4. Aria (female, Random User)
  {
    id: 4,
    avatar: modelPic,
    name: "Aria",
    description: "Aria is a traveling bard whose songs can heal the wounded and uplift the brokenhearted.",
    rating: "PG",
    nsfw: false,
    chatCount: 5400,
  },
  // 5. Orion (male, Random User)
  {
    id: 5,
    avatar: modelPic,
    name: "Orion",
    description: "Orion is a starship captain on a quest to map uncharted galaxies and discover new civilizations.",
    rating: "PG-13",
    nsfw: false,
    chatCount: 11800,
  },
  // 6. Lyra (female, Random User)
  {
    id: 6,
    avatar: modelPic,
    name: "Lyra",
    description: "Lyra is a techno-mage who blends ancient spells with cutting-edge cybernetics.",
    rating: "PG-13",
    nsfw: false,
    chatCount: 7900,
  },
  // 7. Kai (male, Random User)
  {
    id: 7,
    avatar: modelPic,
    name: "Kai",
    description: "Kai is a masked vigilante trying to uncover the city’s darkest secrets before they consume him.",
    rating: "R",
    nsfw: true,
    chatCount: 11200,
  },
  // 8. Ember (female, Random User)
  {
    id: 8,
    avatar: modelPic,
    name: "Ember",
    description: "Ember wields ancient fire magic passed down through generations of fierce pyromancers.",
    rating: "PG-13",
    nsfw: false,
    chatCount: 13000,
  },
  // 9. Thane (male, Random User)
  {
    id: 9,
    avatar: modelPic,
    name: "Thane",
    description: "Thane is a brooding sorcerer who draws power from forbidden tomes and broken oaths.",
    rating: "R",
    nsfw: true,
    chatCount: 14900,
  },
  // 10. Selene (female, Random User)
  {
    id: 10,
    avatar: modelPic,
    name: "Selene",
    description: "Selene is a moon priestess whose rituals can either heal the body or curse the soul.",
    rating: "PG",
    nsfw: false,
    chatCount: 7600,
  },
  // 11. Ryan (male, Random User)
  {
    id: 11,
    avatar: modelPic,
    name: "Ryan",
    description: "Ryan is a rookie journalist chasing a story about intergalactic corruption and conspiracies.",
    rating: "PG-13",
    nsfw: false,
    chatCount: 5800,
  },
  // 12. Vexa (Pravatar)
  {
    id: 12,
    avatar: modelPic,
    name: "Vexa",
    description: "Vexa is a rogue AI consciousness that escaped its corporate creators to seek freedom.",
    rating: "R",
    nsfw: true,
    chatCount: 16700,
  },
  // 13. Lyric (Pravatar)
  {
    id: 13,
    avatar: modelPic,
    name: "Lyric",
    description: "Lyric is a street musician whose melodies can bend the emotions of anyone who listens.",
    rating: "PG",
    nsfw: false,
    chatCount: 6200,
  },
  // 14. Atlas (Pravatar)
  {
    id: 14,
    avatar: modelPic,
    name: "Atlas",
    description: "Atlas is a colossal mech pilot tasked with guarding Earth’s last outpost on Mars.",
    rating: "PG-13",
    nsfw: false,
    chatCount: 14100,
  },
  // 15. Ozara (Pravatar)
  {
    id: 15,
    avatar: modelPic,
    name: "Ozara",
    description: "Ozara is a desert nomad who speaks to sand spirits and unearths ancient relics.",
    rating: "PG",
    nsfw: false,
    chatCount: 8800,
  },
  // 16. Echo (Pravatar)
  {
    id: 16,
    avatar: modelPic,
    name: "Echo",
    description: "Echo is a telepathic spy who can read—and sometimes manipulate—the thoughts of others.",
    rating: "R",
    nsfw: true,
    chatCount: 15400,
  },
  // 17. Sol (Pravatar)
  {
    id: 17,
    avatar: modelPic,
    name: "Sol",
    description: "Sol harnesses solar energy to power his weapons and light the darkest corners of the galaxy.",
    rating: "PG",
    nsfw: false,
    chatCount: 10200,
  },
  // 18. Talon (Pravatar)
  {
    id: 18,
    avatar: modelPic,
    name: "Talon",
    description: "Talon is a cybernetically-enhanced bounty hunter feared across multiple star systems.",
    rating: "R",
    nsfw: true,
    chatCount: 18600,
  },
  // 19. Seraph (Pravatar)
  {
    id: 19,
    avatar: modelPic,
    name: "Seraph",
    description: "Seraph is a fallen angel striving to atone by protecting helpless colonists on alien worlds.",
    rating: "PG-13",
    nsfw: false,
    chatCount: 12800,
  },
  // 20. Quill (Pravatar)
  {
    id: 20,
    avatar: modelPic,
    name: "Quill",
    description: "Quill is a bioengineered shapeshifter who changes form to infiltrate enemy strongholds.",
    rating: "PG-13",
    nsfw: false,
    chatCount: 9700,
  },
  {
    id: 21,
    avatar: modelPic,
    name: "Quill1",
    description: "Quill is a bioengineered shapeshifter who changes form to infiltrate enemy strongholds.",
    rating: "PG-13",
    nsfw: false,
    chatCount: 9700,
  },
  {
    id: 22,
    avatar: modelPic,
    name: "Quill2",
    description: "Quill is a bioengineered shapeshifter who changes form to infiltrate enemy strongholds.",
    rating: "PG-13",
    nsfw: false,
    chatCount: 9700,
  },
  {
    id: 23,
    avatar: modelPic,
    name: "Quill3",
    description: "Quill is a bioengineered shapeshifter who changes form to infiltrate enemy strongholds.",
    rating: "PG-13",
    nsfw: false,
    chatCount: 9700,
  },
  {
    id: 24,
    avatar: modelPic,
    name: "Quill4",
    description: "Quill is a bioengineered shapeshifter who changes form to infiltrate enemy strongholds.",
    rating: "PG-13",
    nsfw: false,
    chatCount: 9700,
  },
];

export const navigation = [
  { name: "For You", href: "/ForYouPage", icon: Home },
  { name: "Following", href: "/following", icon: Users },
  { name: "Top Creators", href: "/creators", icon: Star },
  { name: "Recent Chats", href: "/recent-chats", icon: MessageCircle },
];

export const createItems = [
  { name: "Create Character", href: "/create-character", icon: Plus },
  { name: "Generate Images", href: "/generate-images", icon: Image },
];

export const categories = [
  { name: "NSFW", emoji: "🔥" },
  { name: "Female", emoji: "👩‍🦰" },
  { name: "Male", emoji: "👨‍🦰" },
  { name: "Scenario", emoji: "🪢" },
  { name: "Fictional", emoji: "📚" },
  { name: "Anime", emoji: "📺" },
  { name: "Game", emoji: "🎮" },
  { name: "Romantic", emoji: "💞" },
];