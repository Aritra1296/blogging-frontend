export const fetchUser = (id) => {
  return { type: 'FETCH_USER', payload: id }
}
export const addProfile = (id) => {
  return { type: 'ADD_USER', payload: id }
}
export const login = (id) => {
  return { type: 'USER_LOGIN', payload: id }
}
export const userRole = (id) => {
  return { type: 'USER_ROLE', payload: role }
}
export const userName = (id) => {
  return { type: 'USER_NAME', payload: name }
}
