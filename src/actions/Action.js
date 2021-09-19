import axios from '../axios'

export const fetchUser = () => {
  return (dispatch) => {
    axios
      .get('/users/loggedIn')
      .then((res, req) => {
        dispatch({ type: 'FETCH_USER', payload: res.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
