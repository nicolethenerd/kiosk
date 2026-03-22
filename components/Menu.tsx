import menu from "@/data/menu.json";

const COLUMNS: { label: string; key: keyof typeof menu }[] = [
  { label: "Breakfast", key: "breakfast" },
  { label: "Lunch/Dinner", key: "lunchDinner" },
  { label: "Snacks", key: "snacks" },
  { label: "Dessert", key: "dessert" },
];

export default function Menu() {
  const rowCount = Math.max(...COLUMNS.map((col) => menu[col.key].length));

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            {COLUMNS.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 text-left font-semibold text-neutral-600 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 w-1/4"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rowCount }).map((_, i) => (
            <tr
              key={i}
              className="border-b border-neutral-100 dark:border-neutral-800 last:border-0 even:bg-neutral-50 dark:even:bg-neutral-800/40"
            >
              {COLUMNS.map((col) => (
                <td
                  key={col.key}
                  className="px-4 py-2 text-neutral-700 dark:text-neutral-300"
                >
                  {menu[col.key][i] ?? ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
