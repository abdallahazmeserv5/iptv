import { CollectionConfig } from 'payload'

export const Faq: CollectionConfig = {
  slug: 'faq',
  fields: [
    {
      type: 'array',
      localized: true,
      name: 'faq',
      label: {
        ar: 'الأسئلة الأكثر شيوعًا',
        en: 'FAQ',
      },
      fields: [
        {
          required: true,
          name: 'َquestion',
          type: 'text',
          label: {
            en: 'Question',
            ar: 'السؤال',
          },
          localized: true,
        },
        {
          required: true,
          name: 'answer',
          type: 'text',
          label: {
            en: 'Answer',
            ar: 'الإجابة',
          },
          localized: true,
        },
      ],
    },
  ],
}
