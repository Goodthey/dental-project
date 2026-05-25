import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react'
import { services, serviceCategories } from '@/data/services'
import LeadMagnet from '@/sections/LeadMagnet'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const category = serviceCategories[service.category]

  const related = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 2)

  return (
    <>
      <Helmet>
        <title>{service.title} — DentalAgency</title>
        <meta name="description" content={service.description} />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(91,110,247,0.1),transparent)]" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" style={{ backgroundSize: '48px 48px' }} />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-bg to-transparent" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors mb-8"
            >
              <ArrowLeft size={15} />
              Все услуги
            </Link>
          </motion.div>

          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-block rounded-full px-3 py-1 text-xs font-semibold mb-4"
              style={{ color: category.color, backgroundColor: `${category.color}18` }}
            >
              {category.label}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-display text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl"
            >
              {service.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-lg text-text-secondary leading-relaxed"
            >
              {service.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/contacts"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-glow-accent"
              >
                Обсудить проект
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 bg-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

            {/* Features */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="rounded-2xl border border-white/[0.07] bg-bg-surface p-8"
              >
                <h2 className="font-display text-xl font-bold text-text-primary mb-6">
                  Что входит в услугу
                </h2>
                <ul className="flex flex-col gap-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-accent" />
                      <span className="text-sm text-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-4">
              {/* Result */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl border border-white/[0.07] bg-bg-surface p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                  Результат
                </p>
                <p className="text-sm font-semibold text-text-primary">{service.result}</p>
              </motion.div>

              {/* Who it's for */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="rounded-2xl border border-white/[0.07] bg-bg-surface p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
                  Подходит если
                </p>
                <ul className="flex flex-col gap-2 text-sm text-text-secondary">
                  <li>· Открываете клинику с нуля</li>
                  <li>· Хотите вырасти в потоке пациентов</li>
                  <li>· Теряете заявки и не знаете почему</li>
                </ul>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-2xl border border-white/[0.07] bg-bg-surface p-6 text-center"
              >
                <p className="text-sm text-text-secondary mb-4">
                  Остались вопросы? Проконсультируем бесплатно.
                </p>
                <Link
                  to="/contacts"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover"
                >
                  Написать нам
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Portfolio */}
          {service.portfolio && service.portfolio.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16"
            >
              <div className="flex items-end justify-between mb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">Портфолио</p>
                  <h2 className="font-display text-xl font-bold text-text-primary">Примеры наших работ</h2>
                </div>
                <span className="text-xs text-text-muted">Скоро добавим превью</span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {service.portfolio.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="group rounded-2xl border border-white/[0.07] bg-bg-surface overflow-hidden"
                  >
                    {/* Placeholder preview */}
                    <div className="relative h-40 bg-gradient-to-br from-bg-elevated to-bg flex items-center justify-center">
                      <div className="absolute inset-0 bg-grid-pattern opacity-30" style={{ backgroundSize: '24px 24px' }} />
                      <div className="relative flex flex-col items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-gradient-accent opacity-60" />
                        <span className="text-xs text-text-muted">Превью</span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-bg/60 backdrop-blur-sm">
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-text-primary">
                          <ExternalLink size={13} />
                          Скоро
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <p className="text-sm font-semibold text-text-primary">{item.title}</p>
                      <p className="text-xs text-text-muted mt-0.5 mb-3">{item.clinic}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/[0.07] px-2 py-0.5 text-[10px] text-text-muted">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Templates */}
          {service.templates && service.templates.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16"
            >
              <div className="flex items-end justify-between mb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">Шаблоны</p>
                  <h2 className="font-display text-xl font-bold text-text-primary">Готовые шаблоны для старта</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.templates.map((tpl, i) => (
                  <motion.div
                    key={tpl.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="group rounded-2xl border border-white/[0.07] bg-bg-surface overflow-hidden"
                  >
                    {/* Placeholder preview */}
                    <div className="relative h-32 bg-gradient-to-br from-bg-elevated to-bg flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-grid-pattern opacity-20" style={{ backgroundSize: '20px 20px' }} />
                      <div className="relative flex items-center gap-3">
                        <div className="h-6 w-24 rounded bg-white/5" />
                        <div className="h-6 w-16 rounded bg-accent/20" />
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-sm font-semibold text-text-primary mb-1">{tpl.title}</p>
                      <p className="text-xs text-text-secondary leading-relaxed mb-3">{tpl.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {tpl.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/[0.07] px-2 py-0.5 text-[10px] text-text-muted">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Related */}
          {related.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16"
            >
              <h2 className="font-display text-xl font-bold text-text-primary mb-6">
                Похожие услуги
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {related.map((s, i) => (
                  <Link
                    key={s.id}
                    to={`/services/${s.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-bg-surface p-5 transition-all hover:border-accent/20 hover:bg-bg-elevated"
                  >
                    <div>
                      <p className="text-sm font-semibold text-text-primary">{s.title}</p>
                      <p className="text-xs text-text-muted mt-1">{s.result}</p>
                    </div>
                    <ArrowRight size={16} className="text-text-muted transition-all group-hover:text-accent group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <LeadMagnet />
    </>
  )
}
