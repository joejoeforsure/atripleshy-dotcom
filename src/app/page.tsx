// This is the home page — the current at-bat for A Triple Shy.
// Each at-bat has three hits: single (blog), double (photo), home run (song or video).
// Replace the placeholder data below with real content when you're ready.
//
// Thumbnails: drop image files into public/thumbs/ and set the image field below.
// Recommended size: 480x320px or similar 3:2 ratio. Leave image blank to show no thumbnail.

import Image from "next/image";

const currentAtBat = {
  number: 1,
  name: "The Great Hate of Florida",
  description:
    "How a culture of \"me first\" and a flood of retiring boomers aren't saving the Sunshine State — they're hollowing it out.",
  single: {
    title: "You Didn't Move Here to Be a Neighbor",
    excerpt:
      "Florida didn't go wrong because of hurricanes or heat. It went wrong because too many people arrived wanting the benefits of a place without any obligation to it.",
    href: "/single",
    image: "/thumbs/single.svg",
  },
  double: {
    title: "The View from the Gate",
    excerpt: "A gated community in Sarasota County, photographed from the public road they fought to have narrowed.",
    href: "/double",
    image: "/thumbs/double.svg",
  },
  homerun: {
    title: "Sunshine State of Mind",
    excerpt: "A song about arriving somewhere beautiful and making it a little worse.",
    href: "/home-run",
    mediaType: "Song" as "Song" | "Video",
    image: "/thumbs/homerun.svg",
  },
  // Navigation — set these once you publish more at-bats
  prev: null as { name: string; href: string } | null,
  next: null as { name: string; href: string } | null,
};

type Hit = {
  type: "single" | "double" | "home-run";
  label: string;
  filledBases: number;
  mediaLabel: string;
  data: {
    title: string;
    excerpt: string;
    href: string;
    image?: string;
  };
};

const hits: Hit[] = [
  {
    type: "single",
    label: "Single",
    filledBases: 1,
    mediaLabel: "Blog Post",
    data: currentAtBat.single,
  },
  {
    type: "double",
    label: "Double",
    filledBases: 2,
    mediaLabel: "Photograph",
    data: currentAtBat.double,
  },
  {
    type: "home-run",
    label: "Home Run",
    filledBases: 4,
    mediaLabel: currentAtBat.homerun.mediaType,
    data: currentAtBat.homerun,
  },
];

// Bases in order around the diamond: 1B (right), 2B (top), 3B (left), HP (bottom)
function BaseDiamond({ filled }: { filled: number }) {
  const S = 32;
  const c = S / 2;
  const r = 9;
  const bs = 4.5;

  const bases: [number, number][] = [
    [c + r, c],
    [c, c - r],
    [c - r, c],
    [c, c + r],
  ];

  const outlinePts = bases.map(([x, y]) => `${x},${y}`).join(" ");

  return (
    <svg width="28" height="28" viewBox={`0 0 ${S} ${S}`} aria-hidden="true">
      <polygon
        points={outlinePts}
        fill="none"
        stroke="var(--border)"
        strokeWidth="3"
        strokeLinejoin="miter"
      />
      {bases.map(([x, y], i) => (
        <rect
          key={i}
          x={x - bs}
          y={y - bs}
          width={bs * 2}
          height={bs * 2}
          rx="0.5"
          transform={`rotate(45 ${x} ${y})`}
          fill={i < filled ? "var(--accent)" : "var(--card-bg)"}
          stroke={i < filled ? "var(--accent)" : "var(--border)"}
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}

function HitCard({ hit }: { hit: Hit }) {
  return (
    <a href={hit.data.href} className="hit-card">
      <div className="hit-badge">
        <BaseDiamond filled={hit.filledBases} />
        <span className="hit-type-label">{hit.label}</span>
      </div>
      <div className="hit-content">
        <p className="hit-meta">{hit.mediaLabel}</p>
        <h2 className="hit-title">{hit.data.title}</h2>
        <p className="hit-excerpt">{hit.data.excerpt}</p>
      </div>
      {hit.data.image && (
        <div className="hit-thumb">
          <Image
            src={hit.data.image}
            alt={hit.data.title}
            width={240}
            height={160}
            className="hit-thumb-img"
          />
        </div>
      )}
    </a>
  );
}

export default function Home() {
  return (
    <div className="container">
      <section className="theme-intro">
        <p className="theme-label">Current At-Bat</p>
        <h1 className="theme-title">{currentAtBat.name}</h1>
        <p className="theme-description">{currentAtBat.description}</p>
      </section>

      <div className="hits-grid">
        {hits.map((hit) => (
          <HitCard key={hit.type} hit={hit} />
        ))}
      </div>

      <nav className="at-bat-nav">
        <div className="at-bat-nav-prev">
          {currentAtBat.prev ? (
            <a href={currentAtBat.prev.href} className="at-bat-nav-link">
              <span className="at-bat-nav-direction">← Previous At-Bat</span>
              <span className="at-bat-nav-name">{currentAtBat.prev.name}</span>
            </a>
          ) : (
            <span className="at-bat-nav-empty">This is the first at-bat.</span>
          )}
        </div>
        <a href="/previous-at-bats" className="at-bat-nav-archive">All At-Bats</a>
        <div className="at-bat-nav-next">
          {currentAtBat.next && (
            <a href={currentAtBat.next.href} className="at-bat-nav-link at-bat-nav-link--right">
              <span className="at-bat-nav-direction">Next At-Bat →</span>
              <span className="at-bat-nav-name">{currentAtBat.next.name}</span>
            </a>
          )}
        </div>
      </nav>
    </div>
  );
}
