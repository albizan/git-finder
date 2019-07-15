import React from 'react'

// Import custom components
import SearchUser from './SearchUser'

// Import Vendor components
import { Link } from 'react-router-dom'

const Navbar = ({ history }) => {
  return (
    <div className="bg-indigo-600 text-gray-300 py-2">
      <div className="sm:flex sm:items-center sm:justify-between px-4">
        <div className="text-center text-4xl mb-2 sm:mb-0 ">
          <Link to="/">Git Finder</Link>
        </div>
        <div>
          <SearchUser history={history} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
