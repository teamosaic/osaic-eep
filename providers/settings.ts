import { createContext } from 'react'
import type { Image } from 'sanity'

interface Settings {
  metaTitleSuffix: string
  metaDescription: string
  metaImage: Image
}

export const SettingsContext = createContext<Settings | null>(null)
