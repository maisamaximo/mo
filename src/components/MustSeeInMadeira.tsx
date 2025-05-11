'use client'

export default function MustSeeInMadeira() {
  return (
    <section className="py-20 px-6 bg-[#F1F4F5]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
          Must see in Madeira
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Discover the most iconic and breathtaking places in Madeira.
        </p>
      </div>

      {/* Grid com 5 destinos */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Destino 1 - Esquerda */}
        <div className="relative">
          <img
            src="/bg.png"
            alt="Pico do Arieiro"
            className="rounded-md w-full h-auto object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-yellow-500 text-white px-4 py-2 rounded-full">
            Pico do Arieiro - 5 Tours
          </div>
        </div>

        {/* Destino 2 - Meio (ocupa 2 linhas) */}
        <div className="relative col-span-1 sm:col-span-1 sm:row-span-2">
          <img
            src="/bg.png"
            alt="Levada do Caldeirão Verde"
            className="rounded-md w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-yellow-500 text-white px-4 py-2 rounded-full">
            Levada do Caldeirão Verde - 2 Tours
          </div>
        </div>

        {/* Destino 3 - Direita */}
        <div className="relative">
          <img
            src="/bg.png"
            alt="Cabo Girão"
            className="rounded-md w-full h-auto object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-yellow-500 text-white px-4 py-2 rounded-full">
            Cabo Girão - 3 Tours
          </div>
        </div>

        {/* Destino 4 - Esquerda (segunda linha) */}
        <div className="relative">
          <img
            src="/bg.png"
            alt="Porto Moniz"
            className="rounded-md w-full h-auto object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-yellow-500 text-white px-4 py-2 rounded-full">
            Porto Moniz - 4 Tours
          </div>
        </div>

        {/* Destino 5 - Direita (segunda linha) */}
        <div className="relative">
          <img
            src="/bg.png"
            alt="Monte Palace"
            className="rounded-md w-full h-auto object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-yellow-500 text-white px-4 py-2 rounded-full">
            Monte Palace - 6 Tours
          </div>
        </div>
      </div>

      {/* Botão "See more Destination" */}
      <div className="text-center mt-8">
        <a href="/destinations" className="bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/80 transition">
          See more Destination
        </a>
      </div>
    </section>
  )
}
