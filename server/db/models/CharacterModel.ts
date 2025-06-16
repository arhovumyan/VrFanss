import { Schema, model, Document } from "mongoose";

export interface ICharacter extends Document {
  id: number;
  avatar?: string; 
  name: string;
  description: string;
  rating?: string;
  nsfw?: boolean;
  chatCount?: number;
}

const CharacterSchema = new Schema<ICharacter>({
  id:          { type: Number, required: true, unique: true },
  avatar:      { data: Buffer, contentType: String },
  name:        { type: String, required: true },
  description: { type: String, required: true },
  rating:      { type: String },
  nsfw:        { type: Boolean, default: false },
  chatCount:   { type: Number, default: 0 },
});

export const CharacterModel = model<ICharacter>("Character",CharacterSchema,"characters");