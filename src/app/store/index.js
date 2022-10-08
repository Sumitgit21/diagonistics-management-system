// import {createStore, combineReducers} from 'redux'
// import Mode from './setting/setting'
// export default createStore(
//     combineReducers({
//         mode: Mode
//     })
// )

import { compose, createStore } from "redux";

import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

export default store;
