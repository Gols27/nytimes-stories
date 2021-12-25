import stories from "./stories";
import {
  GET_stories_SUCCESS,
  GET_stories_REQUESTED,
  GET_stories_FAILED,
} from "./types";

describe("stories reducer", () => {
  it("should return the initial state", () => {
    expect(stories(undefined, {})).toEqual({
      stories: [],
      loading: false,
      error: null,
    });
  });

  it("should handle GET_stories_REQUESTED", () => {
    expect(
      stories(
        {
          stories: [],
          loading: false,
          error: null,
        },
        {
          type: GET_stories_REQUESTED,
        }
      )
    ).toEqual({
      stories: [],
      loading: true,
      error: null,
    });
  });

  it("should handle GET_stories_SUCCESS", () => {
    expect(
      stories(
        {
          stories: [],
          loading: false,
          error: null,
        },
        {
          type: GET_stories_SUCCESS,
          stories: [{ author: "Test", title: "Test" }],
        }
      )
    ).toEqual({
      stories: [{ author: "Test", title: "Test" }],
      loading: false,
      error: null,
    });
  });

  it("should handle GET_stories_FAILED", () => {
    expect(
      stories(
        {
          stories: [],
          loading: false,
          error: null,
        },
        {
          type: GET_stories_FAILED,
          message: "Something went wrong",
        }
      )
    ).toEqual({
      stories: [],
      loading: false,
      error: "Something went wrong",
    });
  });
});
