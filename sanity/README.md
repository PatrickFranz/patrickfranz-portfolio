# Sanity Studio

## Patrick Franz Portfolio Site

## About

Content management for my portfolio site. Content is pulled into a GatsbyJS site at build-time and needs GraphQL deployed from Sanity

## Develop

To run Sanity Studio on the localhost for development purposes:

`sanity start` will start the local Node server and the studio will be accessible at `http://localhost:3333`

After making changes/adding/modifying studio documents. Remember to deploy the GraphQL config.
`sanity graphql deploy`

## Deploy to Production
