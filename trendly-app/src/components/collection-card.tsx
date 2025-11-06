import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

interface CollectionCardProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  imageUrl: string;
  gradient?: string;
}

export function CollectionCard({
  title,
  subtitle,
  ctaLabel,
  imageUrl,
  gradient = "linear-gradient(150deg, rgba(255,62,108,0.85) 0%, rgba(79,70,229,0.85) 100%)",
}: CollectionCardProps) {
  return (
    <article className="relative overflow-hidden rounded-[var(--radius-md)] bg-surface-primary">
      <div className="relative h-48">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
        <div className="absolute inset-0" style={{ background: gradient }} />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end gap-3 p-6 text-text-inverse">
        <span className="text-sm uppercase tracking-[0.18em] text-text-inverse/80">
          {subtitle}
        </span>
        <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-semibold text-text-inverse/90"
        >
          {ctaLabel}
          <ArrowRightIcon size={18} />
        </button>
      </div>
    </article>
  );
}
