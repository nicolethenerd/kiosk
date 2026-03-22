interface KioskTileProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function KioskTile({ title, children, className = "" }: KioskTileProps) {
  return (
    <div className={`flex flex-col rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-neutral-900 ${className}`}>
      {title && (
        <div className="px-4 py-3 bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
          <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 tracking-wide">
            {title}
          </h2>
        </div>
      )}
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}
