import type { Creator, InsertCreator } from "../db/models/creators";

export interface ICreatorStorage {
  getCreator(id: number): Promise<Creator | undefined>;
  getCreatorByUserId(userId: number): Promise<Creator | undefined>;
  getCreators(limit?: number, offset?: number): Promise<Creator[]>;
  createCreator(creator: InsertCreator): Promise<Creator>;
  updateCreatorStats(
    id: number,
    updates: { followerCount?: number; characterCount?: number; totalMessages?: number }
  ): Promise<Creator | undefined>;
}