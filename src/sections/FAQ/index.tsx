import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
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
    <section className="section-padding bg-bg">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">

          {/* Left — sticky header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl font-bold tracking-tighter text-text-primary sm:text-4xl [text-wrap:balance]"
            >
              Частые вопросы
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-4 text-sm text-text-secondary leading-relaxed"
            >
              Не нашли ответ? Напишите нам — разберём вашу ситуацию индивидуально.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6"
            >
              <Link
                to="/contacts"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
              >
                Задать вопрос →
              </Link>
            </motion.div>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-border bg-white overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-bg-surface transition-colors duration-150"
                >
                  <span className={cn(
                    'text-sm font-medium transition-colors duration-200',
                    open === i ? 'text-accent' : 'text-text-primary'
                  )}>
                    {faq.q}
                  </span>
                  <div className={cn(
                    'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300',
                    open === i
                      ? 'border-accent bg-accent text-white rotate-45'
                      : 'border-border bg-bg-surface text-text-muted'
                  )}>
                    <Plus size={14} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-4 border-t border-border">
                        <p className="pt-3 text-sm text-text-secondary leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
