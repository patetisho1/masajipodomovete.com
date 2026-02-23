export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Тихомир Тодоров. Масажи по домовете. Всички права запазени.
          </p>
          <div className="flex gap-6">
            <a href="#kontakti" className="text-gray-600 hover:text-primary-600 text-sm rounded focus:outline-none">
              Контакти
            </a>
            <a
              href="tel:+359897500190"
              className="inline-flex items-center gap-1.5 text-gray-600 hover:text-primary-600 text-sm rounded focus:outline-none"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              089 750 0190
            </a>
            <a
              href="mailto:masajipodomovete@abv.bg"
              className="text-gray-600 hover:text-primary-600 text-sm rounded focus:outline-none"
            >
              masajipodomovete@abv.bg
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
