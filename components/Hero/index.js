import React from 'react'
import ContactMe from './ContactMe'

const Hero = () => {
  return (
    <div className="flex flex-wrap-reverse md:flex-wrap md:pt-12 pt-2 leading-none">
      <div className="md:pt-32 md:w-1/2 w-full">
        <h1 className="md:text-4xl text-3xl lg:pl-16 md:text-left md:pl-8 text-center uppercase">
          Hi, I'm Gabriel Miranda
        </h1>
        <h2 className="font-bold md:text-5xl text-4xl mt-2 mb-4 lg:pl-16 md:text-left md:pl-8 text-center uppercase">
          Fullstack Developer
        </h2>
        <ContactMe />
      </div>
      <div className="photo md:w-1/2"></div>
    </div>
  )
}

export default Hero
