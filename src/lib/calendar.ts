// Build-time calendar link helpers for the events pages. No client JS needed —
// the .ics link is a plain data: URI, so "download" works even with JS disabled.
export interface CalendarEventInput {
  id: string;
  title: string;
  description: string;
  location: string;
  start: Date;
  durationHours?: number;
}

function toICSDate(d: Date): string {
  return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

export function getEventEnd(start: Date, durationHours = 2): Date {
  return new Date(start.getTime() + durationHours * 60 * 60 * 1000);
}

export function buildGoogleCalendarUrl({ title, description, location, start, durationHours }: CalendarEventInput): string {
  const end = getEventEnd(start, durationHours);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${toICSDate(start)}/${toICSDate(end)}`,
    details: description,
    location,
  });
  return `https://www.google.com/calendar/render?${params.toString()}`;
}

function escapeICS(s: string): string {
  return s.replace(/[\\,;]/g, (m) => "\\" + m).replace(/\n/g, "\\n");
}

export function buildICS({ id, title, description, location, start, durationHours }: CalendarEventInput): string {
  const end = getEventEnd(start, durationHours);
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Nayee Subah Foundation//Events//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${id}@nayeesubah.github.io`,
    `DTSTAMP:${toICSDate(new Date())}`,
    `DTSTART:${toICSDate(start)}`,
    `DTEND:${toICSDate(end)}`,
    `SUMMARY:${escapeICS(title)}`,
    `DESCRIPTION:${escapeICS(description)}`,
    `LOCATION:${escapeICS(location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function icsDataUri(input: CalendarEventInput): string {
  return "data:text/calendar;charset=utf-8," + encodeURIComponent(buildICS(input));
}

export function googleMapsSearchUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
