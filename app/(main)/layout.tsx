import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Saltar al contenido
      </a>
      <Header />
      <div id="main-content">
        {children}
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
