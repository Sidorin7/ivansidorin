import { type ReactNode } from 'react'
import { FileText } from 'lucide-react'

interface TerminalBlockProps {
  command: string
  children: ReactNode
  showResumeButton?: boolean
}

export default function TerminalBlock({ command, children, showResumeButton = false }: TerminalBlockProps) {
  return (
    <section className="mb-10">
      <div className="bg-neutral-900 dark:bg-neutral-800 text-white border-2 border-neutral-900 dark:border-neutral-800 rounded-t-lg px-6 py-3.5 flex items-center justify-between shadow-lg">
        <span className="text-xs md:text-sm tracking-[0.18em] uppercase font-mono font-semibold">
          $ cat {command}
        </span>
        {showResumeButton && (
          <button className="border border-neutral-600 dark:border-neutral-700 rounded-md px-3 py-1.5 text-[10px] md:text-xs hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors flex items-center gap-2 font-medium">
            <FileText className="h-3 w-3" />
            check my resume
          </button>
        )}
      </div>
      <div className="border-2 border-neutral-900 dark:border-neutral-800 border-t-0 rounded-b-lg bg-white dark:bg-neutral-900 px-6 py-5 text-sm md:text-base leading-relaxed text-neutral-800 dark:text-neutral-200 shadow-lg">
        {children}
      </div>
    </section>
  )
}

