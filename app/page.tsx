import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

// Снимки: замени с твои в public/ (hero.jpg, about.jpg, service-1..4.jpg) или смени URL-ите
const HERO_IMAGE = 'https://images.unsplash.com/photo-1519823551278-64ac92754fb2?w=1200&q=80'
const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80'
const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80',
  'https://images.unsplash.com/photo-1544787219-7fcc4543207f?w=400&q=80',
  'https://images.unsplash.com/photo-1600334089648-c57c76b226e6?w=400&q=80',
]

const SERVICES = [
  {
    title: 'Класически масаж',
    description: 'Подходящ за отпускане и облекчаване на напрежените мускули. Персонализиран според вашите нужди.',
    price60: '50 € (98 лв)',
    price90: '70 € (138 лв)',
    image: SERVICE_IMAGES[0],
  },
  {
    title: 'Дълбокотъканен масаж',
    description: 'Силов масаж, съобразен с вашето състояние. Работи по дълбоките слоеве на мускулатурата.',
    price60: '50 € (98 лв)',
    price90: '70 € (138 лв)',
    image: SERVICE_IMAGES[1],
  },
  {
    title: 'Ломи Ломи - релаксиращ',
    description: 'Хавайски масаж за пълно отпускане и възстановяване на енергията.',
    price60: '60 € (118 лв)',
    price90: '85 € (167 лв)',
    image: SERVICE_IMAGES[2],
  },
  {
    title: 'Частичен масаж - гръб',
    description: 'Фокусиран масаж на гръб и рамене. Идеален при напрежение и болки.',
    price60: '35 € (69 лв)',
    price90: '—',
    image: SERVICE_IMAGES[3],
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero – снимка с камъни/масаж, тъмно зелен текст и подчертаване */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="Масаж у дома"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/30 z-10" />
        </div>
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-700 mb-2">
            Relax, Refresh, Revitalize
          </h1>
          <span className="block w-48 h-0.5 bg-primary-600 mx-auto" aria-hidden />
        </div>
      </section>

      {/* За мен – портрет, текст, бутон Още */}
      <section id="za-men" className="py-16 px-4 scroll-mt-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded overflow-hidden bg-gray-100">
              <Image
                src={ABOUT_IMAGE}
                alt="Тихомир Тодоров – масажист"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-primary-700 mb-2">За мен</h2>
              <span className="block w-16 h-0.5 bg-primary-500 mb-6" aria-hidden />
              <p className="text-xl font-semibold text-gray-900">Тихомир Тодоров</p>
              <p className="text-gray-600 mb-2">Licensed Massage Therapist</p>
              <p className="text-gray-700 mb-6">Професионалист с над 10 години опит.</p>
              <a
                href="#uslugi"
                className="inline-block bg-primary-600 text-white px-5 py-2.5 rounded font-medium hover:bg-primary-700 transition"
              >
                Още
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги – светла бежова лента със заглавие */}
      <section className="py-10 px-4 bg-[#f5ede4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-primary-700">Услуги</h2>
          <span className="block w-16 h-0.5 bg-primary-500 mx-auto mt-2" aria-hidden />
        </div>
      </section>

      {/* Услуги – мрежа 2x2 със снимки и цени */}
      <section id="uslugi" className="py-12 px-4 scroll-mt-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-gray-600 mb-10">
            Всички масажи се предлагат на място в уюта на собствения Ви дом.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-100 flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-40 h-48 sm:h-auto sm:min-h-[200px] flex-shrink-0">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 200px"
                  />
                </div>
                <div className="p-4 flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{s.description}</p>
                  <p className="text-sm text-primary-700">
                    60 минути – {s.price60}
                    {s.price90 !== '—' && <><br />90 минути – {s.price90}</>}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <blockquote className="mt-10 pl-4 border-l-4 border-primary-500 text-gray-600 italic">
            „Масажът беше прекрасен. И най-хубавото е, че не трябва да пътувам до вкъщи.“
            <cite className="block mt-2 not-italic text-gray-500">— Адриана</cite>
          </blockquote>
        </div>
      </section>

      {/* Отзиви */}
      <section id="otzivi" className="py-16 px-4 bg-gray-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl text-primary-700 mb-2">Отзиви</h2>
          <span className="block w-16 h-0.5 bg-primary-500 mb-8" aria-hidden />
          <div className="space-y-8">
            <blockquote className="pl-4 border-l-4 border-primary-500">
              <p className="text-gray-700">
                Дълбокотъканният масаж, въпреки че е силов, беше съобразен с мен и моментното ми състояние. Благодаря, Тишо.
              </p>
              <cite className="block mt-2 text-gray-500 not-italic">— Стоян</cite>
            </blockquote>
            <blockquote className="pl-4 border-l-4 border-primary-500">
              <p className="text-gray-700">Ломи-Ломи е вече любимият ми масаж.</p>
              <cite className="block mt-2 text-gray-500 not-italic">— Светла</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Контакти */}
      <section id="kontakti" className="py-16 px-4 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl text-primary-700 mb-2">Пишете ми</h2>
          <span className="block w-16 h-0.5 bg-primary-500 mb-6" aria-hidden />
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
