import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {dataset, environment, projectId} from './src/environment'

export default defineConfig({
  projectId: projectId,
  dataset: dataset,
  name: `${environment}-workspace`,
  basePath: `/${environment.toLowerCase()}`,
  title: `${environment} Environment`,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
