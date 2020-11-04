import Head from "next/head"
import config from "../config"

export type SEOProps = {
  title: string
  description?: string
}

export function SEO({ description, title }: SEOProps) {
  const metaTitle = `${title || config.title} ${config.titleTemplate}`
  const metaDescription = description || config.description

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content={metaTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
    </Head>
  )
}

//     {
//       property: `og:title`,
//       content: title,
//     },
//     {
//       name: `twitter:title`,
//       content: title,
//     },
