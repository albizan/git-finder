import React, { Fragment, useState, useEffect } from 'react'

const ReposWrapper = ({ repos_url }) => {
  const [repos, setRepos] = useState([])

  return (
    <Fragment>
      <div>
        <h3 className="text-lg text-gray-700 font-bold">Repos</h3>
      </div>
    </Fragment>
  )
}

export default ReposWrapper
