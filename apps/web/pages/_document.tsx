import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <script src="https://www.youtube.com/iframe_api" defer />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;700;800&family=Roboto:wght@400;500;700;900&display=swap"
            rel="stylesheet"
            as="font"
          />
          <link rel="preload" href="/fonts/LeagueGothic-Regular.otf" as="font" crossOrigin="" />
          <link
            rel="preload"
            href="/fonts/BigShouldersDisplay-Regular.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument