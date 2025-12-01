import Head from 'next/head'
import Link from 'next/link'
import { Navbar, Footer } from '../../components/layout'
import { Card, SectionTitle, Tag } from '../../components/ui'
import { getAllBlogPosts } from '../../lib/content'
import { siteConfig } from '../../data/site'

export default function BlogIndex({ posts }) {
  return (
    <div className="min-h-screen w-full gradient-dark text-white overflow-x-hidden flex flex-col">
      <Head>
        <title>Blog | {siteConfig.name}</title>
        <meta name="description" content="Tutoriales, artículos y recursos sobre GeoAI en español" />
      </Head>

      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pt-24 pb-16 md:px-8 flex-1 w-full">
        <SectionTitle
          kicker="Aprendizaje en Público"
          title="Blog & Tutoriales"
          subtitle="Documentando el camino, compartiendo conocimiento"
        />

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-white/60">Próximamente más contenido...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card>
                  {post.tags?.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  )}
                  <h3 className="mb-2 text-lg font-semibold">{post.title}</h3>
                  <p className="mb-3 text-sm text-white/75">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>{post.date}</span>
                    <span>{post.readTime} min lectura</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const posts = getAllBlogPosts()

  return {
    props: {
      posts,
    },
  }
}
