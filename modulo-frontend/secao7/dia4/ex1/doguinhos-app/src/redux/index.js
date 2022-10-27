// ./src/redux/index.js
import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import dogReducer from './reducers/dogReducer';

const store = createStore(dogReducer, composeWithDevTools());

export default store;
