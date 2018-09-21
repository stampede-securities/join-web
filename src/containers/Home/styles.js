import styled from 'styled-components'
import { Flex } from 'grid-styled'
import Button from '../../components/Button'

export const BottomSection = styled(Flex)`
  overflow: hidden;
  position: absolute;
  flex-direction: column;
  top: 100vh;
`

export const Different = styled(Flex)`
  width: 100vw;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 150px;
`

export const DifferentHeader = styled(Flex)`
  font-family: 'Source Sans Pro';
  font-size: 55px;
  font-weight: 300;
  color: #505050;
  align-self: center;
`

export const DifferentSubheader = styled(Flex)`
  font-family: 'Source Sans Pro';
  font-size: 18px;
  color: #808080;
  padding-top: 30px;
  align-self: center;
`

export const InfoSections = styled(Flex)`
  width: 77%;
  padding-top: 80px;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
`

export const Active = styled(Flex)`
  width: 100vw;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 150px;
  background-color: #f6f7f7;
`

export const ActiveHeader = styled(Flex)`
  font-family: 'Source Sans Pro';
  font-size: 55px;
  font-weight: 300;
  color: #505050;
  align-self: center;
  padding-bottom: 18px;
`

export const ActiveSubheader = styled(Flex)`
  font-family: 'Source Sans Pro';
  font-size: 18px;
  color: #808080;
  padding-top: 12px;
  align-self: center;
`

export const Items = styled(Flex)`
  align-self: center;
  flex-direction: column;
  align-items: center;
  width: 85%;
`

export const Signup = styled(Button)`
  align-self: center;
  width: 100px;
  height: 50px;
`

export const Disclaimer = styled(Flex)`
  font-family: 'Source Sans Pro';
  font-size: 15px;
  font-weight: 300;
  color: #808080;
  padding-top: 40px;
  /* align-self: center; */
  text-align: center;
`
