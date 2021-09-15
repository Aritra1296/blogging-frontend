import { createStore } from 'redux'
import userReducer from '../reducer/Reducer'
import ReduxThunk from 'redux-thunk'


const store = createStore(userReducer)

export default store