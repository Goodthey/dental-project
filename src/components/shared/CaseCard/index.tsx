import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Case } from '@/types/case'

interface Props {
  caseItem: Case
  index?: number
}

export default function CaseCard({ caseItem, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <Link
        to={`/cases/${caseItem.slug}`}
        className="group flex h-full flex-col rounded-2xl border border-border bg-white overflow-hidden transition-all duration-300 hover:border-accent/20 hover:shadow-card-hover"
      >
        {/* Top color bar */}
        <div className="h-1 w-full bg-gradient-accent" />

        <div className="flex flex-col flex-1 p-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <p className="text-xs font-semibold text-text-muted mb-1">
                {caseItem.clinic} · {caseItem.city}
              </p>
              <h3 className="font-display text-lg font-bold text-text-primary leading-snug">
                {caseItem.title}
              </h3>
            </div>
            <ArrowUpRight
              size={18}
              className="shrink-0 text-text-muted transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>

          {/* Description */}
          <p className="text-sm text-text-secondary leading-relaxed flex-1">
            {caseItem.description}
          </p>

          {/* Results */}
          <div className="mt-5 pt-5 border-t border-border grid grid-cols-2 gap-3">
            {caseItem.results.slice(0, 4).map((result) => (
              <div key={result.label}>
                <p className="text-base font-bold text-text-primary leading-none">
                  {result.value}
                  <span className="text-accent text-sm">{result.suffix}</span>
                </p>
                <p className="mt-0.5 text-xs text-text-muted">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
