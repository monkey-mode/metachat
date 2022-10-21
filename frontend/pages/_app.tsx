import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider, Text } from '@nextui-org/react'

const theme = createTheme({
  type: 'dark',
  theme: {
    colors: {},
    space: {},
    fonts: {},
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
