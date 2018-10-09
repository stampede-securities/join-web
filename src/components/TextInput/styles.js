import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Input = styled.input`
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '38px')};
  border: ${props =>
    (props.isBold &&
      (props.error ? '1px solid #3d8cba' : '1px solid #02b3c4')) ||
    (props.error ? '0.5px solid #3d8cba' : '0.5px solid #02b3c4')};
  font-size: ${props => (props.fontSize ? props.fontSize : '15px')};
  padding-left: ${props => !props.alignCenter && '14px'};
  font-family: 'Source Sans Pro';
  font-weight: 700;
  opacity: ${props => (props.error ? 1 : 0.6)};
  letter-spacing: 0.8px;
  border-radius: 4px;
  position: relative;
  background-color: ${props => (props.error ? ({ theme }) => 'red' : 'white')};
  ::placeholder {
    font-weight: 700;
    opacity: ${props => props.opacity};
  }
  box-sizing: border-box;
  text-align: ${props => props.alignCenter && 'center'};
`
export const TextArea = styled.textarea`
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '148px')};
  border: ${props =>
    (props.isBold &&
      (props.error ? '1px solid #FF573B' : '1px solid #02b3c4')) ||
    (props.error ? '0.5px solid #FF573B' : '0.5px solid #02b3c4')};
  font-size: 15px;
  padding: ${props => props.placeholderPadding || '14px'};
  color: black;
  font-family: 'Source Sans Pro';
  font-weight: 400;
  opacity: ${props => (props.error ? 1 : 0.6)};
  letter-spacing: 0.8px;
  border-radius: 4px;
  box-sizing: border-box;
  position: relative;
  resize: none;
  background-color: ${props => (props.error ? ({ theme }) => 'red' : 'white')};
  resize: none;
`
export const Error = styled(Flex)`
  color: red;
  font-family: 'Source Sans Pro';
  font-weight: 700;
  letter-spacing: 0.7px;
  font-size: 13px;
`
export const ErrorWrapper = styled(Flex)`
  flex-direction: row;
  margin-top: 4px;
  width: 100%;
`
export const Icon = styled.img`
  width: 14.65px;
  height: 14.65px;
  margin-right: 3.3px;
  resize: none;
  outline: none;
`
export const Image = styled.img`
  width: 15px;
  height: 12px;
  position: absolute;
  margin-top: 13px;
  margin-left: -25px;
  cursor: pointer;
`

export const Wrapper = styled(Flex)`
  flex-direction: column;
`
