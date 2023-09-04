import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../../utils/AnimatedLetters'
import { DiNodejs } from 'react-icons/di'
import {
  BiLogoCss3,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoMongodb,
} from 'react-icons/bi'
import { BsGit } from 'react-icons/bs'
import 'animate.css'
import './style.scss'
import { Link } from 'react-router-dom'

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
    <div className="flex h-full content-center justify-center items-center cursor-pointer ">
      <div className="stage-cube-cont w-full md:w-1/2 absolute -z-10">
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
      <div className="mx-10 w-full md:w-1/2 mt-80 md:mt-0 md:ml-auto">
        <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <p className="text-left">
          I'm a Software Engineer specializing in{' '}
          <span className="border-b-2 border-red_ hover:text-red_ ">
            <Link to={'https://www.mongodb.com/mern-stack'}>MERN Stack</Link>
          </span>{' '}
          applications. My passion lies in creating captivating and
          high-performance web solutions that not only meet but exceed your
          expectations. I'm driven by an unwavering commitment to delivering
          dynamic and efficient web applications that leave a lasting impact.
        </p>
      </div>
    </div>
  )
}

export default About
