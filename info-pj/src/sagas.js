import {takeEvery} from "redux-saga/effects";
import {getDataSaga} from "./actions/for-content"

function* workerLoadData() {
   console.log("it's working!!")
}

export function* watchLoadData() {
    yield takeEvery(getDataSaga, workerLoadData)
}