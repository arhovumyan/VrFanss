import type { User, InsertUser } from "../db/models/users";

export interface IUserStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUserCoins(id: number, coins: number): Promise<User | undefined>;
  deleteUser(id: number): Promise<User | undefined>;
  updateUser(id: number, update: Partial<InsertUser>): Promise<User | undefined>;
  getUsers(limit?: number, offset?: number): Promise<User[]>;
}