import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { FixedToolbarFeature } from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'

export const Banners: CollectionConfig = {
  slug: 'banners',
  fields: [
    {
      type: 'array',
      localized: true,
      name: 'banners',
      label: {
        ar: 'السلايدر الدعائي',
        en: 'Promotional Slider',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: {
            en: 'Slider Image',
            ar: 'صورة السلايدر',
          },
        },
        {
          name: 'title',
          type: 'richText',
          localized: true,
          label: {
            en: 'Main Text',
            ar: 'العنوان الرئيسي',
          },
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [FixedToolbarFeature(), ...defaultFeatures],
          }),
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
