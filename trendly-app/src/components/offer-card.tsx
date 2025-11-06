interface OfferCardProps {
  title: string;
  description: string;
  code?: string;
  expiry?: string;
  accent?: "primary" | "secondary";
}

export function OfferCard({
  title,
  description,
  code,
  expiry,
  accent = "primary",
}: OfferCardProps) {
  const accentClass =
    accent === "primary"
      ? "bg-[rgba(255,62,108,0.08)] text-primary"
      : "bg-[rgba(79,70,229,0.12)] text-secondary";

  return (
    <article className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-[rgba(0,0,0,0.06)] bg-surface-primary p-4">
      <span className={`self-start rounded-full px-3 py-1 text-xs font-semibold ${accentClass}`}>
        {expiry ? `Ends ${expiry}` : "Limited"}
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        <p className="text-sm text-text-secondary">{description}</p>
      </div>
      {code && (
        <div className="flex h-12 items-center justify-between rounded-[var(--radius-sm)] border border-dashed border-[rgba(0,0,0,0.12)] px-4">
          <span className="text-sm font-semibold tracking-[0.2em] text-text-primary">
            {code}
          </span>
          <span className="text-xs font-medium uppercase text-primary">Tap to copy</span>
        </div>
      )}
    </article>
  );
}
