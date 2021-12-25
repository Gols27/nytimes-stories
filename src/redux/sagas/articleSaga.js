import { call, put, takeEvery } from "redux-saga/effects";
import axios from 'axios';

const REACT_APP_NYTIMES_API_KEY = 'EPQfG6lAOJgoKSMq58JMRxSHooAQynA4';
const REACT_APP_NYTIMES_BASE_URL = 'https://api.nytimes.com';

export function getArticlesApi(query, page) {
  return axios(
    `${REACT_APP_NYTIMES_BASE_URL}/svc/search/v2/articlesearch.json?q=${query}&page=${page}&api-key=${REACT_APP_NYTIMES_API_KEY}`
  )
    .then(({data}) => 
    { console.log(data["response"]['docs']);
      return data["response"]['docs']})
    .catch((error) => {
      throw error;
    });
}

export function* fetchArticles(action) {
  try {

    const articles = yield call(getArticlesApi, action.payload.articles,action.payload.page);
    yield put({ type: "GET_ARTICLES_SUCCESS",  articles });
  } catch (e) {
    yield put({ type: "GET_ARTICLES_FAILED", message: e.message });
  }
}

function* articleSaga() {
  yield takeEvery("GET_ARTICLES_REQUESTED", fetchArticles);
}

export default articleSaga;