'use client'

import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#456A70] pt-16 bg-gradient-to-b">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Logo + Follow Us */}
        <div className="space-y-6">
          <img
            src="/logo.svg"
            alt="Madeira Outdoors"
            className="w-32"
          />
          <div className="flex space-x-6">
            <a href="#" className="text-primary hover:text-dark">
              {/* Instagram Icon */}
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-primary hover:text-dark">
              {/* Facebook Icon */}
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-primary hover:text-dark">
              {/* Twitter Icon */}
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Links de Tours */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">Our Tours</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/pages/faq" className="text-white hover:text-primary">
                Tours List
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-white hover:text-primary">
                Tour Details
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-white hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-white hover:text-primary">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Informações de Menu */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">Information</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/faq" className="text-white hover:text-primary">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-white hover:text-primary">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-white hover:text-primary">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contato Us */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-white">Contact Us</h4>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail size={20} className="text-primary" />
              <p className="text-white">bookings@madeiraoutdoors.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={20} className="text-primary" />
              <p className="text-white">+351 961 176 353</p>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle size={20} className="text-primary" />
              <a href="https://wa.me/+351961176353" target="_blank" className="text-white">
                Send us a message
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={20} className="text-primary" />
              <p className="text-white">Santana, Madeira</p>
            </div>
          </div>
        </div>
      </div>

      {/* Linha final e Copyright */}
      <div className="bg-[#23373B] text-white py-4 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">© 2025 Madeira Outdoors. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
