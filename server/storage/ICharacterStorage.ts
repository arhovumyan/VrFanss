import type { Character, InsertCharacter } from "@shared/schema";

export interface ICharacterStorage {
  getCharacter(id: number): Promise<Character | undefined>;
  getCharacters(limit?: number, offset?: number): Promise<Character[]>;
  getCharactersByCreator(creatorId: number): Promise<Character[]>;
  getFollowedCharacters(userId: number): Promise<Character[]>;
  createCharacter(character: InsertCharacter): Promise<Character>;
  updateCharacterStats(
    id: number,
    updates: { rating?: number; messageCount?: number; followerCount?: number }
  ): Promise<Character | undefined>;
}
