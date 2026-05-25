import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Helmet><title>404 — DentalAgency</title></Helmet>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(26,68,128,0.04),transparent)]" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" style={{ backgroundSize: '48px 48px' }} />

        <div className="container-custom relative z-10 flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-7xl font-extrabold gradient-text sm:text-8xl lg:text-9xl"
          >
            404
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 font-display text-2xl font-bold text-text-primary sm:text-3xl"
          >
            Страница не найдена
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3 text-sm text-text-secondary max-w-sm"
          >
            Возможно, страница была удалена или вы перешли по неверной ссылке.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3 justify-center"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-glow-accent active:scale-[0.98]"
            >
              <ArrowLeft size={15} />
              На главную
            </Link>
            <Link
              to="/contacts"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-text-secondary transition-all hover:border-white/20 hover:text-text-primary"
            >
              Написать нам
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
