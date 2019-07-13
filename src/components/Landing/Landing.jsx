import React, { Fragment } from 'react'
import Loader from '../Loader'
import SearchUser from './SearchUser'
import './Landing.css'

const Landing = ({ history }) => {
  return (
    <Fragment>
      <div className="landing h-screen w-full flex flex-col items-center justify-center text-center">
        <div className="text-gray-200">
          <p className="text-4xl md:text-6xl">Git Finder</p>
        </div>
        <div className="text-gray-300 font-thin md:text-2xl">
          <p>Checkout repos, gists and followers</p>
        </div>
        <SearchUser history={history} />
        <Loader color={'#FFFFFF'} />
      </div>
    </Fragment>
  )
}

export default Landing
