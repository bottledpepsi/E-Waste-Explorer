import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Nunito, Baloo_2 } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const baloo = Baloo_2({
  subsets: ['latin'],
  variable: '--font-baloo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'E-Waste Explorer',
  description:
    'An investigation into electronic waste'
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2b6fe0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${nunito.variable} ${baloo.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
