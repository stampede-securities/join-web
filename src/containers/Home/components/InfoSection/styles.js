import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  width: 330px;
`

export const Img = styled.img`
  padding-bottom: 15px;
`

export const Header = styled(Flex)`
  font-family: 'Open Sans';
  font-size: 18px;
  font-weight: 600;
  color: #505050;
  padding-bottom: 15px;
`

export const Content = styled(Flex)`
  font-family: 'Source Sans Pro';
  font-size: 16px;
  color: #808080;
  text-align: center;
  line-height: 25px;
`
