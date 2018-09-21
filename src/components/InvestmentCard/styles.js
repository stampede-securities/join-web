import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  flex-direction: column;
  background-color: #ffffff;
  width: 350px;
`

export const Img = styled.img`
  height: 225px;
`

export const Checkmark = styled.i`
  display: ${props => (props.done ? '' : 'none')};
  position: absolute;
  background: linear-gradient(240deg, #3bcdf2, #0aa8ae, #0f3866);
  align-self: center;
  text-align: center;
  top: 140px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const CheckImg = styled.img`
  padding-left: 7px;
  padding-top: 7px;
`

export const Money = styled(Flex)`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  height: 30px;
  width: 350px;
  z-index: 1;
  color: white;
  align-items: center;
  justify-content: center;
  font-family: 'Source Sans Pro';
  font-weight: 300;
  top: 195px;
`

export const Progressbar = styled(Flex)`
  background: ${props =>
    props.progress > 0.5
      ? 'linear-gradient(90deg, #3bcdf2, #0aa8ae, #0f3866)'
      : 'linear-gradient(90deg, #3bcdf2, #0aa8ae)'};
  position: absolute;
  height: 6px;
  width: ${props => `${Math.ceil(props.progress * 350)}px`};
  z-index: 1;
  color: white;
  align-items: center;
  justify-content: center;
  font-family: 'Source Sans Pro';
  top: 225px;
`

export const TitleSection = styled(Flex)`
  text-align: left;
  flex-direction: column;
  background-color: #fafafa;
  width: 100%;
`

export const Content = styled(Flex)`
  width: 90%;
  align-self: center;
  flex-direction: column;
`

export const NameHeader = styled.a`
  text-decoration: none;
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: 18px;
  padding-top: 15px;
  color: ${props => (props.done ? '#afafaf' : '#000000')};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  &:hover {
    text-decoration: underline #0aa8ae;
    color: #0aa8ae;
  }
`

export const NameDescription = styled(Flex)`
  font-family: 'Source Sans Pro';
  font-weight: 300;
  font-size: 14px;
  color: ${props => (props.done ? '#d6d6d6' : '#a0a0a0')};
  padding-top: 5px;
  padding-bottom: 20px;
`

export const DataSection = styled(Flex)`
  text-align: left;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
`

export const DataItems = styled.ul`
  max-width: 40em;
  padding: 0;
  overflow-x: hidden;
  list-style: none;
  li:before {
    float: left;
    width: 0;
    white-space: nowrap;
    color: #dedee0;
    font-size: 10px;
    content: '. . . . . . . . . . . . . . . . . . . . '
      '. . . . . . . . . . . . . . . . . . . . '
      '. . . . . . . . . . . . . . . . . . . . '
      '. . . . . . . . . . . . . . . . . . . . ';
  }
  span:first-child {
    padding-right: 0.33em;
    background: white;
    color: ${props => (props.done ? '#bababa' : '#838383')};
  }
  span + span {
    float: right;
    padding-left: 0.33em;
    background: white;
    color: ${props => (props.done ? '#b3b3b3' : '#000000')};
  }
`

export const DataItem = styled.li`
  padding-bottom: 10px;
`

export const LeftText = styled.span`
  font-family: 'Open Sans';
  font-size: 13px;
  font-weight: 300;
`

export const RightText = styled.span`
  font-family: 'Open Sans';
  font-size: 13px;
  font-weight: 600;
`
