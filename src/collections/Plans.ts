import { CollectionConfig } from 'payload'

export const Plans: CollectionConfig = {
  slug: 'plans',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: {
        en: 'Plan title',
        ar: 'اسم الخطة',
      },
      localized: true,
    },
    {
      name: 'price',
      type: 'number',
      min: 0,
      label: {
        en: 'Plan Price',
        ar: 'سعر الخطة',
      },
    },
    {
      name: 'description',
      type: 'text',
      label: {
        en: 'Plan Description',
        ar: 'وصف الخطة',
      },
      localized: true,
    },
    {
      name: 'features',
      type: 'array',
      label: {
        en: 'Features',
        ar: 'المميزات',
      },
      fields: [
        {
          name: 'feature',
          type: 'text',
          localized: true,
        },
      ],
    },
  ],
}
