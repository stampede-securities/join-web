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
  <React.Fragment>
    {!to && (
      <Container sticky={sticky} blue={blue} {...rest}>
        <Text size={size}>{text}</Text>
      </Container>
    )}
    {Boolean(to) && (
      <StyledLink to={to}>
        <Container sticky={sticky} blue={blue} {...rest}>
          <Text size={size}>{text}</Text>
        </Container>
      </StyledLink>
    )}
  </React.Fragment>
)

export default Button
