import React, { useState } from 'react';
import { AiOutlineLinkedin } from "react-icons/ai";
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscGithub } from 'react-icons/vsc';


import { NavLink } from 'react-router-dom';
import Images from '../assets/images';
import { MENU_PATHS } from '../constants/MENU_PATHS';

function Header() {
  const ListClass = `text-white `
  const [clickState, setClickState] = useState(false);
  const menuClick = () => {
    setClickState(!clickState);
  }

  return (
    <header className='bg-gradient-to-br from-zinc-900 via-zinc-900 to-teal-900 h-[8vh] sticky top-0 z-20 flex items-center '>
      <nav className='py-4 px-7 w-full container mx-auto'>
        <div className='max-lg:hidden flex justify-around items-center'>
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
            <h4 className='brand-logo-text text-white hover:text-teal-600 transition inline-flex'>
             <img src={Images.brandLogo} className='w-10' alt="logo" /> Shayok</h4>
          </a>
          <div className='flex gap-x-4 w-1/3 justify-end '>
            <NavLink to={`https://github.com/enohyn`} target='_blank'>
              <VscGithub className='w-8 h-8 text-white hover:text-teal-600 transition' />
            </NavLink>
            <NavLink to={`https://www.linkedin.com/in/shayok-here/`} target='_blank'>
              <AiOutlineLinkedin className='w-8 h-8 text-white hover:text-teal-600 transition' />
            </NavLink>
          </div>
        </div>
          
          {/* Mobile Menu */}
        <div className='lg:hidden flex justify-around items-center '>
          <span className='w-1/3 flex justify-start'>
            <GiHamburgerMenu className='text-white' onClick={menuClick} />
          </span>
          <ul className={` transition-all list-none capitalize w-2/3 h-screen absolute top-[65px] py-10 flex flex-col justify-start mobile-backdrops ${clickState ? `left-0` : '-left-full'}`}>
            {MENU_PATHS.map((item, index) => (
              <li key={index} className={`${ListClass} py-5 w-full flex flex-col items-center`}>
                <a href={item.path} className={`font-space focus:backdrops rounded-sm text-white w-full text-center py-3`}
                  >
                  {item.title}
                </a>
              </li>
            ))}
            <li>
              <div className="flex justify-center items-end gap-x-3">
                <NavLink to={`https://github.com/enohyn`} target='_blank'>
                  <VscGithub className='w-8 h-8 text-white hover:text-teal-600 transition' />
                </NavLink>
                <NavLink to={`https://www.linkedin.com/in/shayok-here/`} target='_blank'>
                  <AiOutlineLinkedin className='w-8 h-8 text-white hover:text-teal-600 transition' />
                </NavLink>
              </div>
            </li>
          </ul>
          <a className='inline-flex w-1/3 justify-center items-center' href='/shayok-portfolio'>
            <h4 className='lg:brand-logo-text font-megrim text-xl text-white hover:text-teal-600 transition'>Shayok</h4>
          </a>
          <div className='flex gap-x-4 w-1/3 justify-end '>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header