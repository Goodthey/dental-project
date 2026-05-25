import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { services, serviceCategories } from '@/data/services'
import type { ServiceCategory } from '@/types/service'
import ServiceCard from '@/components/shared/ServiceCard'

type Filter = ServiceCategory | 'all'

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Все' },
  { id: 'presence', label: 'Присутствие' },
  { id: 'traffic', label: 'Трафик' },
  { id: 'content', label: 'Контент' },
  { id: 'automation', label: 'Автоматизация' },
]

interface Props {
  layoutId?: string
  limit?: number
}

export default function ServicesFilter({ layoutId = 'filter-pill', limit }: Props) {
  const [active, setActive] = useState<Filter>('all')

  const filtered = (active === 'all' ? services : services.filter((s) => s.category === active))
    .slice(0, limit)

  return (
    <>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filters.map(({ id, label }) => {
          const color = id !== 'all' ? serviceCategories[id as ServiceCategory].color : undefined
          return (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={cn(
                'relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200',
                active === id ? 'text-white' : 'text-text-muted hover:text-text-secondary'
              )}
            >
              {active === id && (
                <motion.span
                  layoutId={layoutId}
                  className="absolute inset-0 rounded-full bg-accent"
                  style={color ? { backgroundColor: color } : undefined}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          )
        })}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
