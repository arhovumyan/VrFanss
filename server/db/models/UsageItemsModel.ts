import { Schema, model, Document } from "mongoose";

export interface IUsageItem extends Document {
  icon: string;
  name: string;
  cost: number | string;
  color: string;
}

const UsageItemSchema = new Schema<IUsageItem>({
  icon:  { type: String, required: true },
  name:  { type: String, required: true },
  cost:  { type: Schema.Types.Mixed, required: true },
  color: { type: String, required: true },
});

export const UsageItemModel = model<IUsageItem>("UsageItem", UsageItemSchema);
