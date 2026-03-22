'use client'

import { motion, type Variants } from 'framer-motion'
import { siteConfig } from '@/config/client-config'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function Hero() {
  const hasHeroImage = Boolean(siteConfig.heroImage)

  const sectionStyle = hasHeroImage
    ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${siteConfig.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {
        background: `radial-gradient(ellipse at center, ${siteConfig.colors.primary}18 0%, transparent 70%), ${siteConfig.colors.background}`,
      }

  return (
    <section
      className="min-h-screen flex items-center justify-center pt-20"
      style={sectionStyle}
    >
      <motion.div
        className="container mx-auto px-4 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Tagline decorativo estilo CosmicJS */}
        <motion.p
          className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] mb-6"
          style={{ color: siteConfig.colors.primary }}
          variants={itemVariants}
        >
          <span className="flex-1 max-w-[80px] h-px opacity-40" style={{ backgroundColor: siteConfig.colors.primary }} />
          {siteConfig.tagline}
          <span className="flex-1 max-w-[80px] h-px opacity-40" style={{ backgroundColor: siteConfig.colors.primary }} />
        </motion.p>

        <motion.h1
          className="font-cormorant text-6xl md:text-7xl lg:text-8xl font-light tracking-wide mb-8 leading-tight"
          style={{ color: siteConfig.colors.text }}
          variants={itemVariants}
        >
          {siteConfig.businessName}
        </motion.h1>

        <motion.p
          className="text-base md:text-lg mb-14 max-w-2xl mx-auto leading-relaxed"
          style={{ color: siteConfig.colors.textLight }}
          variants={itemVariants}
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border font-medium text-sm uppercase tracking-widest transition-all hover:opacity-80 active:scale-95 bg-white/60"
            style={{
              borderColor: siteConfig.colors.primary,
              color: siteConfig.colors.primary,
            }}
          >
            <FaPhone aria-hidden="true" />
            Llamar ahora
          </a>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium text-sm uppercase tracking-widest text-white transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: '#25D366' }}
          >
            <FaWhatsapp aria-hidden="true" />
            WhatsApp
          </a>
        </motion.div>

        <motion.div className="mt-14" variants={itemVariants}>
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
            >
              ↓
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
