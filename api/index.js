import app from "../server/app.js";
import { connectDatabase } from "../server/db.js";

export default async function handler(req, res) {
  try {
    await connectDatabase();
    return app(req, res);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    return res.status(503).json({ message: "The API is temporarily unavailable." });
  }
}
