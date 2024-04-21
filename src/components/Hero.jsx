import React from 'react'
import Carousel from './ind/Carousel'

const Hero = () => {

    const heroText = {
        header: "Discover the new horizon in shopping",
        text: "The ultimate destination for discovering and supporting the incredible talents behind our locally-made goods, all with just a click.",
        buttonText: "Start Shopping"
    }
  return (
    <>
        <Carousel header={heroText.header} text={heroText.text} button={heroText.buttonText}/>
    </>
  )
}

export default Hero
