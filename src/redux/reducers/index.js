import { combineReducers } from "redux";
import stories from "./stories";
import articles from './articles';

const rootReducer = combineReducers({
  stories,
  articles,
});

export default rootReducer;
