const baseContainer =
  'inline-flex items-center gap-2 rounded-full border text-xs font-semibold leading-tight tracking-tight backdrop-blur'

const variants = {
  accent: {
    container: `${baseContainer} px-3 py-1 bg-white/5 text-white/90 border-white/15 ring-1 ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]`,
    dot: 'bg-geo-green/80 shadow-[0_0_8px_rgba(16,185,129,0.8)]',
  },
  neutral: {
    container: `${baseContainer} px-3 py-1 bg-white/10 text-white/90 border-white/15 ring-1 ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.2)]`,
    dot: 'bg-white/80 shadow-[0_0_6px_rgba(255,255,255,0.65)]',
  },
  blog: {
    container: `${baseContainer} px-3 py-1 bg-geo-green/10 text-geo-green border-geo-green/25 ring-1 ring-geo-green/20 shadow-[0_10px_30px_rgba(34,197,94,0.15)]`,
    dot: 'bg-geo-green shadow-[0_0_6px_rgba(34,197,94,0.65)]',
  },
}

export const Tag = ({ children, className = '', variant = 'accent' }) => {
  const palette = variants[variant] ?? variants.accent

  return (
    <span className={`${palette.container} ${className}`}>
      <span className={`h-2 w-2 rounded-full ${palette.dot}`} />
      {children}
    </span>
  )
}

export default Tag
