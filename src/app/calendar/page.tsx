import Link from "next/link";

export default function CalendarPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-8 bg-blue-950">
      <span className="text-8xl">📅</span>
      <h1 className="text-4xl font-bold text-blue-100">Family Calendar</h1>
      <p className="text-blue-300 text-xl text-center max-w-sm">
        Your shared household calendar for events and appointments. Coming soon!
      </p>
      <Link
        href="/"
        className="bg-blue-500 text-white px-8 py-4 rounded-2xl text-xl font-semibold active:scale-95 transition-transform"
      >
        ← Back to Kiosk
      </Link>
    </main>
  );
}
