// The Home Run — song page
// Replace the placeholder with your actual song embed or audio player.

export default function HomeRunPage() {
  return (
    <div className="container">
      <article className="prose-page">
        <header className="prose-header">
          <p className="theme-label">Home Run · Song</p>
          <h1 className="theme-title">&ldquo;Take Me Out to the Ball Game&rdquo; — reimagined</h1>
          <p className="theme-description">A folk cover of an American classic, recorded live.</p>
        </header>
        <div className="audio-placeholder">
          <p>Add your song here. Edit <code>src/app/home-run/page.tsx</code>.</p>
          <p className="hint">
            You can embed a SoundCloud or Spotify player, use an HTML{" "}
            <code>&lt;audio&gt;</code> element, or link to a streaming platform.
          </p>
        </div>
        <a href="/" className="back-link">← Back to theme</a>
      </article>
    </div>
  );
}
