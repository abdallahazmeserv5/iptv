import { getPayload } from 'payload'
import buildConfig from '@/payload.config'
export async function baseFetch(url: string) {
  const respose = await fetch(process.env.NEXT_PUBLIC! + url)
}

export async function configuredPayload() {
  return getPayload({ config: buildConfig })
}
