import React from 'react'
import Head from 'next/head'

const PageHead = () => {
  return (
    <Head>
      <title>Gabriel Miranda - Fullstack Developer</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap"
      />
    </Head>
  )
}

export default PageHead
