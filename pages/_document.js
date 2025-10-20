import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta name="description" content="GeoAI LATAM - Democratizando el conocimiento de inteligencia artificial geoespacial en español" />
        <meta property="og:title" content="GeoAI LATAM" />
        <meta property="og:description" content="Del dato a la acción, del presente al futuro" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
