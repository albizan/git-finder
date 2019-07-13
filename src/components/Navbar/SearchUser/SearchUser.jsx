import React, { useState, useContext } from 'react'
import GithubContext from '../../../context/github/context'

const Searchbox = ({ onSearch }) => {
  // Initialize context
  const githubContext = useContext(GithubContext)
  const { searchUsers } = githubContext

  const [user, setUser] = useState('')
  const [disabled, setDisabled] = useState(true)

  /* Handle form submit, this fires when button gets clicked */
  const handleSubmit = (e) => {
    e.preventDefault()
    searchUsers(user)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center text-xs mb-6 sm:mb-0 sm:text-sm"
    >
      <input
        value={user}
        onChange={(e) => {
          setUser(e.target.value)
          const isDisabled = e.target.value === '' ? true : false
          setDisabled(isDisabled)
        }}
        placeholder="Enter a user..."
        className="outline-none rounded border-indigo-500 bg-indigo-500 text-gray-200 px-4 py-2"
        type="search"
      />
      <button
        type="submit"
        disabled={disabled}
        className={`outline-none uppercase rounded border border-gray-300 font-semibold  text-gray-200 hover:bg-gray-300 hover:text-indigo-500 px-4 py-2 ml-4 ${disabled &&
          'opacity-50 cursor-not-allowed'}`}
      >
        Search
      </button>
    </form>
  )
}

export default Searchbox
