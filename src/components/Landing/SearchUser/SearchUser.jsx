import React, { Fragment, useState } from 'react'

const SearchUser = () => {
  /* Value is used to control the input component */
  const [value, setValue] = useState('')

  /* Used to disable submit button when nothing is typed in input field */
  const [isDisabled, setDisabled] = useState(true)

  /* Handle form submit, this fires when button gets clicked */
  const handleSubmit = (e) => {
    e.preventDefault()
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
      <form className="mt-6 py-2 flex items-center" onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={handleChange}
          className="outline-none bg-transparent py-1 text-gray-300 border-b border-yellow-600"
          placeholder="Enter A User"
          type="text"
        />
        <button
          disabled={isDisabled}
          className={`outline-none uppercase py-1 px-3 ml-2 border border-yellow-600 font-bold text-yellow-600 hover:bg-yellow-600 hover:text-gray-900 ${isDisabled &&
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
