'use client'

import { siteConfig } from '@/config/client-config'

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

        {/* PDF viewer — ocupa toda la pantalla en mobile */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg" style={{ height: '80vh' }}>
          <iframe
            src="/carta/carta_ene-feb.pdf"
            className="w-full h-full"
            title="Carta Shefri"
          />
        </div>

        <a
          href="/carta/carta_ene-feb.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm shadow-md transition-opacity hover:opacity-90"
          style={{ backgroundColor: siteConfig.colors.primary }}
        >
          Abrir carta completa
        </a>

      </div>
    </main>
  )
}
