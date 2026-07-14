import mongoose from "mongoose";
import { config } from "./config.js";

export async function connectDatabase() {
  if (!config.mongoUri) {
    if (process.env.NODE_ENV === "production") throw new Error("MONGODB_URI is required in production.");
    console.warn("MONGODB_URI is not set: messages will not be persisted locally.");
    return;
  }
  await mongoose.connect(config.mongoUri);
  console.log("Connected to MongoDB");
}
