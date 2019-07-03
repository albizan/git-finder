import React from 'react'

const RepoItem = ({ repo }) => {
  return (
    <div className="py-3 border-b border-gray-300">
      <a href={repo.html_url} className="text-indigo-600 font-semibold">
        {repo.name}
      </a>
    </div>
  )
}

export default RepoItem
