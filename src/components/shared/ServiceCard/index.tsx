import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Monitor, Shield, MapPin, Camera, Video, Settings, Share2, Palette, Search, Film, ImageIcon, CreditCard } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Service } from '@/types/service'
import { serviceCategories } from '@/data/services'

const iconMap: Record<string, React.ElementType> = {
  Monitor, Shield, MapPin, Camera, Video,
  Settings, Instagram: Share2, Palette, Search, Film, Image: ImageIcon, CreditCard,
}

interface Props {
  service: Service
  index?: number
}

export default function ServiceCard({ service, index = 0 }: Props) {
  const Icon = iconMap[service.icon] ?? Monitor
  const category = serviceCategories[service.category]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <Link
        to={`/services/${service.slug}`}
        className="group relative flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-accent/25 hover:shadow-card-hover"
      >
        {/* Icon */}
        <div
          className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${category.color}18` }}
        >
          <Icon size={20} style={{ color: category.color }} />
        </div>

        {/* Title */}
        <h3 className="font-display text-base font-semibold text-text-primary mb-2 leading-snug">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed flex-1">
          {service.description}
        </p>

        {/* Result */}
        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
          <span className="text-xs text-text-muted">{service.result}</span>
          <ArrowUpRight
            size={15}
            className="text-text-muted transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>

        {/* Category badge */}
        <span
          className={cn('absolute top-4 right-4 rounded-full px-2 py-0.5 text-[10px] font-semibold')}
          style={{ color: category.color, backgroundColor: `${category.color}15` }}
        >
          {category.label}
        </span>
      </Link>
    </motion.div>
  )
}
