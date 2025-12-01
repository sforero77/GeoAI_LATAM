const variants = {
  accent: {
    container:
      'border-white/10 bg-white/5 text-white/85 shadow-[0_8px_30px_rgba(0,0,0,0.25)] ring-1 ring-white/5',
    dot: 'bg-geo-green/80 shadow-[0_0_8px_rgba(16,185,129,0.8)]',
  },
  neutral: {
    container:
      'border-white/15 bg-white/10 text-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.2)] ring-1 ring-white/10',
    dot: 'bg-white/80 shadow-[0_0_6px_rgba(255,255,255,0.65)]',
  },
}

export const Tag = ({ children, className = '', variant = 'accent' }) => {
  const palette = variants[variant] ?? variants.accent

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[0.7rem] font-medium backdrop-blur ${palette.container} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${palette.dot}`} />
      {children}
    </span>
  )
}

export default Tag
