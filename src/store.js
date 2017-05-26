import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { pingEpic } from './epics';
import { pingReducer } from './reducers';

const epicMiddleware = createEpicMiddleware(pingEpic);

const store = createStore(
  pingReducer,
  applyMiddleware(epicMiddleware)
);

export default store;
