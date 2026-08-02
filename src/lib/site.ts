import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  description: string;
  url: string;
  logo?: string;
  logoDark?: string;
  favicon?: string;
  phone: string[];
  email?: string;
  address?: string;
  workingHours?: string;
  social?: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    tiktok?: string;
    whatsapp?: string;
  };
  googleMapsEmbedUrl?: string;
  aboutVideoUrl?: string;
  aboutVideoThumbnail?: string;
  heroVideoUrl?: string;
  currency: string;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const [settings] = await getCollection("site-settings");
  return settings?.data as unknown as SiteSettings ?? {
    siteName: "Nayee Subah Foundation",
    tagline: "Empowering Communities, Building Futures",
    description: "A non-profit social organization dedicated to improving society",
    url: "https://nayeesubah.org",
    phone: ["+91 9876543210"],
    currency: "INR",
  };
}

export function formatPrice(price: number, currency: string = "INR"): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatMileage(mileage: number): string {
  return new Intl.NumberFormat("en-IN").format(mileage) + " km";
}

export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(date);
}

export function formatShortDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(date);
}

export function formatINR(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function getWhatsAppUrl(phone: string, message?: string): string {
  const cleaned = phone.replace(/[^0-9]/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${cleaned}${text}`;
}

export function generateBreadcrumbs(path: string) {
  const parts = path.split("/").filter(Boolean);
  const crumbs = [{ label: "Home", href: "/" }];

  let current = "";
  for (const part of parts) {
    current += `/${part}`;
    crumbs.push({
      label: part.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      href: current,
    });
  }

  return crumbs;
}

export const INCOME_CATEGORIES = [
  "Program Revenue",
  "Other Income",
  "Grant Income",
] as const;

export type IncomeCategory = typeof INCOME_CATEGORIES[number];

export interface IncomeEntry {
  date: Date;
  category: IncomeCategory;
  amount: number;
  description: string;
  source?: string;
  notes?: string;
}

export const EXPENSE_CATEGORIES = [
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

export type ExpenseCategory = typeof EXPENSE_CATEGORIES[number];

export interface ExpenseEntry {
  date: Date;
  category: ExpenseCategory;
  amount: number;
  description: string;
  vendor?: string;
  notes?: string;
}

export type PaymentStatus = "paid" | "due" | "partial" | "not-updated";

export const PAYMENT_STATUS = {
  PAID: "paid" as const,
  DUE: "due" as const,
  PARTIAL: "partial" as const,
  NOT_UPDATED: "not-updated" as const,
};

export const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export const SUBSCRIPTION_PLANS = [200, 500, 1000];

export type MembershipStatus = "active" | "inactive" | "suspended";

export interface MemberData {
  name: string;
  memberId: string;
  joiningDate: Date;
  photo?: string;
  mobile: string;
  email?: string;
  city: string;
  state: string;
  occupation: string;
  bloodGroup?: string;
  membershipStatus: MembershipStatus;
  subscriptionAmount: number;
  payments: Record<string, PaymentStatus>;
}

export interface PaymentRecord {
  memberId: string;
  year: number;
  month: number;
  status: PaymentStatus;
  amount: number;
  paidDate?: Date;
  transactionId?: string;
}

export function getPaymentStatusColor(status: PaymentStatus): string {
  switch (status) {
    case "paid": return "bg-success text-white";
    case "due": return "bg-error text-white";
    case "partial": return "bg-partial text-white";
    case "not-updated": return "bg-not-updated text-white";
    default: return "bg-neutral-200 text-neutral-700";
  }
}

export function getPaymentStatusLabel(status: PaymentStatus): string {
  switch (status) {
    case "paid": return "Paid";
    case "due": return "Due";
    case "partial": return "Partial";
    case "not-updated": return "N/A";
    default: return "Unknown";
  }
}

export function calculateMemberStats(member: MemberData, year: number) {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const isCurrentYear = year === currentYear;
  const targetMonth = isCurrentYear ? currentMonth : 11;

  let totalPaidMonths = 0;
  let totalDueMonths = 0;
  let totalPartialMonths = 0;
  let lastPaymentDate: Date | null = null;

  for (let m = 0; m <= targetMonth; m++) {
    const key = `${year}-${m}`;
    const status = member.payments?.[key] || PAYMENT_STATUS.NOT_UPDATED;
    if (status === PAYMENT_STATUS.PAID) {
      totalPaidMonths++;
    } else if (status === PAYMENT_STATUS.DUE) {
      totalDueMonths++;
    } else if (status === PAYMENT_STATUS.PARTIAL) {
      totalPartialMonths++;
    }
  }

  const currentMonthStatus = member.payments?.[`${currentYear}-${currentMonth}`] || PAYMENT_STATUS.NOT_UPDATED;
  const totalPendingMonths = totalDueMonths + totalPartialMonths;
  const totalAmountPaid = totalPaidMonths * member.subscriptionAmount;
  const totalDueAmount = totalPendingMonths * member.subscriptionAmount;

  return {
    currentMonthStatus,
    totalPaidMonths,
    totalDueMonths,
    totalPartialMonths,
    totalPendingMonths,
    totalAmountPaid,
    totalDueAmount,
    lastPaymentDate,
  };
}
