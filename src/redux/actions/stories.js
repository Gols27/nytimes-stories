import * as type from "../reducers/types";

export function getStories(category) {
  return {
    type: type.GET_STORIES_REQUESTED,
    payload: {
      category: category,
    },
  };
}