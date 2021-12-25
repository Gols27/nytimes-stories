import { call, put, takeEvery } from "redux-saga/effects";
import axios from 'axios';

const REACT_APP_NYTIMES_API_KEY = 'EPQfG6lAOJgoKSMq58JMRxSHooAQynA4';
const REACT_APP_NYTIMES_BASE_URL = 'https://api.nytimes.com';

export function getStoriesApi(category) {
  return axios(
    `${REACT_APP_NYTIMES_BASE_URL}/svc/topstories/v2/${category}.json?api-key=${REACT_APP_NYTIMES_API_KEY}`
  )
    .then(({data}) => 
    { console.log(data);
      return data["results"]})
    .catch((error) => {
      throw error;
    });
}

export function* fetchStories(action) {
  try {
    const stories = yield call(getStoriesApi, action.payload.category);
    yield put({ type: "GET_STORIES_SUCCESS",  stories });
  } catch (e) {
    yield put({ type: "GET_STORIES_FAILED", message: e.message });
  }
}

function* storiesSaga() {
  yield takeEvery("GET_STORIES_REQUESTED", fetchStories);
}

export default storiesSaga;