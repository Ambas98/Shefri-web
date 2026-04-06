'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { siteConfig } from '@/config/client-config'
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.events.whatsappMessage)}`

export default function Contact() {
  return (
    <section className="py-20" style={{ backgroundColor: siteConfig.colors.background }} aria-labelledby="events-heading">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Encabezado */}
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p
            className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] mb-3"
            style={{ color: siteConfig.colors.primary }}
          >
            <span className="flex-1 max-w-[60px] h-px opacity-30" style={{ backgroundColor: siteConfig.colors.primary }} />
            Eventos
            <span className="flex-1 max-w-[60px] h-px opacity-30" style={{ backgroundColor: siteConfig.colors.primary }} />
          </p>
          <h2
            id="events-heading"
            className="font-cormorant text-4xl md:text-5xl font-light mb-8"
            style={{ color: siteConfig.colors.text }}
          >
            {siteConfig.events.title}
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {siteConfig.events.description.split('\n\n').map((paragraph, i) => (
              <p key={i} className="leading-relaxed" style={{ color: siteConfig.colors.textLight }}>
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Fotos */}
        {(siteConfig.events.gazeboPhoto || siteConfig.events.hornitosPhoto) && (
          <motion.div
            className="grid md:grid-cols-2 gap-4 mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {siteConfig.events.gazeboPhoto && (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={`/images/${siteConfig.events.gazeboPhoto}`}
                  alt="Gazebo para eventos"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            )}
            {siteConfig.events.hornitosPhoto && (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={`/images/${siteConfig.events.hornitosPhoto}`}
                  alt="Hornos portátiles"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            )}
          </motion.div>
        )}

        {/* Qué incluye + CTA */}
        <motion.div
          className="max-w-xl mx-auto space-y-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="border rounded-lg p-6" style={{ backgroundColor: '#EDE8DC', borderColor: '#D4CCBC' }}>
            <h3 className="font-semibold text-base mb-5" style={{ color: siteConfig.colors.text }}>¿Qué incluye?</h3>
            <ul className="space-y-3">
              {siteConfig.events.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm" style={{ color: siteConfig.colors.textLight }}>
                  <FaCheckCircle
                    className="text-base mt-0.5 shrink-0"
                    style={{ color: siteConfig.colors.secondary }}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full px-8 py-4 font-medium text-sm uppercase tracking-widest text-white transition-all hover:opacity-90 active:scale-[0.98] rounded-sm"
            style={{ backgroundColor: siteConfig.colors.primary }}
          >
            <FaWhatsapp className="text-xl" />
            {siteConfig.events.ctaText}
          </a>
        </motion.div>

      </div>
    </section>
  )
}
