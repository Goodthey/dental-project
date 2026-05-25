import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { cases } from '@/data/cases'
import { services } from '@/data/services'
import LeadMagnet from '@/sections/LeadMagnet'

export default function CaseDetail() {
  const { slug } = useParams<{ slug: string }>()
  const item = cases.find((c) => c.slug === slug)

  if (!item) return <Navigate to="/cases" replace />

  const usedServices = services.filter((s) => item.services.includes(s.slug))

  return (
    <>
      <Helmet>
        <title>{item.clinic} — {item.title} · DentalAgency</title>
        <meta name="description" content={item.description} />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(91,110,247,0.1),transparent)]" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" style={{ backgroundSize: '48px 48px' }} />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-bg to-transparent" />

        <div className="container-custom relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/cases"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors mb-8"
            >
              <ArrowLeft size={15} />
              Все кейсы
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-sm font-semibold text-text-muted mb-3"
          >
            {item.clinic} · {item.city}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-display text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl"
          >
            {item.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base text-text-secondary leading-relaxed"
          >
            {item.description}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 bg-bg">
        <div className="container-custom max-w-3xl">

          {/* Results grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-2 gap-4 mb-12 sm:grid-cols-4"
          >
            {item.results.map((r) => (
              <div
                key={r.label}
                className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.07] bg-bg-surface p-5 text-center"
              >
                <p className="font-display text-2xl font-extrabold text-text-primary">
                  {r.value}
                  <span className="text-accent text-lg">{r.suffix}</span>
                </p>
                <p className="mt-1 text-xs text-text-muted">{r.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="font-display text-xl font-bold text-text-primary mb-3">Задача</h2>
            <p className="text-sm text-text-secondary leading-relaxed">{item.challenge}</p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="font-display text-xl font-bold text-text-primary mb-4">Что сделали</h2>
            <ul className="flex flex-col gap-3">
              {item.solution.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm text-text-secondary">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Used services */}
          {usedServices.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="font-display text-xl font-bold text-text-primary mb-4">Использованные услуги</h2>
              <div className="flex flex-wrap gap-2">
                {usedServices.map((s) => (
                  <Link
                    key={s.id}
                    to={`/services/${s.slug}`}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-bg-surface px-4 py-1.5 text-xs font-medium text-text-secondary transition-all hover:border-accent/20 hover:text-text-primary"
                  >
                    {s.shortTitle}
                    <ArrowRight size={11} className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center"
          >
            <p className="font-display text-xl font-bold text-text-primary mb-2">
              Хотите такой же результат?
            </p>
            <p className="text-sm text-text-secondary mb-6">
              Разберём вашу ситуацию и покажем точки роста бесплатно.
            </p>
            <Link
              to="/contacts"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-glow-accent"
            >
              Получить аудит бесплатно
              <ArrowRight size={15} />
            </Link>
          </motion.div>

        </div>
      </section>

      <LeadMagnet />
    </>
  )
}
