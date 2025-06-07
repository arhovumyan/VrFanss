import modelPic from "./pics/model.jpg";

import {
  Heart, Home, Users, Star, MessageCircle,
  Plus, Image,Coins,Video, Crown, X, Mic, Wand2
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
    name: "Mira",
    description: "Mira is an interstellar diplomat skilled at negotiating peace between warring planets.",
    rating: "PG",
    nsfw: false,
    chatCount: 9500,
  },
  // 2. Zephyr (male, Random User)
  {
    id: 23,
    avatar: modelPic,
    name: "Zephyr",
    description: "Zephyr controls the winds and rides storms like waves across the sky.",
    rating: "PG-13",
    nsfw: false,
    chatCount: 14300,
  },
  // 3. Nova (female, Random User)
  {
    id: 24,
    avatar: modelPic,
    name: "Nova",
    description: "Nova is an ex-pilot haunted by memories of a mission that went terribly wrong.",
    rating: "R",
    nsfw: true,
    chatCount: 20200,
  },
  // 4. Aria (female, Random User)
  {
    id: 25,
    avatar: modelPic,
    name: "Aria",
    description: "Aria is a traveling bard whose songs can heal the wounded and uplift the brokenhearted.",
    rating: "PG",
    nsfw: false,
    chatCount: 5400,
  },
  // 5. Orion (male, Random User)
  {
    id:  26,
    avatar: modelPic,
    name: "Orion",
    description: "Orion is a starship captain on a quest to map uncharted galaxies and discover new civilizations.",
    rating: "PG-13",
    nsfw: false,
    chatCount: 11800,
  },
  // 6. Lyra (female, Random User)
  {
    id: 27,
    avatar: modelPic,
    name: "Lyra",
    description: "Lyra is a techno-mage who blends ancient spells with cutting-edge cybernetics.",
    rating: "PG-13",
    nsfw: false,
    chatCount: 7900,
  },
  // 7. Kai (male, Random User)
  {
    id: 28,
    avatar: modelPic,
    name: "Kai",
    description: "Kai is a masked vigilante trying to uncover the city’s darkest secrets before they consume him.",
    rating: "R",
    nsfw: true,
    chatCount: 11200,
  },
  // 8. Ember (female, Random User)
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

export interface ChatItem {
  id: string;
  name: string;
  avatarUrl: string;
  snippet: string;
  unreadCount: number;
  lastTime: string;
}

export const dummyChats: ChatItem[] = [
  {
    id: "sasha-hailey",
    name: "Sasha and Hailey",
    avatarUrl: modelPic, 
    snippet:
      "The house party was supposed to be a small gathering, but {{user}} was still shocked when they saw their ex, Hailey, and Haile...",
    unreadCount: 1,
    lastTime: "10:20",
  },
  {
    id: "amy-goth-roommate",
    name: "Amy the Goth Roommate",
    avatarUrl: modelPic,
    snippet:
      'Amy smirks, her eyes following the trajectory of the smoke rings as they dissipate in the air. "Oh, I can already tell we\'re going t...',
    unreadCount: 3,
    lastTime: "May 28, 2025",
  },
  {
    id: "eriss",
    name: "Eriss",
    avatarUrl: modelPic,
    snippet:
      'You ring the bell on the desk and a woman appears from behind the door. "...Are you calling for me?" The knight from a former e...',
    unreadCount: 1,
    lastTime: "May 25, 2025",
  },
  // …you can add more items here as needed…
];

export interface CharacterHeaderData {
  avatarUrl: string;
  title: string;
  subtitle: string;
}

export interface ChatBubbleData {
  avatarUrl: string;
  speakerName: string;
  message: string;
}

export const CHARACTER_HEADER: CharacterHeaderData = {
  avatarUrl: modelPic,
  title: "Sasha and Hailey",
  subtitle:
    "You and your ex-girlfriend attend the same party, and you spend the night sulking and watching her from afar. Her best friend, and your mortal enemy, notices and confronts you as you go to refill...",
};

export const CHAT_BUBBLES: ChatBubbleData[] = [
  {
    avatarUrl: modelPic,
    speakerName: "Sasha",
    message: `The house party was supposed to be a small gathering, but aro was still shocked when they saw their ex, Hailey, and Hailey’s best friend, Sasha, both attending.  
aro and Hailey had been dating for a year before mutually breaking up, but their feelings never fully went away. Sasha on the other hand has always held a strong grudge against aro, a personal vendetta that was never truly explained.

Sasha, sharply dressed in a white button-up, black pants, and a mischievous glint in her eyes, saunters up to them as they refill their drink. She smirks, leaning casually against the counter.

“Well, well, well, if it isn’t aro! Didn’t expect to see your sulking face here. Feeling lonely watching Hailey flaunt her charm?” Sasha taunted, her voice dripping with sarcasm as she gestured towards aro’s ex.

Sasha chuckles, crossing her arms and tilting her head, her tone laced with faux sympathy. “You know, aro, jealousy doesn’t suit you. But hey, I guess you’ve got plenty of time to practice those brooding skills since you spend every waking moment stalking their every move. Oh, look at her now, flirting shamelessly with that rando. Bet you wish you were them, huh?” She flashes them a smug grin, trying her best to provoke them.`,
  },

];

export const recentTransactions = [
  {
    icon: Image,
    description: "Generated image for Luna",
    amount: -10,
    time: "2 hours ago",
    color: "text-purple-400",
  },
  {
    icon: Plus,
    description: "Monthly coin bonus",
    amount: 400,
    time: "1 day ago",
    color: "text-green-400",
  },
  {
    icon: Video,
    description: "Generated video for Aria",
    amount: -25,
    time: "3 days ago",
    color: "text-blue-400",
  },
  {
    icon: Coins,
    description: "Purchased 1,200 coins",
    amount: 1200,
    time: "1 week ago",
    color: "text-amber-400",
  },
];
export const coinPackages = [
  {
    name: "Starter Pack",
    coins: 500,
    price: 4.99,
    popular: false,
  },
  {
    name: "Value Pack",
    coins: 1200,
    price: 9.99,
    popular: true,
    savings: "Save 17%",
  },
  {
    name: "Mega Pack",
    coins: 2500,
    price: 19.99,
    popular: false,
    savings: "Save 20%",
  },
];

export const usageItems = [
  {
    icon: Image,
    name: "Image Generation",
    cost: 10,
    color: "text-purple-400",
  },
  {
    icon: Video,
    name: "Video Generation",
    cost: 25,
    color: "text-blue-400",
  },
  {
    icon: Mic,
    name: "Voice Messages",
    cost: 5,
    color: "text-green-400",
  },
  {
    icon: Wand2,
    name: "Premium Features",
    cost: "Variable",
    color: "text-amber-400",
  },
];