import { motion } from 'framer-motion'

const clinics = [
  'Smile Clinic', 'DentPro', 'OrthoExpert', 'Белая Улыбка',
  'Dental Art', 'КлиникаДент', 'ПрезиДент', 'Tooth Story',
  'Stom Express', 'Эстетика Улыбки', 'NovaDent', 'Формула Зуба',
]

const doubled = [...clinics, ...clinics]

export default function TrustBar() {
  return (
    <section className="bg-accent/5 border-y border-accent/10 py-10">
      <div className="container-custom mb-5">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-text-muted">
          Нам доверяют
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F0F5FB] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F0F5FB] to-transparent" />

        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((name, i) => (
            <span key={i} className="inline-flex items-center gap-10 shrink-0">
              <span className="text-sm font-semibold text-text-secondary hover:text-accent cursor-default transition-colors duration-200">
                {name}
              </span>
              <span className="h-1 w-1 rounded-full bg-accent/25 shrink-0" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
