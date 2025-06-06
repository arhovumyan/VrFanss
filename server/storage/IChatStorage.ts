import type { Chat, InsertChat } from "../db/models/chats";

export interface IChatStorage {
  getChat(id: number): Promise<Chat | undefined>;
  getChatsByUser(userId: number): Promise<Chat[]>;
  createChat(chat: InsertChat): Promise<Chat>;
  updateChatActivity(
    id: number,
    lastMessage: string,
    unreadCount?: number
  ): Promise<Chat | undefined>;
}
