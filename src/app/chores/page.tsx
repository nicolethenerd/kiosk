import Link from "next/link";

export default function ChoresPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-8 bg-purple-950">
      <span className="text-8xl">✅</span>
      <h1 className="text-4xl font-bold text-purple-100">Chores & Tasks</h1>
      <p className="text-purple-300 text-xl text-center max-w-sm">
        Track household chores and tasks for the whole family. Coming soon!
      </p>
      <Link
        href="/"
        className="bg-purple-500 text-white px-8 py-4 rounded-2xl text-xl font-semibold active:scale-95 transition-transform"
      >
        ← Back to Kiosk
      </Link>
    </main>
  );
}
