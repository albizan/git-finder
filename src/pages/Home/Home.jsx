import React, { Fragment } from 'react'
import Landing from '../../components/Landing'
import Spinner from '../../components/Spinner'
import UserWrapper from '../../components/UserWrapper'

function Home() {
  return (
    <Fragment>
      <Landing />
      <Spinner />
      <UserWrapper />
    </Fragment>
  )
}

export default Home
