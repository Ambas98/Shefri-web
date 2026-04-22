import Image from 'next/image'

const PAGES = [
  { src: '/carta/carta-01.jpeg', alt: 'Carta Shefri – Pizzas' },
  { src: '/carta/carta-02.jpeg', alt: 'Carta Shefri – Variedades y Pizza Dogs' },
  { src: '/carta/carta-03.jpeg', alt: 'Carta Shefri – Panuozzos' },
  { src: '/carta/carta-04.jpeg', alt: 'Carta Shefri – Calzones y Bebidas' },
  { src: '/carta/carta-05.jpeg', alt: 'Carta Shefri – Promos' },
]

export default function CartaPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center py-4 gap-2">
      {PAGES.map((page) => (
        <div key={page.src} className="w-full max-w-md relative">
          <Image
            src={page.src}
            alt={page.alt}
            width={500}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>
      ))}
    </main>
  )
}
