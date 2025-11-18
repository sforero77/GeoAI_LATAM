import { Stat } from '../ui'
import { siteConfig } from '../../data/site'

export const Metrics = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 md:px-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {siteConfig.metrics.map((metric, i) => (
          <Stat key={i} value={metric.value} label={metric.label} />
        ))}
      </div>
    </section>
  )
}

export default Metrics
