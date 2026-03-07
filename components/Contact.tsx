'use client'

import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { siteConfig } from '@/config/client-config'

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

function isFormField(key: string): key is keyof FormData {
  return ['name', 'email', 'phone', 'message'].includes(key)
}

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const inputClass =
  'w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:border-transparent transition-colors placeholder:text-[#5a5a5a]'

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) {
    errors.name = 'El nombre es requerido'
  }
  if (!data.email.trim()) {
    errors.email = 'El email es requerido'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'El email no es válido'
  }
  if (!data.message.trim()) {
    errors.message = 'El mensaje es requerido'
  } else if (data.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres'
  }
  return errors
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors]   = useState<FormErrors>({})
  const [status, setStatus]   = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (isFormField(name) && errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors = validate(formData)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setStatus('sending')

    try {
      const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  // Simple Google Maps embed — works without an API key
  const mapSrc = `https://maps.google.com/maps?q=${siteConfig.location.lat},${siteConfig.location.lng}&z=15&output=embed`

  // CSS custom properties no están en los tipos estándar de React.CSSProperties —
  // el cast es inevitable para inyectar tokens de Tailwind vía inline style.
  const focusRingStyle = { '--tw-ring-color': siteConfig.colors.primary } as React.CSSProperties

  return (
    <section className="py-20 bg-[#0a0a0a]" aria-labelledby="contact-heading">
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
            Hablemos
            <span className="flex-1 max-w-[60px] h-px opacity-30" style={{ backgroundColor: siteConfig.colors.primary }} />
          </p>
          <h2
            id="contact-heading"
            className="font-cormorant text-4xl md:text-5xl font-light text-[#F0EEE6]"
          >
            Contacto
          </h2>
          <p className="mt-3 text-[#9A9A8A]">Envianos tu consulta</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Formulario */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>

              <div>
                <label htmlFor="name" className="block mb-1.5 text-sm font-medium text-[#9A9A8A]">
                  Nombre <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className={`${inputClass} ${errors.name ? 'border-red-400' : ''}`}
                  style={focusRingStyle}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-500" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-1.5 text-sm font-medium text-[#9A9A8A]">
                  Email <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className={`${inputClass} ${errors.email ? 'border-red-400' : ''}`}
                  style={focusRingStyle}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-500" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block mb-1.5 text-sm font-medium text-[#9A9A8A]">
                  Teléfono <span className="text-xs text-[#5a5a5a]">(opcional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className={inputClass}
                  style={focusRingStyle}
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1.5 text-sm font-medium text-[#9A9A8A]">
                  Mensaje <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClass} resize-none ${errors.message ? 'border-red-400' : ''}`}
                  style={focusRingStyle}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-500" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 font-medium text-sm uppercase tracking-widest text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: siteConfig.colors.primary }}
                aria-busy={status === 'sending'}
              >
                {status === 'sending' ? 'Enviando…' : 'Enviar Mensaje'}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center font-medium text-sm bg-green-950/50 border border-green-800 py-3"
                  role="status"
                >
                  ¡Mensaje enviado! Te contactaremos pronto.
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center font-medium text-sm bg-red-950/50 border border-red-800 py-3"
                  role="alert"
                >
                  Hubo un error al enviar. Por favor, intentá nuevamente.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Mapa */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] overflow-hidden" style={{ minHeight: '420px' }}>
              <iframe
                src={mapSrc}
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Ubicación de ${siteConfig.businessName}`}
              />
            </div>
            <p className="mt-3 text-sm text-center text-[#9A9A8A]">
              {siteConfig.contact.address}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
