/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

// see https://www.sanity.io/docs/api-versioning for how versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema, singletonTypes } from './sanity/schema'

// Preview
import { defaultDocumentNode, structure } from './sanity/structure'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Next Sanity Demo',
  schema,
  plugins: [
    deskTool({ defaultDocumentNode, structure }),
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
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
