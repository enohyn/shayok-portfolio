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
              <span className='brand-logo-text text-white hover:text-teal-600 transition text-3xl'>&copy; Shayok</span>
          </a>
          
          <div className='flex gap-x-4 w-1/3 justify-end '>
            <span className='font-space text-2xl font-semibold text-white'>Look me up:</span>
            <NavLink to={`https://github.com/enohyn`} target='_blank'>
              <VscGithub className='w-8 h-8 text-white hover:text-teal-600 transition' />
            </NavLink>
            <NavLink to={`https://www.linkedin.com/in/shayok-here/`} target='_blank'>
              <AiOutlineLinkedin className='w-8 h-8 text-white hover:text-teal-600 transition' />
            </NavLink>
          </div>

        </div>
      </nav>
    </footer>
  )
}

export default Footer