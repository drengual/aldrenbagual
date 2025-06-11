import dynamicIconImports from "lucide-react/dynamicIconImports";
import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .min(2, { message: "Must be at least 2 characters." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email("Invalid email."),
  message: z.string().min(1, { message: "Message is required." }),
});

const iconLink = z.object({
  name: z.string(),
  href: z.string().url(),
  icon: z.custom<keyof typeof dynamicIconImports>(),
});
export type IconLink = z.infer<typeof iconLink>;

const skillListItem = z.object({
  name: z.string(),
  icon: z.string(), // Accepts a string path like "/postman.png"
});

const skill = z.object({
  name: z.string(),
  image: z.string(),
  skill_lists: z.array(skillListItem),
});

const project = z.object({
  name: z.string(),
  description: z.string(),
  href: z.string().url().optional(),
  image: z.string().optional(),
  tags: z.array(z.string()),
  links: z.array(iconLink),
});
export const projectSchema = z.object({ projects: z.array(project) });
export type Project = z.infer<typeof project>;

const experience = z.object({
  name: z.string().optional(),
  href: z.string().optional(),
  title: z.string().optional(),
  logo: z.string().optional(),
  start: z.string().optional(),
  end: z.string().optional(),
  description: z.array(z.string()).optional(),
  links: z.array(iconLink).optional(),
  skill_lists: z.array(skillListItem).optional(),
});
export type Experience = z.infer<typeof experience>;

export const skillsSchema = z.object({
  skills: z.array(skill),
});
export type Skill = z.infer<typeof skill>;

export const careerSchema = z.object({ career: z.array(experience) });
export const educationSchema = z.object({ education: z.array(experience) });
export const socialSchema = z.object({ socials: z.array(iconLink) });
export const certificatesSchema = z.object({
  certificates: z.array(experience),
});
export const experienceSkillsSchema = z.object({ skills: z.array(experience) });
