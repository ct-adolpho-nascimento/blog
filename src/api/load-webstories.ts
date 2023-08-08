import request from "graphql-request";
import { QUERY } from "../graphql/query"

export const loadWebstories = async () => {
  const data = await request("https://adolphocavalcanti.com.br/graphql", QUERY)
  return data
}