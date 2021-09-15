import action from '../actions/Actions'
import axios from '../axios'

function userReducer(state = { value: '' }, action) {
  if (action.type === 'FETCH_USER') {
    axios.get('user/login').then((req, res) => {
      console.log(res.data)
      return res.data
    })
  }
}

export default userReducer
