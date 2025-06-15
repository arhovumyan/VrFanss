import { Schema, model, Document } from "mongoose";

export interface INavigation extends Document {
  name: string;
  href: string;
  icon: string;
}

const NavigationSchema = new Schema<INavigation>({
  name: { type: String, required: true },
  href: { type: String, required: true },
  icon: { type: String, required: true },
});

export const NavigationModel = model<INavigation>("Navigation", NavigationSchema);

