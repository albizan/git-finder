import React from 'react'

const Searchbox = () => {
  return (
    <div className="flex items-center justify-center">
      <input
        placeholder="Search Github User..."
        className="outline-none focus:shadow-outline focus:bg-white bg-gray-100 rounded-lg px-6 py-2"
        type="text"
      />
      <button className="rounded-full bg-blue-400 hover:bg-blue-600 ouline-none text-white font-semibold px-5 py-2 ml-4">
        Search
      </button>
    </div>
  )
}

export default Searchbox
