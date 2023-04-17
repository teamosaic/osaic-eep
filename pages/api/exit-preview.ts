import { NextApiRequest, NextApiResponse } from 'next'

export default function exitPreview(
  req: NextApiRequest,
  res: NextApiResponse<string | void>
) {
  const redirectTo = req.query?.redirect || '/'
  res.clearPreviewData()
  res.writeHead(307, { Location: redirectTo })
  res.end()
}
