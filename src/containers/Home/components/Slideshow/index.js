import React from 'react'
import {
  TitleCard,
  SlideEntry,
  Carousel,
  Slide,
  SlideOneButton,
  SlideContent,
  SlideHeader,
  SlideSubheader,
  SlideButton
} from './styles'

import slide1 from './slide1.png'
import slide2 from './slide2.jpg'
import slide3 from './slide3.jpg'
import slide4 from './slide4.jpg'

const SlideOne = () => (
  <Slide>
    <SlideContent>
      <SlideOneButton blue text="Join Now" to="/join" size="medium" />
    </SlideContent>
    <SlideEntry src={slide1} />
  </Slide>
)

const SlideTwo = () => (
  <Slide>
    <SlideContent>
      <SlideHeader>Invest</SlideHeader>
      <SlideSubheader>
        Real Investments Means Everyone Is In It Together
      </SlideSubheader>
      <SlideButton blue text="Explore" to="/explore" size="medium" />
    </SlideContent>
    <SlideEntry src={slide2} />
  </Slide>
)

const SlideThree = () => (
  <Slide>
    <SlideContent>
      <SlideHeader>Stampede</SlideHeader>
      <SlideSubheader>
        Redefining the Music Industry for The Artists You Love
      </SlideSubheader>
      <SlideButton blue text="Explore" to="/explore" size="medium" />
    </SlideContent>
    <SlideEntry src={slide3} />
  </Slide>
)

const SlideFour = () => (
  <Slide>
    <SlideContent>
      <SlideHeader>Stampede</SlideHeader>
      <SlideSubheader>
        Reinventing Filmmaking to Change Entertainment
      </SlideSubheader>
      <SlideButton blue text="Explore" to="/explore" size="medium" />
    </SlideContent>
    <SlideEntry src={slide4} />
  </Slide>
)

const ImageCarousel = () => {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    draggable: false
  }
  return (
    <TitleCard>
      <Carousel {...settings}>
        <SlideOne />
        <SlideTwo />
        <SlideThree />
        <SlideFour />
      </Carousel>
    </TitleCard>
  )
}

export default ImageCarousel
