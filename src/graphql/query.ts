import { gql } from 'graphql-request'
export const QUERY = gql`
  query GETWEBSTORYBYSLUG {
    webStory(id: "cG9zdDoxMjg=") {
      content
    }
  }
`