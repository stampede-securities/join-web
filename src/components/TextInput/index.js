import React, { Component } from 'react'
import {
  TextArea,
  Input,
  Error,
  Icon,
  ErrorWrapper,
  Image,
  Wrapper
} from './styles'
import Exclamation from './error-exclamation.svg'
import Arrow from './downArrow.png'

class TextInput extends Component {
  constructor(props) {
    super(props)
    this.state = { chars: '' }
  }

  handleChange = e => {
    this.setState({ chars: e.target.value })
    if (this.props.onChange) {
      this.props.onChange(e)
    }
  }

  render() {
    const {
      textArea,
      placeholder,
      alignCenter,
      onChange,
      width,
      error,
      enter,
      onBlur,
      select,
      onArrowClick,
      fontSize,
      placeholderBold,
      opacity,
      type,
      center,
      errorMessage,
      step,
      min,
      onClick,
      ...rest
    } = this.props

    if (textArea) {
      return (
        <div>
          <TextArea
            placeholder={placeholder}
            alignCenter={alignCenter}
            onChange={onChange}
            select={select}
            {...rest}
            error={error}
            width={width}
            placeholderBold={placeholderBold}
            opacity={opacity}
            min={min}
          />
          {error && (
            <ErrorWrapper>
              <Icon src={Exclamation} />
              <Error>Please enter {placeholder.toLowerCase()}</Error>
            </ErrorWrapper>
          )}
        </div>
      )
    } else if (select) {
      return (
        <div>
          <Input
            placeholder={placeholder}
            alignCenter={alignCenter}
            onChange={onChange}
            onBlur={onBlur}
            width={width}
            error={error}
            onClick={onClick}
            fontSize={fontSize}
            placeholderBold={placeholderBold}
            opacity={opacity}
            type={type}
            center={center}
            min={min}
            {...rest}
          />
          <Image src={Arrow} onClick={onArrowClick} />
          {error &&
            !errorMessage && (
              <ErrorWrapper>
                <Icon src={Exclamation} />
                <Error>Please enter {placeholder.toLowerCase()}</Error>
              </ErrorWrapper>
            )}
          {errorMessage &&
            error && (
              <ErrorWrapper>
                <Icon src={Exclamation} />
                <Error>{errorMessage}</Error>
              </ErrorWrapper>
            )}
        </div>
      )
    }
    return (
      <div>
        <Wrapper>
          <Input
            alignCenter={alignCenter}
            placeholder={placeholder}
            onChange={this.handleChange}
            error={error}
            width={width}
            fontSize={fontSize}
            placeholderBold={placeholderBold}
            opacity={opacity}
            type={type}
            onBlur={onBlur}
            min={min}
            {...rest}
          />
        </Wrapper>
        {error &&
          !errorMessage && (
            <ErrorWrapper>
              <Icon src={Exclamation} />
              <Error>Please enter {placeholder.toLowerCase()}</Error>
            </ErrorWrapper>
          )}
        {errorMessage &&
          error && (
            <ErrorWrapper>
              <Icon src={Exclamation} />
              <Error>{errorMessage}</Error>
            </ErrorWrapper>
          )}
      </div>
    )
  }
}

export default TextInput
