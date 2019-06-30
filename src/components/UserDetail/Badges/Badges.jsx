import React, { Fragment } from 'react'

const Badges = ({ followers, following, gists, repos }) => {
  return (
    <Fragment>
      <div className="w-full flex justify-center items-center mb-3 py-3 text-xs border-t border-gray-300">
        <div className="w-24 text-center px-1 py-2 rounded-full mx-1 bg-green-500 text-white font-semibold">
          <div className="text-sm">{followers}</div>
          <div>Followers</div>
        </div>
        <div className="w-24 text-center px-1 py-2 rounded-full mx-1 bg-orange-500 text-white font-semibold">
          <div className="text-sm">{following}</div>
          <div>Following</div>
        </div>
        <div className="w-24 text-center px-1 py-2 rounded-full mx-1 bg-red-500 text-white font-semibold">
          <div className="text-sm">{gists}</div>
          <div>Gists</div>
        </div>
        <div className="w-24 text-center px-1 py-2 rounded-full mx-1 bg-indigo-500 text-white font-semibold">
          <div className="text-sm">{repos}</div>
          <div>Repos</div>
        </div>
      </div>
    </Fragment>
  )
}

export default Badges
