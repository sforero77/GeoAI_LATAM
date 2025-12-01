import { Navbar, Footer } from '../components/layout'
import { Roadmap, Newsletter } from '../components/sections'
import { NetworkParticles } from '../components/ui'

export default function RoadmapPage() {
  return (
    <div className="min-h-screen w-full gradient-dark text-white overflow-x-hidden relative">
      <NetworkParticles />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-16">
          <Roadmap />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </div>
  )
}
