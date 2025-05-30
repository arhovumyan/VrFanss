import { pgTable, serial, integer, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { users } from "./users";

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

export const insertCreatorSchema = createInsertSchema(creators).pick({
  userId: true,
  displayName: true,
});

export type InsertCreator = z.infer<typeof insertCreatorSchema>;
export type Creator = typeof creators.$inferSelect;
