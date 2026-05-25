import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, Zap } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'

const values = [
  {
    icon: Target,
    title: 'Результат, не процесс',
    description: 'Наш KPI — новые пациенты в клинике. Не "охваты", не "клики". Отчитываемся только цифрами, которые влияют на выручку.',
  },
  {
    icon: Eye,
    title: 'Прозрачность',
    description: 'Никакого "мы работаем над этим". Еженедельные отчёты, доступ к аналитике 24/7, понятные сроки на каждом этапе.',
  },
  {
    icon: Heart,
    title: 'Специализация',
    description: 'Работаем только со стоматологиями. Это позволяет нам знать нишу глубже любого агентства-универсала.',
  },
  {
    icon: Zap,
    title: 'Скорость',
    description: 'Первые результаты — в течение месяца. Запускаем несколько направлений параллельно, не ждём месяцами.',
  },
]

const team = [
  { name: 'Алексей Иванов', role: 'Основатель и стратег', initials: 'АИ' },
  { name: 'Мария Смирнова', role: 'Руководитель проектов', initials: 'МС' },
  { name: 'Дмитрий Козлов', role: 'Lead Developer', initials: 'ДК' },
  { name: 'Анна Петрова', role: 'Art Director', initials: 'АП' },
]

const stats = [
  { value: '3+', label: 'года в нише' },
  { value: '47+', label: 'клиник' },
  { value: '12', label: 'человек в команде' },
  { value: '20+', label: 'городов России' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>О нас — DentalAgency</title>
        <meta name="description" content="Маркетинговое агентство для стоматологических клиник. Специализируемся только на стоматологии — это наше главное преимущество." />
      </Helmet>

      <PageHero
        label="О нас"
        title="Агентство, которое знает"
        titleAccent="стоматологию изнутри"
        description="Мы не универсальное агентство. Мы работаем только с клиниками — и именно поэтому понимаем вашу нишу лучше других."
      />

      {/* Mission */}
      <section className="pb-20 bg-bg">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-accent/20 bg-accent/5 p-8 sm:p-12 text-center"
          >
            <p className="font-display text-xl font-bold text-text-primary sm:text-2xl leading-relaxed">
              "Наша миссия — сделать так, чтобы каждая хорошая клиника{' '}
              <span className="gradient-text-blue">имела поток пациентов</span>,{' '}
              которого она заслуживает."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center justify-center p-5 sm:p-8 bg-bg-surface text-center"
              >
                <p className="font-display text-3xl font-extrabold gradient-text sm:text-4xl">{s.value}</p>
                <p className="mt-1.5 text-xs text-text-muted sm:mt-2 sm:text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
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
              Ценности
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl font-extrabold tracking-tight text-text-primary"
            >
              Как мы работаем
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <Icon size={18} className="text-accent" />
                </div>
                <h3 className="font-display text-sm font-semibold text-text-primary mb-2">{title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-bg-surface">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-widest text-accent mb-4"
            >
              Команда
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl font-extrabold tracking-tight text-text-primary"
            >
              Люди за результатом
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {team.map(({ name, role, initials }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-accent text-lg font-bold text-white">
                  {initials}
                </div>
                <p className="text-sm font-semibold text-text-primary">{name}</p>
                <p className="mt-1 text-xs text-text-muted">{role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg">
        <div className="container-custom flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl font-extrabold tracking-tight text-text-primary"
          >
            Готовы познакомиться?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base text-text-secondary"
          >
            Расскажите о вашей клинике — разберём ситуацию и предложим решение.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Link
              to="/contacts"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-glow-accent"
            >
              Написать нам
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
