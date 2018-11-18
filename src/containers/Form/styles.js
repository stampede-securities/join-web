import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Logo = styled.img`
  width: 40%;
  padding-bottom: 25px;
`

export const Header = styled(Flex)`
  font-family: 'Open Sans';
  font-weight: 300;
  font-size: 40px;
  padding-top: 25px;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    padding-top: 10px;
  }
`

export const Description = styled(Flex)`
  font-family: 'Source Sans Pro';
  width: 60%;
  text-align: center;
  @media only screen and (max-width: 600px) {
    width: 90%;
    text-align: left;
    font-size: 12px;
  }
`

export const LearnMore = styled.a`
  font-family: 'Source Sans Pro';
  color: black;
  display: inline-block;
`

export const Forms = styled(Flex)`
  margin-top: 25px;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px;
  height: 100px;
`
