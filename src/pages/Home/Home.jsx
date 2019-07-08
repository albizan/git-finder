import React, { Fragment, useState } from 'react'
import http from '../../services/http'
import Landing from '../../components/Landing'
import Spinner from '../../components/Spinner'
import UserWrapper from '../../components/UserWrapper'

function Home() {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [loaded, setLoaded] = useState(false)

  const handleSearch = async (username) => {
    setLoading(true)
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
      setUsers(items)
      setLoading(false)
      setLoaded(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Fragment>
      <Landing onSubmit={handleSearch} />
      {loading && <Spinner />}
      {loaded && <UserWrapper users={users} />}
    </Fragment>
  )
}

export default Home
