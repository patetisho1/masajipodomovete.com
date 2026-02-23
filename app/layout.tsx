import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/FloatingChat'

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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://masajipodomovete.com'),
  title: 'Масажи по домовете | София и област',
  description: 'Професионален масаж у вас вкъщи. Тихомир Тодоров – лицензиран масажист с над 10 години опит. София и област.',
  keywords: 'масаж софия, масаж по домовете, масажист софия, класически масаж, дълбокотъканен масаж',
  openGraph: {
    title: 'Масажи по домовете | София и област',
    description: 'Професионален масаж у вас вкъщи. Тихомир Тодоров – над 10 години опит.',
    locale: 'bg_BG',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg" className={`${inter.variable} ${lora.variable}`}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  )
}
