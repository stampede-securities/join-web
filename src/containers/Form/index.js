import React, { Component } from 'react'
import {
  Container,
  Logo,
  Header,
  Description,
  LearnMore,
  Forms,
} from './styles'
import { withRouter } from 'react-router-dom'
import qs from 'qs'

import logo from './logo-stampede-sticky.svg'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import client from '../../client'

class Form extends Component {
  constructor(props) {
    super(props)
    const { code } = qs.parse(props.location.search.slice(1))
    this.state = {
      nameError: false,
      emailError: false,
      name: '',
      email: '',
      refCode: code || '',
    }
  }
  handleChangeInfo = event => {
    event.preventDefault()
    const { value, id } = event.target
    this.setState({
      [id]: value,
    })

    const errorId = `${id}Error`
    this.setState({ [errorId]: !value })
    this.setState({ errorMessage: false })
  }

  createUser = async () =>
    this.state.name &&
    this.state.email &&
    client
      .post('/users', {
        name: this.state.name,
        email: this.state.email,
        signUpRefCode: this.state.refCode || 'ANON',
      })
      .then(user => {
        console.log(user)
        this.props.history.push('/share', { code: user.refCode })
      })
      .catch(err => {
        console.error(err)
        alert('Problem signing up for email')
      })

  render() {
    return (
      <Container>
        <Logo src={logo} />
        <Header>Invest In What You Know</Header>
        <Description>
          Stampede is a next generation equity crowdfunding company for the
          entertainment industry that allows fans to invest in their favorite
          music artists and other creators. Stampede is not another reward or
          donations crowdfunding site. Instead of donating money to a creator in
          exchange for a small gift or token, Stampede allows you to become an
          investor. As an investor, you earn a royalty share of the revenue
          streams from the project.
        </Description>
        <LearnMore target="_blank" href="https://www.stampedelive.com/learn">
          Learn more
        </LearnMore>
        <Header>Join Keros Club</Header>
        <Description>
          Sign up now to be a part of our elite program and get early access to
          deals and other exclusive perks! We'll only email you when we launch
          with exciting deals.
        </Description>
        <Forms>
          <TextInput
            placeholder="Name"
            value={this.state.name}
            id="name"
            onChange={this.handleChangeInfo}
            error={this.state.nameError}
            width="300px"
          />
          <TextInput
            placeholder="Email"
            value={this.state.email}
            id="email"
            onChange={this.handleChangeInfo}
            error={this.state.emailError}
            width="300px"
          />
        </Forms>
        <Button sticky onClick={this.createUser} text="Sign Up" />
      </Container>
    )
  }
}

export default withRouter(Form)
