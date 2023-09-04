import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../utils/AnimatedLetters'
import 'animate.css'
import ReactRotatingText from 'react-rotating-text'

import TagCloud from '../components/Tag_Cloud'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['H', 'e', 'y', ' ', 'T', 'h', 'e', 'r', 'e', '!']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center h-full text-center space-y-4 md:space-y-0">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={17}
            />
            <br />
            I'm <span className="text-red_ animate-pulse">Rababe Azil</span>
          </h1>

          <p className="mb-4 text-center text-xl">
            <ReactRotatingText
              className="uppercase text-red_ font-bold"
              items={[
                'Software Engineer',
                'MERN Stack Specialist',
                'Freelancer',
              ]}
            />
          </p>
        </div>

        <div className="md:w-1/2">
          <TagCloud />
        </div>
      </div>
    </>
  )
}

export default Home
