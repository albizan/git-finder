import React, { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [loading, setLoading] = useState(false)

  const handleSearch = user => {
    setLoading(true)
    console.log(user)
    // Call Github api
  }

  return (
    <div>
      <Navbar onSearch={handleSearch} />
    </div>
  )
}

export default App
