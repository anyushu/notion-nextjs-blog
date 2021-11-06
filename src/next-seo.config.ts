/**
 * site title
 */
export const siteTitle = 'Blog with Notion API x Next.js'

/**
 * next-seo defaultS config
 */
export const defaultSeo = {
  defaultTitle: siteTitle,
  titleTemplate: `%s | ${siteTitle}`,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    site_name: siteTitle,
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}
