import { pgTable, text, serial, integer, boolean, timestamp, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { users } from "./users";

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

export const insertCharacterSchema = createInsertSchema(characters).pick({
  name: true,
  description: true,
  avatar: true,
  creatorId: true,
  tags: true,
  isNsfw: true,
  isPublic: true,
});

export type InsertCharacter = z.infer<typeof insertCharacterSchema>;
export type Character = typeof characters.$inferSelect;