'use client'

import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

const reasons = [
  'Trust and Safety',
  'Best Travel Agent',
  'Best Price Guarantee',
  'Beautiful Places',
  'Passionate Travel',
  'Fast Booking',
]

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#f1f4f5] py-20 overflow-hidden">
      {/* Tarja horizontal azul escura no fundo - desktop only */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[380px] -translate-y-1/2 bg-dark z-0" />

      <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row items-center px-6 md:px-8 z-10 gap-10">
        {/* Imagem à esquerda */}
        <div className="w-full md:w-[600px] h-[500px] relative z-20">
  <img
    src="/why-choose.jpg"
    alt="Traveler looking at nature"
    className="rounded-md w-full h-full object-cover"
  />
</div>


        {/* Conteúdo mobile: caixa azul visível apenas em < md */}
        <div className="block md:hidden w-full bg-dark rounded-xl text-white p-10 z-20">
          <p className="text-primary text-sm font-medium mb-2">Why choose us</p>
          <div className="h-[2px] w-16 bg-primary mb-6" />
          <h2 className="text-3xl font-bold mb-6 leading-tight">
            We Make All The <br /> Process Easy
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-2 text-white/90">
                <CheckCircle size={18} className="text-primary" />
                <span>{reason}</span>
              </div>
            ))}
          </div>

          <Link
            href="/why-us"
            className="bg-primary text-dark font-semibold px-6 py-3 rounded-md hover:brightness-110 transition"
          >
            See More
          </Link>
        </div>

        {/* Conteúdo desktop: sobre a tarja azul com espaçamento vertical */}
        <div className="hidden md:flex w-full md:w-1/2 items-center z-20">
          <div className="pt-8 pb-12 pl-24 pr-12 text-white">
            <p className="text-primary text-sm font-medium mb-2">Why choose us</p>
            <div className="h-[2px] w-16 bg-primary mb-6" />
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              We Make All The <br /> Process Easy
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-2 text-white/90">
                  <CheckCircle size={18} className="text-primary" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>

            <Link
              href="/why-us"
              className="bg-primary text-dark font-semibold px-6 py-3 rounded-md hover:brightness-110 transition"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
