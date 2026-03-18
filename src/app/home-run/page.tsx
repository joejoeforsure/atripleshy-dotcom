// The Home Run — song page
// Replace the placeholder with your actual song embed or audio player.

export default function HomeRunPage() {
  return (
    <div className="container">
      <article className="prose-page">
        <header className="prose-header">
          <p className="theme-label">Home Run · Song</p>
          <h1 className="theme-title">Margin Call</h1>
          <p className="theme-description">A song about the moment you find out the bet was too big.</p>
        </header>
        <div className="audio-placeholder">
          <p>Add your song here. Edit <code>src/app/home-run/page.tsx</code>.</p>
          <p className="hint">
            You can embed a SoundCloud or Spotify player, use an HTML{" "}
            <code>&lt;audio&gt;</code> element, or link to a streaming platform.
          </p>
        </div>
        <a href="/" className="back-link">← Back to current at-bat</a>
      </article>
    </div>
  );
}
