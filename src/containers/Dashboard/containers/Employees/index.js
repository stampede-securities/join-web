import React, { Component } from 'react'
import client from '../../../../client'

class Employees extends Component {
  state = {
    employees: [],
  }
  componentDidMount() {
    client
      .get('/employees/all')
      .then(data => {
        console.log('DATA', data)
        this.setState({ employees: data })
      })
      .catch(alert)
  }
  render() {
    if (!this.state.employees.length) {
      return <div>Loading...</div>
    }
    const employees = this.state.employees.map(employee => ({
      name: employee.name,
      email: employee.email,
    }))
    return (
      <table className="bp3-html-table">
        <thead>
          <tr>{Object.keys(employees[0]).map(key => <th>{key}</th>)}</tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr>
              {Object.entries(employee).map(([key, entry]) => <td>{entry}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Employees
