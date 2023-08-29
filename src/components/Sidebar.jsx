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
} from 'react-icons/bi'
import { MdOutlineTipsAndUpdates, MdOutlineRemoveRedEye } from 'react-icons/md'

const Sidebar = () => {
  return (
    <>
      <div>
        <div className="sidebar bg-red_ flex flex-col justify-between items-center w-16 h-screen py-16 absolute ">
          <div className="logo">
            <Link to="/">
              <img src={dark_logo} alt="logo" className="w-12 h-auto" />
            </Link>
          </div>

          <nav className="nav_main flex flex-col space-y-6 items-center text-2xl ">
            <NavLink
              exact={true}
              to="/"
              className="group hover:text-blue_ transition-colors duration-300 ease-in"
              activeClassName="text-white"
            >
              <BiHomeSmile className="group-hover:hidden" />
              <span className="hidden text-[10px] tracking-widest group-hover:block">
                HOME
              </span>
            </NavLink>

            <NavLink
              to="/about"
              className="group hover:text-blue_ transition-colors duration-300 ease-in"
              activeClassName="text-coolers_red"
            >
              <BiUser className="group-hover:hidden" />
              <span className="hidden text-[10px] tracking-widest group-hover:block">
                ABOUT
              </span>
            </NavLink>

            <NavLink
              to="/skills"
              className="group hover:text-blue_ transition-colors duration-300 ease-in"
              activeClassName="text-coolers_red"
            >
              <BiCodeBlock className="group-hover:hidden" />
              <span className="hidden text-[10px] tracking-widest group-hover:block">
                SKILLS
              </span>
            </NavLink>

            <NavLink
              to="/tips"
              className="group hover:text-blue_ transition-colors duration-300 ease-in"
              activeClassName="text-coolers_red"
            >
              <MdOutlineTipsAndUpdates className="group-hover:hidden" />
              <span className="hidden text-[10px] tracking-widest group-hover:block">
                TIPS
              </span>
            </NavLink>
            <NavLink
              to="/work"
              className="group hover:text-blue_ transition-colors duration-300 ease-in"
              activeClassName="text-coolers_red"
            >
              <MdOutlineRemoveRedEye className="group-hover:hidden" />
              <span className="hidden text-[10px] tracking-widest group-hover:block">
                PROJECTS
              </span>
            </NavLink>
            <NavLink
              to="/contact"
              className="group hover:text-blue_ transition-colors duration-300 ease-in"
              activeClassName="text-coolers_red"
            >
              <BiPhoneCall className="group-hover:hidden" />
              <span className="hidden text-[10px] tracking-widest group-hover:block">
                CONTACT
              </span>
            </NavLink>
          </nav>

          <div className="nav_footer flex flex-col space-y-4 items-center">
            <NavLink
              to="https://github.com/azilRababe"
              className=" hover:text-blue_ transition-colors duration-150 ease-in"
            >
              <BiLogoGithub />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/azilrababe"
              className=" hover:text-blue_ transition-colors duration-150 ease-in"
            >
              <BiLogoLinkedinSquare />
            </NavLink>
            <NavLink
              to="#"
              className=" hover:text-blue_ transition-colors duration-150 ease-in"
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
