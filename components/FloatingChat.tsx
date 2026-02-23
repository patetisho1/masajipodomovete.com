'use client'

import { WhatsAppIcon, ViberIcon } from '@/components/MessengerIcons'

const WHATSAPP_URL = 'https://wa.me/359897500190?text=Здравейте%2C%20искам%20да%20се%20свържа%20за%20масаж.'
const VIBER_URL = 'https://viber.com/contact?number=359897500190'

export default function FloatingChat() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3" aria-label="Пишете ни">
      <a
        href={VIBER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#7360f2] text-white shadow-lg transition hover:scale-110 hover:shadow-xl"
        title="Пишете във Viber"
      >
        <ViberIcon className="h-7 w-7" />
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:shadow-xl"
        title="Пишете в WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  )
}
