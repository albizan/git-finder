/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useContext } from 'react'
import GithubContext from '../../context/github/context'
import UserDetail from '../../components/UserDetail'

const User = ({ match }) => {
  const { login } = match.params

  // Initialize Context
  const githubContext = useContext(GithubContext)
  const { getUserDetailsFromGithub, user } = githubContext

  useEffect(() => {
    getUserDetailsFromGithub(login)
  }, [])

  const renderUserDetails = () => {
    return user && <UserDetail user={user} />
  }

  return <div className="p-4 flex flex-col items-center justify-center">{renderUserDetails()}</div>
}

export default User
