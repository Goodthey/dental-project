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
    <div className="flex flex-col items-center text-center p-6 sm:p-10">
      <div className="font-display text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-white">
        {count}<span>{suffix}</span>
      </div>
      <p className="mt-3 text-sm font-semibold text-white/80 sm:text-base">{label}</p>
      <p className="mt-1 text-xs text-white/50 sm:text-sm">{description}</p>
    </div>
  )
}

export default function Results() {
  const { ref, inView } = useInView(0.3)

  return (
    <section className="relative overflow-hidden section-padding bg-accent" ref={ref}>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" style={{ backgroundSize: '48px 48px' }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(255,255,255,0.04),transparent)]" />

      <div className="container-custom relative z-10">
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4 block"
          >
            Результаты
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.05 }}
            className="font-display text-3xl font-bold tracking-tighter text-white sm:text-4xl max-w-2xl"
          >
            Цифры, которые говорят сами за себя
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
          className="grid grid-cols-2 divide-x divide-y divide-white/10 rounded-2xl border border-white/10 lg:grid-cols-4 lg:divide-y-0 overflow-hidden"
        >
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} started={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
