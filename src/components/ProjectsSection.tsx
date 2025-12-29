import TerminalBlock from './TerminalBlock'
import { ArrowRight } from 'lucide-react'

const projects = [
  { name: 'Growth Space', description: 'Modern platform for teen self-development.' },
  { name: 'ReactLab', description: 'Ecosystem of utilities and CLI tools for productive React and TypeScript development.' },
  { name: 'HookForge', description: 'Collection of advanced React hooks with comprehensive documentation and playground.' },
  { name: 'StateFlow', description: 'Flexible state manager built on top of React Context and Signals.' },
  { name: 'DevDeck', description: 'Landing page builder for developers with shadcn/ui components.' },
]

export default function ProjectsSection() {
  return (
    <TerminalBlock command="projects.ts">
      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.name} className="flex items-start gap-3 group">
            <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0" />
            <div className="flex-1">
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">{project.name}</span>{' '}
              <span className="text-neutral-500 dark:text-neutral-400">— {project.description}</span>
            </div>
            <ArrowRight className="h-4 w-4 text-neutral-400 dark:text-neutral-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors flex-shrink-0 mt-0.5" />
          </div>
        ))}
      </div>
    </TerminalBlock>
  )
}

