'use client'

import Link from 'next/link'

const tours = [
  {
    title: 'Daily Activities',
    image: '/cards/card1.jpg',
    link: '/tours/daily',
  },
  {
    title: 'Customized Tours',
    image: '/cards/card2.jpg',
    link: '/tours/custom',
  },
  {
    title: 'Multi-day Packages',
    image: '/cards/card3.jpg',
    link: '/tours/packages',
  },
  {
    title: 'Solo Travellers',
    image: '/cards/card4.jpg',
    link: '/tours/solo',
  },
]

export default function TourList() {
  return (
    <section
      id="experiences"
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/cards/bg.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 text-center md:text-left">
          Choose the trip that suits you
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <Link
              key={tour.title}
              href={tour.link}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 z-10 text-white text-lg font-semibold">
                {tour.title}
              </div>
            </Link>
          ))}
        </div>

        {/* Texto explicativo */}
        <div className="mt-12 max-w-3xl text-center md:text-left text-gray-700 mx-auto md:mx-0">
          <p>
            Whether you’re traveling solo or in a group, for a day or a week, we have something
            uniquely designed for you. Click on any category to discover more.
          </p>
        </div>
      </div>
    </section>
  )
}
