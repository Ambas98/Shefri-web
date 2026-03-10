'use client'

import Image from 'next/image'
import { siteConfig } from '@/config/client-config'
import {
  FaFacebook, FaInstagram, FaTwitter, FaLinkedin,
  FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock,
} from 'react-icons/fa'

const socialIcons = {
  facebook:  FaFacebook,
  instagram: FaInstagram,
  twitter:   FaTwitter,
  linkedin:  FaLinkedin,
}

function isSocialPlatform(key: string): key is keyof typeof socialIcons {
  return key in socialIcons
}

const daysOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const
const daysShort: Record<string, string> = {
  monday: 'Lun', tuesday: 'Mar', wednesday: 'Mié',
  thursday: 'Jue', friday: 'Vie', saturday: 'Sáb', sunday: 'Dom',
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#060606] text-white py-14">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Info del negocio */}
          <div>
            <div className="mb-3">
              <Image
                src="/images/logo.png"
                alt={siteConfig.businessName}
                width={80}
                height={93}
                sizes="80px"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>
            <p className="text-[#9A9A8A] text-sm leading-relaxed mb-3">{siteConfig.tagline}</p>
            <div className="flex items-start gap-2 text-[#9A9A8A] text-sm">
              <FaMapMarkerAlt className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>{siteConfig.contact.address}</span>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">Contacto</h4>
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 text-[#9A9A8A] hover:text-white transition-colors text-sm"
              >
                <FaPhone aria-hidden="true" />
                {siteConfig.contact.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#9A9A8A] hover:text-white transition-colors text-sm"
              >
                <FaWhatsapp aria-hidden="true" />
                WhatsApp
              </a>
              {siteConfig.contact.email && (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-[#9A9A8A] hover:text-white transition-colors text-sm break-all"
                >
                  <FaEnvelope aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              )}
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white flex items-center gap-2">
              <FaClock aria-hidden="true" /> Horarios
            </h4>
            <dl className="space-y-1.5">
              {daysOrder.map((day) => {
                const hours = siteConfig.hours[day]
                const isClosed = hours === 'Cerrado'
                return (
                  <div key={day} className="flex justify-between text-xs gap-3">
                    <dt className="text-[#7a7a7a]">{daysShort[day]}</dt>
                    <dd style={{ color: isClosed ? siteConfig.colors.secondary : '#9A9A8A' }}>{hours}</dd>
                  </div>
                )
              })}
            </dl>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">Seguinos</h4>
            <div className="flex flex-wrap gap-3">
              {Object.entries(siteConfig.social).map(([platform, url]) => {
                if (!url) return null
                if (!isSocialPlatform(platform)) return null
                const Icon = socialIcons[platform]
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1a1a] text-[#9A9A8A] hover:bg-[#2a2a2a] hover:text-white transition-colors"
                    aria-label={`Seguinos en ${platform}`}
                  >
                    <Icon className="text-lg" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 text-center text-[#7a7a7a] text-sm">
          <p>© {currentYear} {siteConfig.businessName}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
