'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { authAPI } from '@/lib/api'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store'

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginForm() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { login } = useAuthStore()

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      setLoading(true)
      setError('')
      const response = await authAPI.login(data)
      const { user, token } = response.data
      login(user, token)
      localStorage.setItem('token', token)
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al iniciar sesión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
      <h1 className="font-display text-3xl font-bold text-holistic-900 mb-2">
        Bienvenido
      </h1>
      <p className="text-holistic-600 mb-6">Inicia sesión en tu cuenta</p>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-holistic-700">
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            className="w-full px-4 py-2 mt-1 border border-holistic-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500"
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-holistic-700">
            Contraseña
          </label>
          <input
            {...register('password')}
            type="password"
            className="w-full px-4 py-2 mt-1 border border-holistic-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500"
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-sage-600 text-white font-semibold py-3 rounded-lg hover:bg-sage-700 transition disabled:opacity-50"
        >
          {loading ? 'Iniciando...' : 'Iniciar Sesión'}
        </button>
      </form>

      <p className="text-center text-holistic-600 mt-4">
        ¿No tienes cuenta?{' '}
        <a href="/register" className="text-sage-600 hover:text-sage-700 font-semibold">
          Regístrate aquí
        </a>
      </p>
    </div>
  )
}