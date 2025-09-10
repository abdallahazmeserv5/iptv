import { getPayload } from 'payload'
import buildConfig from '@/payload.config'

export async function configuredPayload() {
  return getPayload({ config: buildConfig })
}
