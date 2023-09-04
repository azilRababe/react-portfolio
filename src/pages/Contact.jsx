import React, { useRef } from 'react'

import 'animate.css'

import emailjs from '@emailjs/browser'

const Contact = () => {
  const clearForm = () => {
    document.getElementById('Name').value = ''
    document.getElementById('Email').value = ''
    document.getElementById('Subject').value = ''
    document.getElementById('Message').value = ''
    document.getElementById('sent-message').innerHTML =
      'Thank you for your message. I will get back to you soon.'
  }
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_6npcntr',
        'template_ybbdson',
        form.current,
        'b7fMGYxnVSB2IHtq_'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearForm()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <>
      <section className="text-gray-600 body-font relative h-full">
        <div class="absolute inset-0 bg-transparent ">
          <iframe
            className="rounded-sm"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6944536.185077172!2d-7.150687899999999!3d31.800834649999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b88619651c58d%3A0xd9d39381c42cffc3!2sMorocco!5e0!3m2!1sen!2sma!4v1693730727851!5m2!1sen!2sma"
            width="100%"
            height="100%"
            allowfullscreen=""
            // loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form
          className="container px-5 py-24 mx-auto flex h-full justify-center items-center"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="lg:w-1/3 md:w-1/2 bg-blue_  p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-red_ text-lg mb-1 title-font uppercase font-semibold">
              Contact Me
            </h2>
            <p className="leading-relaxed mb-5 text-white_">
              Thank you for your interest in getting in touch with me. your
              feedback, questions, and inquiries are valuable.
            </p>
            <div className="flex space-x-5">
              <div className="relative mb-4">
                <label htmlFor="Name" className="leading-7 text-sm text-white_">
                  Name
                </label>
                <input
                  placeholder="Name"
                  id="Name"
                  name="Name"
                  className="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="Email"
                  className="leading-7 text-sm text-white_"
                >
                  Email
                </label>
                <input
                  placeholder="Email"
                  type="email"
                  id="Email"
                  name="Email"
                  className="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="Subject"
                className="leading-7 text-sm text-white_"
              >
                Subject
              </label>
              <input
                placeholder="Subject"
                id="Subject"
                name="Subject"
                className="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="Message"
                className="leading-7 text-sm text-white_"
              >
                Message
              </label>
              <textarea
                placeholder="Please provide as much detail as possible when reaching out, so I can better understand your needs and respond appropriately."
                id="Message"
                name="Message"
                className="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
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
