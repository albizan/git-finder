import React, { useState, useEffect } from 'react'
import Spinner from '../../components/Spinner'
import UserDetail from '../../components/UserDetail'
import http from '../../services/http'

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
      getUserDetailsFromGithub()
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }, [login])

  return (
    <div className="h-screen w-full flex items-center justify-center">
      {loading ? <Spinner /> : <UserDetail user={user} />}
    </div>
  )
}

export default User
