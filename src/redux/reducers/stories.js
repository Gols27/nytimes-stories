import * as type from "./types";

const initialState = {
  stories: [],
  loading: false,
  error: null,
};

export default function stories(state = initialState, action) {
  switch (action.type) {
    case type.GET_STORIES_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_STORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        stories: action.stories,
        error: '',
      };
    case type.GET_STORIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
