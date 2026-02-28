import Clock from "@/components/Clock";
import KioskTile from "@/components/KioskTile";
import { kioskApps } from "@/lib/apps";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col px-8 py-10 gap-10">
      {/* Header: Clock */}
      <header className="flex flex-col items-center justify-center pt-4">
        <Clock />
        <h1 className="text-2xl font-semibold text-slate-600 mt-6 tracking-widest uppercase">
          Family Kiosk
        </h1>
      </header>

      {/* App Grid */}
      <section
        className="grid grid-cols-2 gap-5 flex-1 md:grid-cols-3"
        aria-label="Kiosk applications"
      >
        {kioskApps.map((app) => (
          <KioskTile key={app.id} app={app} />
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-slate-400 text-sm pb-2">
        <p>Family Kiosk</p>
      </footer>
    </main>
  );
}
