import React, { useContext } from 'react'
import { ClipLoader } from 'react-spinners'
import GithubContext from '../../context/github/context'

const Loader = ({ color }) => {
  // Initialize Context
  const githubContext = useContext(GithubContext)
  const { loading } = githubContext

  return (
    <div className="flex justify-center mt-6">
      <ClipLoader color={color} />
    </div>
  )
}

export default Loader
