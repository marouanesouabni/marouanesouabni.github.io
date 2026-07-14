import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../config.js";
import { requireAdmin } from "../middleware/auth.js";

export const authRouter = Router();
authRouter.post("/login", async (req, res) => {
  const email = String(req.body.email || "").trim().toLowerCase();
  const password = String(req.body.password || "");
  if (!config.adminEmail || !config.adminPasswordHash || !config.jwtSecret) return res.status(503).json({ message: "Administrator authentication is not configured." });
  const valid = email === config.adminEmail && await bcrypt.compare(password, config.adminPasswordHash);
  if (!valid) return res.status(401).json({ message: "Invalid email or password." });
  const token = jwt.sign({ email, role: "admin" }, config.jwtSecret, { expiresIn: "8h" });
  return res.json({ token, admin: { email } });
});
authRouter.get("/me", requireAdmin, (req, res) => res.json({ admin: { email: req.admin.email } }));
