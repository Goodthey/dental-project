import { Helmet } from 'react-helmet-async'
import { cases } from '@/data/cases'
import PageHero from '@/components/shared/PageHero'
import CaseCard from '@/components/shared/CaseCard'
import LeadMagnet from '@/sections/LeadMagnet'

export default function Cases() {
  return (
    <>
      <Helmet>
        <title>Кейсы — DentalAgency</title>
        <meta name="description" content="Реальные результаты стоматологических клиник: рост заявок, увеличение выручки, запуск с нуля." />
      </Helmet>

      <PageHero
        label="Кейсы"
        title="Реальные клиники."
        titleAccent="Реальные результаты."
        description="Конкретные задачи, конкретные решения и измеримые цифры — без шаблонных историй успеха."
      />

      <section className="pb-20 bg-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((c, i) => (
              <CaseCard key={c.id} caseItem={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <LeadMagnet />
    </>
  )
}
