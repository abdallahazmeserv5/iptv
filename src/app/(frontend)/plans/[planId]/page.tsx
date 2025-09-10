import { configuredPayload } from '@/actions'
import BreadCrumb from '@/modules/shared/components/bread-crumb'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ planId: string }>
}

export default async function page({ params }: Props) {
  const { planId } = await params
  const t = await getTranslations()
  const payload = await configuredPayload()

  const planDetails = await payload.findByID({
    collection: 'plans',
    id: planId,
  })
  console.log({ planDetails })

  if (!planDetails) {
    return notFound()
  }
  return (
    <main>
      <BreadCrumb
        image={'/bread-crumb-image.webp'}
        links={[
          {
            text: planDetails.title || t('plan'),
            url: '#',
          },
        ]}
        title={planDetails.title || ''}
      />
    </main>
  )
}
