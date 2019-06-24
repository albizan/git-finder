import React, { useState } from 'react'

const Searchbox = ({ onSearch }) => {
  const [user, setUser] = useState('')
  const [disabled, setDisabled] = useState(true)

  const handleSubmit = () => {
    if (user) {
      onSearch(user)
      return
    }
  }

  return (
    <div className="flex items-center justify-center">
      <input
        value={user}
        onChange={e => {
          setUser(e.target.value)
          const isDisabled = e.target.value === '' ? true : false
          setDisabled(isDisabled)
        }}
        placeholder="Search Github User..."
        className="outline-none focus:shadow-outline focus:bg-white bg-gray-100 rounded-lg px-6 py-2"
        type="text"
      />
      <button
        type="button"
        disabled={disabled && true}
        onClick={handleSubmit}
        className={`rounded-full bg-blue-500 hover:bg-blue-700 ouline-none text-white font-semibold px-5 py-2 ml-4 ${disabled &&
          'opacity-50 cursor-not-allowed'}`}
      >
        Search
      </button>
    </div>
  )
}

export default Searchbox
