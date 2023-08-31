import React, { useState, useEffect } from 'react'
import Tag_Cloud from '../components/Tag_Cloud'
import 'animate.css'
import AnimatedLetters from '../utils/AnimatedLetters'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['G', '2 ', 'K', ' ', 'm', 'e', '.']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="flex h-screen content-center justify-center items-center cursor-pointer animate__animated animate__fadeInTopLeft ">
      <div className="tagCloud w-full md:w-1/2 absolute -z-10 top-0 md:top-20 md:left-20  animate__animated animate__zoomInDown">
        <Tag_Cloud />
      </div>
      <div className="mx-10 w-full md:w-1/2 mt-80 md:mt-0 md:ml-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <p className="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officia
          possimus in ab est vel accusantium. Enim dignissimos doloremque
          exercitationem facilis, ut fugiat, blanditiis impedit, soluta tenetur
          voluptatem recusandae unde!
        </p>
      </div>
    </div>
  )
}

export default Skills
