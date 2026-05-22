'use client'

import Navbar from '@/components/Navbar'
import VideoCard from '@/components/VideoCard'
import { useState, useEffect } from 'react'
import { videosAPI } from '@/lib/api'

export default function Home() {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await videosAPI.getAll()
        setVideos(response.data)
      } catch (error) {
        console.error('Error fetching videos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-holistic-50 to-sage-50">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-5xl font-bold text-holistic-900 mb-4">
              Bienvenido a HolisticSpace
            </h1>
            <p className="text-xl text-holistic-700 mb-6">
              El ecosistema completo para terapeutas. Vende tus videos, servicios y productos sin inventario.
            </p>
            <div className="flex gap-4">
              <button className="bg-sage-600 text-white px-8 py-3 rounded-lg hover:bg-sage-700 transition font-semibold">
                Comienza Ahora
              </button>
              <button className="border-2 border-sage-600 text-sage-600 px-8 py-3 rounded-lg hover:bg-sage-50 transition font-semibold">
                Explora
              </button>
            </div>
          </div>
          <div className="h-96 bg-gradient-to-br from-sage-300 to-holistic-300 rounded-2xl flex items-center justify-center">
            <div className="text-7xl">🌟</div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-display text-4xl font-bold text-holistic-900 mb-12">
          Videos Destacados
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-holistic-600">Cargando videos...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {videos.slice(0, 6).map((video: any) => (
              <VideoCard
                key={video.id}
                id={video.id}
                title={video.title}
                description={video.description}
                price={video.price}
                views={video.views}
                therapist={video.therapist?.firstName || 'Terapeuta'}
              />
            ))}
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-display text-4xl font-bold text-holistic-900 mb-12 text-center">
          ¿Por qué elegir HolisticSpace?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🎥',
              title: 'Vende Videos',
              description: 'Monetiza tu contenido con nuestro sistema seguro de streaming',
            },
            {
              icon: '🛍️',
              title: 'Dropshipping',
              description: 'Vende productos sin mantener inventario',
            },
            {
              icon: '👥',
              title: 'Comunidad Global',
              description: 'Conecta con miles de terapeutas y clientes',
            },
            {
              icon: '💳',
              title: 'Pagos Seguros',
              description: 'Stripe integrado para transacciones seguras',
            },
            {
              icon: '📊',
              title: 'Analytics Completos',
              description: 'Sigue tu progreso con métricas detalladas',
            },
            {
              icon: '🤖',
              title: 'IA Inteligente',
              description: 'Recomendaciones personalizadas para clientes',
            },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="font-display text-xl font-semibold text-holistic-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-holistic-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-holistic-900 text-white mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 HolisticSpace. Empoderando a terapeutas del mundo.</p>
        </div>
      </footer>
    </main>
  )
}