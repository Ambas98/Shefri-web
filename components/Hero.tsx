'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/config/client-config'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const OVEN_IMAGE = '/imagen-horno/WhatsApp Image 2026-03-26 at 14.17.06.jpeg'

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Imagen del horno */}
      <Image
        src={OVEN_IMAGE}
        alt="Horno a leña de Shefri"
        fill
        priority
        className="object-cover"
        // En mobile (portrait) la boca está ~65% de la imagen → la anclamos ahí.
        // En desktop (landscape) el recorte vertical es agresivo; 72% compensa para
        // traer la boca hacia el centro de pantalla.
        style={{ objectPosition: 'center 72%' }}
        sizes="100vw"
      />

      {/* Overlay: oscuro arriba (navbar) y abajo (legibilidad), suave en el centro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/15 to-black/75" />

      {/* ── TAGLINE – parte superior ── */}
      <motion.div
        className="absolute inset-x-0 top-0 pt-24 flex justify-center px-4"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <p
          className="flex items-center gap-3 text-xs uppercase tracking-[0.3em]"
          style={{ color: siteConfig.colors.primary }}
        >
          <span className="w-16 h-px opacity-40" style={{ backgroundColor: siteConfig.colors.primary }} />
          {siteConfig.tagline}
          <span className="w-16 h-px opacity-40" style={{ backgroundColor: siteConfig.colors.primary }} />
        </p>
      </motion.div>

      {/* ── SHEFRI – centrado en la boca del horno ── */}
      {/* top-[50%] en desktop / top-[60%] en mobile donde no hay recorte vertical */}
      <motion.div
        className="absolute inset-x-0 top-[52%] md:top-[38%] -translate-y-1/2 flex justify-center px-4 z-10"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.45, ease: 'easeOut' }}
      >
        <h1
          className="font-cormorant text-7xl sm:text-8xl md:text-9xl font-bold tracking-[0.15em] uppercase select-none"
          style={{
            color: '#FFBA55',
            textShadow:
              '0 0 10px #FF9900, 0 0 25px #FF6600, 0 0 55px #FF3300, 0 0 90px #CC1100, 0 2px 6px rgba(0,0,0,0.6)',
          }}
        >
          {siteConfig.businessName}
        </h1>
      </motion.div>

      {/* ── DESCRIPCIÓN + BOTONES + SCROLL – parte inferior ── */}
      <motion.div
        className="absolute inset-x-0 bottom-[4.5rem] md:bottom-[8rem] flex flex-col items-center gap-5 px-4 text-center z-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.7 }}
      >
        <p
          className="text-sm md:text-base max-w-lg leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.82)' }}
        >
          {siteConfig.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border font-medium text-sm uppercase tracking-widest transition-all hover:opacity-80 active:scale-95"
            style={{
              borderColor: siteConfig.colors.primary,
              color: siteConfig.colors.primary,
              backgroundColor: 'rgba(0,0,0,0.45)',
            }}
          >
            <FaPhone aria-hidden="true" />
            Llamar ahora
          </a>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-medium text-sm uppercase tracking-widest text-white transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: '#25D366' }}
          >
            <FaWhatsapp aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <Link
          href="/nosotros"
          className="inline-flex flex-col items-center gap-1 text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
          style={{ color: siteConfig.colors.primary }}
        >
          <span>Conocer más</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            aria-hidden="true"
            className="text-xl"
            style={{ willChange: 'transform' }}
          >
            ↓
          </motion.span>
        </Link>
      </motion.div>

    </section>
  )
}
