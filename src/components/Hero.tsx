'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Gradiente escuro sobre a imagem */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-transparent" />

      {/* Conteúdo centralizado abaixo do header, alinhado com o nav */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center min-h-[calc(100vh-5rem)] max-w-7xl mx-auto px-6 md:px-8"
      >
        <div className="text-white max-w-2xl">
          <h1 className="font-bold mb-6 leading-tight text-[clamp(2.5rem,6vw,5rem)]">
            Let’s Discover <span className="text-primary">Madeira</span><br />in a Local Way
          </h1>
          <p className="mb-6 text-[clamp(1rem,2vw,1.25rem)] text-white/90">
            We create lifetime memories through meaningful connections.
          </p>
          <a
            href="#experiences"
            className="bg-primary text-dark font-semibold px-6 py-3 rounded-md inline-block hover:brightness-110 transition"
          >
            Explore More
          </a>
        </div>
      </motion.div>
    </section>
  )
}
