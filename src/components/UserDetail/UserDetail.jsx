import React from 'react'
import Bio from './Bio'
import Info from './Info'
import Badges from './Badges'

const UserDetail = ({ user }) => {
  const {
    avatar_url,
    name,
    bio,
    login,
    location,
    email,
    company,
    website,
    followers,
    following,
    public_gists,
    public_repos,
  } = user
  return (
    <div className="bg-white shadow-lg rounded-lg mx-2 px-4 container md:mt-6 max-w-3xl mx-auto">
      <div
        className="block md:flex md:items-center md:justify-between md:py-4"
        id="image_and_info_wrapper"
      >
        <div className="flex items-center justify-center md:flex-shrink-0">
          <img
            src={avatar_url}
            alt="Avatar"
            className="h-48 w-48 rounded-full mt-6 md:m-0 md:mx-4 md:h-32 md:w-32"
          />
        </div>
        <div className="text-center text-gray-600 my-6 px-3 md:p-0 md:m-0 md:text-left md:pl-3">
          <h3 className="text-xl font-semibold text-gray-800 md:text-2xl">{name}</h3>
          <Bio bio={bio} />
          <Info
            email={email}
            login={login}
            location={location}
            company={company}
            website={website}
          />
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
