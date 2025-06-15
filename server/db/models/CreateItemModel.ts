import { Schema, model, Document } from "mongoose";

export interface ICreateItem extends Document {
  name: string;
  href: string;
  icon: string;
}

const CreateItemSchema = new Schema<ICreateItem>({
  name: { type: String, required: true },
  href: { type: String, required: true },
  icon: { type: String, required: true },
});

export const CreateItemModel = model<ICreateItem>("CreateItem", CreateItemSchema);

