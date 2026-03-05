export type DayOfWeek =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

export interface Announcement {
  id: string;
  message: string;
  time: string; // HH:MM format (24-hour)
  days: DayOfWeek[];
  enabled: boolean;
}

// Default announcements - can be expanded or made configurable
export const defaultAnnouncements: Announcement[] = [
  {
    id: "morning-countdown",
    message: "T minus 4 minutes til liftoff",
    time: "08:20",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    enabled: true,
  },
];

// Helper to get day name from Date
export function getDayName(date: Date): DayOfWeek {
  const days: DayOfWeek[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date.getDay()];
}

// Helper to format time as HH:MM
export function formatTimeHHMM(date: Date): string {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

// Check if an announcement should play now
export function shouldPlayAnnouncement(
  announcement: Announcement,
  currentTime: Date
): boolean {
  if (!announcement.enabled) return false;

  const currentDay = getDayName(currentTime);
  const currentTimeStr = formatTimeHHMM(currentTime);

  return (
    announcement.days.includes(currentDay) &&
    announcement.time === currentTimeStr
  );
}
