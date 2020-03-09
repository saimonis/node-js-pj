import { createStore, applyMiddleware } from 'redux';
import content from "./reducers/content";
import thunk from "redux-thunk"
import logger from "redux-logger"
//,applyMiddleware(logger,thunk)
import createSagaMiddlware from "redux-saga";
import {watchLoadData} from "./sagas"

const sagaMiddlware = createSagaMiddlware();
let store = createStore(content,applyMiddleware(logger,sagaMiddlware));
sagaMiddlware.run(watchLoadData)

export default store