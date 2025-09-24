import mongoose from "mongoose";

// Ensure MONGO_URI exists
const MONGO_URI_RAW = process.env.MONGO_URI;
if (!MONGO_URI_RAW) throw new Error("Please define MONGO_URI in .env");

// TypeScript now knows MONGO_URI is a string
const MONGO_URI: string = MONGO_URI_RAW;

// Type-safe cached connection
let cached: { conn: mongoose.Mongoose | null; promise: Promise<mongoose.Mongoose> | null } =
  (global as any).mongoose || { conn: null, promise: null };

export async function connectToDatabase(): Promise<mongoose.Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
