import React, { useState } from 'react';
import Animated from './Animated';
import navLinks from '../constants/navLinks';
import XMark from '../icons/XMark';
import HamburgerIcon from '../icons/HamburgerIcon';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mt-4">
      <div className="flex justify-between items-center">
        <Animated animationName="slide-top" duration="0.75s" delay="0s" as="div">
          <a href="/" className="btn btn-ghost font-bold text-2xl text-base-content">
            FENDCH
          </a>
        </Animated>
        <ul className="menu menu-horizontal px-1 md:flex hidden gap-2">
          {navLinks.map((link, index) => (
            <Animated animationName="slide-top" duration="0.75s" delay={`${index * 0.1}s`} as="li" key={index}>
              <Link to={link.path} className="rounded-lg">
                {link.name}
              </Link>
            </Animated>
          ))}
        </ul>
        <Animated
          as="li"
          animationName="slide-top-bounce"
          duration="0.50s"
          delay={`${navLinks.length * 0.1}s`}
          className="md:hidden block"
        >
          <HamburgerIcon onClick={() => setOpen(true)} />
        </Animated>
      </div>
      {open && (
        <Animated
          as="div"
          animationName="slide-right"
          duration="0.5s"
          delay="0s"
          className="fixed h-screen right-0 top-0 bg-opacity-95 w-96 bg-base-300 flex flex-col justify-center items-center z-50"
        >
          <ul className="menu menu-vertical">
            <XMark className="absolute top-6 right-6" onClick={() => setOpen(false)} />
            {navLinks.map((link, index) => (
              <Animated as="li" animationName="slide-right" duration="0.3s" delay={`${0.5 + index * 0.1}s`} key={index}>
                <Link to={link.path} className="text-xl rounded-lg" onClick={() => setOpen(false)}>
                  {link.name}
                </Link>
              </Animated>
            ))}
          </ul>
        </Animated>
      )}
    </nav>
  );
}

export default Navbar;
