import { configuredPayload } from '@/actions'
import Navbar from '@/modules/shared/components/navbar/navbar'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import React from 'react'
import Providers from './providers'
import './styles.css'
import Footer from '@/modules/shared/components/footer'
import { Toaster } from '@/components/ui/sonner'

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
            <Footer settings={settings} />
            <Toaster richColors closeButton />
          </body>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </NextIntlClientProvider>
      </Providers>
    </html>
  )
}
