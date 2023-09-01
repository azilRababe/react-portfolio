import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../utils/AnimatedLetters'
import dark_logo from '../assets/images/dark_logo.svg'
import 'animate.css'

const Contact = () => {
  const [letterclassName, setLetterclassName] = useState('text-animate')
  const nameArray = ['C', 'o', 'n', 't', 'a', 'c', 't ', '', 'M', 'e', '.']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterclassName('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-transparent">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>
        </div>
        <form className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-blue_ rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-red_ text-lg mb-1 title-font uppercase font-semibold">
              Contact Me
            </h2>
            <p className="leading-relaxed mb-5 text-white_">
              Thank you for your interest in getting in touch with me. your
              feedback, questions, and inquiries are valuable.
            </p>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-white_">
                Email
              </label>
              <input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-white_">
                Message
              </label>
              <textarea
                placeholder="Please provide as much detail as possible when reaching out, so I can better understand your needs and respond appropriately."
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-red_ bg-transparent border border-red_ py-2 px-6 focus:outline-none hover:bg-red_ hover:text-white_  text-lg  transition duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              Send
            </button>
            <p className="text-xs text-gray-500 mt-3">
              I look forward to hear from you ...
            </p>
          </div>
        </form>
      </section>
    </>
  )
}

export default Contact
