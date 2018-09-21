import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Wrapper, Logo, NavItems, NavItem } from './styles'
import Button from '../Button'

import rhino from './logo-stampede.svg'
import stickyRhino from './logo-stampede-sticky.svg'

const NAVBAR_TRANSITION_PX = 10

class Navbar extends Component {
  state = {
    sticky: false
  }
  componentDidMount() {
    // update component state when user scrolls past NAVBAR_TRANSITION_PX
    window.onscroll = () => {
      if (window.scrollY > NAVBAR_TRANSITION_PX) {
        this.setState({ sticky: true })
      } else {
        this.setState({ sticky: false })
      }
    }
  }
  render() {
    const { sticky } = this.state
    return (
      <Container sticky={sticky}>
        <Wrapper sticky={sticky}>
          <a href="/">
            <Logo
              src={sticky ? stickyRhino : rhino}
              // key to trigger rerender when state is updated
              // otherwise bug in react will sometimes cause
              // image src to not be updated correctly
              key={this.state.sticky}
              sticky={sticky}
            />
          </a>
          <NavItems>
            <NavItem sticky={sticky} to="/explore">
              Explore
            </NavItem>
            <NavItem sticky={sticky} to="/whatwedo">
              What We Do
            </NavItem>
            <NavItem sticky={sticky} to="/whyweareunique">
              Why We Are Unique
            </NavItem>
            <NavItem sticky={sticky} to="/howwegothere">
              How We Got Here
            </NavItem>
            <Button
              sticky={sticky}
              to="/login"
              text="Login"
              style={{ marginRight: 10 }}
            />
            <Button sticky={sticky} to="/signup" text="Signup" blue />
          </NavItems>
        </Wrapper>
      </Container>
    )
  }
}

export default withRouter(Navbar)
