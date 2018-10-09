import React, { Component } from 'react'
import logo from '../Form/logo-stampede-sticky.svg'
import { Container, Logo, Header, Description, Code } from './styles'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'

class Share extends Component {
  state = {
    id: false
  }
  makeid = () => {
    if (localStorage.id) return localStorage.id
    let text = ''
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    localStorage.id = text
    return text
  }

  render() {
    return (
      <Container>
        <Logo src={logo} />
        <Header>You're All Set!</Header>
        <Description>
          You've succesfully signed up for our super user program! We'll be in
          touch with exclusive access to the first deals we're launching on our
          platform. Your referral code is:
        </Description>
        <Code>{this.makeid()}</Code>
      </Container>
    )
  }
}

export default Share
