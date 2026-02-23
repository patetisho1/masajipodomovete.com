'use client'

export default function ContactForm() {
  return (
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
  )
}
