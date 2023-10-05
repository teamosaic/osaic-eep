import { createClient } from '@sanity/client'
import { Card, Flex, Heading, Spinner, Stack, Text } from "@sanity/ui";
import { useEffect, useState } from "react";

import { makeClient } from '~/sanity/client'

const client = makeClient()

// Embed query for all documents of type "embedDoc"
const embedQuery = `*[_type == "embedDoc"]`

const EmbedDocs = (props) => {
  const [loading, setLoading] = useState(true)
  const [docs, setDocs] = useState([])
  const [selectedDoc, setSelectedDoc] = useState(null)

  useEffect(() => {
    // Fetch all docs
    client.fetch(embedQuery).then((docs) => {
      setDocs(docs)

      // Get hash from route. This is used to set the selected doc.
      const hash = window.location.hash
      if (hash) {
        const id = hash.replace('#', '')
        const doc = docs.find((doc) => doc._id === id)
        doc && setSelectedDoc(doc)
      } else if (docs.length > 0) {
        setSelectedDoc(docs[0])
        updateHash(docs[0]._id)
      }
    }).finally(() => {
      setLoading(false)
    })
  }, []);

  const updateHash = (id: string) => {
    window.location.hash = id
  }

  const handleTitleClick = (id: string) => {
    const doc = docs.find((doc) => doc._id === id)
    setSelectedDoc(doc)

    // Update the hash in the URL
    updateHash(id)
  }

  return (
    <>
      {loading ? (
        <Card padding={4} height={"stretch"} style={{justifyContent: 'center'}}>
          <Spinner muted/>
        </Card>
      ) : (
        <Card padding={4} height={"stretch"}>
          <Flex padding={4} height={"stretch"}>
            <Card flex={2} borderRight={true}>
              <Stack space={4}>
                <Heading style={{marginBottom: '1rem'}}>Docs</Heading>
                {docs.map((doc) => (
                  <Text
                    key={doc._id}
                    onClick={() => handleTitleClick(doc._id)}
                    style={{cursor: 'pointer'}}
                    weight={doc._id === selectedDoc?._id ? 'bold' : 'regular'}
                  >
                    {doc.title}
                  </Text>
                ))}
              </Stack>
            </Card>
            <Card flex={[5, 6, 7]} marginLeft={[2, 2, 3, 4]}>
              {selectedDoc && (
                <iframe
                  src={selectedDoc.embedUrl}
                  width="100%"
                  height="100%"
                />
              )}
            </Card>
          </Flex>
        </Card>
      )}
    </>
  )
}

export default EmbedDocs
