export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-24 px-4 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-600 font-medium mb-2">Massage Therapist</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Relax, Refresh, Revitalize
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Професионален масаж у вас вкъщи. София и област.
          </p>
          <a
            href="#kontakti"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition"
          >
            Запазете час
          </a>
        </div>
      </section>

      {/* За мен */}
      <section id="za-men" className="py-16 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">За мен</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="font-semibold text-gray-900">Тихомир Тодоров</p>
            <p className="text-primary-600 font-medium">Licensed Massage Therapist</p>
            <p>Професионалист с над 10 години опит.</p>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="uslugi" className="py-16 px-4 bg-gray-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Услуги</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Класически масаж</h3>
              <p className="text-gray-600">
                Подходящ за отпускане и облекчаване на напрежените мускули. Персонализиран според вашите нужди.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Дълбокотъканен масаж</h3>
              <p className="text-gray-600">
                Силов масаж, съобразен с вашето състояние. Работи по дълбоките слоеве на мускулатурата.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
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
      <section id="otzivi" className="py-16 px-4 scroll-mt-20">
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
      <section id="kontakti" className="py-16 px-4 bg-gray-50 scroll-mt-20">
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
            <form
              action="#"
              method="post"
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Име"
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Фамилия"
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
              <textarea
                name="message"
                placeholder="Съобщение"
                rows={4}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition"
              >
                Изпрати
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
