"use client";

import { useKioskVoice } from "@/context/KioskVoiceContext";

export default function KioskSpeakingStatus() {
  const { speaking, listening } = useKioskVoice();

  const config = speaking
    ? { label: "Announcing…", color: "bg-indigo-600", ping: true }
    : listening
    ? { label: "Listening…", color: "bg-emerald-600", ping: true }
    : { label: "Idle", color: "bg-neutral-300 dark:bg-neutral-700", ping: false };

  return (
    <div className={`fixed top-4 right-4 flex items-center gap-2 ${config.color} text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg z-50 transition-colors duration-300`}>
      <span className="relative flex h-3 w-3">
        {config.ping && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        )}
        <span className="relative inline-flex h-3 w-3 rounded-full bg-white opacity-60" />
      </span>
      {config.label}
    </div>
  );
}
