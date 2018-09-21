import React from 'react'
import { Container, Img, Header, Content } from './styles'

const InfoSection = ({ header, text, img }) => (
  <Container>
    <Img src={img} />
    <Header>{header}</Header>
    <Content>{text}</Content>
  </Container>
)

export default InfoSection
