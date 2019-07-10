import React, { Fragment, useContext } from 'react'
import User from '../User'
import GithubContext from '../../context/github/context'

const UserWrapper = () => {
  // Initialize Context
  const githubContext = useContext(GithubContext)
  const { users, loaded } = githubContext

  const showUsers = () => {
    return users.map((user) => <User key={user.id} user={user} />)
  }

  if (!loaded) {
    return null
  }

  return (
    <Fragment>
      <div className="container mx-auto p-2 sm:flex sm:justify-left sm:content-start sm:flex-wrap">
        {showUsers()}
      </div>
    </Fragment>
  )
}

export default UserWrapper
