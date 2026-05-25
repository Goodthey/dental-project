import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PhoneInput from '@/components/shared/PhoneInput'

const perks = [
  'Разбор текущего сайта и рекламы',
  'Анализ конкурентов в вашем районе',
  'Точки роста с конкретными цифрами',
  'Рекомендации без обязательств',
]

export default function LeadMagnet() {
  const [form, setForm] = useState({ name: '', phone: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setSent(true)
  }

  return (
    <section className="relative overflow-hidden bg-accent">
      {/* Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-15" style={{ backgroundSize: '48px 48px' }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_80%_50%,rgba(45,111,163,0.4),transparent)]" />

      <div className="container-custom relative z-10 py-20 sm:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">

          {/* Left — pitch */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse-slow" />
              <span className="text-xs font-semibold text-white">Берём не более 3 клиник в месяц</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Получите бесплатный аудит за 24 часа
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-base text-white/70"
            >
              Разберём ваш маркетинг и покажем, где вы теряете пациентов прямо сейчас.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex flex-col gap-3"
            >
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-white/80">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <CheckCircle2 size={12} className="text-white" />
                  </div>
                  {p}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right — form card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl bg-white p-8 shadow-card sm:p-10"
          >
            {!sent ? (
              <>
                <h3 className="font-display text-xl font-bold text-text-primary mb-6">
                  Оставить заявку
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-accent/50 focus:ring-2 focus:ring-accent/10"
                  />
                  <PhoneInput
                    value={form.phone}
                    onChange={(val) => setForm({ ...form, phone: val })}
                    required
                  />
                  <button
                    type="submit"
                    className="group mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-glow-accent"
                  >
                    Получить аудит бесплатно
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </form>

                <p className="mt-4 text-center text-xs text-text-muted">
                  Без спама. Свяжемся в течение 24 часов.
                </p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center py-8"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                  <CheckCircle2 size={32} className="text-success" />
                </div>
                <h3 className="font-display text-2xl font-bold text-text-primary">
                  Заявка принята!
                </h3>
                <p className="mt-3 text-sm text-text-secondary max-w-xs">
                  Свяжемся с вами в течение 24 часов и пришлём аудит на почту.
                </p>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
