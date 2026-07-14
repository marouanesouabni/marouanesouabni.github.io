import { config } from "./config.js";
import { connectDatabase } from "./db.js";
import app from "./app.js";

connectDatabase().then(() => app.listen(config.port, "0.0.0.0", () => console.log(`API listening on port ${config.port}`))).catch((error) => { console.error("Unable to start API:", error.message); process.exit(1); });
