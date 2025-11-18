export const Badge = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'border-white/10 bg-white/5 text-white/80',
    green: 'border-geo-green/20 bg-geo-green/10 text-geo-green',
    cyan: 'border-geo-cyan/20 bg-geo-cyan/10 text-geo-cyan',
  }

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur ${variants[variant]}`}>
      {children}
    </span>
  )
}

export default Badge
