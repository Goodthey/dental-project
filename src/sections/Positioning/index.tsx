import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

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
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">

          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4"
            >
              Почему мы
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-4xl"
            >
              Не просто агентство —{' '}
              <span className="gradient-text-blue">маркетинг-отдел</span>{' '}
              для вашей клиники
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-5 text-base text-text-secondary leading-relaxed"
            >
              Большинство агентств работают по шаблону: одинаковый сайт, одинаковая реклама, одинаковые результаты. Мы специализируемся только на стоматологиях — и это меняет всё.
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
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
              >
                Обсудить вашу клинику →
              </Link>
            </motion.div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {advantages.map(({ title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass glass-hover rounded-2xl p-5"
              >
                <CheckCircle2 size={17} className="text-accent mb-3" />
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
