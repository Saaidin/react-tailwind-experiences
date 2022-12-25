import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import {Link as LinkScroll} from 'react-scroll';
import {Link as LinkRouter} from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
  };
  
  return (
    <div className='absolute w-full flex justify-between p-4 items-center nav-fixed z-50'>
      {/* Mobile View */}
      <LinkRouter to="/">
        <h1 className='text-white font-bold text-2xl z-20'>Travels</h1>
      </LinkRouter>
      <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer md:hidden' size={25} />
      <div
        className={
          nav
            ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
        }
      >
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <a href="#home">
            <li className='font-bold text-3xl p-8'>Home</li>
          </a>
          <a href="#destinations">
            <li className='font-bold text-3xl p-8'>Destinations</li>
          </a>
          <a href="#reservations">
            <li className='font-bold text-3xl p-8'>Reservations</li>
          </a>
          <a href="#foods">
            <li className='font-bold text-3xl p-8'>Amenities</li>
          </a>
          <a href="#rooms">
            <li className='font-bold text-3xl p-8'>Rooms</li>
          </a>
          <LinkRouter to="/blog">
            <li className='font-bold text-3xl p-8'>Blog</li>
          </LinkRouter>
        </ul>
      </div>
      {/* Except Mobile View */}
      <div className="hidden md:block z-50 cursor-pointer">
        <ul className='flex flex-row w-full h-full items-center justify-center text-white'>
          <LinkScroll activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>
            <li className='font-bold text-2xl p-8'>Home</li>
          </LinkScroll>
          <LinkScroll activeClass="active" to="destinations" spy={true} smooth={true} offset={-70} duration={500}>
            <li className='font-bold text-2xl p-8'>Destinations</li>
          </LinkScroll>
          <LinkScroll activeClass="active" to="reservations" spy={true} smooth={true} offset={-90} duration={500}>
           <li className='font-bold text-2xl p-8'>Reservations</li>
          </LinkScroll>
          <LinkScroll activeClass="active" to="foods" spy={true} smooth={true} offset={-100} duration={500}>
            <li className='font-bold text-2xl p-8'>Amenities</li> 
          </LinkScroll>
          <LinkScroll activeClass="active" to="rooms" spy={true} smooth={true} offset={-180} duration={500}>
            <li className='font-bold text-2xl p-8'>Rooms</li>
          </LinkScroll>
          <LinkRouter to="/blog">
            <li className='font-bold text-2xl p-8'>Blog</li>
          </LinkRouter>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
