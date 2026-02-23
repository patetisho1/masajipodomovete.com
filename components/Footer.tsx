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
              className="text-gray-600 hover:text-primary-600 text-sm rounded focus:outline-none"
            >
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
