"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MapPin, Search, Star, Filter } from "lucide-react"
interface Restaurant {
  id: number
  name: string
  cuisine: string
  address: string
  rating: number
  reviews: number
  image: string
  isFavorite: boolean
}

const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "La Taqueria Mexicana",
    cuisine: "Mexicana",
    address: "Calle Principal 123, Madrid",
    rating: 4.5,
    reviews: 128,
    image: "https://statics.forbes.com.ec/2021/08/611e778edafc9.jpg",
    isFavorite: false,
  },
  {
    id: 2,
    name: "Sushi Sakura",
    cuisine: "Japonés",
    address: "Av. Central 45, Barcelona",
    rating: 4.8,
    reviews: 93,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Sushi_bandeja.jpg/1200px-Sushi_bandeja.jpg",
    isFavorite: true,
  },
  {
    id: 3,
    name: "Pasta Bella",
    cuisine: "Italiano",
    address: "Plaza Mayor 8, Valencia",
    rating: 4.3,
    reviews: 75,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ODK2tmAkskaKYm0JUz6aHpeo7TyvAHxT8A&s",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Burger House",
    cuisine: "Americana",
    address: "Calle Nueva 67, Madrid",
    rating: 4.2,
    reviews: 156,
    image: "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
    isFavorite: true,
  },
  {
    id: 5,
    name: "El Rincón Español",
    cuisine: "Española",
    address: "Plaza España 12, Sevilla",
    rating: 4.6,
    reviews: 89,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Paella_de_marisco_01_%28cropped%29_4.3.jpg",
    isFavorite: false,
  },
  {
    id: 6,
    name: "Thai Garden",
    cuisine: "Tailandesa",
    address: "Calle Asia 34, Barcelona",
    rating: 4.4,
    reviews: 67,
    image: "https://s2.ppllstatics.com/diariovasco/www/multimedia/202204/05/media/cortadas/padthai-RkrJOgdw4udPO82GczIITAI-1248x770@Diario%20Vasco.jpg",
    isFavorite: false,
  },
]

export function FoodieDashboard() {
  const [activeTab, setActiveTab] = useState("explorar")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedCuisine, setSelectedCuisine] = useState("all")
  const [restaurants, setRestaurants] = useState<Restaurant[]>(mockRestaurants)

  const tabs = [
    { id: "explorar", label: "Explorar Restaurantes" },
    { id: "visitas", label: "Mis Visitas" },
    { id: "favoritos", label: "Favoritos" },
    { id: "perfil", label: "Mi Perfil" },
  ]

  const toggleFavorite = (restaurantId: number) => {
    setRestaurants((prev) =>
      prev.map((restaurant) =>
        restaurant.id === restaurantId ? { ...restaurant, isFavorite: !restaurant.isFavorite } : restaurant,
      ),
    )
  }

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = selectedLocation === "all" || restaurant.address.includes(selectedLocation)
    const matchesCuisine = selectedCuisine === "all" || restaurant.cuisine === selectedCuisine

    if (activeTab === "favoritos") {
      return restaurant.isFavorite && matchesSearch && matchesLocation && matchesCuisine
    }

    return matchesSearch && matchesLocation && matchesCuisine
  })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  const renderContent = () => {
    switch (activeTab) {
      case "explorar":
      case "favoritos":
        return (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar restaurantes por nombre..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <div className="flex gap-4">
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="w-40 h-12">
                    <MapPin className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Ubicación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="Madrid">Madrid</SelectItem>
                    <SelectItem value="Barcelona">Barcelona</SelectItem>
                    <SelectItem value="Valencia">Valencia</SelectItem>
                    <SelectItem value="Sevilla">Sevilla</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
                  <SelectTrigger className="w-48 h-12">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Tipo de cocina" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="Mexicana">Mexicana</SelectItem>
                    <SelectItem value="Japonés">Japonés</SelectItem>
                    <SelectItem value="Italiano">Italiano</SelectItem>
                    <SelectItem value="Americana">Americana</SelectItem>
                    <SelectItem value="Española">Española</SelectItem>
                    <SelectItem value="Tailandesa">Tailandesa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Restaurant Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={restaurant.image || "../public/img/taqueria.jpg"}
                      alt={restaurant.name}
                      className="w-full h-48 object-cover"
                    />
                    <button
                      onClick={() => toggleFavorite(restaurant.id)}
                      className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                    >
                      <Heart
                        className={`h-5 w-5 ${restaurant.isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"}`}
                      />
                    </button>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-gray-900">{restaurant.name}</h3>
                      <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
                      <p className="text-sm text-gray-500">{restaurant.address}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex">{renderStars(restaurant.rating)}</div>
                        <span className="text-sm font-medium">{restaurant.rating}</span>
                        <span className="text-sm text-gray-500">({restaurant.reviews})</span>
                      </div>
                      <Button className="w-full bg-red-500 hover:bg-red-600 text-white mt-4">Programar Visita</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredRestaurants.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  {activeTab === "favoritos"
                    ? "No tienes restaurantes favoritos aún."
                    : "No se encontraron restaurantes con los filtros seleccionados."}
                </p>
              </div>
            )}
          </div>
        )

      case "visitas":
        return (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Mis Visitas</h3>
            <p className="text-gray-500">Aquí aparecerán tus visitas programadas y completadas.</p>
          </div>
        )

      case "perfil":
        return (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Mi Perfil</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      F
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Foodie Usuario</h4>
                      <p className="text-gray-600">@foodie_usuario</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900">Visitas Realizadas</h5>
                      <p className="text-2xl font-bold text-red-500">12</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900">Restaurantes Favoritos</h5>
                      <p className="text-2xl font-bold text-red-500">
                        {restaurants.filter((r) => r.isFavorite).length}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Panel del Foodie</h1>
          <p className="text-gray-600">Explora y conecta con restaurantes locales.</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium text-sm rounded-t-lg transition-colors ${
                activeTab === tab.id ? "bg-red-500 text-white" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  )
}
