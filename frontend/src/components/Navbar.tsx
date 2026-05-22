'use client'

import Link from 'next/link'
import { useAuthStore } from '@/store'
import { useState } from 'react'

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuthStore()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-sage-500 to-holistic-500 rounded-lg"></div>
            <span className="font-display text-xl font-bold text-holistic-900">HolisticSpace</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/marketplace" className="text-holistic-700 hover:text-sage-600 transition">
              Marketplace
            </Link>
            <Link href="/services" className="text-holistic-700 hover:text-sage-600 transition">
              Servicios
            </Link>
            <Link href="/community" className="text-holistic-700 hover:text-sage-600 transition">
              Comunidad
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Link href="/dashboard" className="text-holistic-700 hover:text-sage-600">
                  {user?.firstName}
                </Link>
                <button
                  onClick={logout}
                  className="bg-sage-600 text-white px-4 py-2 rounded-lg hover:bg-sage-700 transition"
                >
                  Salir
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link href="/login" className="text-holistic-700 hover:text-sage-600">
                  Iniciar Sesión
                </Link>
                <Link
                  href="/register"
                  className="bg-sage-600 text-white px-4 py-2 rounded-lg hover:bg-sage-700 transition"
                >
                  Registrarse
                </Link>
              </div>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  )
}