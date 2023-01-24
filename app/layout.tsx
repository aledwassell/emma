/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import './global.css';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <head></head>
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/quotes">Quotes</Link>
        </nav>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
