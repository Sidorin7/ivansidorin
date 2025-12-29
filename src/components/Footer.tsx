import { useState } from 'react'
import { Instagram, Linkedin, Link as LinkIcon, Send, Video, X } from 'lucide-react'

export default function Footer() {
  const [buttonText, setButtonText] = useState("Let's build something")

  const handleButtonClick = () => {
    setButtonText("I'M CEO B*TCH")
  }

  return (
    <footer className="w-full border-t-2 border-neutral-200 dark:border-neutral-800 bg-neutral-900 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors cursor-pointer shadow-md"
            aria-label="Twitter/X"
          >
            <X className="h-5 w-5 text-neutral-900 dark:text-neutral-100" />
          </a>
          <a
            href="#"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 transition-opacity cursor-pointer shadow-md"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5 text-white" />
          </a>
          <a
            href="#"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer shadow-md"
            aria-label="Telegram"
          >
            <Send className="h-5 w-5 text-white" />
          </a>
        </div>

        <button 
          onClick={handleButtonClick}
          className="px-8 py-3 text-xs md:text-sm uppercase tracking-[0.25em] rounded-full bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors font-bold shadow-lg"
        >
          {buttonText}
        </button>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer shadow-md"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-white" />
          </a>
          <a
            href="#"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-neutral-800 hover:bg-neutral-700 transition-colors cursor-pointer shadow-md"
            aria-label="Website"
          >
            <LinkIcon className="h-5 w-5 text-white" />
          </a>
          <a
            href="#"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-red-600 hover:bg-red-700 transition-colors cursor-pointer shadow-md"
            aria-label="Video"
          >
            <Video className="h-5 w-5 text-white" />
          </a>
        </div>
      </div>
    </footer>
  )
}

