import React, { useContext } from 'react'
import { ClapSpinner } from 'react-spinners-kit'
import GithubContext from '../../context/github/context'

const Spinner = () => {
  // Initialize Context
  const githubContext = useContext(GithubContext)
  const { loading } = githubContext

  if (!loading) {
    return null
  }

  return (
    <div className="flex justify-center mt-5">
      <ClapSpinner size={50} color="#000" />
    </div>
  )
}

export default Spinner
