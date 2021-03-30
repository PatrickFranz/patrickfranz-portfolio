// Tech Stack document
// A collection of Tech used in projects

import { string } from "prop-types";

export default {
  name: "techstack",
  title: "Tech Stack",
  type: "document",
  description: "Collection of tech used in projects",
  fields: [
    {
      name: "vendor",
      title: "Vendor Name",
      type: "string",
      description: "Name of company or vendor",
    },
    {
      name: "vendor_url",
      title: "Vendor URL",
      type: "url",
    },
    {
      name: "logoimage",
      title: "Logo",
      type: "image",
    },
    {
      name: "mastery",
      type: "number",
      title: "Percent Mastered",
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "started_using",
      type: "date",
      title: "Started Using",
      validation: (Rule) => Rule.max(new Date()),
    },
    {
      name: "used_for",
      title: "Used for",
      type: "string",
    },
  ],
};
