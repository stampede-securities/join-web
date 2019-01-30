import React, { Component } from 'react'
import { Tab, Tabs } from '@blueprintjs/core'
import { Container } from './styles'
import Employees from './containers/Employees'
import Users from './containers/Users'
import Manage from './containers/Manage'

class Dashboard extends Component {
  state = {
    tabId: 'ac',
  }
  componentDidMount() {
    if (!localStorage.token) {
      this.props.history.push('/login')
    }
  }
  handleTabChange = tabId => {
    this.setState({ tabId })
  }
  render() {
    return (
      <Container>
        <Tabs
          id="Dashtabs"
          onChange={this.handleTabChange}
          selectedTabId={this.state.tabId}
          large
        >
          <Tab id="us" title="Users" panel={<Users />} />
          <Tab id="in" title="Admins" panel={<Employees />} />
          <Tab id="ac" title="New Admin" panel={<Manage />} />
          <Tabs.Expander />
        </Tabs>
      </Container>
    )
  }
}

export default Dashboard
