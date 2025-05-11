'use client'

import { Calendar, PenLine } from 'lucide-react'

const posts = [
  {
    image: '/blog/blog1.jpg',
    title: 'Introducing this amazing city',
    category: 'Uncategorized',
    date: 'October 9, 2024',
    author: 'admin',
    excerpt:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I...',
  },
  {
    image: '/blog/blog2.jpg',
    title: 'Introducing this amazing city',
    category: 'Uncategorized',
    date: 'October 9, 2024',
    author: 'admin',
    excerpt:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I...',
  },
  {
    image: '/blog/blog3.jpg',
    title: 'Introducing this amazing city',
    category: 'Uncategorized',
    date: 'October 9, 2024',
    author: 'admin',
    excerpt:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I...',
  },
]

export default function BlogSection() {
  return (
    <section id='blog' className="bg-[#f7f9fa] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-gray-500 text-sm mb-1">Our Blog</p>
        <h2 className="text-3xl md:text-4xl font-bold text-dark">Latest Travel Guides</h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <div key={i} className="space-y-4">
            {/* Image + category badge */}
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover rounded-xl"
              />
              <span className="absolute bottom-4 left-4 bg-dark text-white text-sm px-4 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            {/* Meta info */}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <PenLine size={16} />
                By {post.author}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-dark font-semibold text-lg">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.excerpt}</p>
            <a
              href="#"
              className="text-primary text-sm font-semibold hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
