import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import GithubState from './context/github/state'
import Home from './pages/Home'
import Users from './pages/Users'
import User from './pages/User'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <GithubState>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route path="/user/:login" component={User} />
          <Route path="/not-found" component={NotFound} />
          {/* If nothing matches, redirect to not-found page */}
          <Redirect to="/not-found" />
        </Switch>
      </Router>
    </GithubState>
  )
}

export default App
