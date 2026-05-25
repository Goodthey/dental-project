import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ServicesFilter from '@/components/shared/ServicesFilter'

export default function Services() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-custom">

        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block"
          >
            Услуги
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.05 }}
            className="font-display text-3xl font-bold tracking-tighter text-text-primary sm:text-4xl max-w-2xl"
          >
            Всё для роста вашей клиники
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
            className="mt-4 text-base text-text-secondary max-w-xl"
          >
            Полный цикл маркетинга под одной крышей. Берём задачу целиком — от стратегии до результата.
          </motion.p>
        </div>

        <ServicesFilter layoutId="home-filter-pill" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-accent/30 hover:text-text-primary"
          >
            Все услуги подробно
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
