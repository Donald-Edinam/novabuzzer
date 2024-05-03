import React from 'react'
import Carousel from './ind/Carousel'
import Img0 from '../assets/img0.jpg'

const Hero = () => {

    const heroText = {
        header: "Discover the new horizon in shopping",
        text: "The ultimate destination for discovering and supporting the incredible talents behind our locally-made goods, all with just a click.",
        buttonText: "Start Shopping",
        heroImage: Img0,
    }
  return (
    <>
        <Carousel header={heroText.header} text={heroText.text} button={heroText.buttonText} heroImg={heroText.heroImage}/>
    </>
  )
}

export default Hero
