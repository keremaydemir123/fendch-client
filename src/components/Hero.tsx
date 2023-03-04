import React from 'react';
import Modal from './modals/Modal';

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-extrabold text-accent md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-secondary from-primary">Learn Frontend</span>{' '}
        by Doing
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Here at Fendch we focus on creating best challenges for you
      </p>
    </div>
  );
}

export default Hero;
