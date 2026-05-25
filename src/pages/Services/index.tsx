import { Helmet } from 'react-helmet-async'
import PageHero from '@/components/shared/PageHero'
import ServicesFilter from '@/components/shared/ServicesFilter'
import LeadMagnet from '@/sections/LeadMagnet'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Услуги — DentalAgency</title>
        <meta name="description" content="Полный цикл маркетинга для стоматологических клиник: сайт, реклама, SEO, контент, CRM и брендинг." />
      </Helmet>

      <PageHero
        label="Услуги"
        title="Всё для роста"
        titleAccent="вашей клиники"
        description="11 направлений маркетинга под одной крышей. Берём задачу целиком — от стратегии до измеримого результата."
      />

      <section className="pb-20">
        <div className="container-custom">
          <ServicesFilter layoutId="services-page-filter-pill" />
        </div>
      </section>

      <LeadMagnet />
    </>
  )
}
