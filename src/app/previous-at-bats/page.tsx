import { pastAtBats } from "@/lib/at-bats";

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
              <a href={`/at-bat/${atBat.number}`} className="archive-link">
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
