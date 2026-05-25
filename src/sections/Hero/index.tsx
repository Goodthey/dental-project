import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Users, Clock } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
})

const metrics = [
  { icon: TrendingUp, value: '+340%', label: 'заявок в среднем', color: '#22C55E' },
  { icon: Users, value: '47+', label: 'клиник в работе', color: '#5B6EF7' },
  { icon: Clock, value: '2.8 мес', label: 'средняя окупаемость', color: '#A259FF' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Grid background */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-100"
        style={{ backgroundSize: '48px 48px' }}
      />

      {/* Radial glow center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(91,110,247,0.15),transparent)]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-bg to-transparent" />

      <div className="container-custom relative z-10 pt-32 pb-24">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Left — content */}
          <div className="flex flex-col items-start">

            {/* Badge */}
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-slow" />
                Маркетинговое агентство для стоматологий
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
            >
              Превращаем{' '}
              <span className="gradient-text">стоматологии</span>
              {' '}в бренды,{' '}
              <br className="hidden sm:block" />
              которые выбирают
            </motion.h1>

            {/* Subline */}
            <motion.p
              {...fadeUp(0.2)}
              className="mt-6 text-lg text-text-secondary leading-relaxed max-w-lg"
            >
              Комплексный маркетинг для клиник — от сайта и фотосессии до потока пациентов и автоматизации заявок.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contacts"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-glow-accent"
              >
                Получить бесплатный аудит
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/cases"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-sm font-semibold text-text-secondary transition-all duration-200 hover:border-white/20 hover:text-text-primary"
              >
                Смотреть кейсы
              </Link>
            </motion.div>

            {/* Social proof line */}
            <motion.p {...fadeUp(0.4)} className="mt-8 text-xs text-text-muted">
              Работаем с клиниками по всей России — Москва, Санкт-Петербург, Краснодар и ещё 20+ городов
            </motion.p>

            {/* Mobile-only mini stats */}
            <motion.div
              {...fadeUp(0.5)}
              className="mt-8 grid grid-cols-3 gap-3 lg:hidden"
            >
              {metrics.map(({ value, label, color }) => (
                <div key={label} className="flex flex-col items-center text-center rounded-xl border border-white/[0.07] bg-bg-surface py-3 px-2">
                  <span className="font-display text-lg font-extrabold" style={{ color }}>{value}</span>
                  <span className="text-[10px] text-text-muted mt-0.5 leading-tight">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — floating metric card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative hidden lg:flex justify-center"
          >
            {/* Glow behind card */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(91,110,247,0.12),transparent)]" />

            {/* Main card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative glass rounded-2xl p-8 w-full max-w-sm shadow-card"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-6">
                Результаты клиентов
              </p>

              <div className="flex flex-col gap-5">
                {metrics.map(({ icon: Icon, value, label, color }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${color}18` }}
                    >
                      <Icon size={18} style={{ color }} />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-text-primary leading-none">{value}</p>
                      <p className="text-xs text-text-muted mt-0.5">{label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom divider + label */}
              <div className="mt-6 pt-5 border-t border-white/[0.07]">
                <p className="text-xs text-text-muted text-center">
                  Средние показатели за первые 3 месяца работы
                </p>
              </div>
            </motion.div>

            {/* Small floating badge — top right */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2.5 shadow-card"
            >
              <p className="text-xs font-semibold text-text-primary">🦷 47 клиник доверяют</p>
            </motion.div>

            {/* Small floating badge — bottom left */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2.5 shadow-card"
            >
              <p className="text-xs font-semibold text-success">↑ +340% заявок</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
