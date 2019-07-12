/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react'
import Loader from '../../components/Loader'
import UserNotFound from '../../components/UserNotFound'
import UserDetail from '../../components/UserDetail'
import http from '../../services/http'
import { Link } from 'react-router-dom'

const User = ({ match }) => {
  const { login } = match.params

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [user, setUser] = useState(null)

  async function getUserDetailsFromGithub() {
    setLoading(true)
    try {
      const { data } = await http.get(`/users/${login}`)
      setLoading(false)
      setUser(data)
    } catch (err) {
      setLoading(false)
      setError(true)
    }
  }

  useEffect(() => {
    getUserDetailsFromGithub()
  }, [])

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      {loading && <Loader />}
      {error && <UserNotFound login={login} />}
      {user && <UserDetail user={user} />}
      <Link
        to="/"
        className="w-auto shadow px-4 py-3 mt-4 font-bold border-blue-600 border-2 text-blue-600 bg-white rounded hover:bg-blue-600 hover:text-white"
      >
        Go back to Homepage
      </Link>
    </div>
  )
}

export default User
