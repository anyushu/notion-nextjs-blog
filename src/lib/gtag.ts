export const GTAG_ID = process.env.NEXT_PUBLIC_GTAG_ID || ''

/**
 * pageview event
 *
 * @param {url} path
 */
export const pageview = (url: string): void => {
  if (!GTAG_ID) return
  window.gtag('config', GTAG_ID, {
    page_path: url,
  })
}
