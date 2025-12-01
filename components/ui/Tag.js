export const Tag = ({ children, className = '' }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] font-medium text-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.25)] ring-1 ring-white/5 backdrop-blur ${className}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-geo-green/80 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
    {children}
  </span>
)

export default Tag
