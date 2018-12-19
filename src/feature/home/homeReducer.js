const initState = {
  user: {},
}

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.data,
      }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        user: {},
      }
    default:
      return state
  }
}

export default homeReducer