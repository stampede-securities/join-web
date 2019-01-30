import React, { Component } from 'react'
import { Text, InputGroup, Button } from '@blueprintjs/core'
import { Container } from './styles'
import client from '../../../../client'

class Manage extends Component {
  state = {
    name: '',
    email: '',
    hash: '',
    hashConfirm: '',
  }
  createAdmin = () =>
    !console.log(this.state) &&
    this.state.name &&
    this.state.email &&
    this.state.hash &&
    this.state.hash === this.state.hashConfirm &&
    client
      .post('/employees', {
        name: this.state.name,
        email: this.state.email,
        hash: this.state.hash,
      })
      .then(res => {
        alert('Success!')
      })
      .catch(err => {
        alert('Failed to create')
      })
  handleChangeInfo = event => {
    event.preventDefault()
    const { value, id } = event.target
    this.setState({
      [id]: value,
    })
  }
  render() {
    return (
      <Container>
        <h1>
          <Text>New Admin</Text>
        </h1>
        <Text>Name</Text>
        <InputGroup
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChangeInfo}
          id="name"
        />
        <Text>Email</Text>
        <InputGroup
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChangeInfo}
          id="email"
        />
        <Text>Password</Text>
        <InputGroup
          placeholder="Password"
          value={this.state.hash}
          onChange={this.handleChangeInfo}
          id="hash"
          type="password"
        />
        <Text>Confirm Password</Text>
        <InputGroup
          placeholder="Confirm Password"
          value={this.state.hashConfirm}
          onChange={this.handleChangeInfo}
          id="hashConfirm"
          type="password"
        />
        <Button
          text="Create"
          icon="add"
          style={{ width: 200 }}
          onClick={this.createAdmin}
        />
      </Container>
    )
  }
}

export default Manage
