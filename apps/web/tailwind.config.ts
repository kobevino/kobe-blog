// tailwind config is required for editor support

import type { Config } from 'tailwindcss'
import sharedConfig from '@repo/tailwind-config'
import colors from 'tailwindcss/colors'

const config: Pick<Config, 'content' | 'presets' | 'theme'> = {
  content: ['./**/*.tsx'],
  presets: [sharedConfig],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      pink: colors.pink,
      purple: colors.purple,
      ladoga: {
        900: '#98b8e1',
        700: '#adc6e7',
        500: '#c1d4ed',
        300: '#d6e3f3',
        100: '#eaf1f9',
      },
    },
  },
}

export default config
