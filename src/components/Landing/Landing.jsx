import React, { Fragment } from 'react'
import SearchUser from './SearchUser'
import './Landing.css'

const Landing = () => {
  return (
    <Fragment>
      <div className="landing h-screen w-full flex flex-col items-center justify-center">
        <div className="text-center text-white">
          <p className="text-6xl">Git Finder</p>
        </div>
        <div className="text-gray-300 text-lg">
          <p>Checkout repos, gists and followers</p>
        </div>
        <SearchUser />
      </div>
    </Fragment>
  )
}

export default Landing
