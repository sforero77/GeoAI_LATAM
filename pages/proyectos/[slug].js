import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink, CheckCircle } from 'lucide-react'
import { Navbar, Footer } from '../../components/layout'
import { Badge, Tag, Card } from '../../components/ui'
import { getAllProjects, getProjectBySlug } from '../../lib/content'
import { siteConfig } from '../../data/site'

export default function ProjectPage({ project }) {
  if (!project) {
    return (
      <div className="min-h-screen w-full gradient-dark text-white flex items-center justify-center">
        <p>Proyecto no encontrado</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full gradient-dark text-white overflow-x-hidden flex flex-col">
      <Head>
        <title>{project.title} | {siteConfig.name}</title>
        <meta name="description" content={project.description} />
      </Head>

      <Navbar />

      <main className="mx-auto max-w-4xl px-4 pt-24 pb-16 md:px-8 flex-1 w-full">
        {/* Back link */}
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-8 transition"
        >
          <ArrowLeft size={16} />
          Volver a proyectos
        </Link>

        {/* Header */}
        <header className="mb-8">
          <Badge
            variant={
              project.status === 'Activo'
                ? 'green'
                : project.status === 'En desarrollo'
                ? 'cyan'
                : 'default'
            }
          >
            {project.status}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">{project.title}</h1>
          <p className="text-lg text-white/80">{project.description}</p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags?.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 mt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-geo-green px-5 py-2.5 text-sm font-semibold text-geo-dark hover:bg-geo-green-light transition"
              >
                <Github size={16} />
                Ver en GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-geo-cyan px-5 py-2.5 text-sm font-semibold text-geo-cyan hover:bg-geo-cyan/10 transition"
              >
                <ExternalLink size={16} />
                Demo
              </a>
            )}
          </div>
        </header>

        {/* Long description */}
        {project.longDescription && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Descripción</h2>
            <p className="text-white/80 leading-relaxed">{project.longDescription}</p>
          </section>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <Card hover={false} className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Características</h2>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-geo-green mt-1 flex-shrink-0" />
                  <span className="text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <Card hover={false} className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Stack Tecnológico</h2>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <Tag key={tech}>
                  {tech}
                </Tag>
              ))}
            </div>
          </Card>
        )}

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <Card hover={false} className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Desafíos</h2>
            <ul className="space-y-2 text-white/80">
              {project.challenges.map((challenge, i) => (
                <li key={i}>• {challenge}</li>
              ))}
            </ul>
          </Card>
        )}

        {/* Lessons */}
        {project.lessons && project.lessons.length > 0 && (
          <Card hover={false} className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Lecciones Aprendidas</h2>
            <ul className="space-y-2 text-white/80">
              {project.lessons.map((lesson, i) => (
                <li key={i}>• {lesson}</li>
              ))}
            </ul>
          </Card>
        )}

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 mb-4">
            ¿Te interesa colaborar en este proyecto?
          </p>
          <Link
            href="/#comunidad"
            className="inline-block rounded-full bg-geo-green px-6 py-3 text-sm font-semibold text-geo-dark hover:bg-geo-green-light transition"
          >
            Únete a la comunidad
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const projects = getAllProjects()

  return {
    paths: projects.map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project,
    },
  }
}
