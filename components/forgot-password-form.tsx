"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate password reset process
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Password reset requested for:", email)
    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <Card className="w-full shadow-lg border-0">
        <CardHeader className="text-center pb-8 pt-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Foodies<span className="text-red-500">BNB</span>
            </h1>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900">¡Correo Enviado!</h2>
            <p className="text-gray-500">
              Hemos enviado las instrucciones para restablecer tu contraseña a tu correo electrónico.
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">Revisa tu bandeja de entrada y sigue las instrucciones.</p>
            <Link href="/login">
              <Button className="w-full h-12 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg">
                Volver al Login
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full shadow-lg border-0">
      <CardHeader className="text-center pb-8 pt-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Foodies<span className="text-red-500">BNB</span>
          </h1>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">Recuperar Contraseña</h2>
          <p className="text-gray-500">Ingresa tu correo electrónico y te enviaremos las instrucciones</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
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

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors"
          >
            {isLoading ? "Enviando..." : "Enviar Instrucciones"}
          </Button>
        </form>

        <div className="text-center">
          <Link
            href="/login"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 py-6" />
            Volver al login
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
