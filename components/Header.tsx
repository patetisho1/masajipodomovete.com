'use client'

import { useState } from 'react'
import Link from 'next/link'

const nav = [
  { label: 'За мен', href: '#za-men' },
  { label: 'Моят подход', href: '#moyat-podhod' },
  { label: 'Услуги', href: '#uslugi' },
  { label: 'Отзиви', href: '#otzivi' },
  { label: 'Контакти', href: '#kontakti' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Лого – абстрактна овална форма с линия (като от референса) */}
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center">
            <span className="w-6 h-0.5 bg-gray-400 rounded-full" aria-hidden />
          </div>
          <div>
            <Link href="/" className="block font-serif text-xl text-gray-900 hover:text-primary-600">
              Масажи по домовете
            </Link>
            <p className="text-sm font-serif text-gray-600">Massage Therapist</p>
          </div>
        </div>

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
                className="text-gray-700 hover:text-primary-600 transition text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="tel:+359897500190" className="text-gray-900 font-medium text-sm">
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
          <a href="tel:+359897500190" className="py-2 text-primary-600 font-medium">
            +359 897 500 190
          </a>
        </div>
      )}
    </header>
  )
}
