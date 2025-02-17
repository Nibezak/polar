import { Hero } from '@/components/Landing/Hero/Hero'
import { MerchantOfRecord } from '@/components/Landing/MOR'
import { Monetization } from '@/components/Landing/Monetization'
import { Testimonials } from '@/components/Landing/Testimonials'
import { Separator } from 'polarkit/components/ui/separator'
import { API } from './API'
import { Benefits } from './Benefits'
import { GetStarted } from './GetStarted'
import { Pricing } from './Pricing'
import { Section } from './Section'

export default function Page() {
  return (
    <div className="flex w-full flex-col items-center divide-y">
      <PageContent />
    </div>
  )
}

export const PageContent = () => {
  return (
    <>
      <Section className="flex flex-col gap-y-24 md:py-24">
        <Hero />
        <Benefits />
        <Separator />
        <MerchantOfRecord />
        <Monetization />
        <Separator />
        <GetStarted />
      </Section>

      <Pricing />
      <API />

      <Testimonials />
    </>
  )
}
