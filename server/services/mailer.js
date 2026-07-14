import nodemailer from "nodemailer";
import { config } from "../config.js";

export async function sendContactEmail(message) {
  if (!config.smtp.host || !config.smtp.user || !config.smtp.pass || !config.smtp.to) {
    console.warn("SMTP is not configured; contact email was not sent.");
    return { delivered: false };
  }
  const transporter = nodemailer.createTransport({ host: config.smtp.host, port: config.smtp.port, secure: config.smtp.secure, auth: { user: config.smtp.user, pass: config.smtp.pass } });
  await transporter.sendMail({
    from: config.smtp.from,
    to: config.smtp.to,
    replyTo: message.email,
    subject: `[Portfolio] ${message.type} — ${message.name}`,
    text: `Name: ${message.name}\nEmail: ${message.email}\nRequest: ${message.type}\n\n${message.message}`,
  });
  return { delivered: true };
}
