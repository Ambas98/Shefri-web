import type { Metadata, Viewport } from 'next'
import { Poppins, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/client-config'
import { SchemaOrg } from '@/components/SchemaOrg'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: siteConfig.colors.primary,
}

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL in production (e.g. https://tudominio.com)
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: siteConfig.businessName,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seo?.keywords || '',
  openGraph: {
    title: siteConfig.businessName,
    description: siteConfig.description,
    ...(siteConfig.seo?.ogImage && {
      images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630 }],
    }),
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.businessName,
    description: siteConfig.description,
    ...(siteConfig.seo?.ogImage && { images: [siteConfig.seo.ogImage] }),
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${poppins.variable} ${cormorant.variable}`}>
      <head>
        <style>{`
          :root {
            --primary-color: ${siteConfig.colors.primary};
            --secondary-color: ${siteConfig.colors.secondary};
            --background-color: ${siteConfig.colors.background};
            --text-color: ${siteConfig.colors.text};
            --text-light-color: ${siteConfig.colors.textLight};
          }
        `}</style>
        <SchemaOrg />
      </head>
      <body className="font-poppins">
        {children}
      </body>
    </html>
  )
}
