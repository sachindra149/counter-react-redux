import { createStore } from 'redux';
import CounterReducer from './reducers/index.js';

const store = createStore(CounterReducer);
export default store;