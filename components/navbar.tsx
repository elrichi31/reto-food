"use client"

import Link from "next/link"
import { useState } from "react"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Menu, X, User } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: session } = useSession()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white border-b border-red-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
              Foodies<span className="text-red-500">BNB</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/foodies"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Para Foodies
              </Link>
              <Link
                href="/restaurantes"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Para Restaurantes
              </Link>
              <Link
                href="/como-funciona"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Cómo Funciona
              </Link>
              {session && (
                <Link
                  href="/dashboard"
                  className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Dashboard
                </Link>
              )}
              {session ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors bg-transparent"
                >
                  Cerrar Sesión
                </Button>
              ) : (
                <Link href="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors bg-transparent"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Iniciar Sesión
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link
              href="/foodies"
              className="text-gray-700 hover:text-red-500 block px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Para Foodies
            </Link>
            <Link
              href="/restaurantes"
              className="text-gray-700 hover:text-red-500 block px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Para Restaurantes
            </Link>
            <Link
              href="/como-funciona"
              className="text-gray-700 hover:text-red-500 block px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cómo Funciona
            </Link>
            {session && (
              <Link
                href="/dashboard"
                className="text-gray-700 hover:text-red-500 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            <div className="px-3 py-2">
              {session ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsMenuOpen(false)
                    signOut({ callbackUrl: "/" })
                  }}
                  className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors bg-transparent"
                >
                  Cerrar Sesión
                </Button>
              ) : (
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors bg-transparent"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Iniciar Sesión
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
