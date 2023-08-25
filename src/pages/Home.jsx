import React, { useState } from 'react'
import 'animate.css'

const Home = () => {
  return (
    <>
      <div class="mx-28 flex h-screen items-center animate__animated animate__fadeInTopLeft">
        <div class="w-[100%] md:w-[50%] ">
          <h1 class="text-4xl font-bold mb-4 ">
            Hey There! <br />
          </h1>
          <p>
            I'm <mark className="bg-red_ px-2 ">Rababe Azil</mark> A software
            engineer specializing in MERN stack applications. Holding a
            bachelor's degree in Computer Science and complementing it with an
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
        <div></div>
      </div>
    </>
  )
}

export default Home
