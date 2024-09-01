import { createContext } from 'react'
import type { Image } from 'sanity'

interface Settings {
  metaTitleSuffix: string
  metaDescription: string
  metaImage: Image,
  instagram: string,
  linkedin: string,
  twitter: string
}

export const SettingsContext = createContext<Settings | null>(null)
