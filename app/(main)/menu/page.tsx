import type { Metadata } from 'next'
import { siteConfig } from '@/config/client-config'
import Catalog from '@/components/Catalog'

export const metadata: Metadata = {
  title: siteConfig.menuLabel,
  description: `${siteConfig.menuLabel} de ${siteConfig.businessName}. ${siteConfig.description}`,
}

export default function MenuPage() {
  return (
    <main className="pt-20">
      <Catalog />
    </main>
  )
}
