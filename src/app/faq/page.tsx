'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Footer from '@/components/Footer'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null) // Fecha se o mesmo item for clicado
    } else {
      setOpenIndex(index) // Abre o item selecionado
    }
  }

  const faqItems = [
    {
      question: 'Why travel with us?',
      answer:
        'Because we are more than just an activity providers company. We are a team of travel experts, photographers, and native guides who know every corner of the island like the backs of our hands. We genuinely LOVE OUR ISLAND, and with years of exploring under our belts, we’ve got the best tips and connections to help you discover the essence of Madeira.',
    },
    {
      question: 'Is Madeira a safe destination?',
      answer: 'Yes, Madeira is known for its safety and welcoming atmosphere.',
    },
    {
      question: 'So, do I need travel insurance?',
      answer:
        'It is always advisable to have travel insurance when going abroad, but it is not a legal requirement.',
    },
    {
      question: 'How’s the weather like in Madeira?',
      answer:
        'The weather is mild throughout the year, with warmer summers and cooler winters, making it perfect for outdoor activities.',
    },
    {
      question: 'And when is the best period to visit Madeira?',
      answer:
        'The best time to visit is during spring and fall when the weather is ideal for exploring the island’s beauty.',
    },
    {
      question: 'What payment methods are accepted on the island?',
      answer:
        'You can use credit and debit cards widely. Cash payments are also accepted in most places, with the Euro being the local currency.',
    },
    {
      question: 'What is the food like in Madeira?',
      answer:
        'Madeira is known for its fresh seafood, unique island dishes, and locally grown fruits and vegetables. Make sure to try the famous Madeira wine!',
    },
    {
      question: 'Do I need a Visa to visit Madeira?',
      answer:
        'Visa requirements depend on your nationality. Citizens of the EU and many other countries do not need a visa for short stays.',
    },
    {
      question: 'What to bring if I go on a hiking trip?',
      answer:
        'Be sure to bring comfortable hiking shoes, layered clothing, sunscreen, and a water bottle to stay hydrated on your adventure.',
    },
  ]

  return (
    <section className="bg-[#F1F4F5]">
      {/* Header com fundo e título */}
      <div
        className="relative bg-cover bg-center min-h-[400px] flex items-center justify-center" // Alterei o min-h para 400px
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6 md:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1> {/* Aumentei o tamanho do texto */}
          <p className="text-lg text-white mb-6">
            Welcome to our FAQ page! Here you will find answers to the most common questions about Madeira.
          </p>
        </div>
      </div>

      {/* Conteúdo FAQ */}
      <div className="max-w-3xl mx-auto space-y-6 mt-10 mb-10">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <div
              className="flex justify-between items-center p-6 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-lg font-semibold text-gray-800">{item.question}</h2>
              {openIndex === index ? (
                <ChevronUp size={24} className="text-primary" />
              ) : (
                <ChevronDown size={24} className="text-primary" />
              )}
            </div>

            {openIndex === index && (
              <div className="border-t px-6 py-4 text-gray-700">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </section>
  )
}
