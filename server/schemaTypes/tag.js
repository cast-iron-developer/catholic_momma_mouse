import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tag Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Tag Description',
      type: 'string',
    }),
  ],
})
