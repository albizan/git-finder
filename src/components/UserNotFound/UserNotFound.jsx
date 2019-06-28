import React from 'react'

const UserNotFound = ({ login }) => {
  return (
    <div className="bg-white rounded shadow-lg p-6 text-center">
      <h2 className="text-xl font-bold text-gray-800">An error occurred</h2>
      <div className="text-sm text-gray-600">{`User with login ${login} was not found`}</div>
    </div>
  )
}

export default UserNotFound
