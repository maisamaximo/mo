'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    // Função que detecta o scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    // Detecta o scroll ao carregar a página
    handleScroll()  // Força a verificação do scroll na primeira carga

    // Escuta o evento de scroll
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Experiences', href: '#experiences' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? 'bg-dark backdrop-blur-none'
          : scrolled
          ? 'bg-dark/80 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between transition-all duration-300">
        {/* Logo com tamanho dinâmico e visibilidade */}
        <a href="/" className="transition-all duration-300"> {/* Alterado para redirecionar para a home page */}
          <Image
            src="/logo.svg"
            alt="Logo"
            width={scrolled ? 90 : 140}
            height={scrolled ? 24 : 40}
            className={`transition-all duration-300 ${
              isOpen ? 'opacity-0 md:opacity-100' : 'opacity-100'
            }`}
          />
        </a>

        {/* Navegação desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-white">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-primary transition">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Número de telefone (desktop only) */}
        <a
          href="tel:+351123456789"
          className="hidden md:inline-block bg-primary text-dark px-4 py-2 rounded-md text-sm font-semibold"
        >
          +351 123 456 789
        </a>

        {/* Botão do menu mobile */}
        <button onClick={toggleMenu} className="md:hidden text-white z-50 relative">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile com animação */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full min-h-screen bg-dark/90 backdrop-blur-md text-white px-6 pt-24 pb-10 flex flex-col gap-6 z-40"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+351123456789"
              className="bg-primary text-dark px-4 py-2 rounded-md text-sm font-semibold mt-6 text-center"
            >
              +351 123 456 789
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
