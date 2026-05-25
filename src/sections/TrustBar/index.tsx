import { motion } from 'framer-motion'

const clinics = [
  'Smile Clinic', 'DentPro', 'OrthoExpert', 'Белая Улыбка',
  'Dental Art', 'КлиникаДент', 'ПрезиДент', 'Tooth Story',
  'Stom Express', 'Эстетика Улыбки', 'NovaDent', 'Формула Зуба',
]

// Дублируем для бесшовного loop
const doubled = [...clinics, ...clinics]

export default function TrustBar() {
  return (
    <section className="border-y border-white/[0.06] bg-bg-surface py-10">
      <div className="container-custom mb-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-text-muted">
          Нам доверяют
        </p>
      </div>

      {/* Marquee wrapper с fade по краям */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg-surface to-transparent" />

        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((name, i) => (
            <span key={i} className="inline-flex items-center gap-12 shrink-0">
              <span className="text-sm font-medium text-text-muted transition-colors duration-200 hover:text-text-secondary cursor-default">
                {name}
              </span>
              <span className="h-1 w-1 rounded-full bg-white/10 shrink-0" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
