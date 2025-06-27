"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Upload, Instagram, Music } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

interface FormData {
  fullName: string
  email: string
  phone: string
  birthDate: Date | undefined
  gender: string
  country: string
  city: string
  contentFrequency: string
  instagramUser: string
  instagramFollowers: string
  isPublicAccount: string
  tiktokUser: string
  tiktokFollowers: string
  aboutYou: string
  instagramScreenshot: File | null
  tiktokScreenshot: File | null
  personalPhoto: File | null
  agreeToBenefits: boolean
  agreeToDataTreatment: boolean
}

export function FoodieApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    birthDate: undefined,
    gender: "",
    country: "",
    city: "",
    contentFrequency: "",
    instagramUser: "",
    instagramFollowers: "",
    isPublicAccount: "",
    tiktokUser: "",
    tiktokFollowers: "",
    aboutYou: "",
    instagramScreenshot: null,
    tiktokScreenshot: null,
    personalPhoto: null,
    agreeToBenefits: false,
    agreeToDataTreatment: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleFileChange = (field: keyof FormData, file: File | null) => {
    setFormData((prev) => ({ ...prev, [field]: file }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) newErrors.fullName = "Nombre y apellido es requerido"
    if (!formData.email.trim()) newErrors.email = "Email es requerido"
    if (!formData.phone.trim()) newErrors.phone = "Número personal es requerido"
    if (!formData.birthDate) newErrors.birthDate = "Fecha de nacimiento es requerida"
    if (!formData.gender) newErrors.gender = "Género es requerido"
    if (!formData.country) newErrors.country = "País es requerido"
    if (!formData.city) newErrors.city = "Ciudad es requerida"
    if (!formData.contentFrequency) newErrors.contentFrequency = "Frecuencia de contenido es requerida"
    if (!formData.instagramUser.trim()) newErrors.instagramUser = "Usuario de Instagram es requerido"
    if (!formData.instagramFollowers.trim()) newErrors.instagramFollowers = "Seguidores de Instagram es requerido"
    if (!formData.isPublicAccount) newErrors.isPublicAccount = "Debes especificar si tu cuenta es pública"
    if (!formData.tiktokUser.trim()) newErrors.tiktokUser = "Usuario de TikTok es requerido"
    if (!formData.tiktokFollowers.trim()) newErrors.tiktokFollowers = "Seguidores de TikTok es requerido"
    if (!formData.aboutYou.trim()) newErrors.aboutYou = "Información sobre ti es requerida"
    if (!formData.instagramScreenshot) newErrors.instagramScreenshot = "Screenshot de Instagram es requerido"
    if (!formData.tiktokScreenshot) newErrors.tiktokScreenshot = "Screenshot de TikTok es requerido"
    if (!formData.personalPhoto) newErrors.personalPhoto = "Foto personal es requerida"
    if (!formData.agreeToBenefits) newErrors.agreeToBenefits = "Debes aceptar los beneficios"

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Formato de email inválido"
    }

    // Validar que los seguidores sean números
    if (formData.instagramFollowers && isNaN(Number(formData.instagramFollowers))) {
      newErrors.instagramFollowers = "Debe ser un número válido"
    }
    if (formData.tiktokFollowers && isNaN(Number(formData.tiktokFollowers))) {
      newErrors.tiktokFollowers = "Debe ser un número válido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Formulario válido:", formData)
      alert("¡Aplicación enviada exitosamente!")
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Formulario de Aplicación</CardTitle>
        <CardDescription className="text-center">
          Completa todos los campos marcados con * para enviar tu aplicación
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Información Personal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Información Personal</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Nombre y apellido *</Label>
                <Input
                  id="fullName"
                  placeholder="Nombre y apellido"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className={errors.fullName ? "border-red-500" : ""}
                />
                {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Número personal *</Label>
                <Input
                  id="phone"
                  placeholder="Número personal"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <Label>Fecha de nacimiento *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-full justify-start text-left font-normal ${
                        !formData.birthDate ? "text-muted-foreground" : ""
                      } ${errors.birthDate ? "border-red-500" : ""}`}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.birthDate ? (
                        format(formData.birthDate, "PPP", { locale: es })
                      ) : (
                        <span>Fecha de nacimiento</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.birthDate}
                      onSelect={(date) => handleInputChange("birthDate", date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {errors.birthDate && <p className="text-sm text-red-500">{errors.birthDate}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Género *</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) => handleInputChange("gender", value)}
                className="flex space-x-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="masculino" id="masculino" />
                  <Label htmlFor="masculino">Masculino</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="femenino" id="femenino" />
                  <Label htmlFor="femenino">Femenino</Label>
                </div>
              </RadioGroup>
              {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
            </div>
          </div>

          {/* Ubicación */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Ubicación</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>País donde vives *</Label>
                <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                  <SelectTrigger className={errors.country ? "border-red-500" : ""}>
                    <SelectValue placeholder="(Solamente aceptamos Ecuador)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ecuador">Ecuador</SelectItem>
                  </SelectContent>
                </Select>
                {errors.country && <p className="text-sm text-red-500">{errors.country}</p>}
              </div>

              <div className="space-y-2">
                <Label>Ciudad donde vives *</Label>
                <Select value={formData.city} onValueChange={(value) => handleInputChange("city", value)}>
                  <SelectTrigger className={errors.city ? "border-red-500" : ""}>
                    <SelectValue placeholder="(Solamente aceptamos Quito)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quito">Quito</SelectItem>
                  </SelectContent>
                </Select>
                {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
                <p className="text-sm text-gray-500">Ciudad, no sector</p>
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Información de Redes Sociales</h3>

            <div className="space-y-2">
              <Label>¿Cada cuánto subes contenido en redes? *</Label>
              <Select
                value={formData.contentFrequency}
                onValueChange={(value) => handleInputChange("contentFrequency", value)}
              >
                <SelectTrigger className={errors.contentFrequency ? "border-red-500" : ""}>
                  <SelectValue placeholder="Selecciona" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="diario">Diario</SelectItem>
                  <SelectItem value="varios-por-semana">Varios por semana</SelectItem>
                  <SelectItem value="semanal">Semanal</SelectItem>
                  <SelectItem value="quincenal">Quincenal</SelectItem>
                  <SelectItem value="mensual">Mensual</SelectItem>
                </SelectContent>
              </Select>
              {errors.contentFrequency && <p className="text-sm text-red-500">{errors.contentFrequency}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="instagramUser">Usuario de Instagram *</Label>
                <div className="relative">
                  <Instagram className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="instagramUser"
                    placeholder="@usuario"
                    value={formData.instagramUser}
                    onChange={(e) => handleInputChange("instagramUser", e.target.value)}
                    className={`pl-10 ${errors.instagramUser ? "border-red-500" : ""}`}
                  />
                </div>
                {errors.instagramUser && <p className="text-sm text-red-500">{errors.instagramUser}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="instagramFollowers">Seguidores en Instagram *</Label>
                <Input
                  id="instagramFollowers"
                  placeholder="ej: 2200"
                  value={formData.instagramFollowers}
                  onChange={(e) => handleInputChange("instagramFollowers", e.target.value)}
                  className={errors.instagramFollowers ? "border-red-500" : ""}
                />
                <p className="text-sm text-gray-500">(SIN puntos o comas, SOLO el número)</p>
                {errors.instagramFollowers && <p className="text-sm text-red-500">{errors.instagramFollowers}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label>¿Tienes tu cuenta de Instagram pública? *</Label>
              <RadioGroup
                value={formData.isPublicAccount}
                onValueChange={(value) => handleInputChange("isPublicAccount", value)}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="publica" id="publica" />
                  <Label htmlFor="publica">Sí, es pública.</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="privada" id="privada" />
                  <Label htmlFor="privada">No, es privada.</Label>
                </div>
              </RadioGroup>
              <p className="text-sm text-gray-500">(Solo aceptamos cuentas públicas)</p>
              {errors.isPublicAccount && <p className="text-sm text-red-500">{errors.isPublicAccount}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tiktokUser">Usuario de TikTok *</Label>
                <div className="relative">
                  <Music className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="tiktokUser"
                    placeholder="@usuario"
                    value={formData.tiktokUser}
                    onChange={(e) => handleInputChange("tiktokUser", e.target.value)}
                    className={`pl-10 ${errors.tiktokUser ? "border-red-500" : ""}`}
                  />
                </div>
                {errors.tiktokUser && <p className="text-sm text-red-500">{errors.tiktokUser}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="tiktokFollowers">Seguidores en TikTok *</Label>
                <Input
                  id="tiktokFollowers"
                  placeholder="ej: 2200"
                  value={formData.tiktokFollowers}
                  onChange={(e) => handleInputChange("tiktokFollowers", e.target.value)}
                  className={errors.tiktokFollowers ? "border-red-500" : ""}
                />
                <p className="text-sm text-gray-500">(SIN puntos o comas, SOLO el número)</p>
                {errors.tiktokFollowers && <p className="text-sm text-red-500">{errors.tiktokFollowers}</p>}
              </div>
            </div>
          </div>

          {/* Información Adicional */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Información Adicional</h3>

            <div className="space-y-2">
              <Label htmlFor="aboutYou">Sobre ti *</Label>
              <Textarea
                id="aboutYou"
                placeholder="Cuéntanos sobre tu experiencia creando contenido y lo que buscas con esto..."
                value={formData.aboutYou}
                onChange={(e) => handleInputChange("aboutYou", e.target.value)}
                className={`min-h-[100px] ${errors.aboutYou ? "border-red-500" : ""}`}
              />
              {errors.aboutYou && <p className="text-sm text-red-500">{errors.aboutYou}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Screenshot de tu perfil en Instagram *</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange("instagramScreenshot", e.target.files?.[0] || null)}
                    className="hidden"
                    id="instagram-screenshot"
                  />
                  <label htmlFor="instagram-screenshot" className="cursor-pointer">
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">
                      {formData.instagramScreenshot ? formData.instagramScreenshot.name : "Subir imagen"}
                    </p>
                  </label>
                </div>
                {errors.instagramScreenshot && <p className="text-sm text-red-500">{errors.instagramScreenshot}</p>}
              </div>

              <div className="space-y-2">
                <Label>Screenshot de tu perfil en TikTok *</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange("tiktokScreenshot", e.target.files?.[0] || null)}
                    className="hidden"
                    id="tiktok-screenshot"
                  />
                  <label htmlFor="tiktok-screenshot" className="cursor-pointer">
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">
                      {formData.tiktokScreenshot ? formData.tiktokScreenshot.name : "Subir imagen"}
                    </p>
                  </label>
                </div>
                {errors.tiktokScreenshot && <p className="text-sm text-red-500">{errors.tiktokScreenshot}</p>}
              </div>

              <div className="space-y-2">
                <Label>Foto tuya *</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange("personalPhoto", e.target.files?.[0] || null)}
                    className="hidden"
                    id="personal-photo"
                  />
                  <label htmlFor="personal-photo" className="cursor-pointer">
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">
                      {formData.personalPhoto ? formData.personalPhoto.name : "Subir imagen"}
                    </p>
                  </label>
                </div>
                <p className="text-sm text-gray-500">La usaremos para promocionarte</p>
                {errors.personalPhoto && <p className="text-sm text-red-500">{errors.personalPhoto}</p>}
              </div>
            </div>
          </div>

          {/* Aceptación */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Términos y Condiciones</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeToBenefits"
                  checked={formData.agreeToBenefits}
                  onCheckedChange={(checked) => handleInputChange("agreeToBenefits", checked)}
                />
                <Label htmlFor="agreeToBenefits" className="text-sm leading-relaxed">
                  ¿Entiendes los beneficios ofrecidos y estás de acuerdo en aceptarlos? *
                </Label>
              </div>
              {errors.agreeToBenefits && <p className="text-sm text-red-500">{errors.agreeToBenefits}</p>}

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeToDataTreatment"
                  checked={formData.agreeToDataTreatment}
                  onCheckedChange={(checked) => handleInputChange("agreeToDataTreatment", checked)}
                />
                <Label htmlFor="agreeToDataTreatment" className="text-sm leading-relaxed">
                  Estoy de acuerdo en entregar mi información personal, que sea almacenada y tratada por FoodiesBNB.
                  También estoy de acuerdo en ser contactado mediante los canales proporcionados.
                </Label>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-lg font-semibold"
          >
            Enviar
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
