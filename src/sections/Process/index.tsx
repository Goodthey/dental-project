import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Аудит и стратегия',
    description: 'Анализируем вашу клинику, конкурентов и текущий маркетинг. Составляем стратегию с конкретными точками роста.',
    duration: '1–3 дня',
  },
  {
    num: '02',
    title: 'Запуск за 14 дней',
    description: 'Параллельно запускаем несколько направлений — сайт, контент, реклама. Не ждём месяцами до первого результата.',
    duration: '2 недели',
  },
  {
    num: '03',
    title: 'Первые заявки',
    description: 'Уже в первый месяц фиксируем входящие заявки. Отслеживаем каждый источник и стоимость привлечения.',
    duration: '1–й месяц',
  },
  {
    num: '04',
    title: 'Оптимизация',
    description: 'Усиливаем то, что работает. Отключаем то, что не даёт результат. Еженедельные отчёты — без воды.',
    duration: '2–3 месяц',
  },
  {
    num: '05',
    title: 'Системный рост',
    description: 'Выстраиваем маркетинг как систему, которая работает постоянно. Клиника растёт, мы масштабируем.',
    duration: '3+ месяц',
  },
]

export default function Process() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-custom">

        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block"
          >
            Процесс
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.05 }}
            className="font-display text-3xl font-bold tracking-tighter text-text-primary sm:text-4xl max-w-2xl"
          >
            Как мы работаем
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
            className="mt-4 text-base text-text-secondary max-w-lg"
          >
            Прозрачный процесс без "мы работаем над этим". Вы знаете что происходит на каждом шаге.
          </motion.p>
        </div>

        <div className="mx-auto max-w-3xl flex flex-col gap-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ type: 'spring', stiffness: 80, damping: 20, delay: i * 0.06 }}
              className="group flex items-start gap-5 rounded-xl border border-border bg-white p-5 shadow-sm hover:border-accent/25 hover:shadow-card transition-all duration-200"
            >
              {/* Number */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent group-hover:border-accent transition-all duration-200">
                <span className="font-display text-xs font-bold text-accent group-hover:text-white transition-colors duration-200">
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-4 mb-1.5">
                  <h3 className="font-display text-base font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <span className="shrink-0 rounded-full border border-border bg-bg-surface px-2.5 py-0.5 text-xs text-text-muted">
                    {step.duration}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
