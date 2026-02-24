'use client'

import type { ComponentProps } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type TrackedLinkProps = ComponentProps<'a'> & {
  eventName: string
  eventParams?: Record<string, string>
}

export default function TrackedLink({
  eventName,
  eventParams,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams ?? {})
    }
    onClick?.(e)
  }
  return <a {...props} onClick={handleClick} />
}
