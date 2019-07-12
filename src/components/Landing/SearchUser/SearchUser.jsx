import React, { Fragment, useState, useContext } from 'react'
import GithubContext from '../../../context/github/context'

const SearchUser = () => {
  /* Value is used to control the input component */
  const [value, setValue] = useState('')

  /* Used to disable submit button when nothing is typed in input field */
  const [isDisabled, setDisabled] = useState(true)

  // Initialize context
  const githubContext = useContext(GithubContext)

  /* Handle form submit, this fires when button gets clicked */
  const handleSubmit = (e) => {
    e.preventDefault()
    githubContext.searchUsers(value)
  }

  /* Handle input value change, this fires everytime input changes */
  const handleChange = (e) => {
    /* Change state accordingly */
    setValue(e.target.value)

    /* If nothing is typed in input field, set isDisabled to true. This affects the submit button */
    const isDisabled = e.target.value === '' ? true : false
    setDisabled(isDisabled)
  }
  return (
    <Fragment>
      <form className="mt-8 py-2 flex items-center" onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={handleChange}
          className="outline-none bg-transparent py-2 text-xl text-gray-300 border-b border-gray-300"
          placeholder="Enter A User"
          type="text"
        />
        <button
          disabled={isDisabled}
          className={`outline-none uppercase py-2 px-4 ml-4 rounded border border-gray-300 font-semibold text-xl text-gray-300 hover:bg-gray-300 hover:text-indigo-500 ${isDisabled &&
            'opacity-50 cursor-not-allowed'}`}
          type="submit"
        >
          Search
        </button>
      </form>
    </Fragment>
  )
}

export default SearchUser
