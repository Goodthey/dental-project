export type ServiceCategory = 'presence' | 'traffic' | 'content' | 'automation'

export interface PortfolioItem {
  id: string
  title: string
  clinic: string
  tags: string[]
  image?: string
}

export interface TemplateItem {
  id: string
  title: string
  description: string
  tags: string[]
  image?: string
}

export interface Service {
  id: string
  slug: string
  title: string
  shortTitle: string
  description: string
  category: ServiceCategory
  icon: string
  features: string[]
  result: string
  price?: string
  portfolio?: PortfolioItem[]
  templates?: TemplateItem[]
}
