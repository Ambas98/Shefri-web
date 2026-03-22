'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/config/client-config'
import { FaWhatsapp, FaChevronDown } from 'react-icons/fa'

type CatalogItem = {
  name: string
  price: string
  description?: string
  image?: string
}

const defaultItem = siteConfig.catalog[0]?.items[0] as CatalogItem

export default function Catalog() {
  const [selectedItem, setSelectedItem] = useState<CatalogItem>(defaultItem)
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const hasImage = selectedItem?.image

  return (
    <section className="py-20" style={{ backgroundColor: siteConfig.colors.background }} aria-labelledby="catalog-heading">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] mb-3"
            style={{ color: siteConfig.colors.primary }}
          >
            <span className="flex-1 max-w-[60px] h-px opacity-30" style={{ backgroundColor: siteConfig.colors.primary }} />
            Nuestra oferta
            <span className="flex-1 max-w-[60px] h-px opacity-30" style={{ backgroundColor: siteConfig.colors.primary }} />
          </p>
          <h2
            id="catalog-heading"
            className="font-cormorant text-4xl md:text-5xl font-light"
            style={{ color: siteConfig.colors.text }}
          >
            {siteConfig.menuLabel}
          </h2>
        </motion.div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start max-w-6xl mx-auto">

          {/* Large product image */}
          <motion.div
            className="w-full lg:flex-1 sticky top-20 lg:static z-10"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full aspect-[3/2] lg:aspect-[4/3] max-w-2xl mx-auto lg:mx-0 rounded-2xl overflow-hidden" style={{ backgroundColor: '#EDE8DC' }}>
              <AnimatePresence mode="wait">
                {hasImage ? (
                  <motion.div
                    key={selectedItem.name}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  >
                    <Image
                      src={`/images/${selectedItem.image}`}
                      alt={selectedItem.name}
                      fill
                      className="object-cover object-bottom"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      priority
                    />
                    {/* Gradient overlay with product info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.div
                        key={selectedItem.name + '-info'}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                      >
                        <h3 className="text-2xl font-semibold text-white">{selectedItem.name}</h3>
                        <p className="text-xl font-bold mt-1" style={{ color: siteConfig.colors.primary }}>
                          ${parseInt(selectedItem.price).toLocaleString('es-AR')}
                        </p>
                        {selectedItem.description && (
                          <p className="text-sm text-gray-300 mt-2 line-clamp-2 leading-relaxed">
                            {selectedItem.description}
                          </p>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="no-image"
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <span className="text-5xl">🍕</span>
                    <div className="text-center px-6">
                      <p className="text-lg font-medium" style={{ color: siteConfig.colors.text }}>{selectedItem?.name}</p>
                      {selectedItem?.price && (
                        <p className="text-base font-bold mt-1" style={{ color: siteConfig.colors.primary }}>
                          ${parseInt(selectedItem.price).toLocaleString('es-AR')}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Dropdown menu by category */}
          <motion.div
            className="w-full lg:w-72 space-y-1"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {siteConfig.catalog.map((cat) => {
              const isOpen = openCategory === cat.category
              return (
                <div
                  key={cat.category}
                  onMouseEnter={() => setOpenCategory(cat.category)}
                  onMouseLeave={() => setOpenCategory(null)}
                >
                  {/* Category header */}
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 transition-colors duration-200 border text-left"
                    style={{
                      backgroundColor: '#EDE8DC',
                      borderColor: isOpen ? `${siteConfig.colors.primary}60` : '#D4CCBC',
                      borderBottomColor: isOpen ? 'transparent' : '#D4CCBC',
                    }}
                    onClick={() => setOpenCategory(isOpen ? null : cat.category)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-medium uppercase tracking-widest" style={{ color: siteConfig.colors.text }}>
                      {cat.category}
                    </span>
                    <FaChevronDown
                      className="text-xs transition-transform duration-300"
                      style={{
                        color: siteConfig.colors.primary,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                  </button>

                  {/* Dropdown items */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden border border-t-0"
                        style={{ borderColor: `${siteConfig.colors.primary}60` }}
                      >
                        {cat.items.map((item, idx) => {
                          const isSelected = selectedItem?.name === item.name && selectedItem?.price === item.price
                          return (
                            <button
                              key={idx}
                              onClick={() => setSelectedItem(item as CatalogItem)}
                              className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-150 border-b last:border-b-0"
                              style={{
                                backgroundColor: isSelected ? '#E4DDD0' : '#F0EAE0',
                                borderColor: '#D4CCBC',
                                borderLeft: isSelected
                                  ? `3px solid ${siteConfig.colors.primary}`
                                  : '3px solid transparent',
                              }}
                            >
                              {(item as CatalogItem).image && (
                                <div className="relative w-10 h-10 rounded overflow-hidden shrink-0">
                                  <Image
                                    src={`/images/${(item as CatalogItem).image}`}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                    sizes="40px"
                                  />
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate" style={{ color: siteConfig.colors.text }}>{item.name}</p>
                                <p className="text-xs" style={{ color: siteConfig.colors.primary }}>
                                  ${parseInt(item.price).toLocaleString('es-AR')}
                                </p>
                              </div>
                            </button>
                          )
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
