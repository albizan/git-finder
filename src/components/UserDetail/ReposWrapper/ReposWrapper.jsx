import React, { Fragment, useState, useEffect } from 'react'
import RepoItem from './RepoItem'
import http from '../../../services/http'

const ReposWrapper = ({ repos_url }) => {
  const [repos, setRepos] = useState([])

  const getReposFromGithub = async () => {
    const { data } = await http.get(repos_url)
    setRepos(data)
  }

  const renderRepos = (repos) => {
    if (repos) {
      return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />)
    }
  }

  useEffect(() => {
    getReposFromGithub()
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      <div className="px-1 text-center md:text-left">
        <h3 className="text-lg text-gray-700 font-bold">Repos</h3>
        {renderRepos(repos)}
      </div>
    </Fragment>
  )
}

export default ReposWrapper
