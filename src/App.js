import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import theme from './theme'
import { ThemeProvider } from 'styled-components'
import config from './config'
import Navbar from './components/Navbar'
import Home from './containers/Home/'

// Import slick.js css for react-slick component
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// creates new GQL client to communicate with API
const client = new ApolloClient({
  uri: config.graphqlUrl
})

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <div className="App">
              <Navbar />
              <Switch>
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
