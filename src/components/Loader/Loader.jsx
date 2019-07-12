import React, { useContext } from 'react'
import { ClipLoader } from 'react-spinners'
import GithubContext from '../../context/github/context'

const Loader = ({ color }) => {
  // Initialize Context
  const githubContext = useContext(GithubContext)
  const { loading } = githubContext

  const classname = () => {
    let classes = 'flex justify-center mt-6 '
    if (loading) {
      classes += 'opacity-100'
    } else {
      classes += 'opacity-0'
    }
    return classes
  }

  return (
    <div className={classname()}>
      <ClipLoader color={color} />
    </div>
  )
}

export default Loader
