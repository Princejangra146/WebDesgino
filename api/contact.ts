import type { VercelRequest, VercelResponse } from "@vercel/node";
import { insertContactSubmissionSchema } from "../shared/schema";
import { storage } from "../server/storage";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    try {
      const validated = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validated);
      return res.status(200).json(submission);
    } catch (error: any) {
      return res.status(400).json({ error: error.message ?? "Invalid data" });
    }
  }

  if (req.method === "GET") {
    try {
      const submissions = await storage.getAllContactSubmissions();
      return res.status(200).json(submissions);
    } catch {
      return res
        .status(500)
        .json({ error: "Failed to fetch contact submissions" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end("Method Not Allowed");
}