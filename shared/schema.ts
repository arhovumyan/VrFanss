import { pgTable, text, serial, integer, boolean, timestamp, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  avatar: text("avatar"),
  bio: text("bio"),
  verified: boolean("verified").default(false),
  coins: integer("coins").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const characters = pgTable("characters", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  avatar: text("avatar").notNull(),
  creatorId: integer("creator_id").references(() => users.id),
  tags: text("tags").array(),
  rating: real("rating").default(0),      
  messageCount: integer("message_count").default(0),
  followerCount: integer("follower_count").default(0),
  isNsfw: boolean("is_nsfw").default(false),
  isPublic: boolean("is_public").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const creators = pgTable("creators", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  displayName: text("display_name").notNull(),
  followerCount: integer("follower_count").default(0),
  characterCount: integer("character_count").default(0),
  totalMessages: integer("total_messages").default(0),
  joinDate: timestamp("join_date").defaultNow(),
  badges: text("badges").array(),
});

export const chats = pgTable("chats", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  characterId: integer("character_id").references(() => characters.id),
  lastMessage: text("last_message"),
  lastActivity: timestamp("last_activity").defaultNow(),
  unreadCount: integer("unread_count").default(0),
});

export const follows = pgTable("follows", {
  id: serial("id").primaryKey(),
  followerId: integer("follower_id").references(() => users.id),
  followedId: integer("followed_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  password: true,
  avatar: true,
  bio: true,
});

export const insertCharacterSchema = createInsertSchema(characters).pick({
  name: true,
  description: true,
  avatar: true,
  creatorId: true,
  tags: true,
  isNsfw: true,
  isPublic: true,
});

export const insertCreatorSchema = createInsertSchema(creators).pick({
  userId: true,
  displayName: true,
});

export const insertChatSchema = createInsertSchema(chats).pick({
  userId: true,
  characterId: true,
  lastMessage: true,
});

export const insertFollowSchema = createInsertSchema(follows).pick({
  followerId: true,
  followedId: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertCharacter = z.infer<typeof insertCharacterSchema>;
export type InsertCreator = z.infer<typeof insertCreatorSchema>;
export type InsertChat = z.infer<typeof insertChatSchema>;
export type InsertFollow = z.infer<typeof insertFollowSchema>;

export type User = typeof users.$inferSelect;
export type Character = typeof characters.$inferSelect;
export type Creator = typeof creators.$inferSelect;
export type Chat = typeof chats.$inferSelect;
export type Follow = typeof follows.$inferSelect;
