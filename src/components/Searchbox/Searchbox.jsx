import React, { useState } from 'react'

const Searchbox = ({ onSearch }) => {
  const [user, setUser] = useState('')
  const [disabled, setDisabled] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user) {
      onSearch(user)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center text-xs sm:text-sm">
      <input
        value={user}
        onChange={(e) => {
          setUser(e.target.value)
          const isDisabled = e.target.value === '' ? true : false
          setDisabled(isDisabled)
        }}
        placeholder="Search Github User..."
        className="focus:shadow-outline focus:bg-white bg-gray-200 rounded-lg px-4 py-2"
        type="search"
      />
      <button
        type="submit"
        disabled={disabled}
        className={`rounded-full bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 ml-4 ${disabled &&
          'opacity-50 cursor-not-allowed'}`}
      >
        Search
      </button>
    </form>
  )
}

export default Searchbox
