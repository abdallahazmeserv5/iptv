import { Button } from '@/components/ui/button'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import React from 'react'

export default async function AuthButton() {
  const t = await getTranslations()
  return (
    <Button variant={'outline'} asChild>
      <Link className="font-bold" href={'/login'}>
        {t('login')}
      </Link>
    </Button>
  )
}
