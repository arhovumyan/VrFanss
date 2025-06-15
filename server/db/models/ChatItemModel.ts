import { Schema, model, Document } from "mongoose";

export interface IChatItem extends Document {
  id: string;
  name: string;
  avatarUrl: string;
  snippet: string;
  unreadCount: number;
  lastTime: string;
}

const ChatItemSchema = new Schema<IChatItem>({
  id:          { type: String, required: true, unique: true },
  name:        { type: String, required: true },
  avatarUrl:   { type: String, required: true },
  snippet:     { type: String, required: true },
  unreadCount: { type: Number, required: true },
  lastTime:    { type: String, required: true },
});

export const ChatItemModel = model<IChatItem>("ChatItem", ChatItemSchema);
