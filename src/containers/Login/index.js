import React, { Component } from 'react'
import { Container, Forms } from './styles'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import client from '../../client'

class Login extends Component {
  state = {
    email: '',
    hash: '',
  }
  handleChangeInfo = event => {
    event.preventDefault()
    const { value, id } = event.target
    this.setState({
      [id]: value,
    })
  }
  logIn = () =>
    this.state.email &&
    this.state.hash &&
    client
      .post('/auth/login', {
        email: this.state.email,
        password: this.state.hash,
      })
      .then(res => {
        localStorage.token = res.token
        localStorage.accessLevel = res.accessLevel
        if (res.accessLevel === 'ADMIN') {
          this.props.history.push('/dashboard')
        } else {
          this.props.history.push('/ambassador')
        }
      })
      .catch(err => {
        console.log(err)
        alert('Could not log in, check your email and password')
      })
  render() {
    return (
      <Container>
        <h1>Admin Login</h1>
        <Forms>
          <TextInput
            placeholder="Email"
            value={this.state.email}
            id="email"
            onChange={this.handleChangeInfo}
            width="300px"
          />
          <TextInput
            placeholder="Password"
            type="password"
            value={this.state.hash}
            id="hash"
            onChange={this.handleChangeInfo}
            width="300px"
          />
        </Forms>
        <Button sticky onClick={this.logIn} text="Log In" />
      </Container>
    )
  }
}

export default Login
