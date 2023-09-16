import React from 'react'

import Zenova from '../assets/images/Zenova.jpg'
import Fb_bg from '../assets/images/Fb_bg.jpg'
import leWagon_dt from '../assets/images/leWagon_dt.jpg'
import Shirt_gen from '../assets/images/Shirt_gen.jpg'

import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    // <!-- component -->
    <div class="px-3 md:lg:xl:px-40 pb-20">
      <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-transparent text-white_  ">
        <Link
          to="https://github.com/azilRababe/Zenova"
          target="_blank"
          class="p-10 flex flex-col items-center text-center group hover:bg-white_ cursor-pointer "
        >
          <span class="p-5 rounded-full border border-red_ ">
            <img src={Zenova} alt="" className="rounded-full " />
          </span>
          <p class="text-xl font-medium text-slate-700 mt-3">Zenova</p>
          <p class="mt-2 text-sm text-slate-500">
            Empowering healthy living through a MERN-based eCommerce platform,
            offering organic products.
          </p>
        </Link>

        <Link
          to="https://github.com/azilRababe/Dracarys"
          target="_blank"
          class="p-10 flex flex-col items-center text-center group hover:bg-white_ cursor-pointer"
        >
          <span class="p-5 rounded-full border border-red_ text-white_  shadow-orange-200">
            <img src={Fb_bg} alt="" className="rounded-full " />
          </span>
          <p class="text-xl font-medium text-slate-700 mt-3">
            Socail Media application
          </p>
          <p class="mt-2 text-sm text-slate-500">
            A social media app, akin to Facebook, enabling users to post and
            engage with each other's content.
          </p>
        </Link>

        <Link
          to="https://github.com/azilRababe/DrowsyAlertApp"
          target="_blank"
          class="p-10 flex flex-col items-center text-center group hover:bg-white_ cursor-pointer"
        >
          <span class="p-5 rounded-full border border-red_ text-white_  shadow-yellow-200">
            <img src={leWagon_dt} alt="" className="rounded-full" />
          </span>
          <p class="text-xl font-medium text-slate-700 mt-3">
            Drowsiness Detection System
          </p>
          <p class="mt-2 text-sm text-slate-500">
            Created using Python, Flask, and a TensorFlow-trained model,
            designed to identify driver fatigue and prevent accidents.
          </p>
        </Link>

        <Link
          to="https://github.com/azilRababe/AIWeb3D"
          target="_blank"
          class="p-10 flex flex-col items-center text-center group hover:bg-white_ cursor-pointer"
        >
          <span class="p-5 rounded-full border border-red_ text-white_  shadow-lime-200">
            <img src={Shirt_gen} alt="" className="rounded-full " />
          </span>
          <p class="text-xl font-medium text-slate-700 mt-3">
            T-Shirt Design Generator
          </p>
          <p class="mt-2 text-sm text-slate-500">
            A T-shirt design generator powered by OpenAI's GPT-3, crafting
            unique T-shirt designs tailored to user input.
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Projects
