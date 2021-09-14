import { createStore } from 'redux'
import  counterReducer from '../reducer/Reducer'


const store = createStore(counterReducer)

export default store