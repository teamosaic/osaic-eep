import type { NextApiRequest, NextApiResponse } from 'next'

import { client } from '~/sanity/client'
import { previewSecretDocumentId, readToken } from '~/sanity/env'
import { getPreviewSecret } from '~/sanity/lib/preview/previewSecret'

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse<string | void>
) {

  if (!readToken) {
    res.status(500).send('Misconfigured server')
    return
  }

  const { query } = req

  const secret = typeof query.secret === 'string' ? query.secret : undefined
  const uri = typeof query.uri === 'string' ? query.uri : undefined

  if (!secret) {
    res.status(401)
    res.send('Invalid secret')
    return
  }

  const authClient = client.withConfig({ useCdn: false, token: readToken })

  // The secret can't be stored in an env variable with a NEXT_PUBLIC_ prefix, as it would make you
  // vulnerable to leaking the token to anyone. If you don't have an custom API with authentication
  // that can handle checking secrets, you may use https://github.com/sanity-io/sanity-studio-secrets
  // to store the secret in your dataset.
  const storedSecret = await getPreviewSecret({
    client: authClient,
    id: previewSecretDocumentId,
  })

  // This is the most common way to check for auth, but we encourage you to use your existing auth
  // infra to protect your token and securely transmit it to the client
  if (secret !== storedSecret) {
    return res.status(401).send('Invalid secret')
  }

  if (uri) {
    res.setPreviewData({ token: readToken })
    res.writeHead(307, { Location: uri })
    res.end()
    return
  }

  res.status(404).send('uri query parameter is required')
  res.end()
}
