import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../utils/AnimatedLetters'
import dark_logo from '../assets/images/dark_logo.svg'
import 'animate.css'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['R', 'a', 'b', 'a', 'b', 'e', ' ', 'A', 'z', 'i', 'l', '.']

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
      <div class="mx-10 flex h-screen items-center content-center animate__animated animate__fadeInTopLeft cursor-pointer">
        <div class="w-full md:w-1/2">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'</span>
            <span className={`${letterClass} _16`}>m</span>{' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={17}
            />
          </h1>
          <p className="">
            A software engineer specializing in MERN stack applications. Holding
            a bachelor's degree in Computer Science and complementing it with an
            extensive Data Science BootCamp, I bring a comprehensive skill set
            to the table.
          </p>
          <small class="mb-4 text-center  text-sm text-gray-600">
            Software Engineer | MERN Stack Specialist | Freelancer
          </small>
          <div class="flex justify-start mt-4">
            <button class="animate__animated animate__tada animate__delay-2s animate__repeat-2 bg-transparent hover:bg-red_ border border-red_ text-red_ hover:text-white_ px-12 py-2  transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              CONTACT ME
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={dark_logo}
            alt="logo"
            className="animate__animated hidden md:block animate__fadeInRight ml-24"
          />
        </div>
      </div>
    </>
  )
}

export default Home
