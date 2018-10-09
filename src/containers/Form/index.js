import React, { Component } from 'react'
import {
  Container,
  Logo,
  Header,
  Description,
  LearnMore,
  Forms
} from './styles'
import logo from './logo-stampede-sticky.svg'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button'

class Form extends Component {
  state = {
    nameError: false,
    emailError: false,
    codeError: false
  }

  handleChangeInfo = event => {
    event.preventDefault()
    const { value, id } = event.target
    this.setState({
      [id]: value
    })

    const errorId = `${id}Error`
    this.setState({ [errorId]: !value })
    this.setState({ errorMessage: false })
  }

  render() {
    return (
      <Container>
        <Logo src={logo} />
        <Header>Invest In What You Know</Header>
        <Description>
          Stampede is a next generation equity crowdfunding platform for the
          entertainment industry. We are democratizing the financial system by
          giving people access to deals that previously were just available to
          wealthy private investors.
        </Description>
        <LearnMore target="_blank" href="https://www.stampedelive.com/learn">
          Learn more
        </LearnMore>
        <Header>Get Early Access</Header>
        <Description>
          Sign up for our super user program to get early access to the first
          deals launching on the platform and other perks. Once you've signed
          up, we'll generate a unique code for you to share with your friends to
          get them the same deal.
        </Description>
        <Forms>
          <TextInput
            placeholder="Name"
            value={this.props.name}
            id="name"
            onChange={this.handleChangeInfo}
            error={this.state.nameError}
            width="300px"
          />
          <TextInput
            placeholder="Email"
            value={this.props.email}
            id="email"
            onChange={this.handleChangeInfo}
            error={this.state.emailError}
            width="300px"
          />
          <TextInput
            placeholder="Referral Code (optional)"
            value={this.props.code}
            id="code"
            onChange={this.handleChangeInfo}
            error={this.state.codeError}
            width="300px"
          />
        </Forms>
        <Button sticky to="/share" text="Sign Up" />
      </Container>
    )
  }
}

export default Form
