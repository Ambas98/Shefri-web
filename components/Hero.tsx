'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/config/client-config'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const OVEN_IMAGE = '/imagen-horno/WhatsApp Image 2026-03-26 at 14.17.06.jpeg'

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">

      {/* Imagen del horno */}
      <Image
        src={OVEN_IMAGE}
        alt="Horno a leña de Shefri"
        fill
        priority
        className="object-cover"
        style={{ objectPosition: 'center 72%' }}
        sizes="100vw"
      />

      {/* Overlay vertical: negro puro arriba (oculta caño), suave en centro, oscuro abajo.
          Aplica en mobile y desktop. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.88) 12%, rgba(0,0,0,0.25) 28%, rgba(0,0,0,0.05) 44%, rgba(0,0,0,0.05) 56%, rgba(0,0,0,0.45) 72%, rgba(0,0,0,0.82) 88%, rgba(0,0,0,0.9) 100%)',
        }}
      />

      {/* Overlay lateral (solo desktop): negro puro en bordes → oculta caños izq y plancha der. */}
      <div
        className="hidden md:block absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 11%, rgba(0,0,0,0.45) 21%, transparent 30%, transparent 70%, rgba(0,0,0,0.45) 79%, rgba(0,0,0,0.92) 89%, rgba(0,0,0,1) 100%)',
        }}
      />

      {/* ── TAGLINE ── */}
      <motion.div
        className="absolute inset-x-0 top-0 pt-24 flex justify-center px-4 z-10"
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

      {/* ── SHEFRI – boca del horno ──
          Mobile: boca cae al ~57% del viewport (sin overflow vertical → objectPosition Y no opera).
          Desktop: objectPosition 72% lleva la boca al ~33% del viewport. */}
      <motion.div
        className="absolute inset-x-0 top-[57%] md:top-[33%] -translate-y-1/2 flex justify-center px-4 z-10"
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

      {/* ── DESCRIPCIÓN + BOTONES + SCROLL ── */}
      <motion.div
        className="absolute inset-x-0 bottom-4 md:bottom-[8rem] flex flex-col items-center gap-3 md:gap-5 px-4 text-center z-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.7 }}
      >
        <p
          className="text-xs md:text-base max-w-lg leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.82)' }}
        >
          {siteConfig.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center justify-center gap-2 px-6 md:px-7 py-2.5 md:py-3.5 border font-medium text-xs md:text-sm uppercase tracking-widest transition-all hover:opacity-80 active:scale-95"
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
            className="inline-flex items-center justify-center gap-2 px-6 md:px-7 py-2.5 md:py-3.5 font-medium text-xs md:text-sm uppercase tracking-widest text-white transition-all hover:opacity-90 active:scale-95"
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
