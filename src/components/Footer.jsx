import React from 'react';
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
function Footer() {
  return (
    <footer className='bg-gradient-to-tr from-zinc-900 via-zinc-900 h-full border-t-l bottom-0 flex items-center '>
      <nav className='py-4 w-full container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#meet-shayok' className='list-none capitalize flex items-center justify-start w-1/3'>
              <span className='font-megrim text-lg lg:text-3xl font-extrabold text-white hover:text-teal-600 transition'>&copy; Shayok</span>
          </a>
          
          <div className='flex gap-x-4 w-2/3 lg:w-1/3 justify-end max-lg:items-center '>
            <span className='font-space text-base lg:text-2xl font-semibold text-white'>Look me up:</span>
            <NavLink to={`https://github.com/enohyn`} target='_blank'>
              <VscGithub className='lg:w-8 lg:h-8 text-white hover:text-teal-600 transition' />
            </NavLink>
            <NavLink to={`https://www.linkedin.com/in/shayok-here/`} target='_blank'>
              <AiOutlineLinkedin className='lg:w-8 lg:h-8 text-white hover:text-teal-600 transition' />
            </NavLink>
          </div>

        </div>
      </nav>
    </footer>
  )
}

export default Footer