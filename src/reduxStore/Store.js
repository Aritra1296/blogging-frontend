import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducers from '../reducer/Reducer'
import thunk from 'redux-thunk'

const reducer = combineReducers(reducers)

const store = createStore(
  reducer,
  //applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
