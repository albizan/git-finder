import React, { useReducer } from 'react'
import { Provider } from './context'
import reducer from './reducer'
import { SET_USERS, SET_USER, SET_LOADING, RESET_LOADING, SET_LOADED } from '../types'
import http from '../../services/http'

const GithubState = (props) => {
  const initialState = {
    users: [],
    repos: [],
    user: {},
    loading: false,
    loaded: false,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  // Search Users
  const searchUsers = async (username) => {
    setLoading()
    try {
      // Res.data.items is an array with the found users
      const res = await http.get('/search/users', {
        params: {
          q: username,
        },
      })
      // Extract all found users from response
      const { items } = res.data
      // Set new state
      dispatch({
        type: SET_USERS,
        payload: items,
      })
      resetLoading()
      setLoaded()
    } catch (err) {
      console.log(err)
    }
  }

  // Get Repos

  // Get User
  async function getUserDetailsFromGithub(username) {
    setLoading()
    try {
      const { data } = await http.get(`/users/${username}`)
      resetLoading()
      dispatch({
        type: SET_USER,
        payload: data,
      })
    } catch (err) {
      console.log(err)
    }
  }

  // Set loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    })
  }

  // Reset loading
  const resetLoading = () => {
    dispatch({
      type: RESET_LOADING,
    })
  }

  // Reset loading
  const setLoaded = () => {
    dispatch({
      type: SET_LOADED,
    })
  }

  return (
    <Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        loaded: state.loaded,
        repos: state.repos,
        searchUsers,
        getUserDetailsFromGithub,
      }}
    >
      {props.children}
    </Provider>
  )
}

export default GithubState
