import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="bg-white shadow-lg p-6 rounded-lg text-center">
        <h4 className="text-4xl font-light mb-4">Page Not Found</h4>
        <Link className="text-indigo-600 font-light text-sm" to="/">
          Go back to Homepage
        </Link>
      </div>
    </div>
  )
}

export default NotFound
