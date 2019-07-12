import React, { Fragment } from 'react'
import Landing from '../../components/Landing'

function Home({ history }) {
  return (
    <Fragment>
      <Landing history={history} />
    </Fragment>
  )
}

export default Home
