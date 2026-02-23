'use client'

import { useState } from 'react'
import Link from 'next/link'

const nav = [
  { label: 'За мен', href: '#za-men' },
  { label: 'Услуги', href: '#uslugi' },
  { label: 'Отзиви', href: '#otzivi' },
  { label: 'Контакти', href: '#kontakti' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-warm-50/95 backdrop-blur border-b border-warm-200">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-primary-600 hover:text-primary-700">
          Масажи по домовете
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-primary-600 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+359897500190"
          className="hidden sm:inline text-primary-600 font-medium hover:text-primary-700"
        >
          +359 897 500 190
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="sm:hidden p-2 text-gray-600"
          aria-label="Меню"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="sm:hidden border-t border-warm-200 bg-warm-50 px-4 py-3 flex flex-col gap-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 text-gray-600 hover:text-primary-600"
            >
              {item.label}
            </a>
          ))}
          <a href="tel:+359897500190" className="py-2 text-primary-600 font-medium">
            +359 897 500 190
          </a>
        </div>
      )}
    </header>
  )
}
