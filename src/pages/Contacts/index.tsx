import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Send } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import Select from '@/components/shared/Select'
import PhoneInput from '@/components/shared/PhoneInput'

const contacts = [
  {
    icon: Send,
    label: 'Telegram',
    value: '@dentalagency',
    href: 'https://t.me/placeholder',
    description: 'Ответим в течение часа',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+7 (000) 000-00-00',
    href: 'https://wa.me/placeholder',
    description: 'Голосовые и сообщения',
  },
  {
    icon: Phone,
    label: 'Телефон',
    value: '+7 (000) 000-00-00',
    href: 'tel:+70000000000',
    description: 'Пн–Пт, 9:00–19:00 МСК',
  },
]

const services = [
  'Создание сайта',
  'Поддержка сайта',
  'Яндекс Бизнес',
  'Фотосессия',
  'Видео',
  'CRM',
  'Соцсети',
  'Брендбук',
  'SEO',
  'Монтаж',
  'Ретушь',
  'Консультация по эквайрингу',
  'Полный пакет',
]

export default function Contacts() {
  const [form, setForm] = useState({ name: '', phone: '', clinic: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    // TODO: подключить реальную отправку
    setSent(true)
  }

  return (
    <>
      <Helmet>
        <title>Контакты — DentalAgency</title>
        <meta name="description" content="Свяжитесь с нами — получите бесплатный аудит сайта вашей клиники за 24 часа." />
      </Helmet>

      <PageHero
        label="Контакты"
        title="Давайте"
        titleAccent="познакомимся"
        description="Расскажите о вашей клинике — мы свяжемся в течение 24 часов и бесплатно разберём вашу ситуацию."
      />

      <section className="pb-24 bg-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">

            {/* Form — 3/5 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl border border-border bg-white p-8 shadow-card">
                {!sent ? (
                  <>
                    <h2 className="font-display text-xl font-bold text-text-primary mb-6">
                      Оставить заявку
                    </h2>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-medium text-text-muted">Ваше имя *</label>
                          <input
                            type="text"
                            placeholder="Александр"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                            className="rounded-lg border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-accent/50 focus:ring-2 focus:ring-accent/10"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-medium text-text-muted">Телефон *</label>
                          <PhoneInput
                            value={form.phone}
                            onChange={(val) => setForm({ ...form, phone: val })}
                            required
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-text-muted">Название клиники</label>
                        <input
                          type="text"
                          placeholder="Smile Clinic"
                          value={form.clinic}
                          onChange={(e) => setForm({ ...form, clinic: e.target.value })}
                          className="rounded-lg border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-accent/50 focus:ring-2 focus:ring-accent/10"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-text-muted">Интересующая услуга</label>
                        <Select
                          value={form.service}
                          onChange={(val) => setForm({ ...form, service: val })}
                          options={services}
                          placeholder="Выберите услугу"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-text-muted">Комментарий</label>
                        <textarea
                          placeholder="Расскажите о вашей задаче..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          rows={4}
                          className="rounded-lg border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-accent/50 focus:ring-2 focus:ring-accent/10 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="group mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-glow-accent"
                      >
                        Отправить заявку
                        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                      </button>

                      <p className="text-center text-xs text-text-muted">
                        Ответим в течение 24 часов · Без спама
                      </p>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center text-center py-12"
                  >
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                      <CheckCircle2 size={32} className="text-success" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-text-primary">Заявка принята!</h3>
                    <p className="mt-3 text-sm text-text-secondary max-w-xs">
                      Свяжемся с вами в течение 24 часов. Пока можете изучить наши кейсы.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Sidebar — 2/5 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:col-span-2 flex flex-col gap-4"
            >
              {/* Contact cards */}
              {contacts.map(({ icon: Icon, label, value, href, description }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm transition-all hover:border-accent/25 hover:shadow-card"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">{label}</p>
                    <p className="text-sm font-semibold text-text-primary">{value}</p>
                    <p className="text-xs text-text-muted mt-0.5">{description}</p>
                  </div>
                </a>
              ))}

              {/* Scarcity block */}
              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5 mt-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse-slow" />
                  <span className="text-xs font-semibold text-accent">Ограниченный набор</span>
                </div>
                <p className="text-sm text-text-secondary">
                  Берём не более <span className="text-text-primary font-semibold">3 новых клиник</span> в месяц — чтобы уделить каждому клиенту максимум внимания.
                </p>
              </div>

              {/* Working hours */}
              <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
                  Режим работы
                </p>
                <div className="flex flex-col gap-1.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Пн–Пт</span>
                    <span className="text-text-primary font-medium">9:00–19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Сб</span>
                    <span className="text-text-primary font-medium">10:00–16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Вс</span>
                    <span className="text-text-muted">Выходной</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
