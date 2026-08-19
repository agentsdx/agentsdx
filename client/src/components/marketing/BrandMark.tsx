import { Link } from "wouter";

type BrandMarkProps = {
  inverse?: boolean;
};

export function BrandMark({ inverse = false }: BrandMarkProps) {
  return (
    <Link href="/" className="brand-mark" aria-label="agents DX home">
      <span className={inverse ? "brand-mark__text brand-mark__text--inverse" : "brand-mark__text"}>
        agents <em>DX</em>
      </span>
    </Link>
  );
}
