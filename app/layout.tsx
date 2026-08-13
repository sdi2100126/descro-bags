import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import { ProductModalProvider } from '@/lib/product-modal-context'
import { QuickViewModal } from '@/components/quick-view-modal'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Descro — Handmade Crochet Bags',
  description:
    'Handmade crochet bags, crafted one stitch at a time. Elegant, tactile pieces made slowly and intentionally in small batches.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FAF6EF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">
        <ProductModalProvider>
          {children}
          <QuickViewModal />
        </ProductModalProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
