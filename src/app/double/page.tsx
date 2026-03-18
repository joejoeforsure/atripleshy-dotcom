// The Double — photograph page
// Replace the placeholder with your actual image.

export default function DoublePage() {
  return (
    <div className="container">
      <article className="prose-page">
        <header className="prose-header">
          <p className="theme-label">Double · Photograph</p>
          <h1 className="theme-title">The Floor After the Bell</h1>
          <p className="theme-description">A trading floor photographed at 4:03 PM on a day nobody wanted to remember.</p>
        </header>
        <div className="photo-placeholder">
          <p>Add your photograph here. Edit <code>src/app/double/page.tsx</code>.</p>
          <p className="hint">Use Next.js <code>&lt;Image&gt;</code> for optimized images.</p>
        </div>
        <a href="/" className="back-link">← Back to current at-bat</a>
      </article>
    </div>
  );
}
