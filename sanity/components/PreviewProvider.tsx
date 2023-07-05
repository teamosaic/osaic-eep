import { LiveQueryProvider } from 'next-sanity/preview'
import { useMemo } from 'react'

import { makePreviewClient } from '../client'

// From
// https://github.com/sanity-io/next-sanity/blob/main/MIGRATE-v4-to-v5-pages-router.md
export default function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode
  token: string
}) {
  const client = useMemo(() => makePreviewClient(token), [token])
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>
}
