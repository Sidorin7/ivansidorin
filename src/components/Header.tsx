import { Github, Mail, Send, Twitter } from 'lucide-react'
import SocialLink from './SocialLink'
import ShortcutHint from './ShortcutHint'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <section className="flex flex-col md:flex-row md:items-start md:justify-between  mb-20">
      <div className="md:hidden mb-4 flex justify-end">
        <ThemeToggle />
      </div>
      <div className="space-y-4">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase">
          Ivan Sidorin
        </h1>
        <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 uppercase tracking-[0.22em] font-medium">
          Full‑stack JavaScript Developer & React Engineer
        </p>
        <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400">Moscow, Russia</p>

        <div className="mt-8 space-y-3 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
        <SocialLink
            icon={<Send className="h-4 w-4 text-blue-400" />}
            href="https://t.me/sidorin8"
            label="@Sidorin8"
          />
          <SocialLink
            icon={<Twitter className="h-4 w-4 text-blue-500" />}
            href="#"
            label="Twitter"
          />
          <SocialLink
            icon={<Github className="h-4 w-4 text-neutral-900 dark:text-neutral-100" />}
            href="https://github.com/Sidorin7"
            label="GitHub"
          />

          <SocialLink
            icon={<Mail className="h-4 w-4 text-red-500" />}
            href="mailto:ford1k8@yandex.ru"
            label="ford1k8@yandex.ru"
          />
        </div>

        {/* <ShortcutHint /> */}
      </div>

      <div className="text-right flex flex-col items-end">
        <p className="hidden md:block font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase">
          <span className="block">Think.</span>
          <span className="block text-neutral-400 dark:text-neutral-600">Build.</span>
          <span className="block">Win.</span>
        </p>
        <div className="hidden md:block mt-4">
          <ThemeToggle />
        </div>
      </div>
    </section>
  )
}

