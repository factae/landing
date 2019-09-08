import React, {Fragment} from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'

// From https://github.com/zeit/next.js/blob/b4e4bcda9b6c3c3f43bd1dadef061d3b6ee0cc4d/packages/next/pages/_document.tsx#L132-L154
class MyHead extends Head {
  getCssLinks() {
    const {assetPrefix, files} = this.context._documentProps

    if (!files || files.length === 0) {
      return null
    }

    return files.map(file => {
      if (!/\.css$/.exec(file)) {
        return null
      }

      return (
        <Fragment key={file}>
          <link
            nonce={this.props.nonce}
            rel="preload"
            as="style"
            href={`${assetPrefix}/_next/${file}`}
            crossOrigin={this.props.crossOrigin || process.crossOrigin}
          />
          <link
            nonce={this.props.nonce}
            rel="stylesheet"
            href={`${assetPrefix}/_next/${file}`}
            crossOrigin={this.props.crossOrigin || process.crossOrigin}
          />
        </Fragment>
      )
    })
  }
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html lang="fr">
        <MyHead>
          <meta charSet="utf-8" />
          <meta name="author" content="Clément DOUIN" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="msapplication-TileColor" content="#0d125d" />
          <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
          <meta name="theme-color" content="#0d125d" />
          <link rel="preload" href="/static/fonts/Heebo-Light.woff2" as="font" crossOrigin="true" />
          <link
            rel="preload"
            href="/static/fonts/Heebo-Regular.woff2"
            as="font"
            crossOrigin="true"
          />
          <link rel="preload" href="/static/fonts/Heebo-Bold.woff2" as="font" crossOrigin="true" />
          <link
            rel="preload"
            href="/static/fonts/Poppins-SemiBold.woff2"
            as="font"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/static/fonts/Poppins-Bold.woff2"
            as="font"
            crossOrigin="true"
          />
          <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/android-icon-192x192.png"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/manifest.json" />
        </MyHead>
        <body>
          <Main />
          <NextScript />
          <noscript>You need to enable JavaScript to run this blog.</noscript>
        </body>
      </Html>
    )
  }
}

export default MyDocument
