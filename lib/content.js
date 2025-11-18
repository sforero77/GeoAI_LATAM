import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDirectory = path.join(process.cwd(), 'content')

// ==================== BLOG ====================

export function getAllBlogPosts() {
  const blogDir = path.join(contentDirectory, 'blog')

  // Crear directorio si no existe
  if (!fs.existsSync(blogDir)) {
    return []
  }

  const files = fs.readdirSync(blogDir)
  const posts = files
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(blogDir, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      const stats = readingTime(content)

      return {
        slug: file.replace(/\.mdx?$/, ''),
        title: data.title || 'Sin título',
        excerpt: data.excerpt || '',
        date: data.date || new Date().toISOString().split('T')[0],
        tags: data.tags || [],
        readTime: Math.ceil(stats.minutes),
        ...data,
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  return posts
}

export function getBlogPostBySlug(slug) {
  const blogDir = path.join(contentDirectory, 'blog')

  // Buscar archivo .mdx o .md
  let filePath = path.join(blogDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) {
    filePath = path.join(blogDir, `${slug}.md`)
  }

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title || 'Sin título',
    excerpt: data.excerpt || '',
    date: data.date || new Date().toISOString().split('T')[0],
    tags: data.tags || [],
    readTime: Math.ceil(stats.minutes),
    content,
    ...data,
  }
}

// ==================== PROJECTS ====================

export function getAllProjects() {
  const projectsDir = path.join(contentDirectory, 'projects')

  // Crear directorio si no existe
  if (!fs.existsSync(projectsDir)) {
    return []
  }

  const files = fs.readdirSync(projectsDir)
  const projects = files
    .filter((file) => file.endsWith('.json'))
    .map((file) => {
      const filePath = path.join(projectsDir, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const data = JSON.parse(fileContents)

      return {
        slug: file.replace(/\.json$/, ''),
        ...data,
      }
    })
    .sort((a, b) => {
      // Ordenar por status: Activo > En desarrollo > Planificación
      const statusOrder = { Activo: 0, 'En desarrollo': 1, Planificación: 2 }
      return (statusOrder[a.status] || 3) - (statusOrder[b.status] || 3)
    })

  return projects
}

export function getProjectBySlug(slug) {
  const projectsDir = path.join(contentDirectory, 'projects')
  const filePath = path.join(projectsDir, `${slug}.json`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const data = JSON.parse(fileContents)

  return {
    slug,
    ...data,
  }
}

// ==================== HELPERS ====================

export function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
