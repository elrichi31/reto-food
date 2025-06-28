import { Navbar } from "@/components/navbar"

export default function RestaurantesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Para <span className="text-red-500">Restaurantes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Conecta con influencers gastronómicos y haz crecer tu negocio con contenido auténtico.
          </p>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Beneficios para tu Restaurante</h2>
            <ul className="text-left space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✓</span>
                Exposición en redes sociales de foodies verificados
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✓</span>
                Contenido auténtico y de calidad para tu marca
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✓</span>
                Aumento en el tráfico de clientes
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✓</span>
                Análisis y métricas de rendimiento
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
