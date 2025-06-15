import { Schema, model, Document } from "mongoose";

export interface ICharacterHeader extends Document {
  avatarUrl: string;
  title: string;
  subtitle: string;
}

const CharacterHeaderSchema = new Schema<ICharacterHeader>({
  avatarUrl: { type: String, required: true },
  title:     { type: String, required: true },
  subtitle:  { type: String, required: true },
});

export const CharacterHeaderModel = model<ICharacterHeader>("CharacterHeader", CharacterHeaderSchema);
