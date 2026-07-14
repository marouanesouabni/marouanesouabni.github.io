import jwt from "jsonwebtoken";
import { config } from "../config.js";

export function requireAdmin(req, res, next) {
  const token = req.headers.authorization?.startsWith("Bearer ") ? req.headers.authorization.slice(7) : null;
  if (!token || !config.jwtSecret) return res.status(401).json({ message: "Authentication required." });
  try {
    const payload = jwt.verify(token, config.jwtSecret);
    if (payload.role !== "admin" || payload.email !== config.adminEmail) return res.status(403).json({ message: "Administrator access required." });
    req.admin = payload;
    next();
  } catch {
    return res.status(401).json({ message: "Session expired. Please sign in again." });
  }
}
