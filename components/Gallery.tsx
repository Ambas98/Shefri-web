'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { siteConfig } from '@/config/client-config'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  const images = siteConfig.gallery

  const close = useCallback(() => setSelectedIdx(null), [])

  const prev = useCallback(() => {
    setSelectedIdx((i) => (i !== null && i > 0 ? i - 1 : i))
  }, [])

  const next = useCallback(() => {
    setSelectedIdx((i) => (i !== null && i < images.length - 1 ? i + 1 : i))
  }, [images.length])

  useEffect(() => {
    if (selectedIdx === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     close()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [selectedIdx, close, prev, next])

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = selectedIdx !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedIdx])

  const selectedImage = selectedIdx !== null ? images[selectedIdx] : null

  return (
    <section className="py-20 bg-[#0a0a0a]" aria-labelledby="gallery-heading">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] mb-3"
             style={{ color: siteConfig.colors.primary }}>
            <span className="flex-1 max-w-[60px] h-px opacity-30" style={{ backgroundColor: siteConfig.colors.primary }} />
            Nuestro espacio
            <span className="flex-1 max-w-[60px] h-px opacity-30" style={{ backgroundColor: siteConfig.colors.primary }} />
          </p>
          <h2
            id="gallery-heading"
            className="font-cormorant text-4xl md:text-5xl font-light text-[#F0EEE6]"
          >
            Galería
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              variants={itemVariant}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setSelectedIdx(idx)}
              role="button"
              tabIndex={0}
              aria-label={`Ver foto: ${image.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedIdx(idx)}
            >
              <Image
                src={`/images/${image.file}`}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0 transition-colors duration-300 flex items-center justify-center"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${siteConfig.colors.primary}33`)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <span
                  className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1 border"
                  style={{ color: siteConfig.colors.primary, borderColor: siteConfig.colors.primary }}
                >
                  Ver foto
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selectedImage && selectedIdx !== null && (
          <motion.div
            className="fixed inset-0 bg-black/92 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Foto ampliada: ${selectedImage.alt}`}
            onClick={close}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              onClick={close}
              aria-label="Cerrar galería"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Prev arrow */}
            {selectedIdx > 0 && (
              <button
                className="absolute left-3 md:left-6 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); prev() }}
                aria-label="Foto anterior"
              >
                <FaChevronLeft className="text-xl" />
              </button>
            )}

            {/* Next arrow */}
            {selectedIdx < images.length - 1 && (
              <button
                className="absolute right-3 md:right-6 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); next() }}
                aria-label="Siguiente foto"
              >
                <FaChevronRight className="text-xl" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={selectedIdx}
              className="relative max-w-4xl max-h-[85vh] w-full h-full px-14 py-8"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/images/${selectedImage.file}`}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Caption */}
            <p className="absolute bottom-5 left-0 right-0 text-center text-white/70 text-sm">
              {selectedImage.alt} &nbsp;·&nbsp; {selectedIdx + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
