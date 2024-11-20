import { Hero } from '@/components/Landing/Hero/Hero'
import { MerchantOfRecord } from '@/components/Landing/MOR'
import { Monetization } from '@/components/Landing/Monetization'
import { API } from './API'
import { Benefits } from './Benefits'
import { Checkout } from './Checkout'
import { Pricing } from './Pricing'
import { Section } from './Section'

export default function Page() {
  return (
    <div className="flex w-full flex-col items-center pt-32 md:pt-0">
      <PageContent />
    </div>
  )
}

export const PageContent = () => {
  return (
    <>
      <Section className="flex flex-col gap-y-36">
        <Hero />
        <API />
        <Benefits />
        <MerchantOfRecord />
        {/* <Testimonials /> */}
        <Checkout />
        <Monetization />
        <Pricing />
      </Section>
    </>
  )
}
