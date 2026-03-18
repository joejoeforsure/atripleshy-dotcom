import { notFound } from "next/navigation";
import { pastAtBats, getAtBat } from "@/lib/at-bats";

export function generateStaticParams() {
  return pastAtBats.map((ab) => ({ id: String(ab.number) }));
}

export default async function ArchivedDoublePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const atBat = getAtBat(Number(id));
  if (!atBat) notFound();

  return (
    <div className="container">
      <article className="prose-page">
        <header className="prose-header">
          <p className="theme-label">Double · Photograph · At-Bat #{atBat.number}</p>
          <h1 className="theme-title">{atBat.double.title}</h1>
          <p className="theme-description">{atBat.double.excerpt}</p>
        </header>
        <div className="photo-placeholder">
          <p>Photograph for this at-bat has not been added yet.</p>
        </div>
        <a href={`/at-bat/${atBat.number}`} className="back-link">← Back to {atBat.name}</a>
      </article>
    </div>
  );
}
