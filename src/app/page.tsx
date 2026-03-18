// This is the home page — the "theme hub" for A Triple Shy.
// Each edition has one theme, and three hits: single (blog), double (photo), home run (song or video).
// Replace the placeholder data below with real content when you're ready.
//
// Thumbnails: drop image files into public/thumbs/ and set the image field below.
// Recommended size: 480x320px or similar 3:2 ratio. Leave image blank to show no thumbnail.

import Image from "next/image";

const currentTheme = {
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
};

type Hit = {
  type: "single" | "double" | "home-run";
  label: string;
  filledBases: number;
  totalBases: number;
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
    totalBases: 4,
    mediaLabel: "Blog Post",
    data: currentTheme.single,
  },
  {
    type: "double",
    label: "Double",
    filledBases: 2,
    totalBases: 4,
    mediaLabel: "Photograph",
    data: currentTheme.double,
  },
  {
    type: "home-run",
    label: "Home Run",
    filledBases: 4,
    totalBases: 4,
    mediaLabel: currentTheme.homerun.mediaType,
    data: currentTheme.homerun,
  },
];

// Bases in order around the diamond: 1B (right), 2B (top), 3B (left), HP (bottom)
const BASE_POSITIONS = ["base-1b", "base-2b", "base-3b", "base-hp"] as const;

function BaseDiamond({ filled }: { filled: number }) {
  return (
    <div className="diamond-field">
      {BASE_POSITIONS.map((pos, i) => (
        <div key={pos} className={`base ${pos}${i < filled ? " filled" : ""}`} />
      ))}
    </div>
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
        <p className="theme-label">Current Theme</p>
        <h1 className="theme-title">{currentTheme.name}</h1>
        <p className="theme-description">{currentTheme.description}</p>
      </section>

      <div className="hits-grid">
        {hits.map((hit) => (
          <HitCard key={hit.type} hit={hit} />
        ))}
      </div>
    </div>
  );
}
