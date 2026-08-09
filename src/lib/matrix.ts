export const MONTHS_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export const MONTHS_FULL = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function formatINR(n: number): string {
  return "₹" + n.toLocaleString("en-IN");
}

export function targetMonth(year: number, currentYear: number, currentMonth: number): number {
  if (year < currentYear) return 11;
  if (year === currentYear) return currentMonth;
  return -1;
}

export interface RealPayment {
  memberId: string;
  year: number;
  month: number;
  status: string;
  amount: number;
}

export function buildPayments(real: RealPayment[], memberId: string, year: number): Record<string, string> {
  const now = new Date();
  const t = targetMonth(year, now.getFullYear(), now.getMonth());

  const realMap: Record<number, RealPayment> = {};
  for (const p of real) {
    if (p.memberId === memberId && p.year === year) realMap[p.month] = p;
  }

  const payments: Record<string, string> = {};
  for (let m = 0; m < 12; m++) {
    const key = `${year}-${m}`;
    if (realMap[m] !== undefined) {
      payments[key] = realMap[m].status;
    } else if (m <= t) {
      payments[key] = "due";
    } else {
      payments[key] = "not-updated";
    }
  }
  return payments;
}

export const PAYMENT_COLORS: Record<string, string> = {
  paid: "bg-success text-white",
  due: "text-muted",
  partial: "bg-partial text-white",
  "not-updated": "text-muted/40",
};

export const PAYMENT_LABELS: Record<string, string> = {
  paid: "Paid",
  due: "Due",
  partial: "Partial",
  "not-updated": "Not Updated",
};

export function paymentIcon(status: string): string {
  if (status === "paid") return "\u2713";
  if (status === "partial") return "P";
  if (status === "due") return "\u2014";
  return "\u00B7";
}
