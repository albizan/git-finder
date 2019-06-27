import React, { useState } from 'react'
import http from '../../services/http'
import Navbar from '../../components/Navbar'
import Spinner from '../../components/Spinner'
import UserWrapper from '../../components/UserWrapper'

function Home() {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const handleSearch = async (user) => {
    setLoading(true)
    try {
      // Res.data.items is an array with the found users
      const res = await http.get('/search/users', {
        params: {
          q: user,
        },
      })
      // Extract all found users from response
      const { items } = res.data
      // Set new state
      setUsers(items)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      {loading && <Spinner />}
      {users.length !== 0 && <UserWrapper users={users} />}
    </div>
  )
}

export default Home