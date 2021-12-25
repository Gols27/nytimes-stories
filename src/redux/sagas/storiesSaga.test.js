import { cloneableGenerator } from "@redux-saga/testing-utils";
import { takeEvery } from "redux-saga/effects";
import storiesSaga, { fetchStories } from "./storiesSaga";
import { GET_STORIES_REQUESTED } from "../reducers/types";

describe("Stories sagas", () => {
  describe("Default stories saga", () => {
    const generator = cloneableGenerator(storiesSaga)();

    test("listens for every GET_STORIES_REQUESTED action", () => {
      expect(generator.next().value).toEqual(
        takeEvery(GET_STORIES_REQUESTED, fetchStories)
      );
    });
  });
});
