import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import { WhatsAppIcon } from '@/components/MessengerIcons'

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
              <p className="text-gray-600 mb-4">Licensed Massage Therapist</p>
              <p className="text-gray-700 mb-6">
                Здравейте, казвам се Тихомир и се занимавам професионално с масажи повече от 10 години. Обичам работата си и никога не правя компромис с качеството. От масажните масла, до музиката по време на масажа.
              </p>
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
          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-100 flex flex-row">
                <div className="relative w-36 sm:w-40 h-36 sm:h-44 flex-shrink-0">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 144px, 160px"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col min-w-0">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-4">{s.description}</p>
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-200 text-sm text-primary-700 space-y-0.5">
                    {s.pricing.map((line, j) => (
                      <p key={j}>{line}</p>
                    ))}
                  </div>
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

      {/* Отзиви – три колони един до друг */}
      <section id="otzivi" className="py-16 px-4 bg-[#f5ede4] scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl text-primary-700 mb-2 text-center">Отзиви</h2>
          <span className="block w-16 h-0.5 bg-primary-500 mx-auto mb-10" aria-hidden />
          <div className="grid sm:grid-cols-3 gap-6">
            <blockquote className="bg-white/80 rounded-lg p-5 border border-gray-100 text-center">
              <p className="text-gray-700 text-sm">Масажът беше прекрасен. И най-хубавото е, че не трябва да пътувам до вкъщи.</p>
              <cite className="block mt-3 text-gray-500 not-italic text-sm">— Адриана</cite>
            </blockquote>
            <blockquote className="bg-white/80 rounded-lg p-5 border border-gray-100 text-center">
              <p className="text-gray-700 text-sm">Дълбокотъканният масаж, въпреки че е силов, беше съобразен с мен и моментното ми състояние. Благодаря, Тишо.</p>
              <cite className="block mt-3 text-gray-500 not-italic text-sm">— Стоян</cite>
            </blockquote>
            <blockquote className="bg-white/80 rounded-lg p-5 border border-gray-100 text-center">
              <p className="text-gray-700 text-sm">Ломи-Ломи е вече любимият ми масаж.</p>
              <cite className="block mt-3 text-gray-500 not-italic text-sm">— Светла</cite>
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
          <p className="text-gray-600 mb-6">
            Предпочитам да ме пишете в WhatsApp – отговарям по-бързо.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://wa.me/359897500190?text=Здравейте%2C%20искам%20да%20се%20свържа%20за%20масаж."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
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
