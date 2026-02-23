'use client'

import { WhatsAppIcon } from '@/components/MessengerIcons'

const WHATSAPP_URL = 'https://wa.me/359897500190?text=Здравейте%2C%20искам%20да%20се%20свържа%20за%20масаж.'

export default function FloatingChat() {
  return (
    <div className="fixed bottom-5 right-5 z-40" aria-label="Пишете ни">
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
