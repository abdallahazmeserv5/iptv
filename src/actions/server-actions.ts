'use server'

// A valid server action for the TestNeedBot form, expecting JSON input
export async function sendTestNeedBotMessage(data: { number: string; message: string }) {
  console.log({ hello: 'from method' })
  const { number, message } = data

  if (!number || !message) {
    return { success: false, error: 'Missing number or message' }
  }

  try {
    const instance_id = process.env.NEXT_PUBLIC_INSTANCE_ID
    const access_token =
      process.env.NEXT_PUBLIC_ACCESS_TOKEN || process.env.Access_Token || '66cf04db19845'
    const endpoint = process.env.NEXT_PUBLIC_NEEDBOTS
    console.log({ endpoint, instance_id, access_token })
    if (!endpoint || !instance_id || !access_token) {
      return { success: false, error: 'Missing API configuration' }
    }

    const payload = {
      number: Number(number),
      type: 'text',
      message,
      instance_id,
      access_token,
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    console.log({ response })
    if (!response.ok) {
      return { success: false, error: 'Failed to send message' }
    } else {
      const data = await response.json()
      console.log({ data })

      return { success: true, message: 'Message sent successfully!' }
    }
  } catch (err: any) {
    return { success: false, error: 'Error: ' + err.message }
  }
}
