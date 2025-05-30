import { IChatStorage } from "./IChatStorage";
import type { Chat, InsertChat } from "../db/models/chats";
import { sampleChats } from "./seed";

export class ChatStorage implements IChatStorage {
  private chats = new Map<number, Chat>();
  private nextId = 1;

  constructor() {
    sampleChats.forEach(c => {
      const chat: Chat = {
        id:           this.nextId++,
        userId:       c.userId      ?? null,   // undefined → null
        characterId:  c.characterId ?? null,   // likewise
        lastMessage:  c.lastMessage ?? null,   // already doing this
        lastActivity: new Date(),
        unreadCount:  0       // 0 is a valid number|null
      };
      this.chats.set(chat.id, chat);
    });
  }

  async getChat(id: number) {
    return this.chats.get(id);
  }
  async getChatsByUser(userId: number) {
    return Array.from(this.chats.values())
      .filter(chat => chat.userId === userId);
  }
  async createChat(insertChat: InsertChat): Promise<Chat> {
    const chat: Chat = {
      id:           this.nextId++,
      userId:       insertChat.userId      ?? null,
      characterId:  insertChat.characterId ?? null,
      lastMessage:  insertChat.lastMessage ?? null,
      lastActivity: new Date(),
      unreadCount:  0
    };
    this.chats.set(chat.id, chat);
    return chat;
  }

  async updateChatActivity(id: number, lastMessage: string, unreadCount = 0) {
    const chat = this.chats.get(id);
    if (chat) {
      chat.lastMessage = lastMessage;
      chat.lastActivity = new Date();
      chat.unreadCount = unreadCount;
    }
    return chat;
  } 
}