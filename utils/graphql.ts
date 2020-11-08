import { GraphQLClient, gql } from "graphql-request"

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
const endpoint = `https://graphql.contentful.com/content/v1/spaces/${space}`

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${accessToken}`,
  },
})

export { graphQLClient, gql }
