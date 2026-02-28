import Link from "next/link";

export default function ShoppingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-8 bg-green-950">
      <span className="text-8xl">🛒</span>
      <h1 className="text-4xl font-bold text-green-100">Shopping List</h1>
      <p className="text-green-300 text-xl text-center max-w-sm">
        Manage your grocery and shopping lists. Coming soon!
      </p>
      <Link
        href="/"
        className="bg-green-500 text-white px-8 py-4 rounded-2xl text-xl font-semibold active:scale-95 transition-transform"
      >
        ← Back to Kiosk
      </Link>
    </main>
  );
}
