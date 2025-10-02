// Tech Stack document
// A collection of Tech used in projects
import {defineType, defineField} from 'sanity'

export const techStack = defineType({
  name: 'techstack',
  title: 'Tech Stack',
  type: 'document',
  description: 'Collection of tech used in projects',
  fields: [
    defineField({
      name: 'vendor',
      title: 'Vendor Name',
      type: 'string',
      description: 'Name of company or vendor',
    }),
    defineField({
      name: 'vendor_url',
      title: 'Vendor URL',
      type: 'url',
    }),
    defineField({
      name: 'logoimage',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'mastery',
      type: 'number',
      title: 'Percent Mastered',
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: 'started_using',
      type: 'date',
      title: 'Started Using',
      validation: (Rule) => Rule.max(new Date()),
    }),
    defineField({
      name: 'used_for',
      title: 'Used for',
      type: 'string',
    }),
  ],
})
