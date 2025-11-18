import { motion } from 'framer-motion'

export const SectionTitle = ({ kicker, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mx-auto mb-10 max-w-3xl text-center"
  >
    {kicker && (
      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-geo-green/80">{kicker}</p>
    )}
    <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-base text-white/70 md:text-lg">{subtitle}</p>
    )}
  </motion.div>
)

export default SectionTitle
