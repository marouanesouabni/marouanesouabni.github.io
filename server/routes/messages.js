import { Router } from "express";
import mongoose from "mongoose";
import { ContactMessage } from "../models/ContactMessage.js";
import { requireAdmin } from "../middleware/auth.js";
import { sendContactEmail } from "../services/mailer.js";

export const messagesRouter = Router();
const allowedTypes = new Set(["Freelance", "Internship", "Full-time", "Just say hi"]);

messagesRouter.post("/contact", async (req, res, next) => {
  try {
    const name = String(req.body.name || "").trim();
    const email = String(req.body.email || "").trim().toLowerCase();
    const type = String(req.body.type || "").trim();
    const message = String(req.body.message || "").trim();
    if (!name || !email || !message || !allowedTypes.has(type)) return res.status(400).json({ message: "Please provide a valid name, email, request type and message." });
    if (!/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ message: "Please provide a valid email address." });
    const contact = { name, email, type, message };
    const saved = mongoose.connection.readyState === 1 ? await ContactMessage.create(contact) : null;
    const emailResult = await sendContactEmail(contact);
    return res.status(201).json({ message: "Your message has been sent. Thank you!", id: saved?._id, delivered: emailResult.delivered });
  } catch (error) { next(error); }
});

messagesRouter.get("/messages", requireAdmin, async (_req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) return res.json({ messages: [], databaseConnected: false });
    const messages = await ContactMessage.find().sort({ createdAt: -1 }).lean();
    return res.json({ messages, databaseConnected: true });
  } catch (error) { next(error); }
});

messagesRouter.patch("/messages/:id", requireAdmin, async (req, res, next) => {
  try {
    const status = req.body.status;
    if (!["new", "read", "archived"].includes(status)) return res.status(400).json({ message: "Invalid status." });
    const message = await ContactMessage.findByIdAndUpdate(req.params.id, { status }, { new: true }).lean();
    if (!message) return res.status(404).json({ message: "Message not found." });
    return res.json({ message });
  } catch (error) { next(error); }
});
