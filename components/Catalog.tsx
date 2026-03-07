'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { siteConfig } from '@/config/client-config'
import { FaWhatsapp } from 'react-icons/fa'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<string>(
    siteConfig.catalog[0]?.category ?? ''
  )

  const currentCategory = siteConfig.catalog.find(
    (cat) => cat.category === activeCategory
  )

  return (
    <section className="py-20 bg-[#0a0a0a]" aria-labelledby="catalog-heading">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] mb-3"
             style={{ color: siteConfig.colors.primary }}>
            <span className="flex-1 max-w-[60px] h-px opacity-30" style={{ backgroundColor: siteConfig.colors.primary }} />
            Nuestra oferta
            <span className="flex-1 max-w-[60px] h-px opacity-30" style={{ backgroundColor: siteConfig.colors.primary }} />
          </p>
          <h2
            id="catalog-heading"
            className="font-cormorant text-4xl md:text-5xl font-light text-[#F0EEE6]"
          >
            {siteConfig.menuLabel}
          </h2>
        </motion.div>

        {/* Category tabs — estilo underline */}
        {siteConfig.catalog.length > 1 && (
          <motion.div
            className="flex flex-wrap justify-center gap-0 mb-10 border-b border-[#2a2a2a]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            role="tablist"
            aria-label="Categorías del menú"
          >
            {siteConfig.catalog.map((cat) => {
              const isActive = cat.category === activeCategory
              return (
                <button
                  key={cat.category}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.category)}
                  className="relative px-5 py-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ color: isActive ? siteConfig.colors.primary : '#9ca3af' }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = '#ffffff'
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = '#9ca3af'
                  }}
                >
                  {cat.category}
                  {isActive && (
                    <motion.span
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ backgroundColor: siteConfig.colors.primary }}
                    />
                  )}
                </button>
              )
            })}
          </motion.div>
        )}

        {/* Items grid */}
        <AnimatePresence mode="wait">
          {currentCategory && (
            <motion.div
              key={activeCategory}
              className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              role="tabpanel"
            >
              {currentCategory.items.map((item, itemIdx) => {
                const hasImage = 'image' in item && Boolean(item.image)
                return (
                  <motion.article
                    key={itemIdx}
                    variants={fadeUp}
                    className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#C9A84C]/40 transition-colors duration-300 overflow-hidden"
                  >
                    {hasImage && (
                      <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <Image
                          src={`/images/${(item as typeof item & { image: string }).image}`}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h3 className="text-base font-medium leading-snug text-[#F0EEE6]">
                          {item.name}
                        </h3>
                        <span
                          className="text-base font-semibold shrink-0"
                          style={{ color: siteConfig.colors.primary }}
                        >
                          ${parseInt(item.price).toLocaleString('es-AR')}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-sm leading-relaxed text-[#9A9A8A]">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </motion.article>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 font-medium text-sm uppercase tracking-widest text-white transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: '#25D366' }}
          >
            <FaWhatsapp aria-hidden="true" />
            Hacer Pedido por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
