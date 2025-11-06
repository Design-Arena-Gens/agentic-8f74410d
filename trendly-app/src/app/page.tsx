import Image from "next/image";
import { Header } from "@/components/header";
import { BottomCta } from "@/components/bottom-cta";
import { Chip } from "@/components/ui/chip";
import { Button } from "@/components/ui/button";
import { CollectionCard } from "@/components/collection-card";
import { ProductCard, type ProductCardProps } from "@/components/product-card";
import { OfferCard } from "@/components/offer-card";
import { Input } from "@/components/ui/input";
import { Dropdown } from "@/components/ui/dropdown";
import { Stepper } from "@/components/ui/stepper";
import { OtpInput } from "@/components/ui/otp-input";
import { Badge } from "@/components/ui/badge";
import { FilterIcon, SearchIcon } from "@/components/icons";

const categories = [
  { label: "Women", selected: true },
  { label: "Men" },
  { label: "Footwear" },
  { label: "Accessories" },
  { label: "Beauty" },
  { label: "Home" },
];

const trendingLooks: ProductCardProps[] = [
  {
    id: "p-1",
    name: "Crochet Knit Midi Dress",
    brand: "Trendly Studio",
    price: "$129",
    originalPrice: "$189",
    discount: "30%",
    rating: 4.6,
    ratingCount: 1189,
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    badges: [{ tone: "new", label: "New In" }],
  },
  {
    id: "p-2",
    name: "Retro Runner Sneakers",
    brand: "Volt Athletics",
    price: "$98",
    originalPrice: "$129",
    discount: "25%",
    rating: 4.8,
    ratingCount: 2475,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    badges: [{ tone: "bestseller", label: "Best Seller" }],
  },
  {
    id: "p-3",
    name: "Utility Belted Jumpsuit",
    brand: "Urban Halo",
    price: "$156",
    rating: 4.7,
    ratingCount: 986,
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    badges: [{ tone: "neutral", label: "Limited" }],
  },
];

const curatedCollections = [
  {
    title: "Monochrome Mood",
    subtitle: "Lifestyle Edit",
    ctaLabel: "Shop the edit",
    imageUrl:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Summer Drop 24",
    subtitle: "Fresh Fits",
    ctaLabel: "Shop new arrivals",
    imageUrl:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=80",
    gradient:
      "linear-gradient(160deg, rgba(79,70,229,0.85) 0%, rgba(17,17,17,0.85) 100%)",
  },
];

const offerTiles = [
  {
    title: "Payday Pink Drop",
    description: "Extra 20% off on orders above $199 across apparel & footwear.",
    code: "TREND20",
    expiry: "Sun",
    accent: "primary" as const,
  },
  {
    title: "Elite Shipping Upgrade",
    description: "Get same-day delivery on Trendly Luxe when you pay with Trendly Pay.",
    code: "TRENDLYPAY",
    accent: "secondary" as const,
  },
];

const quickFilters = [
  "Under $99",
  "Occasion Wear",
  "Colour Pop",
  "Sustainable",
  "Express Ship",
];

const sizeChips = ["XS", "S", "M", "L", "XL"];

