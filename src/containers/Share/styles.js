import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
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
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`

export const Code = styled(Flex)`
  font-family: 'Source Sans Pro';
  font-weight: 700;
  font-size: 24px;
`

export const Forms = styled(Flex)`
  margin-top: 25px;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px;
  height: 100px;
`
