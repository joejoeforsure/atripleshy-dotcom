// The Single — blog post page
// Replace the placeholder content below with your actual post.

export default function SinglePage() {
  return (
    <div className="container">
      <article className="prose-page">
        <header className="prose-header">
          <p className="theme-label">Single · Blog Post</p>
          <h1 className="theme-title">What Spring Smells Like Before the First Pitch</h1>
          <p className="theme-description">
            A short essay on anticipation — the particular feeling of a stadium filling up for the first time each year.
          </p>
        </header>
        <div className="prose-body">
          <p>
            Your blog post goes here. Edit <code>src/app/single/page.tsx</code> to add your content.
          </p>
        </div>
        <a href="/" className="back-link">← Back to theme</a>
      </article>
    </div>
  );
}
