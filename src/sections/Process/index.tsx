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
    <section className="section-padding bg-bg-surface">
      <div className="container-custom">

        <div className="flex flex-col items-center text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-accent mb-4"
          >
            Процесс
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl"
          >
            Как мы работаем
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-base text-text-secondary max-w-lg"
          >
            Прозрачный процесс без "мы работаем над этим". Вы знаете что происходит на каждом шаге.
          </motion.p>
        </div>

        <div className="mx-auto max-w-2xl">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative flex gap-6 pb-10 last:pb-0"
            >
              {/* Timeline line */}
              {i < steps.length - 1 && (
                <div className="absolute left-5 top-10 h-full w-px bg-gradient-to-b from-accent/30 to-transparent" />
              )}

              {/* Number bubble */}
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 z-10">
                <span className="font-display text-xs font-bold text-accent">{step.num}</span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1.5 pb-2">
                <div className="flex items-center justify-between gap-4 mb-1.5">
                  <h3 className="font-display text-base font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <span className="shrink-0 rounded-full border border-white/[0.07] px-2.5 py-0.5 text-xs text-text-muted">
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
