'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/config/client-config'
import { FaBars, FaTimes } from 'react-icons/fa'

const menuItems = [
  { label: 'Inicio',    href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: siteConfig.menuLabel, href: '/menu' },
  { label: 'Eventos',  href: '/contacto' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled]  = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setIsMenuOpen(false) }, [pathname])

  const isActive = (href: string) => pathname === href

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? `${siteConfig.colors.background}F2` : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : undefined,
        boxShadow: isScrolled ? '0 1px 20px rgba(0,0,0,0.08)' : undefined,
      }}
    >
      <nav className="container mx-auto px-4 py-4" aria-label="Navegación principal">
        <div className="flex justify-between items-center">
          {/* Logo / Nombre del negocio */}
          <Link href="/" className="transition-opacity hover:opacity-80 flex items-center">
            <Image
              src="/images/logo.png"
              alt={siteConfig.businessName}
              width={90}
              height={105}
              priority
              sizes="90px"
              style={{ mixBlendMode: 'screen' }}
            />
          </Link>

          {/* Menu desktop */}
          <ul className="hidden md:flex space-x-8" role="list">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative py-1 text-sm font-medium transition-colors"
                  style={{
                    color: isActive(item.href) ? siteConfig.colors.primary : siteConfig.colors.textLight,
                  }}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  onMouseEnter={(e) => {
                    if (!isActive(item.href)) (e.currentTarget as HTMLElement).style.color = siteConfig.colors.text
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.href)) (e.currentTarget as HTMLElement).style.color = siteConfig.colors.textLight
                  }}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ backgroundColor: siteConfig.colors.primary }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botón mobile */}
          <button
            className="md:hidden p-2 rounded-md transition-colors hover:bg-white/10"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FaTimes className="text-xl" style={{ color: siteConfig.colors.text } as React.CSSProperties} />
            ) : (
              <FaBars className="text-xl" style={{ color: siteConfig.colors.text } as React.CSSProperties} />
            )}
          </button>
        </div>

        {/* Menu mobile animado */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              role="list"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
              style={{ backgroundColor: siteConfig.colors.background }}
            >
              <div className="pt-4 pb-2 space-y-1 border-t border-white/10 mt-3">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-3 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
                      style={{
                        color: isActive(item.href) ? siteConfig.colors.primary : siteConfig.colors.text,
                      }}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
