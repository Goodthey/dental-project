import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-custom">

        <div className="flex flex-col items-center text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-accent mb-4"
          >
            Отзывы
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl"
          >
            Что говорят владельцы клиник
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col rounded-2xl border border-white/[0.07] bg-bg-surface p-6"
            >
              {/* Quote icon */}
              <Quote size={20} className="text-accent/40 mb-4" />

              {/* Text */}
              <p className="text-sm text-text-secondary leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Result badge */}
              <div className="mt-4 inline-flex self-start rounded-full bg-success/10 px-3 py-1">
                <span className="text-xs font-semibold text-success">{t.result}</span>
              </div>

              {/* Author */}
              <div className="mt-5 pt-5 border-t border-white/[0.06] flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-accent text-xs font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role} · {t.clinic}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
