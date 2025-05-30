import { ICreatorStorage } from "./ICreatorStorage";
import type { Creator, InsertCreator } from "../db/models/creators";
import { sampleCreators } from "./seed";

export class CreatorStorage implements ICreatorStorage {
  private creators = new Map<number, Creator>();
  private nextId   = 1;

  constructor() {
    sampleCreators.forEach((c: InsertCreator) => {
      const creator: Creator = {
        id:             this.nextId++,
        userId:         c.userId      ?? null, // ensure no undefined
        displayName:    c.displayName,
        followerCount:  0,                    // default
        characterCount: 0,                    // default
        totalMessages:  0,                    // default
        joinDate:       new Date(),           // non-null
        badges:         []                    // non-null array
      };
      this.creators.set(creator.id, creator);
    });
  }

  async getCreator(id: number): Promise<Creator | undefined> {
    return this.creators.get(id);
  }

  // *** FIXED to explicitly return ***
  async getCreatorByUserId(userId: number): Promise<Creator | undefined> {
    return Array.from(this.creators.values())
      .find(c => c.userId === userId) ?? undefined;
  }

  // And we already fixed getCreators above:
  async getCreators(limit = 50, offset = 0): Promise<Creator[]> {
    return Array.from(this.creators.values())
      .slice(offset, offset + limit);
  }

  async createCreator(insertCreator: InsertCreator): Promise<Creator> {
    const creator: Creator = {
      id:             this.nextId++,
      userId:         insertCreator.userId      ?? null,
      displayName:    insertCreator.displayName,
      followerCount:  0,
      characterCount: 0,
      totalMessages:  0,
      joinDate:       new Date(),
      badges:         []
    };
    this.creators.set(creator.id, creator);
    return creator;
  }

  async updateCreatorStats(
    id: number,
    updates: Partial<Pick<Creator, "followerCount" | "characterCount" | "totalMessages">>
  ) {
    const cr = this.creators.get(id);
    if (cr) Object.assign(cr, updates);
    return cr;
  }
}