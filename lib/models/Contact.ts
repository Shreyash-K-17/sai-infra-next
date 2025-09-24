import mongoose, { Schema, Document, model } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Prevent recompiling model during hot reload in dev
export default mongoose.models.Contact || model<IContact>("Contact", ContactSchema);
