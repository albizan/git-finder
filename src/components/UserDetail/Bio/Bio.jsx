import React, { Fragment } from 'react'

const Bio = ({ bio }) => {
  return <Fragment>{bio && <p className="">{bio}</p>}</Fragment>
}

export default Bio
