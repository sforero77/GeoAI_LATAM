import { Badge, Card, SectionTitle } from '../ui'
import Link from 'next/link'

export const Blog = ({ posts = [] }) => {
  return (
    <section id="blog" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <SectionTitle
        kicker="Aprendizaje en Público"
        title="Blog & Tutoriales"
        subtitle="Documentando el camino, compartiendo conocimiento"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((post, i) => (
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
    </section>
  )
}

export default Blog
