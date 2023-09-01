import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import dark_logo from '../assets/images/dark_logo.svg'

// icons
import {
  BiHomeSmile,
  BiUser,
  BiCodeBlock,
  BiPhoneCall,
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoSlack,
  BiNews,
} from 'react-icons/bi'
import { MdOutlineTipsAndUpdates, MdOutlineRemoveRedEye } from 'react-icons/md'

const Sidebar = () => {
  return (
    <>
      <div>
        <div className="sidebar bg-transparent flex flex-row justify-around items-center h-14 absolute bottom-0 w-full z-10 border-t-2 border-white_  rounded-full  ">
          <div className="logo">
            <Link to="/">
              <img src={dark_logo} alt="logo" className="w-8 h-auto md:w-10" />
            </Link>
          </div>

          <nav className="nav_main flex flex-row space-x-4 md:space-x-6 items-center text-xl md:text-2xl">
            <NavLink
              exact={true}
              to="/"
              className="group hover:text-red_ transition-colors duration-300 ease-in"
            >
              <BiHomeSmile className="group-hover:hidden" />
              <span className="hidden text-xs md:text-sm tracking-widest group-hover:block">
                HOME
              </span>
            </NavLink>

            <NavLink
              to="/about"
              className="group hover:text-red_ transition-colors duration-300 ease-in"
            >
              <BiUser className="group-hover:hidden" />
              <span className="hidden text-xs md:text-sm tracking-widest group-hover:block">
                ABOUT
              </span>
            </NavLink>

            <NavLink
              to="/skills"
              className="group hover:text-red_ transition-colors duration-300 ease-in"
            >
              <BiCodeBlock className="group-hover:hidden" />
              <span className="hidden text-xs md:text-sm tracking-widest group-hover:block">
                SKILLS
              </span>
            </NavLink>

            <NavLink
              to="/news"
              className="group hover:text-red_ transition-colors duration-300 ease-in"
            >
              <BiNews className="group-hover:hidden" />
              <span className="hidden text-xs md:text-sm tracking-widest group-hover:block">
                NEWS
              </span>
            </NavLink>
            <NavLink
              to="/projects"
              className="group hover:text-red_ transition-colors duration-300 ease-in"
            >
              <MdOutlineRemoveRedEye className="group-hover:hidden" />
              <span className="hidden text-xs md:text-sm tracking-widest group-hover:block">
                PROJECTS
              </span>
            </NavLink>
            <NavLink
              to="/contact"
              className="group hover:text-red_ transition-colors duration-300 ease-in"
            >
              <BiPhoneCall className="group-hover:hidden" />
              <span className="hidden text-xs md:text-sm tracking-widest group-hover:block">
                CONTACT
              </span>
            </NavLink>
          </nav>

          <div className="nav_footer flex flex-row space-x-4 items-center">
            <NavLink
              to="https://github.com/azilRababe"
              className=" hover:text-red_ transition-colors duration-150 ease-in"
            >
              <BiLogoGithub />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/azilrababe"
              className=" hover:text-red_ transition-colors duration-150 ease-in"
            >
              <BiLogoLinkedinSquare />
            </NavLink>
            <NavLink
              to="#"
              className=" hover:text-red_ transition-colors duration-150 ease-in"
            >
              <BiLogoSlack className="" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
