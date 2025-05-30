import { IFollowStorage } from "./IFollowStorage";
import type { Follow, InsertFollow } from "@shared/schema";

export class FollowStorage implements IFollowStorage {
  private follows = new Map<number, Follow>();
  private nextId  = 1;

  async getFollow(followerId: number, followedId: number) {
    return Array.from(this.follows.values()).find(
      f => f.followerId === followerId && f.followedId === followedId
    );
  }

  async getFollowers(userId: number) {
    return Array.from(this.follows.values()).filter(f => f.followedId === userId);
  }

  async getFollowing(userId: number) {
    return Array.from(this.follows.values()).filter(f => f.followerId === userId);
  }

  async createFollow(insertFollow: InsertFollow): Promise<Follow> {
    const follow: Follow = {
      id:         this.nextId++,
      followerId: insertFollow.followerId ?? null,    // guaranteed number
      followedId: insertFollow.followedId ?? null,    // guaranteed number
      createdAt:  new Date()                  // Date satisfies Date|null
    };
    this.follows.set(follow.id, follow);
    return follow;
  }

  async deleteFollow(followerId: number, followedId: number): Promise<boolean> {
    const f = await this.getFollow(followerId, followedId);
    if (f) {
      this.follows.delete(f.id);
      return true;
    }
    return false;
  }
}