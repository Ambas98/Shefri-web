import type { Metadata } from 'next'
import { siteConfig } from '@/config/client-config'
import Gallery from '@/components/Gallery'

export const metadata: Metadata = {
  title: 'Galería',
  description: `Galería de fotos de ${siteConfig.businessName}. Conocé nuestro local y productos.`,
}

export default function GaleriaPage() {
  return (
    <main className="pt-20">
      <Gallery />
    </main>
  )
}
