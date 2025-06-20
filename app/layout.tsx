import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'taiccyのポートフォリオサイト',
  description: 'taiccyのポートフォリオサイトです。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'flex min-h-dvh flex-col bg-orange-200/5 antialiased',
        )}
      >
        <header className="font flex h-24 items-center justify-between px-4 transition-all duration-700 starting:opacity-0">
          <h1 className="sr-only">taiccyのポートフォリオサイト</h1>
          <Link
            href="/"
            className="group relative size-14 overflow-hidden rounded-full border border-stone-800/75 transition-colors duration-300 hover:bg-amber-900/10"
          >
            <Image
              src="/taiccy-avatar.png"
              fill
              className="transition-transform duration-300 group-hover:scale-105"
              alt="taiccyのアバター"
            />
          </Link>
          <nav>
            <ul className="flex items-center gap-1 text-base font-extrabold text-amber-900 sm:text-lg">
              <li>
                <Link
                  className="rounded-md p-2 transition-colors duration-300 hover:bg-amber-900/10"
                  href="/"
                >
                  WORKS
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-md p-2 transition-colors duration-300 hover:bg-amber-900/10"
                  href="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-md p-2 transition-colors duration-300 hover:bg-amber-900/10"
                  href="/contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className="fixed top-[50vh] left-1/2 -z-50 aspect-square w-3/5 max-w-xl -translate-1/2 -translate-x-1/2 opacity-10">
          <Image src="/taiccy-avatar.png" fill alt="taiccyのアバター" />
        </div>
        <main className="flex-1">{children}</main>
        <footer className="h-24 bg-stone-800 text-center">
          <div className="flex h-full items-center justify-center">
            <p className="text-sm tracking-wider text-stone-200">
              © taiccy 2024
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
