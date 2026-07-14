import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { config, validateConfig } from "./config.js";
import { connectDatabase } from "./db.js";
import { authRouter } from "./routes/auth.js";
import { messagesRouter } from "./routes/messages.js";

validateConfig();
const app = express();
app.use(helmet());
app.use(cors({ origin: config.clientUrl, methods: ["GET", "POST", "PATCH"] }));
app.use(express.json({ limit: "20kb" }));
app.use("/api", rateLimit({ windowMs: 15 * 60 * 1000, limit: 100, standardHeaders: true, legacyHeaders: false }));
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/auth", authRouter);
app.use("/api", messagesRouter);
app.use((error, _req, res, _next) => { console.error(error); res.status(500).json({ message: "An unexpected server error occurred." }); });

connectDatabase().then(() => app.listen(config.port, () => console.log(`API listening on port ${config.port}`))).catch((error) => { console.error("Unable to start API:", error.message); process.exit(1); });
