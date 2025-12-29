import { type ReactNode } from 'react'

interface SocialLinkProps {
  icon: ReactNode
  href: string
  label: string
}

export default function SocialLink({ icon, href, label }: SocialLinkProps) {
  return (
    <div className="flex items-center gap-3 group">
      <span className="flex-shrink-0">{icon}</span>
      <a
        href={href}
        className="hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors underline-offset-4 hover:underline font-medium"
      >
        {label}
      </a>
    </div>
  )
}

