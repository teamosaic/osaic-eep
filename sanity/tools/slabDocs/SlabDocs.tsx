import { createClient } from '@sanity/client'
import { Card, Flex, Heading, Spinner, Stack, Text } from "@sanity/ui";
import { useEffect, useState } from "react";

import { dataset, projectId } from "~/sanity/env";

const client = createClient({
  projectId,
  dataset,
  useCdn: false,
})

const SlabDocs = (props) => {
  const [loading, setLoading] = useState(true)
  const [docs, setDocs] = useState([])
  const [selectedDoc, setSelectedDoc] = useState(null)

  useEffect(() => {
    // Fetch all documents of type "slabDoc"
    client.fetch('*[_type == "slabDoc"]').then((docs) => {
      setDocs(docs)
    }).finally(() => {
      setLoading(false)
    })
  }, []);

  const handleTitleClick = (id) => {
    const doc = docs.find((doc) => doc._id === id)
    setSelectedDoc(doc)
  }

  return (
    <>
      {loading ? (
        <Card height={"stretch"} style={{justifyContent: 'center'}}>
          <Spinner muted/>
        </Card>
      ) : (
        <Card height={"stretch"}>
          <Flex padding={4} height={"stretch"}>
            <Card flex={1} borderRight={true}>
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

export default SlabDocs
