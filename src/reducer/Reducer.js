function userReducer(state = { value: '' }, action) {
  if (action.type === 'FETCH_USER') {
    fetch('').then(() => {
      return { value: res.data }
    })
  }
}

export default userReducer
