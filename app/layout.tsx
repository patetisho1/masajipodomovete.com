import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/FloatingChat'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
})
const lora = Lora({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-lora',
})

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.masajipodomovete.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Масажи по домовете София | Професионален масаж у дома – Тихомир Тодоров',
  description: 'Масаж в София и област у вас вкъщи. Класически, дълбокотъканен, Ломи Ломи, рефлексотерапия. Лицензиран масажист с над 10 години опит. Обадете се за час.',
  keywords: 'масаж софия, масаж по домовете, масажист софия, масаж у дома софия, класически масаж, дълбокотъканен масаж, релаксиращ масаж',
  viewport: { width: 'device-width', initialScale: 1, maximumScale: 5 },
  themeColor: '#4a684c',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Масажи по домовете София | Масаж у дома',
    description: 'Професионален масаж у вас вкъщи в София и област. Тихомир Тодоров – над 10 години опит.',
    url: siteUrl,
    locale: 'bg_BG',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Масажи по домовете – Тихомир Тодоров',
    description: 'Професионален масаж у дома в София и област. Класически, дълбокотъканен, Ломи Ломи, рефлексотерапия и др.',
    url: siteUrl,
    telephone: '+359897500190',
    email: 'masajipodomovete@abv.bg',
    areaServed: { '@type': 'City', name: 'София', containedInPlace: { '@type': 'Country', name: 'България' } },
    priceRange: '€€',
    image: `${siteUrl}/background.jpg`,
    sameAs: ['https://www.facebook.com/masajipodomovete'],
  }

  return (
    <html lang="bg" className={`${inter.variable} ${lora.variable}`}>
      <body className={inter.className}>
        <GoogleAnalytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  )
}
