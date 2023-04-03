import { createContext } from 'react'

interface Settings {
  metaDescription: string
}

export const SettingsContext = createContext<Settings | null>(null)
