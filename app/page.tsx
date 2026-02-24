import Image from 'next/image'
import { WhatsAppIcon } from '@/components/MessengerIcons'
import TrackedLink from '@/components/TrackedLink'

// Снимки: hero – твоята снимка с камъни от public/background.jpg; За мен – about.jpg.png; Услуги – от public/
const HERO_IMAGE = '/background.jpg'
const ABOUT_IMAGE = '/about.jpg.png'

const SERVICES = [
  {
    title: 'Класически масаж',
    description: 'Когато не сте сигурни какво точно искате, класическият масаж е сигурен избор.',
    pricing: ['60 минути - 50 € (98 лв)', '90 минути - 70 € (138 лв)'],
    image: '/Classic Massage.jpg',
  },
  {
    title: 'Дълбокотъканен масаж',
    description: 'Дълбокотъканният масаж е високоефективна терапия, която помага да се постигне дълбоко релаксиране на мускулите и да се намали напрежението в тялото. Силов масаж съобразен с моментното състояние на тялото.',
    pricing: ['60 минути - 65 € (128 лв)', '90 минути - 85 € (168 лв)'],
    image: '/Deep Tissue massage.jpg',
  },
  {
    title: 'Ломи Ломи - релаксиращ',
    description: 'Масажът Ломи-Ломи е изключително релаксиращ и терапевтичен вид масаж, който произлиза от традиционната хавайска култура. Той е известен със своите кръгови, ритмични движения, които имитират вълните на океана и са направени за да се отпуснат мускулите и да се намали стресът в тялото.',
    pricing: ['60 минути - 50 € (98 лв)', '90 минути - 70 € (138 лв)'],
    image: '/Lomi Lomi.jpg',
  },
  {
    title: 'Частичен масаж - гръб',
    description: 'Когато усещате, че гърба Ви е претоварен и искате да му се обърне специално внимание.',
    pricing: ['40 минути - 35 € (68 лв)'],
    image: '/Back Massage.jpg',
  },
  {
    title: 'Рефлексотерапия - частичен',
    description: 'Рефлексотерапията на стъпалата е една от най-ефективните форми на рефлексотерапия. Тази техника се базира на идеята, че на стъпалата има точки, които са свързани с определени органи и системи в тялото. Когато тези точки се стимулират правилно, те могат да подобрят функционирането на тези органи и системи.',
    pricing: ['40 минути - 35 € (68 лв)'],
    image: '/Reflexology.jpg',
  },
  {
    title: 'Антицелулитен масаж - ръчен',
    description: 'Антицелулитният масаж е една от най-ефективните техники за борба с целулита. Този вид масаж е специално проектиран, за да насърчи кръвообращението в зоните, където има целулит, като се използват различни техники за масажиране и стимулиране на тъканите.',
    pricing: ['40 минути - 35 € (68 лв)'],
    image: '/anitcellulite.jpg',
  },
  {
    title: 'Спортен масаж',
    description: 'Спортният масаж е техника за релаксация и възстановяване след физическо натоварване. Използва се за подобряване на кръвообращението, намаляване на мускулната напрежение и подпомагане на зарастването на тъканите.',
    pricing: ['60 минути - 65 € (128 лв)', '90 минути - 85 € (168 лв)'],
    image: '/Sport massage.jpg',
  },
  {
    title: 'Антицелулитен масаж - пакет 10 процедури',
    description: 'Антицелулитният масаж е една от най-ефективните техники за борба с целулита. Този вид масаж е специално проектиран, за да насърчи кръвообращението в зоните, където има целулит, като се използват различни техники за масажиране и стимулиране на тъканите.',
    pricing: ['10 процедури - 295 € (600 лв)'],
    image: '/anitcellulite.jpg',
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
          <div className="absolute inset-0 bg-primary-900/25 z-10" />
        </div>
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-700 mb-2">
            Relax, Refresh, Revitalize
          </h1>
          <p className="font-serif text-lg sm:text-xl text-primary-800/95 mb-3">
            Професионален масаж в уюта на вашия дом
          </p>
          <span className="block w-48 h-0.5 bg-primary-600 mx-auto" aria-hidden />
        </div>
      </section>

      {/* За мен – светла бежова лента, центрирано заглавие, снимка вляво, текст в бяла кутия вдясно */}
      <section id="za-men" className="py-16 px-4 scroll-mt-20 bg-[#f5ede4]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl text-primary-700 text-center mb-2">За мен</h2>
          <span className="block w-24 h-px bg-primary-500/70 mx-auto mb-10 rounded-full" aria-hidden />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded overflow-hidden bg-gray-100 ring-2 ring-white shadow-md transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src={ABOUT_IMAGE}
                alt="Тихомир Тодоров – масажист"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="bg-white rounded-sm border border-gray-200 shadow-sm p-6 sm:p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Здравейте, казвам се Тихомир и се занимавам професионално с масажи повече от 10 години. Обичам работата си и никога не правя компромис с качеството. От масажните масла, до музиката по време на масажа.
              </p>
              <a
                href="#uslugi"
                className="inline-block bg-primary-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary-700 hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Още
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Моят подход */}
      <section id="moyat-podhod" className="py-16 px-4 scroll-mt-20 bg-[#f5ede4]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl text-primary-700 mb-2 text-center">Моят подход</h2>
          <span className="block w-16 h-0.5 bg-primary-500 mx-auto mb-10" aria-hidden />
          <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 mb-4">Най-релаксиращата атмосфера е у дома.</p>
              <p className="text-gray-700 mb-4">За 5 минути ще превърна вашето жилище в уютен спа салон.</p>
              <p className="text-gray-700">Професинална масажна кушетка, свежи чаршафи, меки хавлии, уханни масла и тиха музика ще спрат времето за час.</p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
              <Image
                src="/moyat-podhod.jpg"
                alt="Масажна обстановка у дома"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="text-center">
            <a
              href="#uslugi"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Услуги
            </a>
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
          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="group bg-gray-50 rounded-lg overflow-hidden border border-gray-100 flex flex-col sm:flex-row transition-shadow duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-primary-200">
                <div className="relative w-full sm:w-40 h-44 sm:h-44 flex-shrink-0 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 160px"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col min-w-0 text-left">
                  <h3 className="font-semibold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-4">{s.description}</p>
                  <div className="mt-2 pt-2 border-t border-gray-200 text-sm text-primary-700 space-y-0.5">
                    {s.pricing.map((line, j) => (
                      <p key={j}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-gray-600 max-w-2xl mx-auto">
            Ние ще осигурим всичко необходимо за масажа. Професионална масажна маса, масажно масло, свежи чаршафи, хавлия и дори музика за релаксираща атмосфера.
          </p>
        </div>
      </section>

      {/* Отзиви – три колони един до друг */}
      <section id="otzivi" className="py-16 px-4 bg-[#f5ede4] scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl text-primary-700 mb-2 text-center">Отзиви</h2>
          <span className="block w-16 h-0.5 bg-primary-500 mx-auto mb-10" aria-hidden />
          <div className="grid sm:grid-cols-3 gap-6">
            <blockquote className="bg-white/80 rounded-lg p-5 border border-gray-100 text-center">
              <p className="text-gray-600 text-sm leading-relaxed">Масажът беше прекрасен. И най-хубавото е, че не трябва да пътувам до вкъщи.</p>
              <cite className="block mt-3 font-medium text-primary-700 not-italic text-sm">— Адриана</cite>
            </blockquote>
            <blockquote className="bg-white/80 rounded-lg p-5 border border-gray-100 text-center">
              <p className="text-gray-600 text-sm leading-relaxed">Дълбокотъканният масаж, въпреки че е силов, беше съобразен с мен и моментното ми състояние. Благодаря, Тишо.</p>
              <cite className="block mt-3 font-medium text-primary-700 not-italic text-sm">— Стоян</cite>
            </blockquote>
            <blockquote className="bg-white/80 rounded-lg p-5 border border-gray-100 text-center">
              <p className="text-gray-600 text-sm leading-relaxed">Ломи-Ломи е вече любимият ми масаж.</p>
              <cite className="block mt-3 font-medium text-primary-700 not-italic text-sm">— Светла</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Контакти */}
      <section id="kontakti" className="py-16 px-4 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl text-primary-700 mb-2">Пишете ми</h2>
          <span className="block w-16 h-0.5 bg-primary-500 mb-6" aria-hidden />
          <p className="text-gray-600 mb-6">
            Предпочитам да ме пишете в WhatsApp – отговарям по-бързо.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <TrackedLink
              href="https://wa.me/359897500190?text=Здравейте%2C%20искам%20да%20запазя%20масаж."
              target="_blank"
              rel="noopener noreferrer"
              eventName="click_whatsapp"
              eventParams={{ location: 'contact_section' }}
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-lg font-medium hover:opacity-90 hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Пишете в WhatsApp
            </TrackedLink>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">Директно</p>
            <TrackedLink href="tel:+359897500190" eventName="click_phone" eventParams={{ location: 'contact_section' }} className="inline-flex items-center gap-1.5 text-primary-600 hover:text-primary-700 font-medium mb-1">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +359 897 500 190
            </TrackedLink>
            <a href="mailto:masajipodomovete@abv.bg" className="text-primary-600 hover:text-primary-700 font-medium block">
              masajipodomovete@abv.bg
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
