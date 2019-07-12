import React from 'react'

import SearchUser from './SearchUser'

const Navbar = ({ onSearch }) => {
  return (
    <div className="bg-indigo-600 text-gray-300 py-2">
      <div className="sm:flex sm:items-center sm:justify-around">
        <div className="text-center text-3xl mb-2 sm:mb-0 ">Git Finder</div>
        <div className="">
          <SearchUser onSearch={onSearch} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
