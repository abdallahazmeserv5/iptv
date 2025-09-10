import { CollectionConfig } from 'payload'

export const Testimonial: CollectionConfig = {
  slug: 'testimonial',
  fields: [
    {
      type: 'array',
      localized: true,
      name: 'testimonial',
      label: {
        ar: 'الباقات',
        en: 'Packages',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: {
            en: 'User Image',
            ar: 'صورة المستخدم',
          },
        },
        {
          name: 'reviewer',
          type: 'text',
          label: {
            en: 'Reviewer Name',
            ar: 'اسم المراجع',
          },
        },
        {
          name: 'reviewerJob',
          type: 'text',
          label: {
            en: 'Reviewer Job',
            ar: 'وظيفة المراجع',
          },
        },
        {
          name: 'review',
          type: 'textarea',
          label: {
            en: 'Review',
            ar: 'المراجعة',
          },
        },
        {
          name: 'rate',
          type: 'number',
          min: 1,
          max: 5,
          label: {
            en: 'Review Rate',
            ar: 'التقييم',
          },
        },
      ],
    },
  ],
}
