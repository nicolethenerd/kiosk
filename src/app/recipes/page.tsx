import Link from "next/link";

export default function RecipesPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-8 bg-orange-950">
      <span className="text-8xl">🍽️</span>
      <h1 className="text-4xl font-bold text-orange-100">Recipe Manager</h1>
      <p className="text-orange-300 text-xl text-center max-w-sm">
        Browse and manage your family&apos;s favorite recipes. Coming soon!
      </p>
      <Link
        href="/"
        className="bg-orange-500 text-white px-8 py-4 rounded-2xl text-xl font-semibold active:scale-95 transition-transform"
      >
        ← Back to Kiosk
      </Link>
    </main>
  );
}
