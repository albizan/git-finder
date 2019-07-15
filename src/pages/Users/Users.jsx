import React, { Fragment, useContext } from 'react'

// Import default Components
import Navbar from '../../components/Navbar'
import UserWrapper from '../../components/UserWrapper'

const Users = ({ history }) => {
  return (
    <Fragment>
      <Navbar history={history} />
      <UserWrapper />
    </Fragment>
  )
}

export default Users
