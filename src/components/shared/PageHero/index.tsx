import { motion } from 'framer-motion'

interface Props {
  label: string
  title: string
  titleAccent?: string
  description?: string
}

export default function PageHero({ label, title, titleAccent, description }: Props) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(26,68,128,0.06),transparent)]" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" style={{ backgroundSize: '48px 48px' }} />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-bg to-transparent" />

      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest text-accent mb-4"
        >
          {label}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="font-display text-4xl font-bold tracking-tighter text-text-primary sm:text-5xl"
        >
          {title}{' '}
          {titleAccent && <span className="gradient-text-blue">{titleAccent}</span>}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base text-text-secondary max-w-xl"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
