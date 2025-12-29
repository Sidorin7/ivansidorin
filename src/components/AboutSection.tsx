import TerminalBlock from './TerminalBlock'

export default function AboutSection() {
  return (
    <TerminalBlock command="about-me.ts" showResumeButton>
      <p className="mb-3">
        Full‑stack React & TypeScript developer building clean interfaces and reliable backend on Node.js.
      </p>
      <p className="mb-3">
        Helping product teams ship features faster, automate processes, and fall in love with their front‑end stack.
      </p>
      <p>
        Fan of clean JavaScript, component architecture, and DX — from ESLint/Prettier to Storybook and CI pipelines.
      </p>
    </TerminalBlock>
  )
}

