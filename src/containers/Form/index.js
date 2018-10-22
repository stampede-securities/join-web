import React, { Component } from 'react'
import {
  Container,
  Logo,
  Header,
  Description,
  LearnMore,
  Forms
} from './styles'
import { withApollo } from 'react-apollo'
import logo from './logo-stampede-sticky.svg'
import gql from 'graphql-tag'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button'

const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(createUserInput: $input) {
      error {
        message
      }
      user {
        referralCode
      }
    }
  }
`

class Form extends Component {
  constructor() {
    super()
    this.state = {
      nameError: false,
      emailError: false,
      codeError: false,
      name: '',
      email: '',
      referralCode: ''
    }
  }
  componentDidMount() {
    this.setState({ referralCode: this.props.match.params.code })
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

  createUser = async () =>
    this.state.name &&
    this.state.email &&
    this.props.client
      .mutate({
        mutation: CREATE_USER,
        variables: {
          input: {
            email: this.state.email,
            name: this.state.name,
            referralCode: this.state.referralCode
          }
        }
      })
      .then(data => {
        const { createUser } = data.data
        if (createUser.error) {
          console.error(data.error)
        } else {
          const { referralCode } = createUser.user
          this.props.history.push({
            pathname: '/share',
            state: { referralCode }
          })
        }
      })
      .catch(err => console.log(err))

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
          <TextInput
            placeholder="Referral Code (optional)"
            value={this.state.referralCode}
            id="referralCode"
            onChange={this.handleChangeInfo}
            width="300px"
          />
        </Forms>
        <Button sticky onClick={this.createUser} text="Sign Up" />
      </Container>
    )
  }
}

export default withApollo(Form)
