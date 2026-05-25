import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  const [featured, ...rest] = testimonials

  return (
    <section className="section-padding bg-bg-surface">
      <div className="container-custom">

        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block"
          >
            Отзывы
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.05 }}
            className="font-display text-3xl font-bold tracking-tighter text-text-primary sm:text-4xl max-w-2xl"
          >
            Что говорят владельцы клиник
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">

          {/* Featured — 3/5 ширины */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="lg:col-span-3 flex flex-col rounded-2xl border border-border bg-white p-8 shadow-card"
          >
            <div className="h-0.5 w-10 rounded-full bg-accent mb-6" />
            <Quote size={22} className="text-accent/25 mb-4" />
            <p className="text-base text-text-secondary leading-relaxed flex-1">
              "{featured.text}"
            </p>
            <div className="mt-6 inline-flex self-start rounded-md border border-success/20 bg-success/8 px-3 py-1">
              <span className="text-xs font-semibold text-success">{featured.result}</span>
            </div>
            <div className="mt-6 pt-6 border-t border-border flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-sm font-bold text-white">
                {featured.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">{featured.name}</p>
                <p className="text-xs text-text-muted">{featured.role} · {featured.clinic}, {featured.city}</p>
              </div>
            </div>
          </motion.div>

          {/* Стопка меньших отзывов — 2/5 */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {rest.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 80, damping: 20, delay: (i + 1) * 0.08 }}
                className="flex flex-col flex-1 rounded-2xl border border-border bg-white p-6 shadow-card"
              >
                <Quote size={16} className="text-accent/25 mb-3" />
                <p className="text-sm text-text-secondary leading-relaxed flex-1">
                  "{t.text}"
                </p>
                <div className="mt-4 inline-flex self-start rounded-md border border-success/20 bg-success/8 px-2.5 py-0.5">
                  <span className="text-xs font-semibold text-success">{t.result}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-xs font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-primary">{t.name}</p>
                    <p className="text-[11px] text-text-muted">{t.role} · {t.clinic}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
