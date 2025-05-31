import { IUserStorage } from "./IUserStorage";
import type { User, InsertUser } from "../db/models/users";
import { sampleUsers } from "./seed";

export class UserStorage implements IUserStorage {
  private users = new Map<number, User>();
  private nextId = 1;

  constructor() {
    sampleUsers.forEach((u: InsertUser) => {
      const user: User = {
        // required by User
        id:        this.nextId++,
        username:  u.username,
        email:     u.email,
        password:  u.password,

        // coalesce optional fields → null if undefined
        avatar:    u.avatar  ?? null,
        bio:       u.bio     ?? null,

        // these must be present on User
        verified:  false,   // or u.verified ?? false if your seed provides it
        coins:     0,       // or u.coins    ?? 0 if seed has it
        
        createdAt: new Date()
      };
      this.users.set(user.id, user);
    });
  }

  async getUser(id: number) {
    return this.users.get(id);
  }
  async deleteUser(id: number) {
    const user = this.users.get(id);
    if (user) {
      this.users.delete(id);
      return user;
    }
    return undefined;
  }
  async updateUser(id: number, update: Partial<InsertUser>) {
    const user = this.users.get(id);
    if (!user) return undefined;
    const updatedUser: User = {
      ...user,
      ...update,
      // ensure required fields are not overwritten
      id:        user.id,
      username:  user.username,
      email:     user.email,
      password:  user.password,
      createdAt: user.createdAt
    };
    this.users.set(id, updatedUser);
    return updatedUser;
  } 

  async getUserByUsername(username: string) {
    return Array.from(this.users.values()).find(u => u.username === username);
  }
  async getUsers(limit: number, offset: number) {
    return Array.from(this.users.values());
  }
  async getUserByEmail(email: string) {
    return Array.from(this.users.values()).find(u => u.email === email);
  }
  async createUser(insert: InsertUser): Promise<User> {
    const newUser: User = {
      id:        this.nextId++,
      username:  insert.username,
      email:     insert.email,
      password:  insert.password,

      avatar:    insert.avatar ?? null,
      bio:       insert.bio    ?? null,

      verified:  false,
      coins:     0,

      createdAt: new Date()
    };
    this.users.set(newUser.id, newUser);
    return newUser;
  }
  async updateUserCoins(id: number, coins: number) {
    const u = this.users.get(id);
    if (u) {
      u.coins = coins;
      this.users.set(id, u);
    }
    return u;
  }
}