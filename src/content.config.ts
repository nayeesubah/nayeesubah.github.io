import { z, defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";

const seoSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  canonical: z.string().optional(),
  noIndex: z.boolean().optional().default(false),
});

const blogCategories = [
  "Impact Stories",
  "Program Updates",
  "Community News",
  "Events",
  "Announcements",
  "Reports",
  "General",
] as const;

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    excerpt: z.string(),
    author: z.string().default("Nayee Subah Foundation"),
    date: z.date({ coerce: true }),
    updatedDate: z.date({ coerce: true }).optional(),
    image: z.string().optional(),
    category: z.enum(blogCategories).default("General"),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
    lang: z.string().default("en"),
    seo: seoSchema.optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string().optional(),
    image: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    order: z.number({ coerce: true }).int().default(0),
    type: z.enum(["committee", "staff", "volunteer"]).default("committee"),
    lang: z.string().default("en"),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/testimonials" }),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    type: z.enum(["member", "volunteer", "beneficiary", "sponsor"]).default("beneficiary"),
    member: z.string().optional(),
    avatar: z.string().optional(),
    rating: z.number({ coerce: true }).int().min(1).max(5).default(5),
    content: z.string(),
    featured: z.boolean().default(false),
    lang: z.string().default("en"),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/faq" }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.enum(["membership", "donation", "investment", "volunteer", "activities", "transparency", "general"]).default("general"),
    order: z.number({ coerce: true }).int().default(0),
    lang: z.string().default("en"),
  }),
});

const galleryCategories = [
  "library",
  "community-welfare",
  "education",
  "healthcare",
  "skill-development",
  "women-empowerment",
  "events",
  "general",
] as const;

const galleryImages = z
  .union([
    z.array(z.string()),
    z.array(z.object({ image: z.string() })),
  ])
  .transform((arr) => arr.map((x) => (typeof x === "string" ? x : x.image)));

const gallery = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/gallery" }),
  schema: z.object({
    title: z.string().optional(),
    category: z.enum(galleryCategories).default("general"),
    media: z.object({
      type: z.enum(["image", "video"]).default("image"),
      image: z.string().optional(),
      images: galleryImages.default([]),
      mediaUrl: z.string().optional(),
    }),
    project: z.string().optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    featured: z.boolean().default(false),
    date: z.date({ coerce: true }).optional(),
    lang: z.string().default("en"),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    lang: z.string().default("en"),
    seo: seoSchema.optional(),
  }),
});

const partners = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/partners" }),
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    url: z.string().optional(),
    order: z.number({ coerce: true }).int().default(0),
    lang: z.string().default("en"),
  }),
});

const siteSettings = defineCollection({
  loader: glob({ pattern: "settings.yaml", base: "./src/content/site-settings" }),
  schema: z.object({
    siteName: z.string().default("Nayee Subah Foundation"),
    tagline: z.string().default("Empowering Communities, Building Futures"),
    description: z.string(),
    url: z.string(),
    logo: z.string().optional(),
    logoDark: z.string().optional(),
    favicon: z.string().optional(),
    phone: z.array(z.string()).default([]),
    email: z.string().optional(),
    address: z.string().optional(),
    workingHours: z.string().optional(),
    social: z.object({
      facebook: z.string().optional(),
      instagram: z.string().optional(),
      youtube: z.string().optional(),
      whatsapp: z.string().optional(),
    }).optional(),
    googleMapsEmbedUrl: z.string().optional(),
    aboutVideoUrl: z.string().optional(),
    aboutVideoThumbnail: z.string().optional(),
    heroVideoUrl: z.string().optional(),
    currency: z.string().default("INR"),
    language: z.string().default("en"),
    languages: z.array(z.string()).default(["en", "hi"]),
    matrixPassword: z.string().default(""),
  }),
});

const navigation = defineCollection({
  loader: glob({ pattern: "nav.yaml", base: "./src/content/navigation" }),
  schema: z.object({
    items: z.array(z.object({
      label: z.string(),
      href: z.string(),
      children: z.array(z.object({
        label: z.string(),
        href: z.string(),
      })).optional(),
    })),
  }),
});

const footer = defineCollection({
  loader: glob({ pattern: "footer.yaml", base: "./src/content/footer" }),
  schema: z.object({
    description: z.string().optional(),
    columns: z.array(z.object({
      title: z.string(),
      links: z.array(z.object({
        label: z.string(),
        href: z.string(),
      })),
    })),
    bottomText: z.string().optional(),
  }),
});

const members = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/members" }),
  schema: z.object({
    name: z.string(),
    memberId: z.string(),
    joiningDate: z.date({ coerce: true }),
    photo: z.string().optional(),
    mobile: z.string(),
    email: z.string().optional(),
    city: z.string(),
    state: z.string(),
    occupation: z.string(),
    bloodGroup: z.string().optional(),
    membershipStatus: z.enum(["active", "inactive", "suspended"]).default("active"),
    subscriptionAmount: z.number().int().default(200),
    password: z.string().default(""),
    lang: z.string().default("en"),
  }),
});

const payments = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/payments" }),
  schema: z.object({
    memberId: z.string(),
    year: z.number().int(),
    month: z.number().int().min(0).max(11),
    status: z.enum(["paid", "partial"]),
    amount: z.number().int(),
    date: z.date({ coerce: true }).optional(),
    notes: z.string().optional(),
  }),
});

