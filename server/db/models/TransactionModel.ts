import { Schema, model, Document } from "mongoose";

export interface ITransaction extends Document {
  icon: string;
  description: string;
  amount: number;
  time: string;
  color: string;
}

const TransactionSchema = new Schema<ITransaction>({
  icon:        { type: String, required: true },
  description: { type: String, required: true },
  amount:      { type: Number, required: true },
  time:        { type: String, required: true },
  color:       { type: String, required: true },
});

export const TransactionModel = model<ITransaction>("Transaction", TransactionSchema);

