/* eslint-disable import/prefer-default-export */

import styled from 'styled-components'
import { Flex } from 'grid-styled'
import Button from '../../../../components/Button'
import Slider from 'react-slick'

export const Carousel = styled(Slider)`
  position: absolute;
`

export const TitleCard = styled(Flex)`
  height: 100vh;
  width: auto;
  position: absolute;
  display: inline-block;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`

export const Slide = styled.div`
  position: relative;
`

export const SlideEntry = styled.img`
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;
  height: 100vh;
  min-width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: -1000;
`

export const SlideOneButton = styled(Button)`
  margin-top: 200px;
  align-self: center;
  width: 100px;
  height: 50px;
`

export const SlideContent = styled(Flex)`
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 40%;
  width: 60%;
  left: 20%;
`

export const SlideHeader = styled.div`
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: 60px;
  color: white;
  padding-bottom: 30px;
`

export const SlideSubheader = styled.div`
  font-family: 'Source Sans Pro';
  font-weight: 300;
  font-size: 40px;
  color: white;
  padding-bottom: 40px;
`

export const SlideButton = styled(Button)`
  align-self: center;
  width: 100px;
  height: 50px;
`
