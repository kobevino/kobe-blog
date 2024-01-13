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
    },
  },
}

export default config
