import {takeLatest, call, put} from 'redux-saga/effects';
import ShopActionsTypes from './shop.types';
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchCollectionsFail, fetchCollectionsSuccess} from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFail(error.message))
  }

  // const collectionRef = firestore.collection('collections');
  // collectionRef.get().then(snapshot => {
  //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   dispatch(fetchCollectionsSuccess(collectionsMap));
  // }).catch(error => dispatch(fetchCollectionsFail(error.message)));
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}
