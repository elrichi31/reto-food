import { Navbar } from "@/components/navbar"

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              ¿Cómo <span className="text-red-500">Funciona</span>?
            </h1>
            <p className="text-xl text-gray-600">
              Descubre cómo FoodiesBNB conecta a foodies con restaurantes de manera simple y efectiva.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Para Foodies */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Para Foodies</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Aplica</h3>
                    <p className="text-gray-600">Completa tu aplicación con tu información y redes sociales.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Verificación</h3>
                    <p className="text-gray-600">Nuestro equipo revisa tu perfil y redes sociales.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Disfruta</h3>
                    <p className="text-gray-600">Accede a beneficios exclusivos en restaurantes partner.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Para Restaurantes */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Para Restaurantes</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Regístrate</h3>
                    <p className="text-gray-600">Crea tu perfil de restaurante en nuestra plataforma.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Conecta</h3>
                    <p className="text-gray-600">Te conectamos con foodies verificados de tu área.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Crece</h3>
                    <p className="text-gray-600">Obtén exposición y contenido auténtico para tu negocio.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
