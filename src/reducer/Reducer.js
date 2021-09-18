import action from '../actions/Action'

function userReducer(state = { user: {} }, action) {
  if (action.type === 'FETCH_USER') {
    console.log(action.payload)
    return { user: action.payload }
  }
  return state
}

export default userReducer
