const baseContainer =
  'inline-flex items-center gap-1.5 rounded-lg border text-xs font-semibold leading-tight tracking-tight backdrop-blur-sm'

const variants = {
  accent: {
    container: `${baseContainer} px-2.5 py-0.5 bg-geo-green/8 text-geo-green/80 border-geo-green/25`,
    dot: 'bg-geo-green/80',
  },
  neutral: {
    container: `${baseContainer} px-2.5 py-0.5 bg-white/6 text-white/85 border-white/15`,
    dot: 'bg-white/75',
  },
  blog: {
    container: `${baseContainer} px-2.5 py-0.5 bg-geo-cyan/10 text-geo-cyan/80 border-geo-cyan/25`,
    dot: 'bg-geo-cyan/80',
  },
}

export const Tag = ({ children, className = '', variant = 'accent' }) => {
  const palette = variants[variant] ?? variants.accent

  return (
    <span className={`${palette.container} ${className}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${palette.dot}`} />
      {children}
    </span>
  )
}

export default Tag
