import { motion } from 'framer-motion'

export const SectionTitle = ({ kicker, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mx-auto mb-10 max-w-3xl text-center px-4 break-words"
  >
    {kicker && (
      <p className="mb-2 text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-geo-green/80">{kicker}</p>
    )}
    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-sm md:text-base lg:text-lg text-white/70">{subtitle}</p>
    )}
  </motion.div>
)

export default SectionTitle
