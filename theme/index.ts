// theme.ts

// 1. import `extendTheme` function
import {
  extendTheme,
  type ThemeConfig,
  Theme,
  withDefaultColorScheme,
  ComponentStyleConfig,
} from "@chakra-ui/react"

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme(
  {
    config,
    fonts: {
      heading: "'Fira Code', monospace",
      body: "'Fira Code', monospace",
    },
    styles: {
      global: {
        body: {
          backgroundColor: "#011627",
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "blue" }),
)

export default theme
