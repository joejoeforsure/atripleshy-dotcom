// Previous At-Bats — archive page
// Add past at-bats to the list below in reverse chronological order.

const pastAtBats = [
  {
    number: 1,
    name: "The Great Hate of Florida",
    description: "How a culture of \"me first\" and a flood of retiring boomers aren't saving the Sunshine State — they're hollowing it out.",
    href: "/at-bat/1",
    date: "March 2026",
  },
] as {
  number: number;
  name: string;
  description: string;
  href: string;
  date: string;
}[];

export default function PreviousAtBats() {
  return (
    <div className="container">
      <section className="theme-intro">
        <p className="theme-label">Archive</p>
        <h1 className="theme-title">Previous At-Bats</h1>
        <p className="theme-description">Every at-bat, in order.</p>
      </section>

      {pastAtBats.length === 0 ? (
        <p className="archive-empty">
          No previous at-bats yet — check back after the next one drops.
        </p>
      ) : (
        <ol className="archive-list">
          {pastAtBats.map((atBat) => (
            <li key={atBat.number} className="archive-item">
              <a href={atBat.href} className="archive-link">
                <span className="archive-number">#{atBat.number}</span>
                <div className="archive-body">
                  <h2 className="archive-name">{atBat.name}</h2>
                  <p className="archive-description">{atBat.description}</p>
                </div>
                <span className="archive-date">{atBat.date}</span>
              </a>
            </li>
          ))}
        </ol>
      )}

      <div className="archive-back">
        <a href="/" className="back-link">← Current At-Bat</a>
      </div>
    </div>
  );
}
