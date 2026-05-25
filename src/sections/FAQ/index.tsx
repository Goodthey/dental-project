import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Вы работаете только со стоматологиями?',
    a: 'Да. Узкая специализация — наше главное преимущество. Мы знаем специфику продвижения медицинских услуг, понимаем цикл принятия решений пациента и то, что работает именно в этой нише.',
  },
  {
    q: 'Сколько стоят услуги?',
    a: 'Стоимость зависит от набора услуг и масштаба клиники. Минимальный пакет стартует от 30 000 ₽/мес. Для точного расчёта — запишитесь на бесплатный аудит: мы оценим вашу ситуацию и предложим оптимальное решение.',
  },
  {
    q: 'Как быстро будут результаты?',
    a: 'Первые заявки — в течение первого месяца. Стабильный поток и окупаемость — в среднем через 2–3 месяца. Мы честно говорим: маркетинг — это не волшебная кнопка, но при правильной стратегии результат предсказуем.',
  },
  {
    q: 'Мне нужен сразу весь пакет или можно начать с одной услуги?',
    a: 'Можно с одной. Мы часто начинаем с аудита сайта или настройки Яндекс Бизнеса — это быстрые точки роста. Потом масштабируемся по мере результатов.',
  },
  {
    q: 'Вы работаете с клиниками в регионах?',
    a: 'Да, мы работаем по всей России. Фотосъёмку и видео организуем с выездом или через партнёрских фотографов в вашем городе. Всё остальное — удалённо.',
  },
  {
    q: 'Что если результаты не устроят?',
    a: 'Мы работаем без долгосрочной привязки. Если через квартал вы не видите роста — мы пересматриваем стратегию. Наш интерес — чтобы вы продлевали контракт, а не были вынуждены это делать.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section-padding bg-bg-surface">
      <div className="container-custom max-w-3xl">

        <div className="flex flex-col items-center text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-accent mb-4"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl"
          >
            Частые вопросы
          </motion.h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-white/[0.07] bg-bg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
              >
                <span className={cn(
                  'text-sm font-medium transition-colors duration-200',
                  open === i ? 'text-text-primary' : 'text-text-secondary'
                )}>
                  {faq.q}
                </span>
                <Plus
                  size={18}
                  className={cn(
                    'shrink-0 text-text-muted transition-transform duration-300',
                    open === i && 'rotate-45 text-accent'
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    <p className="px-6 pb-5 text-sm text-text-secondary leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
