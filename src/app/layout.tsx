import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Triple Shy",
  description: "A blog post, a photograph, and a song — grouped around an at-bat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="site-header">
          <div className="container">
            <div className="site-title-group">
              <a href="/" className="site-title">A Triple Shy</a>
              <span className="site-tagline">one at-bat · three hits</span>
            </div>
            <nav className="site-nav">
              <a href="/previous-at-bats" className="site-nav-link">Previous At-Bats</a>
            </nav>
          </div>
        </header>
        <main className="site-main">
          {children}
        </main>
        <footer className="site-footer">
          <div className="container">
            <p>A Triple Shy — just shy of a home run.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
