import { Helmet } from 'react-helmet-async'
import Hero from '@/sections/Hero'
import TrustBar from '@/sections/TrustBar'
import Positioning from '@/sections/Positioning'
import Services from '@/sections/Services'
import Results from '@/sections/Results'
import Cases from '@/sections/Cases'
import Process from '@/sections/Process'
import Testimonials from '@/sections/Testimonials'
import FAQ from '@/sections/FAQ'
import LeadMagnet from '@/sections/LeadMagnet'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>DentalAgency — Маркетинг для стоматологических клиник</title>
        <meta name="description" content="Комплексный маркетинг для стоматологий: сайт, реклама, SEO, контент, CRM. Приводим новых пациентов и увеличиваем выручку клиники." />
        <meta property="og:title" content="DentalAgency — Маркетинг для стоматологий" />
        <meta property="og:description" content="Комплексный маркетинг для стоматологических клиник. +340% заявок в среднем за 3 месяца." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Hero />
      <TrustBar />
      <Positioning />
      <Services />
      <Results />
      <Cases />
      <Process />
      <Testimonials />
      <FAQ />
      <LeadMagnet />
    </>
  )
}
