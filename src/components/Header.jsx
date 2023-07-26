import React from 'react';
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from 'react-icons/vsc';

import { NavLink } from 'react-router-dom';
import { MENU_PATHS } from '../constants/MENU_PATHS';
function Header() {
  const ListClass = `text-white `


  return (
    <header className='bg-gradient-to-br from-zinc-900 via-zinc-900 to-teal-900 h-[8vh] sticky top-0 z-20 flex items-center '>
      <nav className='py-4 px-7 w-full container mx-auto'>
        <div className='flex justify-around items-center'>
          <ul className='list-none capitalize flex items-center justify-start w-1/3'>
            {MENU_PATHS.map((item, index) => (
              <li key={index} className={ListClass}>
                <a href={item.path} className={`font-space focus:backdrops nav-on py-3 px-4 rounded-sm text-white  `}
                  end>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <a className='inline-flex w-1/3 justify-center  items-center' href='/shayok-portfolio'>
            <h4 className='brand-logo-text text-white hover:text-teal-600 transition'>Shayok</h4>
          </a>
          <div className='flex gap-x-4 w-1/3 justify-end '>
            <NavLink to={`https://github.com/enohyn`} target='_blank'>
              <VscGithub className='w-8 h-8 text-white hover:text-teal-600 transition'/>
            </NavLink>
            <NavLink to={`https://www.linkedin.com/in/shayok-here/`} target='_blank'>
              <AiOutlineLinkedin className='w-8 h-8 text-white hover:text-teal-600 transition' />
            </NavLink>
          </div>
         
        </div>
      </nav>
    </header>
  )
}

export default Header