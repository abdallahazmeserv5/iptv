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
    // prices
    {
      type: 'row',
      fields: [
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
          name: 'priceBeforeDiscount',
          type: 'number',
          min: 0,
          label: {
            en: 'Plan Price Before Discount',
            ar: 'سعر الخطة قبل الخصم',
          },
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: {
        en: 'Plan Image',
        ar: 'صورة الخطة',
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
      name: 'numberOfSubscriptions',
      type: 'number',
      label: {
        en: 'Number of Subscriptions',
        ar: 'عدد الإشتراكات',
      },
    },
    {
      name: 'features',
      type: 'array',
      localized: true,
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
    // user reviews
    {
      name: 'reviews',
      type: 'array',
      localized: true,
      label: {
        en: 'Reviews',
        ar: 'المراجعات',
      },
      // user reviews
      fields: [
        {
          type: 'array',
          localized: true,
          name: 'testimonial',
          label: {
            ar: 'أراء العملاء',
            en: 'User Reviews',
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
              localized: true,
              label: {
                en: 'Reviewer Name',
                ar: 'اسم المراجع',
              },
            },
            {
              name: 'reviewerCountry',
              type: 'text',
              label: {
                en: 'Reviewer Country',
                ar: 'بلد المراجع',
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
            {
              name: 'hasReviewd',
              type: 'checkbox',
              label: {
                en: 'Has been reviewed?',
                ar: 'هل تمت مراجعتها؟',
              },
            },
          ],
        },
      ],
    },
    // name of platforms
    {
      name: 'downloadPlatForms',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
          label: {
            ar: 'اسم المنصة',
            en: 'Platform Name',
          },
        },
        {
          name: 'platFormImage',
          type: 'relationship',
          relationTo: 'media',
          label: {
            ar: 'صورة المنصة',
            en: 'Platform Image',
          },
        },
      ],
    },
  ],
}
