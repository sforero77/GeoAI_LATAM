import { motion } from 'framer-motion'

export const Stat = ({ value, label }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6 text-center backdrop-blur break-words"
  >
    <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">{value}</div>
    <div className="mt-1 text-xs md:text-sm text-white/70">{label}</div>
  </motion.div>
)

export default Stat
