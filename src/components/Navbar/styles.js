import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { NavLink } from 'react-router-dom'
import React from 'react'

export const Container = styled(Flex)`
  width: 100%;
  height: ${props => (props.sticky ? '100px' : '130px')};
  background-color: ${props => (props.sticky ? 'white' : '')};
  border-bottom: 0.5px solid rgba(237, 237, 237, 0.5);
  -webkit-transition: all 0.4s;
  transition: height 0.3s;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: ${props =>
    props.sticky ? '1px 1px 1px rgba(0, 0, 0, 0.3)' : ''};
`

export const Wrapper = styled(Flex)`
  margin-top: ${props => (props.sticky ? '' : '30px')};
  flex: 1;
  flex-direction: row;
  align-items: center;
`

export const Logo = styled.img`
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  width: ${props => (props.sticky ? '175px' : '200px')};
  height: 100%;
  align-self: center;
  justify-self: center;
  margin-left: ${props => (props.sticky ? '133px' : '120px')};
  margin-right: ${props => (props.sticky ? '12px' : '0')};
`

export const NavItems = styled(Flex)`
  justify-content: flex-end;
  width: 70%;
`

const StyledNavLink = styled(NavLink)`
  color: ${props => (props.sticky ? '#3d8cba' : '#ffffff')};
  font-family: 'Source Sans Pro';
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 0.6px;
  margin-right: 50px;
  align-self: center;
  text-decoration: none;
  &:hover {
    color: #89c65a;
  }
`

export const NavItem = props => (
  <StyledNavLink {...props} activeClassName="active" />
)
