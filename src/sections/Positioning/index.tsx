import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import MagneticButton from '@/components/shared/MagneticButton'

const advantages = [
  {
    title: 'Знаем стоматологию изнутри',
    description: 'Работаем только с клиниками. Понимаем цикл принятия решений пациента, сезонность и специфику продвижения медицинских услуг.',
  },
  {
    title: 'Полный цикл без подрядчиков',
    description: 'Сайт, контент, реклама, CRM — всё в одном агентстве. Не нужно координировать 5 разных исполнителей.',
  },
  {
    title: 'Результат, а не процесс',
    description: 'Наш KPI — количество новых пациентов, а не "охваты" и "клики". Отчитываемся цифрами, которые влияют на выручку.',
  },
  {
    title: 'Прозрачность на каждом этапе',
    description: 'Доступ к аналитике 24/7, еженедельные отчёты, понятные сроки. Вы всегда знаете, что происходит с вашим маркетингом.',
  },
]

export default function Positioning() {
  return (
    <section className="section-padding bg-bg-surface">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">

          {/* Left — text block with visual anchor */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 80, damping: 20 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-3 py-1 mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-accent">Почему мы</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
              className="font-display text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl"
            >
              Не просто агентство —{' '}
              <span className="text-accent">маркетинг-отдел</span>{' '}
              для вашей клиники
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.15 }}
              className="mt-5 text-base text-text-secondary leading-relaxed"
            >
              Большинство агентств работают по шаблону: одинаковый сайт, одинаковая реклама, одинаковые результаты. Мы специализируемся только на стоматологиях — и это меняет всё.
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
              className="mt-8 mb-8 h-px bg-border origin-left"
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.25 }}
            >
              <MagneticButton>
                <Link
                  to="/contacts"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-glow-accent active:scale-[0.98]"
                >
                  Обсудить вашу клинику →
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right — advantage cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {advantages.map(({ title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 80, damping: 20, delay: i * 0.08 }}
                className="rounded-xl border border-border bg-white p-5 shadow-sm hover:border-accent/25 hover:shadow-card transition-all duration-200"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                  <CheckCircle2 size={16} className="text-accent" />
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-1.5">{title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
