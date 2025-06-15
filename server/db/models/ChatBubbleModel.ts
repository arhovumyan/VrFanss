import { Schema, model, Document } from "mongoose";

export interface IChatBubble extends Document {
  avatarUrl: string;
  speakerName: string;
  message: string;
}

const ChatBubbleSchema = new Schema<IChatBubble>({
  avatarUrl:   { type: String, required: true },
  speakerName: { type: String, required: true },
  message:     { type: String, required: true },
});

export const ChatBubbleModel = model<IChatBubble>("ChatBubble", ChatBubbleSchema);
