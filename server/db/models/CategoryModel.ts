import { Schema, model, Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  emoji: string;
}

const CategorySchema = new Schema<ICategory>({
  name:  { type: String, required: true },
  emoji: { type: String, required: true },
});

export const CategoryModel = model<ICategory>("Category", CategorySchema);
