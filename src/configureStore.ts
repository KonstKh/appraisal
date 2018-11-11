import { createStore, applyMiddleware, compose  } from 'redux';
import reduxThunk from 'redux-thunk';
import { reducers } from './reducers';


export const configureStore = (preloadedState?: {}) => {
  const nonTypedWindow: any = window;
  const composeEnhancers = nonTypedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewareEnhancer = applyMiddleware(reduxThunk);
  const store = createStore(reducers, preloadedState, composeEnhancers(middlewareEnhancer));

  // if (process.env.NODE_ENV !== 'production' && module.hot) {
  //   module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  // }

  return store;
}