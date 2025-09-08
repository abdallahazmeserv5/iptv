import { configuredPayload } from '@/actions'
import Navbar from '@/modules/shared/components/navbar/navbar'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import React from 'react'
import Providers from './providers'
import './styles.css'
import { QueryClient } from '@tanstack/react-query'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const lang = await getLocale()

  const payload = await configuredPayload()

  const settings = await payload.findGlobal({
    slug: 'settings',
  })

  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  return (
    <html lang={lang} dir={dir}>
      <Providers>
        <NextIntlClientProvider>
          <body>
            <Navbar settings={settings} />
            <main>{children}</main>
          </body>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </NextIntlClientProvider>
      </Providers>
    </html>
  )
}
