import { CollectionConfig } from 'payload'

export const HeroSlides: CollectionConfig = {
  slug: 'hero-slides',
  fields: [
    {
      type: 'array',
      localized: true,
      name: 'heroSlides',
      label: {
        ar: 'السلايد في الصفحة الرئيسية',
        en: 'Home page slider',
      },
      fields: [
        {
          name: 'mainImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: {
            en: 'Main Image',
            ar: 'الصورة الرئيسية',
          },
        },
        {
          name: 'secondaryImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: {
            en: 'Secondary Image',
            ar: 'الصورة الثانوية',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: {
            en: 'Main Text',
            ar: 'العنوان الرئيسي',
          },
        },
        {
          type: 'row',
          fields: [
            {
              name: 'buttonText',
              type: 'text',
              label: {
                en: 'Button text',
                ar: 'نص الزرار',
              },
            },
            {
              name: 'buttonUrl',
              type: 'text',
              admin: {
                description: {
                  en: 'Where to go after clicking the button?',
                  ar: 'أين تذهب بعد الضغط علي الزر؟',
                },
              },
              label: {
                en: 'Button URL',
                ar: 'رابط الزرار',
              },
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
