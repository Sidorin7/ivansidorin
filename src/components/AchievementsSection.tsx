import TerminalBlock from './TerminalBlock'

const achievements = [
  'Built and deployed dozens of SPAs and full‑stack applications on React, Next.js, and Node.js to production.',
  'Optimized rendering of large frontends, reducing TTFB and CLS by 30–50%.',
  'Set up design systems based on Tailwind CSS and shadcn/ui for product teams.',
  'Mentoring developers on modern JavaScript stack and frontend architecture.',
]

export default function AchievementsSection() {
  return (
    <TerminalBlock command="achievements.ts">
      <div className="space-y-3">
        {achievements.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-neutral-400 dark:bg-neutral-500 flex-shrink-0" />
            <p className="text-neutral-800 dark:text-neutral-200">{item}</p>
          </div>
        ))}
      </div>
    </TerminalBlock>
  )
}

