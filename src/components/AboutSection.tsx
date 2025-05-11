'use client'

import Link from 'next/link'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-cover bg-center min-h-[600px] flex items-center"
      style={{ backgroundImage: "url('/about-bg.jpg')" }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Conteúdo alinhado à esquerda com a margem lateral alinhada ao nav */}
      <div className="relative z-10 px-6 md:px-8 w-full mx-auto max-w-7xl">
        <div className="max-w-[600px] text-white text-left">
          <p className="text-lg mb-2">About</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">MADEIRA OUTDOORS</h2>

          <p className="mb-4 text-white/90">
            Madeira Outdoors is more than just a travel agency; it is a journey into the heart of Madeira. 
            We are a local company, deeply connected to the island’s culture, landscapes, and people.
          </p>
          <p className="mb-8 text-white/90">
            Our mission is to reconnect people with nature. We believe that the human experience is deeply rooted in the environment, 
            and our aim is to guide travelers in rediscovering this bond.
          </p>

          <Link
            href="/about"
            className="bg-primary text-dark font-semibold px-6 py-3 rounded-md hover:brightness-110 transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}
