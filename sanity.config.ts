/**
 * This config is used to set up Sanity Studio that's mounted on the
 * `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema, singletonTypes } from './sanity/schema'
import { structure } from './sanity/structure'
import { addPreviewPane } from './sanity/lib/preview/previewPane'

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  title: 'Next Sanity Demo',
  schema,
  plugins: [

    // The main area where content is managed
    deskTool({
      defaultDocumentNode: addPreviewPane,
      structure,
    }),

    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  document: {

    // Making async to address Typescript requirement
    productionUrl: async (prev, context: any) => {
      return context.document?.uri?.current
    },

    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above. We treat any document
    // whose id is the same as the schemaType name as a singleton, since that's
    // the convention we're following when defining the schema.
    actions: (input, context) => {
      const isSingleton = context.schemaType == context.documentId,
        singletonActions = new Set(["publish", "discardChanges", "restore"])
      return isSingleton
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input
    }
  },
})
