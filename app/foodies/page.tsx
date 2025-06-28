import { Navbar } from "@/components/navbar"

export default function FoodiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Para <span className="text-red-500">Foodies</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Únete a nuestra comunidad de foodies y disfruta de beneficios exclusivos en los mejores restaurantes.
          </p>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Qué obtienes como Foodie?</h2>
            <ul className="text-left space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✓</span>
                Descuentos exclusivos en restaurantes partner
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✓</span>
                Acceso a eventos gastronómicos especiales
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✓</span>
                Oportunidades de colaboración con restaurantes
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✓</span>
                Contenido exclusivo y primeras noticias
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
