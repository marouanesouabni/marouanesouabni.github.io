import mongoose from "mongoose";
import { config } from "./config.js";

let connectionPromise;

export async function connectDatabase() {
  if (!config.mongoUri) {
    if (process.env.NODE_ENV === "production") throw new Error("MONGODB_URI is required in production.");
    console.warn("MONGODB_URI is not set: messages will not be persisted locally.");
    return;
  }

  if (mongoose.connection.readyState === 1) return mongoose.connection;
  if (!connectionPromise) {
    connectionPromise = mongoose.connect(config.mongoUri).then((connection) => {
      console.log("Connected to MongoDB");
      return connection;
    }).catch((error) => {
      connectionPromise = undefined;
      throw error;
    });
  }

  return connectionPromise;
}
