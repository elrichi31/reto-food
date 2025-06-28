"use client"

import type React from "react"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"

type UserType = "foodie" | "restaurant"

export function LoginForm() {
  const [userType, setUserType] = useState<UserType>("foodie")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })

    setIsLoading(false)

    if (!res?.error) {
      router.push("/dashboard")
    } else {
      alert("Credenciales inválidas")
    }
  }

  return (
    <Card className="w-full shadow-lg border-0">
      <CardHeader className="text-center pb-8 pt-8">
        {/* Logo */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Foodies<span className="text-red-500">BNB</span>
          </h1>
        </div>

        {/* Title and Subtitle */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">Iniciar Sesión</h2>
          <p className="text-gray-500">Ingresa a tu cuenta para continuar</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* User Type Selection */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            type="button"
            onClick={() => setUserType("foodie")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
              userType === "foodie" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Soy Foodie
          </button>
          <button
            type="button"
            onClick={() => setUserType("restaurant")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
              userType === "restaurant" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Soy Restaurante
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Correo electrónico
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700 font-medium">
              Contraseña
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 border-gray-200 focus:border-red-500 focus:ring-red-500 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link href="/forgot-password" className="text-sm text-red-500 hover:text-red-600 transition-colors">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors"
          >
            {isLoading ? "Iniciando..." : "Iniciar Sesión"}
          </Button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center pt-4">
          <p className="text-gray-600 text-sm">
            ¿No tienes una cuenta?{" "}
            <Link href="/apply" className="text-red-500 hover:text-red-600 font-medium transition-colors">
              Aplicar ahora
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
