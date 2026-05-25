import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { useCounter } from '@/hooks/useCounter'

const stats = [
  { value: 47, suffix: '+', label: 'клиник в работе', description: 'По всей России' },
  { value: 340, suffix: '%', label: 'рост заявок', description: 'Средний показатель за 3 мес' },
  { value: 3, suffix: ' мес', label: 'средняя окупаемость', description: 'От старта до результата' },
  { value: 98, suffix: '%', label: 'клиентов продлевают', description: 'Контракт после первого квартала' },
]

function StatItem({ value, suffix, label, description, started }: typeof stats[0] & { started: boolean }) {
  const count = useCounter(value, 2000, started)

  return (
    <div className="flex flex-col items-center text-center p-5 sm:p-8">
      <div className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        <span className="gradient-text">{count}</span>
        <span className="gradient-text">{suffix}</span>
      </div>
      <p className="mt-2 text-sm font-semibold text-text-primary sm:mt-3 sm:text-base">{label}</p>
      <p className="mt-1 text-xs text-text-muted sm:text-sm">{description}</p>
    </div>
  )
}

export default function Results() {
  const { ref, inView } = useInView(0.3)

  return (
    <section className="relative overflow-hidden section-padding bg-bg-surface" ref={ref}>
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(91,110,247,0.08),transparent)]" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-accent mb-4"
          >
            Результаты
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl"
          >
            Цифры, которые говорят сами за себя
          </motion.h2>
        </div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 divide-x divide-y divide-white/[0.06] rounded-2xl border border-white/[0.06] lg:grid-cols-4 lg:divide-y-0"
        >
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} started={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