const colorSwatches = ["#111111", "#FF3E6C", "#4F46E5", "#EAB308", "#22C55E"];

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-muted pb-28">
      <Header />
      <main className="mx-auto flex w-full max-w-[480px] flex-col gap-10 px-4 pb-32 pt-6">
        <section className="flex flex-col gap-4">
          <div className="rounded-[var(--radius-md)] bg-surface-primary p-4 shadow-[0_20px_40px_rgba(17,17,17,0.08)]">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              <div className="size-2 rounded-full bg-secondary" />
              Drop Live Now
            </div>
            <h1 className="mt-4 text-3xl font-semibold leading-snug text-text-primary">
              Trendly Summer Hype Sale
            </h1>
            <p className="mt-2 text-sm text-text-secondary">
              Exclusive app-only access to 500+ curated looks, refreshed every hour.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Button size="lg">Shop the drop</Button>
              <Button variant="ghost" size="lg">
                <FilterIcon size={20} />
                Filters
              </Button>
            </div>
            <div className="mt-6 overflow-hidden rounded-[var(--radius-md)]">
              <Image
                src="https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1400&q=80"
                alt="Trendly Lifestyle Banner"
                width={1200}
                height={720}
                className="h-52 w-full object-cover"
              />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => (
              <Chip key={category.label} selected={category.selected}>
                {category.label}
              </Chip>
            ))}
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {quickFilters.map((filter) => (
              <Chip key={filter} variant="filter">
                {filter}
              </Chip>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-semibold text-text-primary">Trending Looks</h2>
            <button type="button" className="text-sm font-semibold text-primary">
              View all
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-1">
            {trendingLooks.map((product) => (
              <div key={product.id} className="min-w-[240px] flex-1">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-text-primary">Collections</h2>
            <button type="button" className="text-sm font-semibold text-primary">
              See all
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {curatedCollections.map((collection) => (
              <CollectionCard key={collection.title} {...collection} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-text-primary">Offers for You</h2>
          <div className="grid gap-4">
            {offerTiles.map((offer) => (
              <OfferCard key={offer.title} {...offer} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-semibold text-text-primary">Design System</h2>
          <div className="space-y-4 rounded-[var(--radius-md)] border border-[rgba(0,0,0,0.08)] bg-surface-primary p-4 shadow-[0_18px_28px_rgba(17,17,17,0.06)]">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">
                Buttons
              </span>
              <div className="flex flex-wrap gap-3">
                <Button size="lg">Primary L</Button>
                <Button size="md">Primary M</Button>
                <Button size="sm">Primary S</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">
                Inputs
              </span>
              <div className="flex flex-col gap-4">
                <Input
                  label="Search"
                  placeholder="Search for sneakers"
                  leadingIcon={<SearchIcon size={18} />}
                />
                <Input
                  label="Email"
                  placeholder="name@email.com"
                  helperText="Stay updated with drops"
                />
                <Input
                  label="Phone"
                  placeholder="(555) 000-0000"
                  errorText="Invalid phone"
                />
                <Dropdown label="Size" defaultValue="">
                  <option value="" disabled>
                    Select size
                  </option>
                  {sizeChips.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </Dropdown>
                <Stepper label="Quantity" />
                <OtpInput label="OTP" helperText="Enter 4-digit code" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">
                Chips & Badges
              </span>
              <div className="flex flex-wrap gap-3">
                {sizeChips.map((size) => (
                  <Chip key={size} variant="size">
                    {size}
                  </Chip>
                ))}
                {colorSwatches.map((color) => (
                  <Chip key={color} variant="swatch" colorHex={color}>
                    {color === "#111111" ? "Onyx" : color === "#FF3E6C" ? "Fuchsia" : color === "#4F46E5" ? "Violet" : color === "#EAB308" ? "Saffron" : "Emerald"}
                  </Chip>
                ))}
                <Badge tone="discount">30% OFF</Badge>
                <Badge tone="new">New</Badge>
                <Badge tone="bestseller">Best Seller</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4 pb-12">
          <h2 className="text-xl font-semibold text-text-primary">Style Stories</h2>
          <div className="space-y-4">
            {[1, 2].map((item) => (
              <article
                key={item}
                className="overflow-hidden rounded-[var(--radius-md)] bg-surface-primary shadow-[0_16px_24px_rgba(17,17,17,0.08)]"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={
                      item === 1
                        ? "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1200&q=80"
                        : "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80"
                    }
                    alt="Trend Editorial"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 p-4">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {item === 1 ? "How to Style Neon Pops" : "Layering for Transitional Weather"}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Get the cheat sheet to styling bold color bursts with your neutral base wardrobe.
                  </p>
                  <button type="button" className="text-sm font-semibold text-primary">
                    Read more
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <BottomCta />
    </div>
  );
}
