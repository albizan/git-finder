import {
  SET_USERS,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SET_LOADING,
  RESET_LOADING,
  SET_LOADED,
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
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
  }
}
