import Link from "next/link";

export default function ContactsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-8 bg-teal-950">
      <span className="text-8xl">📞</span>
      <h1 className="text-4xl font-bold text-teal-100">Contacts</h1>
      <p className="text-teal-300 text-xl text-center max-w-sm">
        Quick access to important family contacts. Coming soon!
      </p>
      <Link
        href="/"
        className="bg-teal-500 text-white px-8 py-4 rounded-2xl text-xl font-semibold active:scale-95 transition-transform"
      >
        ← Back to Kiosk
      </Link>
    </main>
  );
}
