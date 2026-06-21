import Hero           from '@/components/sections/Hero'
import ServicesGrid   from '@/components/sections/ServicesGrid'
import StatsStrip     from '@/components/sections/StatsStrip'
import WhyChooseUs    from '@/components/sections/WhyChooseUs'
import Testimonials   from '@/components/sections/Testimonials'
import OngoingProjects from '@/components/sections/OngoingProjects'
import OurWorks       from '@/components/sections/OurWorks'
import CTABanner      from '@/components/sections/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid preview />
      <StatsStrip />
      <WhyChooseUs />
      <Testimonials />
      <OngoingProjects />
      <OurWorks />
      <CTABanner
        heading={<>Ready to Build Your <span className="gold-text">Dream?</span></>}
        sub="Let's start with a free consultation. Our experts will guide you from concept to completion."
        primaryLabel="Get Free Consultation"
        primaryTo="/contact"
        outlineLabel="Explore Services"
        outlineTo="/services"
      />
    </>
  )
}
