import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { HeartIcon, StarIcon } from "@/components/icons";

export interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating?: number;
  ratingCount?: number;
  imageUrl: string;
  badges?: Array<{ tone: "discount" | "new" | "bestseller" | "neutral"; label: string }>;
}

export function ProductCard({
  name,
  brand,
  price,
  originalPrice,
  discount,
  rating,
  ratingCount,
  imageUrl,
  badges = [],
}: ProductCardProps) {
  return (
    <article className="relative flex flex-col gap-3 rounded-[var(--radius-md)] bg-surface-primary p-3 shadow-[0_16px_32px_rgba(17,17,17,0.08)]">
      <button
        type="button"
        className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full bg-[rgba(255,62,108,0.12)] text-primary"
      >
        <HeartIcon size={18} />
      </button>
      <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-sm)]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <Badge key={badge.label} tone={badge.tone}>
            {badge.label}
          </Badge>
        ))}
        {discount && (
          <Badge tone="discount">{discount} OFF</Badge>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-[0.08em] text-text-secondary">
          {brand}
        </span>
        <h3 className="text-base font-semibold text-text-primary">{name}</h3>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold text-text-primary">{price}</span>
        {originalPrice && (
          <span className="text-sm text-text-secondary line-through">{originalPrice}</span>
        )}
      </div>
      {rating && (
        <div className="flex items-center gap-1 text-sm font-medium text-text-primary">
          <StarIcon className="text-[#f59e0b]" />
          {rating}
          <span className="text-text-secondary">({ratingCount?.toLocaleString()})</span>
        </div>
      )}
    </article>
  );
}
