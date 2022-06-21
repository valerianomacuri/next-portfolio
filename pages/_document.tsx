import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <title>
            Valeriano Macuri | Frontend Developer
          </title>
          <meta
            name="description"
            content="Desarrollador Fullstack Portafolio Leonardo Valeriano Macuri"
          />
          <meta name="keywords"
            content="leonardo, valeriano, macuri, frontend, fullstack, desarrollo, portafolio"
          />
          <meta name="robots" content="index" />
        </Head>
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={"dark"} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
