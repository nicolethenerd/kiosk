"use client";

import { useState, useEffect } from "react";

function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function Clock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!now) {
    return (
      <div className="text-center">
        <p className="text-7xl font-thin tracking-widest text-white opacity-0">
          &nbsp;
        </p>
        <p className="text-xl text-amber-200 opacity-0">&nbsp;</p>
      </div>
    );
  }

  return (
    <div className="text-center" aria-live="polite" aria-atomic="true">
      <p className="text-7xl font-thin tracking-widest text-white">
        {formatTime(now)}
      </p>
      <p className="text-xl text-amber-200 mt-1">{formatDate(now)}</p>
    </div>
  );
}
