'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Melisa Joan H.',
    location: 'New York, USA',
    image: '/testimonials/image1.jpg',
    avatar: '/testimonials/profile1.jpg',
    review:
      '“This was an amazing trip! There were so many highlights… our outstanding, kind, patient, amazing leader Gustavo!! What an absolute saint. He was so organized and insightful!”',
  },
  {
    name: 'Carlos Mendes',
    location: 'Lisbon, Portugal',
    image: '/testimonials/image2.jpg',
    avatar: '/testimonials/profile2.jpg',
    review:
      '“A trip I will never forget! The team, the views, the culture… Everything was beyond expectations. Obrigado!”',
  },
  {
    name: 'Emma W.',
    location: 'London, UK',
    image: '/testimonials/image3.jpg',
    avatar: '/testimonials/profile3.jpg',
    review:
      '“The experience was magical from start to finish. Everything was planned perfectly, and I felt safe and cared for.”',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)

  const total = testimonials.length

  const paginate = (dir: 1 | -1) => {
    setDirection(dir)
    setIndex((prev) => (prev + dir + total) % total)
  }

  const current = testimonials[index]

  return (
    <section className="bg-[#f1f4f5] py-20 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl p-6 md:p-12 flex flex-col md:flex-row gap-8 items-center shadow-md relative overflow-hidden">
        {/* Animação de imagem à esquerda */}
        <div className="w-full md:w-1/2 h-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={current.image}
              src={current.image}
              alt="testimonial"
              className="rounded-2xl w-full h-auto object-cover"
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>

        {/* Animação de conteúdo à direita */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <p className="text-gray-500 text-sm mb-1">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
              What Clients Say
            </h2>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.name}
              className="bg-dark text-white rounded-xl p-6 space-y-4 relative"
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Avatar e info */}
              <div className="flex items-center gap-4">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{current.name}</p>
                  <p className="text-sm text-white/70">{current.location}</p>
                </div>
              </div>

              {/* Estrelas */}
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="#F6CF00" stroke="none" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/90 text-sm">{current.review}</p>

              <Quote className="absolute top-4 right-4 text-primary opacity-30" size={32} />
            </motion.div>
          </AnimatePresence>

          {/* Navegação do carrossel */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === index ? 'bg-primary' : 'bg-dark/20'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => paginate(-1)}
                className="p-2 border rounded-full text-dark/50 hover:text-dark"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => paginate(1)}
                className="p-2 border rounded-full text-dark/50 hover:text-dark"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
