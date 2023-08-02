import { createStore, compose } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from '../reducers';

// const composedEnhancer = composeWithDevTools(
//   // Add whatever middleware you actually want to use here
//   applyMiddleware(),
//   // other store enhancers if any
// );

// const store = createStore(rootReducer, composedEnhancer);
// export default store;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

export default store;
