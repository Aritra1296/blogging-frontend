import axios from "axios"


// const instance = axios.create({
//   baseURL: 'http://chatmatesapi.aritrarivu.co.in',
//   withCredentials: true,
// })

const instance = axios.create({
  baseURL: 'http://localhost:3005',
  withCredentials: true,
})

export default instance;