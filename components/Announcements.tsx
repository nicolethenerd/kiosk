"use client";

import { useEffect, useRef } from "react";
import announcements from "@/data/announcements.json";
import { useKioskVoice } from "@/context/KioskVoiceContext";

/**
 * Checks whether a 5-field cron expression (min hour dom month dow)
 * matches the given date. Supports *, N, *\/N, and N,M,... syntax.
 */
function matchesCron(expression: string, date: Date): boolean {
  const [minF, hourF, domF, monthF, dowF] = expression.trim().split(/\s+/);

  function matches(field: string, value: number): boolean {
    if (field === "*") return true;
    if (field.startsWith("*/")) return value % parseInt(field.slice(2)) === 0;
    return field.split(",").some((part) => {
      if (part.includes("-")) {
        const [lo, hi] = part.split("-").map(Number);
        return value >= lo && value <= hi;
      }
      return parseInt(part) === value;
    });
  }

  return (
    matches(minF, date.getMinutes()) &&
    matches(hourF, date.getHours()) &&
    matches(domF, date.getDate()) &&
    matches(monthF, date.getMonth() + 1) &&
    matches(dowF, date.getDay())
  );
}

export default function Announcements() {
  const { setSpeaking } = useKioskVoice();
  const spokenThisMinute = useRef<Set<string>>(new Set());

  useEffect(() => {
    function speak(message: string) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = (e) => {
        console.error("[Announcements] SpeechSynthesis error:", e);
        setSpeaking(false);
      };
      window.speechSynthesis.speak(utterance);
    }

    function check() {
      const now = new Date();
      const minuteKey = now.toISOString().slice(0, 16);

      // Clear stale keys from a previous minute
      for (const key of spokenThisMinute.current) {
        if (!key.startsWith(minuteKey)) spokenThisMinute.current.delete(key);
      }

      for (const announcement of announcements) {
        if (!announcement.enabled) continue;

        const key = `${minuteKey}:${announcement.id}`;
        if (spokenThisMinute.current.has(key)) continue;

        const due = matchesCron(announcement.schedule, now);
        console.log(`[Announcements] ${announcement.id} — due: ${due}`, now.toLocaleTimeString());

        if (due) {
          spokenThisMinute.current.add(key);
          speak(announcement.message);
        }
      }
    }

    check();
    const id = setInterval(check, 15_000);
    return () => clearInterval(id);
  }, [setSpeaking]);

  return null;
}
