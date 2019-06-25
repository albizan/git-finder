import React, { Fragment } from 'react'
import User from '../User'

const UserWrapper = ({ users }) => {
  const showUsers = (users) => {
    return users.map((user) => <User key={user.id} user={user} />)
  }

  return (
    <Fragment>
      <div className="p-4 md:flex md:justify-left md:content-start md:flex-wrap">
        {showUsers(users)}
      </div>
    </Fragment>
  )
}

export default UserWrapper
