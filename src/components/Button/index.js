import React from 'react'
import { StyledLink, Container, Text } from './styles'

const Button = ({
  text,
  to,
  blue,
  size = 'small',
  sticky = false,
  ...rest
}) => (
  <StyledLink to={to}>
    <Container sticky={sticky} blue={blue} {...rest}>
      <Text size={size}>{text}</Text>
    </Container>
  </StyledLink>
)

export default Button
