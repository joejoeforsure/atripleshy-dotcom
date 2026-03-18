// The Single — blog post page
// Replace the placeholder content below with your actual post.

export default function SinglePage() {
  return (
    <div className="container">
      <article className="prose-page">
        <header className="prose-header">
          <p className="theme-label">Single · Blog Post</p>
          <h1 className="theme-title">Everyone&rsquo;s a Genius in a Bull Market</h1>
          <p className="theme-description">
            Leverage makes fools look brilliant — right up until it doesn&rsquo;t. An essay on the seductive logic of borrowing against tomorrow to win today.
          </p>
        </header>
        <div className="prose-body">
          <p>
            Your blog post goes here. Edit <code>src/app/single/page.tsx</code> to add your content.
          </p>
        </div>
        <a href="/" className="back-link">← Back to current at-bat</a>
      </article>
    </div>
  );
}
