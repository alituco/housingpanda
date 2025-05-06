import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HousingPanda Demo',
  description: 'housing panda demo app for lisiting',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gray-50">
        <header className="mb-8 bg-white shadow">
          <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
            <a href="/" className="text-xl font-bold">HousingPanda</a>
            <a href="/submit" className="rounded bg-blue-600 px-3 py-1 text-white">New Listing</a>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-4">{children}</main>
      </body>
    </html>
  );
}
