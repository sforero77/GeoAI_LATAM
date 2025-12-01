export const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'border-white/10 bg-white/5 text-white/80',
    green: 'border-geo-green/20 bg-geo-green/10 text-geo-green',
    cyan: 'border-geo-cyan/20 bg-geo-cyan/10 text-geo-cyan',
  }

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 md:px-3 py-0.5 md:py-1 text-[0.65rem] md:text-xs font-medium backdrop-blur ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
