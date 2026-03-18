// This is the home page — the "theme hub" for A Triple Shy.
// Each edition has one theme, and three hits: single (blog), double (photo), home run (song).
// Replace the placeholder data below with real content when you're ready.

const currentTheme = {
  name: "Opening Day",
  description:
    "The smell of fresh-cut grass, the crack of a bat, the start of something new. Every season begins with hope.",
  single: {
    title: "What Spring Smells Like Before the First Pitch",
    excerpt:
      "A short essay on anticipation — the particular feeling of a stadium filling up for the first time each year.",
    href: "/single",
  },
  double: {
    title: "Empty Bleachers, 7am",
    excerpt: "A photograph taken before the crowds arrived.",
    href: "/double",
  },
  homerun: {
    title: "\"Take Me Out to the Ball Game\" — reimagined",
    excerpt: "A folk cover of an American classic, recorded live.",
    href: "/home-run",
  },
};

type Hit = {
  type: "single" | "double" | "home-run";
  label: string;
  filledBases: number;
  totalBases: number;
  data: {
    title: string;
    excerpt: string;
    href: string;
  };
};

const hits: Hit[] = [
  {
    type: "single",
    label: "Single",
    filledBases: 1,
    totalBases: 4,
    data: currentTheme.single,
  },
  {
    type: "double",
    label: "Double",
    filledBases: 2,
    totalBases: 4,
    data: currentTheme.double,
  },
  {
    type: "home-run",
    label: "Home Run",
    filledBases: 4,
    totalBases: 4,
    data: currentTheme.homerun,
  },
];

const hitTypeEmoji: Record<Hit["type"], string> = {
  single: "Blog Post",
  double: "Photograph",
  "home-run": "Song",
};

function BaseDiamond({ filled, total }: { filled: number; total: number }) {
  return (
    <div className="hit-bases">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`base${i < filled ? " filled" : ""}`} />
      ))}
    </div>
  );
}

function HitCard({ hit }: { hit: Hit }) {
  return (
    <a href={hit.data.href} className="hit-card">
      <div className="hit-badge">
        <BaseDiamond filled={hit.filledBases} total={hit.totalBases} />
        <span className="hit-type-label">{hit.label}</span>
      </div>
      <div className="hit-content">
        <p className="hit-meta">{hitTypeEmoji[hit.type]}</p>
        <h2 className="hit-title">{hit.data.title}</h2>
        <p className="hit-excerpt">{hit.data.excerpt}</p>
      </div>
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
