import type { Follow, InsertFollow } from "@shared/schema";

export interface IFollowStorage {
  getFollow(followerId: number, followedId: number): Promise<Follow | undefined>;
  getFollowers(userId: number): Promise<Follow[]>;
  getFollowing(userId: number): Promise<Follow[]>;
  createFollow(follow: InsertFollow): Promise<Follow>;
  deleteFollow(followerId: number, followedId: number): Promise<boolean>;
}