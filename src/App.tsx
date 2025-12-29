import Header from './components/Header'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import AchievementsSection from './components/AchievementsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-mono flex flex-col">
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 md:px-10 lg:px-16 py-12 md:py-20">
        <Header />
        <AboutSection />
        <ProjectsSection />
        <AchievementsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
