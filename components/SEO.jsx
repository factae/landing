import React from 'react'
import Head from 'next/head'

import logo from '../images/factae.png'

function SEO({title, desc, tags, url = '/'}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={tags} />
      <meta property="og:title" content="factAE" />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={process.env.HOSTNAME_LANDING + url} />
      <meta property="og:image" content={process.env.HOSTNAME_LANDING + logo} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@factaeOfficial" />
      <meta name="twitter:creator" content="@soywod" />
      <meta name="twitter:title" content="factAE" />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={process.env.HOSTNAME_LANDING + logo} />
    </Head>
  )
}

export default SEO
