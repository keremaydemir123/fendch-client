import React from 'react';
import ClockIcon from '../icons/ClockIcon';
import ReactPlayer from 'react-player/youtube';
import Modal from '../components/modals/Modal';
import ProjectSubmitModal from '../components/modals/ProjectSubmitModal';

function ChallengeDetails() {
  return (
    <div className="w-full bg-base-200 p-8 rounded-md shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-accent text-4xl font-bold">React</h1>
          <h2 className="text-gray-500 text-2xl font-semibold">Todo App</h2>
        </div>
        <div>
          <h1 className="text-gray-500 text-sm font-bold text-end">WEEK 1</h1>
          <h2 className="text-gray-500 text-sm font-semibold flex items-center justify-end gap-2">
            <span> 14/12/22</span>
            <ClockIcon />
          </h2>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center flex-wrap gap-6 min-h-full">
        <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
        <div className="w-96 h-96 flex flex-col justify-between py-4">
          <div>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eum dicta, tempore, iste fuga deserunt
              magnam, in magni iure fugit hic ratione ipsa quas nobis. Ea optio harum labore! Dolorum.
            </p>
            <p className="mt-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eum dicta, tempore, iste fuga deserunt
              magnam, in magni iure fugit hic ratione ipsa quas nobis. Ea optio harum labore! Dolorum.
            </p>
          </div>
          <label htmlFor="project-submit" className="btn btn-primary btn-block mt-auto">
            Submit Your Project
          </label>
          <ProjectSubmitModal id="project-submit" />
        </div>
      </div>
    </div>
  );
}

export default ChallengeDetails;
