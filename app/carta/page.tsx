'use client'

import { siteConfig } from '@/config/client-config'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://shefri.com'
const PDF_PATH = '/carta/carta_ene-feb.pdf'
const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(SITE_URL + PDF_PATH)}&embedded=true`

export default function CartaPage() {
  return (
    <main className="min-h-screen flex flex-col items-center" style={{ backgroundColor: siteConfig.colors.background }}>
      <div className="w-full max-w-3xl px-4 py-8 flex flex-col items-center gap-6">

        <div className="text-center">
          <h1 className="text-3xl font-bold" style={{ color: siteConfig.colors.text }}>
            Nuestra Carta
          </h1>
          <p className="mt-1 text-sm" style={{ color: siteConfig.colors.textLight }}>
            Enero · Febrero 2025
          </p>
        </div>

        <div className="w-full rounded-xl overflow-hidden shadow-lg" style={{ height: '82vh' }}>
          <iframe
            src={googleViewerUrl}
            className="w-full h-full"
            title="Carta Shefri"
            allow="autoplay"
          />
        </div>

        <a
          href={SITE_URL + PDF_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm shadow-md transition-opacity hover:opacity-90"
          style={{ backgroundColor: siteConfig.colors.primary }}
        >
          Descargar carta
        </a>

      </div>
    </main>
  )
}
