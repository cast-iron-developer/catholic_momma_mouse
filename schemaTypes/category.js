import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [
        Rule.required().min(10).error('A title of min. 10 characters is required'),
        Rule.max(255).warning('Shorter titles are usually better'),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => [
        Rule.required().min(10).error('A title of min. 10 characters is required'),
        Rule.max(1000).warning('Shorter titles are usually better'),
      ],
    }),
  ],
})
