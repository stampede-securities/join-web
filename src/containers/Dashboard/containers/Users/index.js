import React, { Component } from 'react'
import client from '../../../../client'

class Users extends Component {
  state = {
    users: [],
  }
  componentDidMount() {
    client
      .get('/users/all')
      .then(data => {
        this.setState({ users: data })
      })
      .catch(alert)
  }
  render() {
    if (!this.state.users.length) {
      return <div>Loading...</div>
    }
    const { users } = this.state
    return (
      <table className="bp3-html-table">
        <thead>
          <tr>{Object.keys(users[0]).map(key => <th>{key}</th>)}</tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr>
              {Object.entries(user).map(([key, entry]) => (
                <td>{entry === false ? 'no' : entry}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Users
