import { CollectionConfig } from 'payload'

export const Packages: CollectionConfig = {
  slug: 'packages',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: {
        en: 'Package Image',
        ar: 'صورة الباقة',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: {
        en: 'Package title',
        ar: 'اسم الباقة',
      },
    },
    {
      name: 'price',
      type: 'number',
      min: 0,
      label: {
        en: 'Package Price',
        ar: 'سعر الباقة',
      },
    },
  ],
}
