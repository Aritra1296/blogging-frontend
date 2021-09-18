import { createStore, applyMiddleware } from 'redux'
import userReducer from '../reducer/Reducer'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const store = createStore(userReducer, composeWithDevTools(
  //applyMiddleware(...middleware),
  // other store enhancers if any
));

export default store