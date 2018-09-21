import React, { Component } from 'react'
import Slider from 'react-slick'
import InvestmentCard from '../../../../components/InvestmentCard'
import { Container } from './styles'
import data from './testData.json'

class InvestmentCarousel extends Component {
  render() {
    const settings = {
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000
    }
    return (
      <Container>
        <Slider {...settings}>
          {data.map(entry => <InvestmentCard entry={entry} />)}
        </Slider>
      </Container>
    )
  }
}
export default InvestmentCarousel
