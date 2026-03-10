import type { Metadata } from 'next'
import { siteConfig } from '@/config/client-config'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Eventos',
  description: `${siteConfig.businessName} para tus eventos. Llevamos el sabor napolitano a tu celebración con gazebo y hornos portátiles. Consultá disponibilidad.`,
}

export default function ContactoPage() {
  return (
    <main className="pt-20">
      <Contact />
    </main>
  )
}
