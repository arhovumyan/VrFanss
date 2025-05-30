// server/storage/seed.ts
import type {
    InsertUser,
    InsertCreator,
    InsertCharacter,
    InsertChat
  } from "@shared/schema";
  
  export const sampleUsers: InsertUser[] = [
    {
      username: "ArtistMika",
      email:    "mika@example.com",
      password: "password",
      avatar:   "https://images.unsplash.com/photo-1494790108755-2616c46b4ee2?w=200",
      bio:      "Creating beautiful AI companions",
    //   verified: true,
    //   coins:    2500
    },
    {
      username: "AnimeCreator",
      email:    "anime@example.com",
      password: "password",
      avatar:   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      bio:      "Anime character specialist",
    //   verified: true,
    //   coins:    1800
    }
    // …add the rest of your sample users here
  ];
  
  export const sampleCreators: InsertCreator[] = [
    {
      userId:        1,
      displayName:   "Mika Arts",
    //   followerCount: 15600,
    //   characterCount: 8,
    //   totalMessages: 125000,
    //   badges:        ["Top Creator", "Verified"]
    },
    {
      userId:        2,
      displayName:   "Anime Studios",
    //   followerCount: 22400,
    //   characterCount: 12,
    //   totalMessages: 187000,
    //   badges:        ["Anime Expert", "Verified"]
    }
    // …etc
  ];
  
  export const sampleCharacters: InsertCharacter[] = [
    {
      name:         "Luna",
      description:  "A mysterious AI companion who loves philosophy.",
      avatar:       "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
      creatorId:    1,
      tags:         ["Mysterious", "Philosophy"],
      isNsfw:       false,
      isPublic:     true
    },
    {
      name:         "Sakura",
      description:  "Cheerful anime-style friend for adventures.",
      avatar:       "https://images.unsplash.com/photo-1494790108755-2616c0763c96?w=400",
      creatorId:    2,
      tags:         ["Cheerful", "Adventure"],
      isNsfw:       false,
      isPublic:     true
    }
    // …etc
  ];
  
  export const sampleChats: InsertChat[] = [
    {
      userId:       1,
      characterId:  1,
      lastMessage:  "Your insights on art amaze me!",
      //unreadCount:  2
    },
    {
      userId:       1,
      characterId:  2,
      lastMessage:  "Ready for another quest?",
      //unreadCount:  0
    }
    // …etc
  ];