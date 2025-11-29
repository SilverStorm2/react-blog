import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import postsReducer from './postsRedux';
import categoriesReducer from './categoriesRedux';

const subreducers = {
  posts: postsReducer,
  categories: categoriesReducer,
};

const reducer = combineReducers(subreducers);

const devToolsExtension =
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, initialState, devToolsExtension);

export default store;
