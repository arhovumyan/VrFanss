import { Schema, model, Document } from "mongoose";

export interface ICharacter extends Document {
  id: number;
  avatar: string;
  name: string;
  description: string;
  rating: string;
  nsfw: boolean;
  chatCount: number;
}

const CharacterSchema = new Schema<ICharacter>({
  id:        { type: Number, required: true, unique: true },
  avatar:    { type: String, required: true },
  name:      { type: String, required: true },
  description:{ type: String, required: true },
  rating:    { type: String, required: true },
  nsfw:      { type: Boolean, required: true },
  chatCount: { type: Number, required: true },
});

export const CharacterModel = model<ICharacter>("Character", CharacterSchema);
