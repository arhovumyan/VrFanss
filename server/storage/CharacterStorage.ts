
import { ICharacterStorage } from "./ICharacterStorage";
import { Character, InsertCharacter } from "../db/models/characters";
import { sampleCharacters } from "./seed";

export class CharacterStorage implements ICharacterStorage {
  private characters = new Map<number, Character>();
  private nextId = 1;

constructor() {
    sampleCharacters.forEach((c: InsertCharacter) => {
  const char: Character = {
    id:            this.nextId++,
    name:          c.name,
    description:   c.description,
    avatar:        c.avatar,
    createdAt:     new Date(),
    creatorId:     c.creatorId   ?? null,
    tags:          c.tags        ?? null,
    rating:        0,      // number|null
    messageCount:  0,      // number|null
    followerCount: 0,      // number|null
    isNsfw:        c.isNsfw    ?? null,
    isPublic:      c.isPublic  ?? null,
  };

  this.characters.set(char.id, char);
});
  }

  async getCharacter(id: number) {
    return this.characters.get(id);
  }
  async getCharacters(limit = 50, offset = 0) {
    return Array.from(this.characters.values())
      .filter(c => c.isPublic)
      .slice(offset, offset + limit);
  }
  async getCharactersByCreator(creatorId: number) {
    return Array.from(this.characters.values())
      .filter(c => c.creatorId === creatorId);
  }
  async getFollowedCharacters(userId: number) {
    // implement as before
    return [];
  }
  async createCharacter(insert: InsertCharacter): Promise<Character> {
    const char: Character = {
      id:            this.nextId++,
      name:          insert.name,
      description:   insert.description,
      avatar:        insert.avatar,
      createdAt:     new Date(),
      creatorId:     insert.creatorId   ?? null,  
      tags:          insert.tags        ?? [],    // or ?? null if your type allows null
      isNsfw:        insert.isNsfw      ?? false, // or ?? null
      isPublic:      insert.isPublic    ?? true,  // or ?? null
      rating:        0,    
      messageCount:  0,
      followerCount: 0
    };
  
    this.characters.set(char.id, char);
    return char;
  }
  async updateCharacterStats(id: number, updates: Partial<Pick<Character, 'rating' | 'messageCount' | 'followerCount'>>) {
    const char = this.characters.get(id);
    if (char) Object.assign(char, updates);
    return char;
  }
}