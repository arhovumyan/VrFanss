import { pgTable, serial, integer, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { users } from "./users";
import { characters } from "./characters";

export const chats = pgTable("chats", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  characterId: integer("character_id").references(() => characters.id),
  lastMessage: text("last_message"),
  lastActivity: timestamp("last_activity").defaultNow(),
  unreadCount: integer("unread_count").default(0),
});

export const insertChatSchema = createInsertSchema(chats).pick({
  userId: true,
  characterId: true,
  lastMessage: true,
});

export type InsertChat = z.infer<typeof insertChatSchema>;
export type Chat = typeof chats.$inferSelect;