import { Navbar, Footer } from '../components/layout'
import {
  Hero,
  Metrics,
  Values,
  Projects,
  Blog,
  AboutMe,
  Manifest,
  Community,
  Newsletter,
} from '../components/sections'
import { getAllProjects, getAllBlogPosts } from '../lib/content'

export default function Home({ projects, posts }) {
  return (
    <div className="min-h-screen w-full gradient-dark text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
      <Hero />
      <Metrics />
      <Values />
      <Projects projects={projects} />
      <Blog posts={posts} />
      <AboutMe />
      <Manifest />
      <Community />
      <Newsletter />
      </main>
      <Footer />
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
