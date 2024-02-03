import './globals.css'
import { Roboto } from 'next/font/google'

import type { Metadata } from 'next'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: "kobe's log",
  description: 'A personal blog by Jeasung Lee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-slate-600`}>{children}</body>
    </html>
  )
}
