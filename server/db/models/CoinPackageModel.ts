import { Schema, model, Document } from "mongoose";

export interface ICoinPackage extends Document {
  name: string;
  coins: number;
  price: number;
  popular: boolean;
  savings?: string;
}

const CoinPackageSchema = new Schema<ICoinPackage>({
  name:    { type: String, required: true },
  coins:   { type: Number, required: true },
  price:   { type: Number, required: true },
  popular: { type: Boolean, required: true },
  savings: { type: String },
});

export const CoinPackageModel = model<ICoinPackage>("CoinPackage", CoinPackageSchema);
