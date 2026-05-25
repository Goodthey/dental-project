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
    // TODO: подключить реальную отправку
    setSent(true)
  }

  return (
    <section className="relative section-padding overflow-hidden bg-bg">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(91,110,247,0.1),transparent)]" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" style={{ backgroundSize: '48px 48px' }} />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-2xl">

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="rounded-3xl border border-accent/20 bg-bg-surface p-8 shadow-glow-accent sm:p-12"
          >
            {!sent ? (
              <>
                {/* Scarcity */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-slow" />
                  <span className="text-xs font-semibold text-accent">
                    Берём не более 3 новых клиник в месяц
                  </span>
                </div>

                <h2 className="font-display text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl">
                  Получите бесплатный аудит{' '}
                  <span className="gradient-text-blue">за 24 часа</span>
                </h2>

                <p className="mt-3 text-sm text-text-secondary">
                  Разберём ваш маркетинг и покажем, где вы теряете пациентов прямо сейчас.
                </p>

                {/* Perks */}
                <ul className="mt-6 flex flex-col gap-2.5">
                  {perks.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-text-secondary">
                      <CheckCircle2 size={15} className="shrink-0 text-accent" />
                      {p}
                    </li>
                  ))}
                </ul>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full rounded-xl border border-white/[0.08] bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                  />
                  <PhoneInput
                    value={form.phone}
                    onChange={(val) => setForm({ ...form, phone: val })}
                    required
                  />
                  <button
                    type="submit"
                    className="group mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-glow-accent"
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
