import Head from 'next/head'
import Link from 'next/link'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { ArrowLeft } from 'lucide-react'
import { Navbar, Footer } from '../../components/layout'
import { Tag } from '../../components/ui'
import { getAllBlogPosts, getBlogPostBySlug, formatDate } from '../../lib/content'
import { siteConfig } from '../../data/site'

// Componentes personalizados para MDX
const components = {
  h1: (props) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
  h3: (props) => <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />,
  p: (props) => <p className="mb-4 leading-relaxed" {...props} />,
  ul: (props) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
  li: (props) => <li className="text-white/80" {...props} />,
  a: (props) => (
    <a className="text-geo-green hover:text-geo-green-light underline" {...props} />
  ),
  code: (props) => (
    <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: (props) => (
    <pre className="bg-geo-dark-300 p-4 rounded-xl overflow-x-auto mb-4 text-sm" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-geo-green pl-4 italic text-white/80 my-4"
      {...props}
    />
  ),
}

export default function BlogPost({ post, mdxSource }) {
  if (!post) {
    return (
      <div className="min-h-screen w-full gradient-dark text-white flex items-center justify-center">
        <p>Post no encontrado</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full gradient-dark text-white overflow-x-hidden flex flex-col">
      <Head>
        <title>{post.title} | {siteConfig.name}</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <Navbar />

      <main className="mx-auto max-w-3xl px-4 pt-24 pb-16 md:px-8 flex-1 w-full">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-8 transition"
        >
          <ArrowLeft size={16} />
          Volver al blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          {post.tags?.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime} min lectura</span>
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-invert max-w-none">
          <MDXRemote {...mdxSource} components={components} />
        </article>

        {/* Footer CTA */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 mb-4">
            ¿Te gustó este artículo? Suscríbete para recibir más contenido.
          </p>
          <Link
            href="/#newsletter"
            className="inline-block rounded-full bg-geo-green px-6 py-3 text-sm font-semibold text-geo-dark hover:bg-geo-green-light transition"
          >
            Suscribirme al Newsletter
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const posts = getAllBlogPosts()

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  const mdxSource = await serialize(post.content)

  return {
    props: {
      post,
      mdxSource,
    },
  }
}
