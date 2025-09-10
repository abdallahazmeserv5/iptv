'use client'
import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import ImageFallBack from '@/modules/shared/components/image-fall-back'
import { HeroSlide, Media } from '@/payload-types'
import { useLocale } from 'next-intl'
import { PaginatedDocs } from 'payload'
import { useEffect, useState } from 'react'

interface HeroProps {
  heroSection: PaginatedDocs<HeroSlide>
}
export default function Hero({ heroSection }: HeroProps) {
  const [api, setApi] = useState<CarouselApi>()
  const lang = useLocale()
  const [current, setCurrent] = useState(0)

  const [count, setCount] = useState(0)
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  const slideItems = heroSection.docs[0].heroSlides

  useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section className="h-[calc(100vh-90px)] bg-[linear-gradient(166.94deg,#0F1014_2.08%,#0A131C_78.41%)">
      <Carousel
        plugins={[
          Autoplay({
            delay: Number(process.env.NEXT_PUBLIC_CAROUSEL_DELAY) || 2000,
          }),
        ]}
        setApi={setApi}
        className="w-full h-full relative bg-black"
        opts={{
          align: 'center',
          loop: true,
          direction: dir,
        }}
      >
        <CarouselContent className="w-full h-[calc(100vh-90px)]  ">
          {slideItems?.map((slideItem, index) => {
            const mainImg = slideItem.mainImage as Media
            const secondaryImg = slideItem.secondaryImage as Media
            return (
              <CarouselItem key={index} className=" w-full h-full ">
                {/* website and laptop */}
                <div className="relative w-full h-full">
                  {/* Laptop template */}
                  <ImageFallBack
                    alt="Laptop Template"
                    className="object-contain"
                    fill
                    src="/home/hero/laptop-templete.webp"
                  />

                  {/* Website screenshot inside laptop */}
                  <div className="absolute top-28 end-[37%] w-[650px] h-[420px] overflow-hidden rounded-2xl rotate-6 ">
                    <ImageFallBack
                      alt={mainImg?.alt || 'Website preview'}
                      src={mainImg?.url || ''}
                      width={800}
                      height={1000} // taller than container to allow scroll
                      className={`object-top object-contain transition-transform duration-2000 hover:-translate-y-[500px]`}
                    />
                  </div>

                  {/* mobile */}
                  <div className="absolute bottom-32 end-[20%] h-[560px] aspect-[1076/2180] -rotate-12 overflow-hidden ">
                    <ImageFallBack
                      alt="Mobile template"
                      src="/home/hero/phone-templete.webp"
                      fill
                      className="object-contain  h-[700px]"
                    />
                    <ImageFallBack
                      alt={mainImg?.alt || 'Website preview on mobile'}
                      src={secondaryImg?.url || ''}
                      width={800}
                      height={2000}
                      className={`object-top object-contain transition-transform duration-2000 hover:-translate-y-[500px] rounded-2xl overflow-hidden z-10`}
                    />
                  </div>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <div className="container px-4 mx-auto relative">
          {/* arrows */}
          <div className="absolute bottom-10">
            <CarouselPrevious className=" start-12" />
            <CarouselNext className="start-0" />
          </div>
          {/* points */}
          <div className="absolute bottom-10 end-0 flex items-center gap-2">
            {Array.from({ length: count }).map((_, index: number) => {
              const isActive = current - 1 === index
              return (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-4 h-1 transition-colors ${isActive ? 'bg-primary' : 'bg-muted'}`}
                />
              )
            })}
          </div>
        </div>
      </Carousel>
    </section>
  )
}
