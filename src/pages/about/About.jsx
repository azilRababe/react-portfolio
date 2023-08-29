import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../../utils/AnimatedLetters'
import { DiNodejs } from 'react-icons/di'
import { AiFillHtml5 } from 'react-icons/ai'

import Particles_bg from '../../components/Particles_bg'
import {
  BiLogoCss3,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoMongodb,
} from 'react-icons/bi'
import { BsGit } from 'react-icons/bs'
import 'animate.css'
import './style.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e', '.']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="space-y-60 md:space-x-36 md:mx-28 flex md:flex-row items-center justify-center h-screen cursor-pointer animate__animated animate__fadeInTopLeft ">
      <div className="stage-cube-cont h-screen md:w-1/2 absolute -z-50">
        <div className="cubespinner">
          <div className="face1">
            <DiNodejs color="#215732" />
          </div>
          <div className="face2">
            <BiLogoMongodb color="#589636" />
          </div>
          <div className="face3">
            <BiLogoCss3 color="#28A4D9" />
          </div>
          <div className="face4">
            <BiLogoReact color="#5ED4F4" />
          </div>
          <div className="face5">
            <BiLogoJavascript color="#EFD81D" />
          </div>
          <div className="face6">
            <BsGit color="#EC4D28" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4 md:px-8 lg:px-12 mx-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <p className="text-left">
          I'm a passionate developer who loves creating interactive web
          experiences. Whether it's crafting intuitive user interfaces or diving
          into complex backend logic, I thrive on challenges.
        </p>
      </div>
    </div>
  )
}

export default About
