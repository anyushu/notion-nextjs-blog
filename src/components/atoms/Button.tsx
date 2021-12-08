import Link from 'next/link'
import type { ReactNode } from 'react'

interface Props {
  href?: string
  children: ReactNode
}

export const Button = ({ href, children }: Props) => {
  if (href) {
    return (
      <Link href={href}>
        <a className="inline-block transition-all bg-gray-700 hover:bg-gray-900 text-white leading-4 py-3 px-8">
          {children}
        </a>
      </Link>
    )
  } else {
    return (
      <button
        type="button"
        className="inline-block transition-all bg-gray-700 hover:bg-gray-900 text-white leading-4 py-3 px-8"
      >
        {children}
      </button>
    )
  }
}

export default Button
