import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { Link } from 'react-router-dom'

export const Container = styled(Flex)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.blue ? '#3C89AD' : '')};
  color: ${props => (props.sticky && !props.blue ? 'black' : 'white')};
  width: 90px;
  height: 40px;
  border: ${props => (props.blue ? '' : '1px solid')};
  border-color: ${props => (props.sticky ? 'lightgrey' : 'white')};
  border-radius: 2px;
  &:hover {
    background-color: ${props => (props.blue ? '#3bcdf2' : '#49a1b0')};
    color: white;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const Text = styled(Flex)`
  font-family: 'Source Sans Pro';
  font-weight: 300;
  font-size: ${props => (props.size === 'small' ? '14px' : '16px')};
`
