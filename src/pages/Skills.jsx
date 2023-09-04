import React from 'react'

const Skills = () => {
  return (
    <>
      <div class="p-10 h-full flex flex-col  mx-auto items-center justify-center md:w-3/4">
        {/* <!-- front-end card --> */}
        <div class="mb-8 flex justify-between items-center w-full hover:-translate-y-1 hover:scale-105 duration-300 ">
          <div class="order-1 bg-gray-400 hover:bg-white_ rounded-lg shadow-xl px-6 py-4">
            <h3 class="mb-3 font-bold text-blue_ text-xl">Front-End </h3>
            <p class="text-sm leading-snug tracking-wide text-blue_ text-opacity-100">
              I bring life to your applications with dazzling front-end designs.
              My toolkit includes React.js, Redux, HTML5, CSS3, and modern
              JavaScript (ES6+). I create engaging, responsive interfaces that
              users love, prioritizing aesthetics and usability.
            </p>
          </div>
        </div>

        {/* <!-- full-stack card --> */}
        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full hover:-translate-y-1 hover:scale-105 duration-300">
          <div class="order-1 bg-red-400 hover:bg-red_ rounded-lg shadow-xl px-6 py-4">
            <h3 class="mb-3 font-bold text-blue_ text-xl">Full-Stack</h3>
            <p class="text-sm font-medium leading-snug tracking-wide text-blue_ text-opacity-100">
              My full-stack expertise means I don't just stop at the front or
              back end; I bring it all together. I deploy applications
              seamlessly on platforms like Heroku, AWS, and Vercel. Git is my
              trusty companion for version control, and I optimize code with
              Webpack and Docker. Your vision, from concept to deployment, is my
              mission.
            </p>
          </div>
        </div>

        {/* <!-- back-end card --> */}
        <div class="mb-8 flex justify-between items-center w-full hover:-translate-y-1 hover:scale-105 duration-300">
          <div class="order-1 bg-gray-400 hover:bg-white_ rounded-lg shadow-xl px-6 py-4">
            <h3 class="mb-3 font-bold text-blue_ text-xl">Back-End </h3>
            <p class="text-sm leading-snug tracking-wide text-blue_ text-opacity-100">
              Behind the scenes, I wield the power of Node.js and Express.js to
              build robust server-side components. Crafting RESTful APIs is my
              forte, and I take data security seriously with stringent
              authentication and authorization measures. Databases, be it
              MongoDB for flexibility or SQL for structured data, are my
              playgrounds.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