const activities = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/activities" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string(),
    excerpt: z.string().optional(),
    icon: z.string().optional(),
    image: z.string().optional(),
    category: z.enum([
      "education", "healthcare", "skill-development", "women-empowerment",
      "youth-development", "employment", "disaster-relief", "blood-donation",
      "tree-plantation", "scholarships", "community-development",
      "food-distribution", "awareness-campaigns", "library", "helping-local-farmers",
    ]).default("community-development"),
    date: z.date({ coerce: true }).optional(),
    location: z.string().optional(),
    volunteers: z.number().int().default(0),
    impactNumbers: z.record(z.string(), z.union([z.string(), z.number()])).optional(),
    featured: z.boolean().default(false),
    order: z.number({ coerce: true }).int().default(0),
    lang: z.string().default("en"),
    seo: seoSchema.optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.date({ coerce: true }),
    venue: z.string(),
    description: z.string(),
    image: z.string().optional(),
    organizers: z.array(z.string()).default([]),
    status: z.enum(["upcoming", "ongoing", "completed", "cancelled"]).default("upcoming"),
    featured: z.boolean().default(false),
    registerLink: z.string().url().optional(),
    cardDisplay: z.object({
      badgeText: z.string().optional(),
      hideCountdown: z.boolean().default(false),
      shortDescription: z.string().optional(),
    }).optional(),
    lang: z.string().default("en"),
    seo: seoSchema.optional(),
  }),
});

const successStories = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/success-stories" }),
  schema: z.object({
    name: z.string(),
    location: z.string().optional(),
    background: z.string().optional(),
    challenges: z.string().optional(),
    help: z.string(),
    status: z.string().optional(),
    images: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    lang: z.string().default("en"),
    seo: seoSchema.optional(),
  }),
});

const volunteers = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/volunteers" }),
  schema: z.object({
    name: z.string(),
    photo: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    skills: z.array(z.string()).default([]),
    availability: z.string().optional(),
    projectsJoined: z.array(z.string()).default([]),
    recognition: z.string().optional(),
    active: z.boolean().default(true),
    lang: z.string().default("en"),
  }),
});

const investmentProjects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/investment-projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    businessCategory: z.string(),
    investmentAmount: z.number().int().default(0),
    startDate: z.date({ coerce: true }),
    status: z.enum(["planning", "active", "completed", "paused"]).default("active"),
    expectedReturn: z.number().int().default(0),
    actualReturn: z.number().int().default(0),
    description: z.string(),
    progress: z.number().int().min(0).max(100).default(0),
    riskLevel: z.enum(["low", "medium", "high"]).default("medium"),
    images: z.array(z.string()).default([]),
    documents: z.array(z.string()).optional(),
    currentValue: z.number().int().default(0),
    featured: z.boolean().default(false),
    lang: z.string().default("en"),
    seo: seoSchema.optional(),
  }),
});

const financialReports = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/financial-reports" }),
  schema: z.object({
    title: z.string(),
    type: z.enum([
      "income-summary", "expense-summary", "membership-collection",
      "investment-income", "donations", "operational-expenses",
      "program-expenses", "emergency-fund", "reserve-fund",
      "yearly-report", "audit-report", "meeting-minutes",
      "annual-report", "future-plans",
    ]).default("yearly-report"),
    year: z.number().int(),
    amount: z.number().int().optional(),
    description: z.string().optional(),
    file: z.string().optional(),
    date: z.date({ coerce: true }).optional(),
    lang: z.string().default("en"),
    seo: seoSchema.optional(),
  }),
});

const incomeCategories = [
  "Program Revenue",
  "Other Income",
  "Grant Income",
] as const;

const income = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/income" }),
  schema: z.object({
    date: z.date({ coerce: true }),
    category: z.enum(incomeCategories),
    amount: z.number().int(),
    description: z.string(),
    source: z.string().optional(),
    notes: z.string().optional(),
    lang: z.string().default("en"),
  }),
});

const expenseCategories = [
  "Operational Expenses",
  "Program Expenses",
  "Administrative Costs",
  "Emergency Fund",
  "Reserve Fund",
  "Community Welfare",
  "Salaries & Benefits",
  "Utilities & Rent",
  "Transportation",
  "Supplies & Materials",
  "Other",
] as const;

const expenses = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/expenses" }),
  schema: z.object({
    date: z.date({ coerce: true }),
    category: z.enum(expenseCategories),
    amount: z.number().int(),
    description: z.string(),
    vendor: z.string().optional(),
    notes: z.string().optional(),
    lang: z.string().default("en"),
  }),
});

const donors = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/donors" }),
  schema: z.object({
    name: z.string(),
    type: z.enum(["individual", "corporate"]).default("individual"),
    amount: z.number().int().default(0),
    date: z.date({ coerce: true }),
    purpose: z.string().optional(),
    anonymous: z.boolean().default(false),
    lang: z.string().default("en"),
  }),
});

const vendors = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/vendors" }),
  schema: z.object({
    name: z.string(),
    contactPerson: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().optional(),
    address: z.string().optional(),
    lang: z.string().default("en"),
  }),
});

export const collections = {
  blog,
  team,
  testimonials,
  faq,
  gallery,
  pages,
  partners,
  "site-settings": siteSettings,
  navigation,
  footer,
  members,
  payments,
  activities,
  events,
  "success-stories": successStories,
  volunteers,
  "investment-projects": investmentProjects,
  "financial-reports": financialReports,
  income,
  expenses,
  donors,
  vendors,
};
