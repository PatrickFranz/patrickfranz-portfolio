export default {
  name: "portfolio",
  title: "Portfolio Projects List",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "url",
      type: "url",
      title: "URL",
    },
    {
      name: "desc",
      type: "array",
      of: [{ type: "block" }],
      title: "Description of Project",
    },
    {
      name: "yearBuilt",
      type: "number",
      title: "Year of Completion",
      description: "2021",
      validation: (Rule) =>
        Rule.min(2000).max(new Date().getFullYear()).required(),
    },
    {
      name: "projectImage",
      type: "image",
      title: "Project Image",
    },
    {
      name: "techStack",
      title: "Tech Used",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "techstack" }],
        },
      ],
      options: {
        layout: "list",
      },
    },
    {
      name: "sortOrder",
      type: "number",
      title: "SortOrder",
    },
  ],
};
