import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Users, Clock } from 'lucide-react'

const spring = { type: 'spring' as const, stiffness: 80, damping: 20 }

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { ...spring, delay },
})

const metrics = [
  { icon: TrendingUp, value: '+340%', label: 'заявок в среднем', color: '#15803D' },
  { icon: Users, value: '47+', label: 'клиник в работе', color: '#1A4480' },
  { icon: Clock, value: '2.8 мес', label: 'средняя окупаемость', color: '#2D6FA3' },
]

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden flex items-center bg-bg">
      {/* Grid background */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-100"
        style={{ backgroundSize: '48px 48px' }}
      />

      {/* Radial glow center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(26,68,128,0.07),transparent)]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-bg to-transparent pointer-events-none" />

      <div className="container-custom relative z-10 pt-32 pb-24">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Left — content */}
          <div className="flex flex-col items-start">

            {/* Badge */}
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-4 py-1.5 text-xs font-semibold text-accent mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-slow" />
                Маркетинговое агентство для стоматологий
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
            >
              Превращаем{' '}
              <span className="text-accent">стоматологии</span>
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
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-glow-accent active:scale-[0.98]"
              >
                Получить бесплатный аудит
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/cases"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3.5 text-sm font-semibold text-text-secondary transition-all duration-200 hover:border-accent/30 hover:text-text-primary"
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
                <div key={label} className="flex flex-col items-center text-center rounded-xl border border-border bg-white py-3 px-2 shadow-card">
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
            transition={{ ...spring, delay: 0.3 }}
            className="relative hidden lg:flex justify-center"
          >
            {/* Subtle glow behind card */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(26,68,128,0.06),transparent)]" />

            {/* Main card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative bg-white rounded-2xl p-8 w-full max-w-sm shadow-card border border-border"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-6">
                Результаты клиентов
              </p>

              <div className="flex flex-col gap-5">
                {metrics.map(({ icon: Icon, value, label, color }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                      style={{ backgroundColor: `${color}12`, borderColor: `${color}25` }}
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

              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-xs text-text-muted text-center">
                  Средние показатели за первые 3 месяца работы
                </p>
              </div>
            </motion.div>

            {/* Small floating badge — top right */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2.5 shadow-card border border-border"
            >
              <p className="text-xs font-semibold text-text-primary">47 клиник доверяют</p>
            </motion.div>

            {/* Small floating badge — bottom left */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-2.5 shadow-card border border-border"
            >
              <p className="text-xs font-semibold text-success">↑ +340% заявок</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
