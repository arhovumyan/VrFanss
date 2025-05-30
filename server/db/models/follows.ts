import { pgTable, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { users } from "./users";

export const follows = pgTable("follows", {
  id: serial("id").primaryKey(),
  followerId: integer("follower_id").references(() => users.id),
  followedId: integer("followed_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertFollowSchema = createInsertSchema(follows).pick({
  followerId: true,
  followedId: true,
});

export type InsertFollow = z.infer<typeof insertFollowSchema>;
export type Follow = typeof follows.$inferSelect;