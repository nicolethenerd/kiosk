import Announcements from "@/components/Announcements";
import Clock from "@/components/Clock";
import KioskTile from "@/components/KioskTile";
import Menu from "@/components/Menu";
import WeeklyMealPlan from "@/components/WeeklyMealPlan";

const GOOGLE_CALENDAR_URL = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL;

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-screen-xl mx-auto h-full grid gap-4">
        <Announcements />
        <Clock />
        <KioskTile title="Calendar" className="min-h-[600px]">
          {GOOGLE_CALENDAR_URL ? (
            <iframe
              src={GOOGLE_CALENDAR_URL}
              className="w-full h-full min-h-[600px]"
              frameBorder="0"
              scrolling="no"
              title="Google Calendar"
            />
          ) : (
            <div className="flex items-center justify-center h-full min-h-[600px] text-neutral-400">
              Add your Google Calendar embed URL to{" "}
              <code className="ml-1 font-mono text-sm">app/page.tsx</code>
            </div>
          )}
        </KioskTile>
        <KioskTile title="Menu">
          <Menu />
        </KioskTile>
        <KioskTile title="Weekly Meal Plan">
          <WeeklyMealPlan />
        </KioskTile>
      </div>
    </main>
  );
}
