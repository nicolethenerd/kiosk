"use client";

import { useEffect, useState } from "react";
import mealPlan from "@/data/weekly-meal-plan.json";

const DAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

type Day = (typeof DAYS)[number];

const DAY_LABELS: Record<Day, string> = {
  monday: "Mon",
  tuesday: "Tue",
  wednesday: "Wed",
  thursday: "Thu",
  friday: "Fri",
  saturday: "Sat",
  sunday: "Sun",
};

const MEALS: { key: keyof (typeof mealPlan)[Day]; label: string }[] = [
  { key: "breakfast", label: "Breakfast" },
  { key: "lunch", label: "Lunch" },
  { key: "dinner", label: "Dinner" },
];

/** Returns the lowercase day name for a given Date (0=Sunday … 6=Saturday). */
function getDayName(date: Date): Day {
  const names: Day[] = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  return names[date.getDay()];
}

export default function WeeklyMealPlan() {
  const [today, setToday] = useState<Day | null>(null);

  useEffect(() => {
    setToday(getDayName(new Date()));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-neutral-600 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 w-20">
              Day
            </th>
            {MEALS.map((meal) => (
              <th
                key={meal.key}
                className="px-4 py-3 text-left font-semibold text-neutral-600 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700"
              >
                {meal.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {DAYS.map((day) => {
            const isToday = today === day;
            return (
              <tr
                key={day}
                className={
                  isToday
                    ? "bg-blue-50 dark:bg-blue-900/30 border-b border-blue-100 dark:border-blue-800"
                    : "border-b border-neutral-100 dark:border-neutral-800 last:border-0 even:bg-neutral-50 dark:even:bg-neutral-800/40"
                }
              >
                <td
                  className={`px-4 py-2 font-semibold ${
                    isToday
                      ? "text-blue-700 dark:text-blue-300"
                      : "text-neutral-500 dark:text-neutral-400"
                  }`}
                >
                  {DAY_LABELS[day]}
                  {isToday && (
                    <span className="ml-1 text-xs font-normal text-blue-500 dark:text-blue-400">
                      today
                    </span>
                  )}
                </td>
                {MEALS.map((meal) => (
                  <td
                    key={meal.key}
                    className={`px-4 py-2 ${
                      isToday
                        ? "text-blue-900 dark:text-blue-100"
                        : "text-neutral-700 dark:text-neutral-300"
                    }`}
                  >
                    {mealPlan[day][meal.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
