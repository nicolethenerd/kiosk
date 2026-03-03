"use client";

import { useState } from "react";
import Clock from "@/components/Clock";
import KioskTile from "@/components/KioskTile";
import { kioskApps, type KioskApp } from "@/lib/apps";

function AppPanel({
  app,
  onBack,
}: {
  app: KioskApp;
  onBack: () => void;
}) {
  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center gap-8 px-8 ${app.panelBg}`}
    >
      <span className="text-8xl" role="img" aria-hidden="true">
        {app.icon}
      </span>
      <h1 className={`text-4xl font-bold ${app.panelTitleColor}`}>
        {app.name}
      </h1>
      <p className={`${app.panelTextColor} text-xl text-center max-w-sm`}>
        {app.description}. Coming soon!
      </p>
      <button
        onClick={onBack}
        className={`${app.color} text-white px-8 py-4 rounded-2xl text-xl font-semibold active:scale-95 transition-transform`}
      >
        ← Back to Kiosk
      </button>
    </main>
  );
}

export default function Home() {
  const [activeApp, setActiveApp] = useState<KioskApp | null>(null);

  if (activeApp) {
    return <AppPanel app={activeApp} onBack={() => setActiveApp(null)} />;
  }

  return (
    <main className="min-h-screen flex flex-col px-8 py-10 gap-10">
      {/* Header: Clock */}
      <header className="flex flex-col items-center justify-center pt-4">
        <Clock />
        <h1 className="text-2xl font-semibold text-amber-300 mt-6 tracking-widest uppercase">
          Family Kiosk
        </h1>
      </header>

      {/* App Grid */}
      <section
        className="grid grid-cols-2 gap-5 flex-1 md:grid-cols-3"
        aria-label="Kiosk applications"
      >
        {kioskApps.map((app) => (
          <KioskTile key={app.id} app={app} onClick={() => setActiveApp(app)} />
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-amber-800 text-sm pb-2">
        <p>Family Kiosk</p>
      </footer>
    </main>
  );
}
