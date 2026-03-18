import { notFound } from "next/navigation";
import Image from "next/image";
import { pastAtBats, getAtBat, type AtBat } from "@/lib/at-bats";

export function generateStaticParams() {
  return pastAtBats.map((ab) => ({ id: String(ab.number) }));
}

// ── Base diamond (same as home page) ────────────────────────────────────────

function BaseDiamond({ filled }: { filled: number }) {
  const S = 32, c = S / 2, r = 9, bs = 4.5;
  const bases: [number, number][] = [
    [c + r, c], [c, c - r], [c - r, c], [c, c + r],
  ];
  return (
    <svg width="28" height="28" viewBox={`0 0 ${S} ${S}`} aria-hidden="true">
      <polygon points={bases.map(([x, y]) => `${x},${y}`).join(" ")}
        fill="none" stroke="var(--border)" strokeWidth="3" strokeLinejoin="miter" />
      {bases.map(([x, y], i) => (
        <rect key={i} x={x - bs} y={y - bs} width={bs * 2} height={bs * 2} rx="0.5"
          transform={`rotate(45 ${x} ${y})`}
          fill={i < filled ? "var(--accent)" : "var(--card-bg)"}
          stroke={i < filled ? "var(--accent)" : "var(--border)"}
          strokeWidth="1.5" />
      ))}
    </svg>
  );
}

// ── Hit card ─────────────────────────────────────────────────────────────────

type HitCardProps = {
  label: string;
  filledBases: number;
  mediaLabel: string;
  title: string;
  excerpt: string;
  image?: string;
  href: string;
};

function HitCard({ label, filledBases, mediaLabel, title, excerpt, image, href }: HitCardProps) {
  return (
    <a href={href} className="hit-card">
      <div className="hit-badge">
        <BaseDiamond filled={filledBases} />
        <span className="hit-type-label">{label}</span>
      </div>
      <div className="hit-content">
        <p className="hit-meta">{mediaLabel}</p>
        <h2 className="hit-title">{title}</h2>
        <p className="hit-excerpt">{excerpt}</p>
      </div>
      {image && (
        <div className="hit-thumb">
          <Image src={image} alt={title} width={240} height={160} className="hit-thumb-img" />
        </div>
      )}
    </a>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function AtBatPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const atBat: AtBat | undefined = getAtBat(Number(id));
  if (!atBat) notFound();

  const idx = pastAtBats.indexOf(atBat);
  const prev = pastAtBats[idx + 1] ?? null;
  const next = pastAtBats[idx - 1] ?? null;

  return (
    <div className="container">
      <section className="theme-intro">
        <p className="theme-label">At-Bat #{atBat.number} · {atBat.date}</p>
        <h1 className="theme-title">{atBat.name}</h1>
        <p className="theme-description">{atBat.description}</p>
      </section>

      <div className="hits-grid">
        <HitCard label="Single" filledBases={1} mediaLabel="Blog Post"
          title={atBat.single.title} excerpt={atBat.single.excerpt}
          image={atBat.single.image} href={`/at-bat/${atBat.number}/single`} />
        <HitCard label="Double" filledBases={2} mediaLabel="Photograph"
          title={atBat.double.title} excerpt={atBat.double.excerpt}
          image={atBat.double.image} href={`/at-bat/${atBat.number}/double`} />
        <HitCard label="Home Run" filledBases={4} mediaLabel={atBat.homerun.mediaType}
          title={atBat.homerun.title} excerpt={atBat.homerun.excerpt}
          image={atBat.homerun.image} href={`/at-bat/${atBat.number}/home-run`} />
      </div>

      <nav className="at-bat-nav">
        <div className="at-bat-nav-prev">
          {prev ? (
            <a href={`/at-bat/${prev.number}`} className="at-bat-nav-link">
              <span className="at-bat-nav-direction">← Previous At-Bat</span>
              <span className="at-bat-nav-name">{prev.name}</span>
            </a>
          ) : (
            <span className="at-bat-nav-empty">This is the first at-bat.</span>
          )}
        </div>
        <a href="/previous-at-bats" className="at-bat-nav-archive">All At-Bats</a>
        <div className="at-bat-nav-next">
          {next ? (
            <a href={`/at-bat/${next.number}`} className="at-bat-nav-link at-bat-nav-link--right">
              <span className="at-bat-nav-direction">Next At-Bat →</span>
              <span className="at-bat-nav-name">{next.name}</span>
            </a>
          ) : (
            <a href="/" className="at-bat-nav-link at-bat-nav-link--right">
              <span className="at-bat-nav-direction">Current At-Bat →</span>
              <span className="at-bat-nav-name">Margin Calls</span>
            </a>
          )}
        </div>
      </nav>
    </div>
  );
}
