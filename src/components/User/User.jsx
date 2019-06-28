import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ user }) => {
  const { avatar_url, login, html_url } = user
  return (
    <div className="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <img src={avatar_url} alt="Avatar" className="w-full" />
        <div className="p-5 font-semibold">
          <div className="text-xl text-gray-700 mb-2">{login}</div>
          <a className="text-indigo-600" href={html_url}>
            View Profile
          </a>
          <div className="flex justify-center items-center border-t border-gray-300 mt-4 pt-4">
            <Link
              to={`/user/${login}`}
              className="px-4 py-2 border border-indigo-600 bg-white font-bold text-indigo-600 rounded hover:bg-indigo-600 hover:text-white"
            >
              Show More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
