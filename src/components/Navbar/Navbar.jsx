import React from 'react'

import Searchbox from '../Searchbox'

const Navbar = ({ onSearch }) => {
  return (
    <div className="bg-white shadow-md px-4 py-2">
      <div className="font-sans container mx-auto sm:flex sm:items-center sm:justify-between">
        <div className="text-center text-2xl mb-4 sm:mb-0 ">Github Finder</div>
        <div className="text-center">
          <Searchbox onSearch={onSearch} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
