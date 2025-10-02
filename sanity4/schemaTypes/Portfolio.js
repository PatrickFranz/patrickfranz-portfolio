import {defineType, defineField} from 'sanity'

export const portfolioSite = defineType({
  name: 'portfolio',
  title: 'Portfolio Projects List',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
    }),
    defineField({
      name: 'desc',
      type: 'array',
      of: [{type: 'block'}],
      title: 'Description of Project',
    }),
    defineField({
      name: 'yearBuilt',
      type: 'number',
      title: 'Year of Completion',
      description: '2021',
      validation: (Rule) => Rule.min(2000).max(new Date().getFullYear()).required(),
    }),
    defineField({
      name: 'projectImage',
      type: 'image',
      title: 'Project Image',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Used',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'techstack'}],
        },
      ],
      options: {
        layout: 'list',
      },
    }),
    defineField({
      name: 'sortOrder',
      type: 'number',
      title: 'SortOrder',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 100,
        slugify: (slug) => slug.toLowerCase().replace(/\s+/g, '-').slice(0, 100),
      },
    }),
  ],
})
