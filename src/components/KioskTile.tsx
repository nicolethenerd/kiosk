import Link from "next/link";
import type { KioskApp } from "@/lib/apps";

interface KioskTileProps {
  app: KioskApp;
}

export default function KioskTile({ app }: KioskTileProps) {
  return (
    <Link
      href={app.href}
      className={`
        ${app.color} ${app.textColor}
        flex flex-col items-center justify-center
        rounded-3xl p-8 gap-4
        shadow-lg active:scale-95
        transition-transform duration-150 ease-in-out
        min-h-[180px] select-none
        cursor-pointer
      `}
      aria-label={app.name}
    >
      <span className="text-6xl" role="img" aria-hidden="true">
        {app.icon}
      </span>
      <div className="text-center">
        <p className="text-2xl font-bold tracking-wide">{app.name}</p>
        <p className="text-sm mt-1 opacity-80">{app.description}</p>
      </div>
    </Link>
  );
}
