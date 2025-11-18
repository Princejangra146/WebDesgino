import { z } from "zod";

export const insertContactSubmissionSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name is too long"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  projectType: z
    .string()
    .min(1, "Please select a project type"),
  message: z
    .string()
    .min(10, "Please provide at least 10 characters")
    .max(1000, "Message is too long"),
});

export type InsertContactSubmission = z.infer<
  typeof insertContactSubmissionSchema
>;