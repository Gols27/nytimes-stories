import * as type from "../reducers/types";

export function getArticles(query, page) {
  return {
    type: type.GET_ARTICLES_REQUESTED,
    payload: {
      articles: query,
      page,
    },
  };
}