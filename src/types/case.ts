export interface CaseResult {
  label: string
  value: string
  suffix?: string
}

export interface Case {
  id: string
  slug: string
  title: string
  clinic: string
  city: string
  description: string
  challenge: string
  solution: string[]
  results: CaseResult[]
  services: string[]
  image?: string
  featured: boolean
}
