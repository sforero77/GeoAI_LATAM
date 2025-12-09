import { Badge, Card, SectionTitle } from '../ui'
import Link from 'next/link'

export const Blog = ({ posts = [], showAll = false, limit = 3 }) => {
  const displayPosts = showAll ? posts : posts.slice(0, limit)
  const hasMore = posts.length > limit

  return (
    <section id="blog" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <SectionTitle
        kicker="Aprendizaje en Público"
        title="Blog & Tutoriales"
        subtitle="Documentando el camino, compartiendo conocimiento"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {displayPosts.map((post, i) => (
          <Card key={post.slug || i}>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {post.tags?.map((tag) => (
                <Badge key={tag} variant="green">
                  {tag}
                </Badge>
              ))}
            </div>
            <h3 className="mb-2 text-lg font-semibold">{post.title}</h3>
            <p className="mb-3 text-sm text-white/75">{post.excerpt}</p>
            <div className="flex items-center justify-between text-xs text-white/60">
              <span>{post.date}</span>
              <span>{post.readTime} min lectura</span>
            </div>
            {post.slug && (
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-geo-green hover:text-geo-green-light transition"
              >
                Leer más →
              </Link>
            )}
          </Card>
        ))}
      </div>

      {!showAll && hasMore && (
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-geo-green/10 hover:bg-geo-green/20 border border-geo-green/30 rounded-lg text-geo-green font-semibold transition-all duration-300 hover:scale-105"
          >
            Ver Todos los Blogs
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      )}
    </section>
  )
}

export default Blog
