import { FoodieApplicationForm } from "@/components/FoodieApplicationForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Aplicación Para <span className="text-red-600">Foodies</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">Completa la información y únete a FoodiesBNB.</p>
            <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-red-500">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Requisitos:</h2>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Subir contenido a Instagram o TikTok.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Tener mínimo 1.000 seguidores en cualquier plataforma.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Tener la cuenta de Instagram pública, no privada.
                </li>
              </ul>
            </div>
          </div>
          <FoodieApplicationForm />
        </div>
      </div>
    </div>
  )
}
