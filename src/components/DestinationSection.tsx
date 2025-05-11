'use client'

import Link from 'next/link'

const destinations = [
  {
    title: 'Canyoning Adventure on Madeira Island',
    price: '€89.00',
    image: '/experiences/canyoning.jpg',
    link: '/tours/canyoning',
  },
  {
    title: 'Private Pico to Pico Sunrise Hike',
    price: '€69.00',
    image: '/experiences/pico.jpg',
    link: '/tours/pico',
  },
  {
    title: 'Dolphin Watching Tour on Madeira Island',
    price: '€1.00',
    image: '/experiences/dolphins.jpg',
    link: '/tours/dolphins',
  },
]

export default function DestinationSection() {
  return (
    <section className="bg-gray-100 py-20" id="destinations">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 text-center md:text-left">
          What is your next experience<span className="text-primary">?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-dark mb-2">{item.title}</h3>
                <p className="text-primary font-semibold">From: {item.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/tours"
            className="bg-primary text-dark font-semibold px-6 py-3 rounded-md hover:brightness-110 transition"
          >
            See all Madeira Tours
          </Link>
        </div>
      </div>
    </section>
  )
}
