import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import User from './pages/User'

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Default Route to Home */}
        <Route exact path="/" component={Home} />
        <Route path="/user/:login" component={User} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  )
}

export default App
