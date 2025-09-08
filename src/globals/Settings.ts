import { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  label: {
    en: 'Settings',
    ar: 'الإعدادات',
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
