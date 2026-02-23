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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="hover:opacity-90 transition">
          <span className="block font-serif text-xl text-gray-900">Масажи по домовете</span>
          <span className="block text-sm font-serif text-gray-600">Massage Therapist</span>
        </Link>

        <div className="hidden sm:flex flex-col items-end gap-1">
          <a
            href="https://www.facebook.com/masajipodomovete"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary-600"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <nav className="flex items-center gap-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition text-sm rounded focus:outline-none"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="tel:+359897500190" className="inline-flex items-center gap-1.5 text-gray-900 font-medium text-sm">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            +359 897 500 190
          </a>
        </div>

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
        <div className="sm:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-2">
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
          <a href="tel:+359897500190" className="py-2 inline-flex items-center gap-1.5 text-primary-600 font-medium">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            +359 897 500 190
          </a>
        </div>
      )}
    </header>
  )
}
