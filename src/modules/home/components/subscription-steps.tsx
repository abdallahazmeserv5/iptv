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
      label: t('startTransaction'),
      icon: '/home/subscription-steps/wallet-svg.svg',
    },
    {
      label: t('contact-us'),
      icon: '/home/subscription-steps/headphone-svg.svg',
    },
  ]
  return (
    <section className="container mx-auto px-4">
      <SectionHeader sectionHeader={t('subscriptionsSteps')} />
      <ul className="flex justify-between items-center ">
        {steps.map((step, index) => (
          <div className="flex justify-between items-center" key={step.label}>
            <li className="bg-[#262626] gap-11 flex flex-col items-center rounded-xl p-12">
              <ImageFallBack alt={step.label} src={step.icon} width={101} height={103} />
              <p className="text-white font-semibold text-lg">{step.label}</p>
            </li>
            {steps.length - 1 > index && <p className="text-white">hello</p>}
          </div>
        ))}
      </ul>
    </section>
  )
}
