import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducers from '../reducer/Reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const reducer = combineReducers(reducers)

const store = createStore(
  reducer,
  composeWithDevTools(
  applyMiddleware(thunk)
    // other store enhancers if any
  )
)

export default store
