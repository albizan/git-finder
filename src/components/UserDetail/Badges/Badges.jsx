import React, { Fragment } from 'react'

const Badges = ({ followers, following, gists, repos }) => {
  return (
    <Fragment>
      <div className="w-full flex justify-center items-center mb-3 py-3 text-xs border-t border-gray-400">
        <div className="w-24 text-center px-1 py-2 rounded-full mx-1 bg-green-500 text-white font-semibold">
          {followers + ' followers'}
        </div>
        <div className="w-24 text-center px-1 py-2 rounded-full mx-1 bg-orange-500 text-white font-semibold">
          {following + ' following'}
        </div>
        <div className="w-24 text-center px-1 py-2 rounded-full mx-1 bg-red-500 text-white font-semibold">
          {gists + ' gists'}
        </div>
        <div className="w-24 text-center px-1 py-2 rounded-full mx-1 bg-indigo-500 text-white font-semibold">
          {repos + ' repos'}
        </div>
      </div>
    </Fragment>
  )
}

export default Badges
