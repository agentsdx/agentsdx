import { Link } from "wouter";

type BrandMarkProps = {
  inverse?: boolean;
  compact?: boolean;
};

export function BrandMark({ inverse = false, compact = false }: BrandMarkProps) {
  return (
    <Link href="/" className="brand-mark" aria-label="agents DX home">
      <span className="brand-mark__glyph" aria-hidden="true">
        <span>AD</span>
      </span>
      {!compact && (
        <span className={inverse ? "brand-mark__text brand-mark__text--inverse" : "brand-mark__text"}>
          agents <em>DX</em>
        </span>
      )}
    </Link>
  );
}
