import { Navbar, Footer } from '../components/layout'
import {
  Hero,
  Metrics,
  Values,
  Projects,
  Blog,
  Manifest,
  Community,
  Newsletter,
} from '../components/sections'
import { NetworkParticles } from '../components/ui'
import { getAllProjects, getAllBlogPosts } from '../lib/content'

export default function Home({ projects, posts }) {
  return (
    <div className="min-h-screen w-full gradient-dark text-white overflow-x-hidden relative">
      <NetworkParticles particleCount={130} />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-16">
          <Hero />
          <Metrics />
          <Values />
          <Projects projects={projects} />
          <Blog posts={posts} />
          <Manifest />
          <Community />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const projects = getAllProjects()
  const posts = getAllBlogPosts()

  return {
    props: {
      projects,
      posts,
    },
  }
}
