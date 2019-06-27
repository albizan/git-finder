import React, { useState, useEffect } from 'react'
import Spinner from '../../components/Spinner'
import UserDetail from '../../components/UserDetail'
import http from '../../services/http'
import { Link } from 'react-router-dom'

const User = ({ match }) => {
  const { login } = match.params

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({})

  useEffect(() => {
    async function getUserDetailsFromGithub() {
      const { data } = await http.get(`/users/${login}`)
      setUser(data)
    }
    try {
      setLoading(true)
      getUserDetailsFromGithub()
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }, [login])

  return (
    <div className="py-4 flex flex-col items-center justify-center">
      {loading ? <Spinner /> : <UserDetail user={user} />}
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
