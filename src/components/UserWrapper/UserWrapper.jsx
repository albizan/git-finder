import React, { Fragment } from 'react'
import User from '../User'

const UserWrapper = ({ users }) => {
  const showUsers = (users) => {
    return users.map((user) => <User key={user.id} user={user} />)
  }

  return (
    <Fragment>
      <div className="container mx-auto p-2 sm:flex sm:justify-left sm:content-start sm:flex-wrap">
        {showUsers(users)}
      </div>
    </Fragment>
  )
}

export default UserWrapper
