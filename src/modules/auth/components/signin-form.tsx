'use client'
import { PhoneInput } from '@/components/ui/phone-input'
import { useTranslations } from 'next-intl'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function SigninForm() {
  const router = useRouter()
  const t = useTranslations()
  const formSchema = z.object({
    phoneNumber: z.string().min(5, t('enterValidPhoneNumber')).max(50),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { phoneNumber: '' },
  })
  const [submitting, setSubmitting] = React.useState(false)

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log({ values })
    setSubmitting(true)
    // Hit Payload endpoint to generate & send OTP, and store it on the user
    const res = await fetch('/api/users/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: values.phoneNumber }),
      credentials: 'include',
    })
    console.log({ res })
    if (!res.ok) {
      toast.error(t('enterValidPhoneNumber'))
      setSubmitting(false)
      return
    }
    router.push(`/confirm-phone?phoneNumber=${values.phoneNumber}`)
  }

  return (
    <section className="  bg-[#151515] p-3 sm:p-8 lg:p-10 rounded-2xl border border-[#262626] text-white w-full ">
      <div className="h-auto my-auto flex flex-col gap-5 sm:gap-10  ">
        <h1 className="font-bold text-3xl lg:text-5xl">{t('signin')}</h1>

        <p className="text-xs sm:text-base">{t('enterYourPhone')}</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 ">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="max-w-[600px]">
                  <FormLabel className="text-xl font-medium">{t('phoneNumber')}</FormLabel>
                  <FormControl>
                    <div dir="ltr">
                      <PhoneInput
                        placeholder={t('enterPhone') || 'Enter phone number'}
                        value={field.value}
                        onChange={field.onChange}
                        defaultCountry="SA"
                        international
                        countryCallingCodeEditable={false}
                        className=" "
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              variant={'outline'}
              type="submit"
              disabled={submitting || !form.formState.isValid}
            >
              {t('sendOtp')}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  )
}
