import { motion } from 'framer-motion'

export const Card = ({ children, className = '', hover = true }) => (
  <motion.div
    whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
    className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-geo-dark-300/60 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur transition-all ${hover ? 'hover:shadow-2xl hover:shadow-geo-green/10' : ''} ${className}`}
  >
    {hover && (
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-geo-green/5 via-transparent to-geo-cyan/5 opacity-0 transition group-hover:opacity-100" />
    )}
    {children}
  </motion.div>
)

export default Card
