import React from 'react'
import Bio from './Bio'
import Badges from './Badges'

const UserDetail = ({ user }) => {
  const {
    avatar_url,
    name,
    bio,
    location,
    email,
    followers,
    following,
    public_gists,
    public_repos,
  } = user
  return (
    <div className="bg-white h-100 shadow-lg rounded-lg mx-5 px-6">
      <div id="image_and_info_wrapper">
        <div className="flex items-center justify-center">
          <img src={avatar_url} alt="Avatar" className="h-48 w-48 rounded-full mt-6" />
        </div>
        <div className="text-center text-gray-600 my-6 px-3">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <Bio bio={bio} />
          {location && <p className="">{`Location: ${location}`}</p>}
        </div>
      </div>
      <Badges
        followers={followers}
        following={following}
        gists={public_gists}
        repos={public_repos}
      />
    </div>
  )
}

export default UserDetail
