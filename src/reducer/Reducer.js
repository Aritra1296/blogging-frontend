function userReducer(state = { user: {} }, action) {
  if (action.type === 'FETCH_USER') {
    return { user: action.payload }
  }
   if (action.type === 'DELETE_USER') {
     return { user: null }
   }
  return state
}

export default userReducer


