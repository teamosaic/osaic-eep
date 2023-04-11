import { Box, Text } from '@sanity/ui'
import { ComponentProps, Suspense } from 'react'
import { isRecord, isString, useClient } from 'sanity'
import { UserViewComponent } from 'sanity/desk'
import styled from 'styled-components'
import { suspend } from 'suspend-react'

import { previewSecretDocumentId, apiVersion } from '~/sanity/env'
import { getPreviewSecret } from '~/sanity/lib/previewSecret'

const FETCH_SECRET = Symbol(previewSecretDocumentId)

const StyledIframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 100%;
`

export function IFramePreviewView(props: ComponentProps<UserViewComponent>) {
  const {
    document: { displayed },
    documentId,
    schemaType,
  } = props

  const id = documentId
  const type = schemaType.name
  const uri =
    isRecord(displayed.uri) && isString(displayed.uri.current)
      ? displayed.uri.current
      : undefined

  if (!uri) {
    return (
      <Box>
        <Text>Missing uri</Text>
      </Box>
    )
  }

  return (
    <Suspense fallback={null}>
      <PagePreviewWithSecret id={id} uri={uri} type={type} />
    </Suspense>
  )
}

function PagePreviewWithSecret(props: {
  id: string
  uri: string
  type: string
}) {
  const { id, uri, type } = props

  // This :any is dirty but casting as SanityClient always returned a warning
  const client: any = useClient({ apiVersion })

  // Use `suspend` to fetch the secret with a TTL of 1 minute, just to check if
  // it's necessary to recreate the secret which has a TTL of 60 minutes.
  const secret = suspend(
    () =>
      getPreviewSecret({
        client,
        id: previewSecretDocumentId,
        createIfNotExists: true,
      }),
    ['getPreviewSecret', previewSecretDocumentId, FETCH_SECRET],
    { lifespan: 60000 }
  )

  if (!secret) {
    return <div>No secret</div>
  }

  return (
    <StyledIframe
      src={`/api/preview?type=${type}&id=${id}&uri=${uri}&secret=${secret}`}
    />
  )
}
