import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import theme from './theme'
import { ThemeProvider } from 'styled-components'
import Form from './containers/Form/'
import Share from './containers/Share/'
import Login from './containers/Login'
import AmbassadorLogin from './containers/AmbassadorLogin'
import Dashboard from './containers/Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/adminlogin" component={Login} />
              <Route path="/ambassadorlogin" component={AmbassadorLogin} />
              <Route path="/share" component={Share} />
              <Route path="/" component={Form} />
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
