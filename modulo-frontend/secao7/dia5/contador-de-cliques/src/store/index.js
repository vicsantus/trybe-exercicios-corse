// src/store/index.js
import { combineReducers, createStore } from 'redux';
import clickReducer from '../reducers';

const rootReducer = combineReducers({ clickReducer });

const store = createStore(rootReducer);

export default store;