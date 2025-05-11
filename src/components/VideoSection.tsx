'use client'

import { motion } from 'framer-motion'

export default function VideoSection() {
  return (
    <section id="video" className="relative">
      {/* Fundo - imagem ocupa tudo no mobile, dividido no desktop */}
      <div className="absolute inset-0 z-0">
        {/* Mobile: imagem ocupa tudo */}
        <div className="block md:hidden h-full bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }} />

        {/* Desktop: metade imagem, metade branco */}
        <div className="hidden md:block h-full">
          <div className="h-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }} />
          <div className="h-1/2 bg-white" />
        </div>
      </div>

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center">
        <p className="text-white text-sm mb-2">That’s why</p>
        <a
          href="https://instagram.com/liveinmadeira"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl md:text-3xl font-bold text-white hover:text-primary transition"
        >
          We @liveinmadeira
        </a>

        {/* Vídeo centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/etYrsmPm85U"
            title="Madeira Travel Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}
