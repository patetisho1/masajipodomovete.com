import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

// Placeholder снимки – замени с твои в public/ (hero.jpg, about.jpg) или смени URL-ите по-долу
const HERO_IMAGE = 'https://images.unsplash.com/photo-1544161515-4ab6f6dd59ad?w=1200&q=80'
const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80'

export default function HomePage() {
  return (
    <>
      {/* Hero със снимка */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="Масаж у дома"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary-200 font-medium mb-2">Massage Therapist</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow">
            Relax, Refresh, Revitalize
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto drop-shadow">
            Професионален масаж у вас вкъщи. София и област.
          </p>
          <a
            href="#kontakti"
            className="inline-block bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition shadow-lg"
          >
            Запазете час
          </a>
        </div>
      </section>

      {/* За мен със снимка */}
      <section id="za-men" className="py-16 px-4 scroll-mt-20 bg-warm-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">За мен</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-warm-200">
              <Image
                src={ABOUT_IMAGE}
                alt="Тихомир Тодоров – масажист"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="prose prose-lg text-gray-700">
              <p className="font-semibold text-gray-900 text-xl">Тихомир Тодоров</p>
              <p className="text-primary-600 font-medium">Licensed Massage Therapist</p>
              <p>Професионалист с над 10 години опит.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="uslugi" className="py-16 px-4 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Услуги</h2>
          <div className="space-y-8">
            <div className="bg-warm-50 rounded-xl p-6 border border-warm-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Класически масаж</h3>
              <p className="text-gray-600">
                Подходящ за отпускане и облекчаване на напрежените мускули. Персонализиран според вашите нужди.
              </p>
            </div>
            <div className="bg-warm-50 rounded-xl p-6 border border-warm-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Дълбокотъканен масаж</h3>
              <p className="text-gray-600">
                Силов масаж, съобразен с вашето състояние. Работи по дълбоките слоеве на мускулатурата.
              </p>
            </div>
            <div className="bg-warm-50 rounded-xl p-6 border border-warm-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ломи-Ломи</h3>
              <p className="text-gray-600">
                Хавайски масаж за пълно отпускане и възстановяване на енергията.
              </p>
            </div>
          </div>
          <blockquote className="mt-10 pl-4 border-l-4 border-primary-500 text-gray-600 italic">
            „Масажът беше прекрасен. И най-хубавото е, че не трябва да пътувам до вкъщи.“
            <cite className="block mt-2 not-italic text-gray-500">— Адриана</cite>
          </blockquote>
        </div>
      </section>

      {/* Отзиви */}
      <section id="otzivi" className="py-16 px-4 bg-warm-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Отзиви</h2>
          <div className="space-y-8">
            <blockquote className="pl-4 border-l-4 border-primary-500">
              <p className="text-gray-700">
                Дълбокотъканният масаж, въпреки че е силов, беше съобразен с мен и моментното ми състояние. Благодаря, Тишо.
              </p>
              <cite className="block mt-2 text-gray-500 not-italic">— Стоян</cite>
            </blockquote>
            <blockquote className="pl-4 border-l-4 border-primary-500">
              <p className="text-gray-700">
                Ломи-Ломи е вече любимият ми масаж.
              </p>
              <cite className="block mt-2 text-gray-500 not-italic">— Светла</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Контакти */}
      <section id="kontakti" className="py-16 px-4 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Пишете ми</h2>
          <p className="text-gray-600 mb-8">
            Тихомир Тодоров · 089 750 0190 · masajipodomovete@abv.bg
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">Директно</p>
              <a href="tel:+359897500190" className="text-primary-600 hover:text-primary-700 font-medium block mb-1">
                +359 897 500 190
              </a>
              <a href="mailto:masajipodomovete@abv.bg" className="text-primary-600 hover:text-primary-700 font-medium block">
                masajipodomovete@abv.bg
              </a>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
