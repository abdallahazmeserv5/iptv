import ImageFallBack from '@/modules/shared/components/image-fall-back'
import SectionHeader from '@/modules/shared/components/section-header'
import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function SubscriptionSteps() {
  const t = await getTranslations()
  const steps = [
    {
      label: t('contact-us'),
      icon: '/home/subscription-steps/headphone-svg.svg',
    },
    {
      img: '/home/subscription-steps/arrow-svg.svg',
    },
    {
      label: t('startTransaction'),
      icon: '/home/subscription-steps/wallet-svg.svg',
    },
    {
      img: '/home/subscription-steps/arrow-svg.svg',
    },
    {
      label: t('contact-us'),
      icon: '/home/subscription-steps/headphone-svg.svg',
    },
  ]
  return (
    <section className="container mx-auto px-4">
      <SectionHeader sectionHeader={t('subscriptionsSteps')} />
      <ul className="flex justify-between items-center flex-wrap gap-4">
        {steps.map((step, index) => {
          if (step?.img) {
            // arrows
            return (
              <li
                key={`arrow-${index}`}
                className="relative w-64 h-32 hidden xl:block flex-shrink-0"
              >
                <ImageFallBack alt="Arrow" src={step.img} fill className="object-contain" />
              </li>
            )
          } else if (step.label) {
            return (
              <li
                key={step.label}
                className="bg-[#262626] gap-6 flex flex-col items-center rounded-xl p-6 sm:p-12 relative flex-shrink-0"
              >
                <ImageFallBack alt={step.label} src={step.icon} width={80} height={80} />
                <p className="text-white font-semibold text-base sm:text-lg text-center">
                  {step.label}
                </p>
              </li>
            )
          }
        })}
      </ul>
    </section>
  )
}
