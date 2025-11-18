import Head from 'next/head'
import { Navbar, Footer } from '../../components/layout'
import { Projects } from '../../components/sections'
import { getAllProjects } from '../../lib/content'
import { siteConfig } from '../../data/site'

export default function ProjectsIndex({ projects }) {
  return (
    <div className="min-h-screen w-full gradient-dark text-white overflow-x-hidden flex flex-col">
      <Head>
        <title>Proyectos | {siteConfig.name}</title>
        <meta name="description" content="Proyectos open source de GeoAI para Latinoamérica" />
      </Head>

      <Navbar />
      <main className="flex-1 pt-8">
        <Projects projects={projects} />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const projects = getAllProjects()

  return {
    props: {
      projects,
    },
  }
}
