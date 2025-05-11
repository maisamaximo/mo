'use client'

import { Phone, Mail } from 'lucide-react'

export default function ContactUs() {
  return (
    <section id='contact' className="bg-[#f1f4f5] py-20 px-6 bg-cover bg-center" style={{ backgroundImage: "url('/bg-contact.png')" }}>
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F6CF00]">Want to talk?</h2>
        <p className="text-gray-500 text-sm mt-2">
          Send us an email, and we will be in touch as soon as possible.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Cards de WhatsApp e Email à esquerda */}
        <div className="space-y-6">
          {/* WhatsApp */}
          <div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4">
            <Phone size={24} className="text-primary" />
            <div>
              <h3 className="font-semibold text-lg">Whatsapp</h3>
              <a
                href="https://wa.me/+351961176353"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm"
              >
                +351 961 176 353
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4">
            <Mail size={24} className="text-primary" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <a
                href="mailto:bookings@madeiraoutdoors.com"
                className="text-primary text-sm"
              >
                bookings@madeiraoutdoors.com
              </a>
            </div>
          </div>
        </div>

        {/* Formulário de Contato à direita */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-dark mb-4">Get in Touch</h3>
          <form action="https://formspree.io/f/{seu_form_id}" method="POST">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/80 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
