import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

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
  width: 40%;
  text-align: center;
  @media only screen and (max-width: 600px) {
    width: 90%;
    font-size: 12px;
    text-align: left;
  }
`

export const Forms = styled(Flex)`
  margin-top: 25px;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px;
  height: 100px;
`

export const ShareButtons = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
  padding-top: 20px;
`

export const Subheader = styled(Flex)`
  font-family: 'Open Sans';
  font-weight: 300;
  font-size: 24px;
  padding-top: 25px;
  padding-bottom: 5px;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    padding-top: 10px;
  }
`

export const LiveSite = styled.a`
  font-family: 'Source Sans Pro';
  color: black;
  display: inline-block;
`
