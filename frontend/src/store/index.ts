'use client'

import { create } from 'zustand'

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: 'CLIENT' | 'THERAPIST' | 'ADMIN'
}

interface AuthStore {
  user: User | null
  isAuthenticated: boolean
  token: string | null
  login: (user: User, token: string) => void
  logout: () => void
  setUser: (user: User) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  token: null,
  login: (user, token) => set({ user, isAuthenticated: true, token }),
  logout: () => set({ user: null, isAuthenticated: false, token: null }),
  setUser: (user) => set({ user }),
}))

interface Video {
  id: string
  title: string
  description: string
  price: number
  views: number
  therapistId: string
}

interface VideoStore {
  videos: Video[]
  setVideos: (videos: Video[]) => void
  addVideo: (video: Video) => void
}

export const useVideoStore = create<VideoStore>((set) => ({
  videos: [],
  setVideos: (videos) => set({ videos }),
  addVideo: (video) => set((state) => ({ videos: [...state.videos, video] })),
}))