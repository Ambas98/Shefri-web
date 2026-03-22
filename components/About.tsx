'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { siteConfig } from '@/config/client-config'
import { FaClock, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCamera } from 'react-icons/fa'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const daysOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const
const daysNames: Record<string, string> = {
  monday:    'Lunes',
  tuesday:   'Martes',
  wednesday: 'Miércoles',
  thursday:  'Jueves',
  friday:    'Viernes',
  saturday:  'Sábado',
  sunday:    'Domingo',
}

export default function About() {
  return (
    <section className="py-20" style={{ backgroundColor: siteConfig.colors.background }} aria-labelledby="about-heading">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] mb-3"
             style={{ color: siteConfig.colors.primary }}>
            <span className="flex-1 max-w-[60px] h-px opacity-30" style={{ backgroundColor: siteConfig.colors.primary }} />
            Quiénes somos
            <span className="flex-1 max-w-[60px] h-px opacity-30" style={{ backgroundColor: siteConfig.colors.primary }} />
          </p>
          <h2
            id="about-heading"
            className="font-cormorant text-4xl md:text-5xl font-light mb-6"
            style={{ color: siteConfig.colors.text }}
          >
            Sobre Nosotros
          </h2>

          {/* Story */}
          {siteConfig.about.story && (
            <p className="text-base leading-relaxed max-w-3xl mx-auto" style={{ color: siteConfig.colors.textLight }}>
              {siteConfig.about.story}
            </p>
          )}

          {/* Mission */}
          {siteConfig.about.mission && (
            <p
              className="mt-4 text-base italic max-w-2xl mx-auto"
              style={{ color: siteConfig.colors.secondary }}
            >
              &ldquo;{siteConfig.about.mission}&rdquo;
            </p>
          )}
        </motion.div>

        {/* Fotos del local */}
        {siteConfig.localPhotos && siteConfig.localPhotos.length > 0 && (
          <motion.div
            className="mb-14 max-w-5xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {siteConfig.localPhotos.map((photo, i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-lg border"
                  style={{ backgroundColor: '#EDE8DC', borderColor: '#D4CCBC' }}
                >
                  {photo.file ? (
                    <Image
                      src={`/images/${photo.file}`}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#2a2a2a]">
                      <FaCamera className="text-3xl" />
                      <span className="text-xs text-center px-3 leading-tight" style={{ color: '#3a3a3a' }}>
                        {photo.alt}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Información de contacto */}
          <motion.div
            className="space-y-6"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-start gap-4 border p-5 rounded-lg" style={{ backgroundColor: '#EDE8DC', borderColor: '#D4CCBC' }}>
              <FaMapMarkerAlt
                className="text-2xl mt-1 shrink-0"
                style={{ color: siteConfig.colors.primary }}
                aria-hidden="true"
              />
              <div>
                <h3 className="font-semibold text-base mb-1" style={{ color: siteConfig.colors.text }}>
                  Ubicación
                </h3>
                <p className="text-sm" style={{ color: siteConfig.colors.textLight }}>{siteConfig.contact.address}</p>
                <a
                  href={siteConfig.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm mt-2 inline-block hover:opacity-70 transition-opacity"
                  style={{ color: siteConfig.colors.primary }}
                >
                  Ver en mapa →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 border p-5 rounded-lg" style={{ backgroundColor: '#EDE8DC', borderColor: '#D4CCBC' }}>
              <FaPhone
                className="text-2xl mt-1 shrink-0"
                style={{ color: siteConfig.colors.primary }}
                aria-hidden="true"
              />
              <div>
                <h3 className="font-semibold text-base mb-1" style={{ color: siteConfig.colors.text }}>
                  Teléfono
                </h3>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:opacity-70 transition-opacity text-sm"
                  style={{ color: siteConfig.colors.textLight }}
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            {siteConfig.contact.email && (
              <div className="flex items-start gap-4 border p-5 rounded-lg" style={{ backgroundColor: '#EDE8DC', borderColor: '#D4CCBC' }}>
                <FaEnvelope
                  className="text-2xl mt-1 shrink-0"
                  style={{ color: siteConfig.colors.primary }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-base mb-1" style={{ color: siteConfig.colors.text }}>
                    Email
                  </h3>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:opacity-70 transition-opacity break-all text-sm"
                  style={{ color: siteConfig.colors.textLight }}
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            )}
          </motion.div>

          {/* Horarios */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="border rounded-lg p-6" style={{ backgroundColor: '#EDE8DC', borderColor: '#D4CCBC' }}>
              <div className="flex items-center gap-3 mb-6">
                <FaClock
                  className="text-xl"
                  style={{ color: siteConfig.colors.primary }}
                  aria-hidden="true"
                />
                <h3 className="font-semibold text-base" style={{ color: siteConfig.colors.text }}>
                  Horarios de Atención
                </h3>
              </div>
              <dl className="space-y-2">
                {daysOrder.map((day) => {
                  const hours = siteConfig.hours[day]
                  const isClosed = hours === 'Cerrado'
                  return (
                    <div key={day} className="flex justify-between py-2 border-b" style={{ borderColor: '#D4CCBC' }}>
                      <dt className="font-medium text-sm" style={{ color: siteConfig.colors.textLight }}>
                        {daysNames[day]}
                      </dt>
                      <dd
                        className="text-sm font-medium"
                        style={{ color: isClosed ? siteConfig.colors.secondary : siteConfig.colors.text }}
                      >
                        {hours}
                      </dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
