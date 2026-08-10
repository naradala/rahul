import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Madhav Naradala | Full Stack Java Developer',
  description:
    'Portfolio of Madhav Naradala, a Full Stack Java Developer specializing in Java, Spring Boot, React, cloud technologies, and enterprise applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-black/70 backdrop-blur-2xl">
          <nav className="apple-container flex h-12 items-center justify-between">
            <a
              href="#top"
              className="text-sm font-semibold tracking-tight text-white"
              aria-label="Go to top"
            >
              MN
            </a>

            <div className="flex items-center gap-4 text-xs text-white/60 sm:gap-7 sm:text-sm">
              <a
                href="#experience"
                className="transition-colors duration-200 hover:text-white"
              >
                Experience
              </a>

              <a
                href="#skills"
                className="transition-colors duration-200 hover:text-white"
              >
                Skills
              </a>

              <a
                href="#education"
                className="hidden transition-colors duration-200 hover:text-white sm:inline"
              >
                Education
              </a>

              <a
                href="mailto:naradalamaadhav@gmail.com"
                className="rounded-full bg-white px-4 py-1.5 font-medium text-black transition hover:bg-white/85"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        {children}
        <Analytics />
      </body>
    </html>
  );
}