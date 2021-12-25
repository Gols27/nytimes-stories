import * as type from "./types";

const initialState = {
  articles: [],
  loading: false,
  error: null,
  searches: [],
};

export default function articles(state = initialState, action) {
  switch (action.type) {
    case type.GET_ARTICLES_REQUESTED:
      return {
        ...state,
        loading: true,
        searches: !state.searches.includes(action.payload.articles) ? [action.payload.articles, ...state.searches].slice(0,5) : [...state.searches],
      };
    case type.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.articles,
        error: "",
      };
    case type.GET_ARTICLES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
