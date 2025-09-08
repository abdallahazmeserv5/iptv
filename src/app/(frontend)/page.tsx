import { configuredPayload } from '@/actions'
import Hero from '@/modules/home/components/hero'
import SubscriptionSteps from '@/modules/home/components/subscription-steps'

export default async function HomePage() {
  const payload = await configuredPayload()
  const heroSection = await payload.find({
    collection: 'hero-slides',
  })

  return (
    <main>
      <Hero heroSection={heroSection} />
      <SubscriptionSteps />
    </main>
  )
}
