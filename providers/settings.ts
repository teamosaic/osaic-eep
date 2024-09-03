import { createContext } from 'react';
import { Settings } from '~/types/globalTypes';

export const SettingsContext = createContext<Settings | null>(null)
