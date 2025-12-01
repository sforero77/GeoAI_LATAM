const baseContainer =
  'inline-flex items-center gap-1.5 rounded-lg border text-xs font-semibold leading-tight tracking-tight backdrop-blur-sm'

const variants = {
  accent: {
    container: `${baseContainer} px-2.5 py-0.5 bg-geo-green/10 text-geo-green/90 border-geo-green/30 shadow-[0_8px_24px_rgba(34,197,94,0.18)]`,
    dot: 'bg-geo-green/90 shadow-[0_0_8px_rgba(34,197,94,0.6)]',
  },
  neutral: {
    container: `${baseContainer} px-2.5 py-0.5 bg-white/6 text-white/85 border-white/20 shadow-[0_6px_20px_rgba(0,0,0,0.18)]`,
    dot: 'bg-white/80 shadow-[0_0_6px_rgba(255,255,255,0.45)]',
  },
  blog: {
    container: `${baseContainer} px-2.5 py-0.5 bg-geo-cyan/12 text-geo-cyan/90 border-geo-cyan/30 shadow-[0_8px_24px_rgba(34,211,238,0.16)]`,
    dot: 'bg-geo-cyan shadow-[0_0_6px_rgba(34,211,238,0.55)]',
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
