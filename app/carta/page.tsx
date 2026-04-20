'use client'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://shefri.com'
const PDF_PATH = '/carta/carta_ene-feb.pdf'
const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(SITE_URL + PDF_PATH)}&embedded=true`

export default function CartaPage() {
  return (
    <iframe
      src={googleViewerUrl}
      className="fixed inset-0 w-full h-full border-0"
      title="Carta Shefri"
      allow="autoplay"
    />
  )
}
