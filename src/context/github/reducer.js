import { SET_USERS, SET_USER, SET_LOADING, RESET_LOADING, SET_LOADED } from '../types'

export default (state, { type, payload }) => {
  switch (type) {
    case SET_USERS:
      return {
        ...state,
        users: payload,
      }
    case SET_USER:
      return {
        ...state,
        user: payload,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case RESET_LOADING:
      return {
        ...state,
        loading: false,
      }
    case SET_LOADED:
      return {
        ...state,
        loaded: true,
      }
    default:
      return {
        ...state,
      }
  }
}
