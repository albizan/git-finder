import React from 'react'

import Searchbox from '../Searchbox'

const Navbar = ({ onSearch }) => {
  return (
    <div className="bg-white shadow-md py-2">
      <div className="font-sans sm:flex sm:items-center sm:justify-around">
        <div className="text-center text-3xl text-gray-700 font-semibold  mb-2 sm:mb-0 ">
          Github Finder
        </div>
        <div className="">
          <Searchbox onSearch={onSearch} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
