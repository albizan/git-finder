import React from 'react'

const User = ({ user }) => {
  return (
    <div className="p-3 w-full md:w-1/4">
      <div className="bg-white w-full rounded overflow-hidden shadow-lg">
        <img src={user.avatar_url} alt="Avatar" className=" w-full rounded-b-md" />
        <div className="px-6 py-4">
          <div className="text-xl text-gray-800 mb-2">{user.login}</div>
          <a className="text-indigo-700" href={user.html_url}>
            View Profile
          </a>
          <div className="flex justify-center items-center border-t border-gray-400 mt-4 pt-4">
            <button className="px-4 py-2 border border-indigo-700 bg-white font-semibold text-indigo-700 rounded hover:bg-indigo-700 hover:text-white">
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User