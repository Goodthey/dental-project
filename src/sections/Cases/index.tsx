import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cases } from '@/data/cases'
import CaseCard from '@/components/shared/CaseCard'

export default function Cases() {
  const featured = cases.filter((c) => c.featured)

  return (
    <section className="section-padding bg-bg">
      <div className="container-custom">

        {/* Header */}
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block"
          >
            Кейсы
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.05 }}
            className="font-display text-3xl font-bold tracking-tighter text-text-primary sm:text-4xl max-w-2xl"
          >
            Реальные клиники. Реальные результаты.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
            className="mt-4 text-base text-text-secondary max-w-lg"
          >
            Не шаблонные "кейсы" с размытыми цифрами — конкретные клиники, конкретные задачи и измеримые результаты.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((c, i) => (
            <CaseCard key={c.id} caseItem={c} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/cases"
            className="group inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-accent/30 hover:text-text-primary"
          >
            Все кейсы
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
