import Link from "next/link";

export default function CalendarPage() {
  const calendarSrc =
    "https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID%40group.calendar.google.com&ctz=America%2FNew_York";

  return (
    <main className="min-h-screen flex flex-col items-center gap-6 px-8 py-8 bg-blue-950">
      <h1 className="text-4xl font-bold text-blue-100">Family Calendar</h1>
      <iframe
        src={calendarSrc}
        className="w-full flex-1 rounded-2xl border-0"
        title="Family Google Calendar"
      />
      <Link
        href="/"
        className="bg-blue-500 text-white px-8 py-4 rounded-2xl text-xl font-semibold active:scale-95 transition-transform"
      >
        ← Back to Kiosk
      </Link>
    </main>
  );
}
