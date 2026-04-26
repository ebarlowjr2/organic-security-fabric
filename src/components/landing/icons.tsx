export function Icon({
  d,
}: {
  d: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d={d} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export const Icons = {
  layers:
    "M12 3.5l8 4.5-8 4.5L4 8l8-4.5ZM20 12.5l-8 4.5-8-4.5M20 17l-8 4.5L4 17",
  pulse:
    "M4 13h3l2-6 4 12 2-6h5",
  automate:
    "M8 8h8M8 16h8M6 12h12M8 8v8M16 8v8",
  verify:
    "M8.5 12.5l2.2 2.2L16 9.5",
  book:
    "M6.5 5.5h9A2 2 0 0 1 17.5 7.5v12H8.5A2 2 0 0 0 6.5 21V5.5Z",
} as const;

