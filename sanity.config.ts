/**
 * This config is used to set up Sanity Studio that's mounted on the
 * `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { media } from 'sanity-plugin-media';

import StudioNavbar from '~/sanity/components/StudioNavbar'
import { embedDocsTool } from '~/sanity/tools/embedDocs'
import { embedDocSchema } from "~/sanity/tools/embedDocs/embedDocSchema";

import { apiVersion, dataset, projectId } from './sanity/env'
import { addPreviewPane } from './sanity/lib/preview/previewPane'
import { schema } from './sanity/schema'
import { structure } from './sanity/structure'

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  title: 'Osaic EEP',
  schema: {
    types: [
      ...schema.types,
      embedDocSchema,
    ],
  },
  studio: {
    components: {
      navbar: StudioNavbar,
    }
  },
  tools: [
    embedDocsTool()
  ],
  plugins: [

    // The main area where content is managed
    deskTool({
      defaultDocumentNode: addPreviewPane,
      structure,
    }),

    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),

    // Media library plugin
    // https://github.com/sanity-io/sanity-plugin-media
    media(),

    // color picker
    colorInput()
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
