import React, { useState } from 'react';
import ExternalIcon from '../../icons/ExternalIcon';
import { Project } from '../../types/Project';
import Animated from '../Animated';
import TagList from '../lists/TagList';

type Props = {
  delay: number;
  project: Project;
};

function ProjectCard({ delay, project }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hover:-translate-y-2 max-w-[280px] w-[280px] h-[280px] transition-all duration-200 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Animated
        as="div"
        delay={`${delay}s`}
        animationName="slide-left"
        duration="0.5s"
        className="relative bg-accent w-full h-full p-6 rounded-md shadow-md text-accent-content overflow-hidden"
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src="/kerem.jpeg" alt="user" />
              </div>
            </div>
            <div className="flex flex-col justify-center text-sm">
              <div>Kerem Aydemir</div>
              <div>bla bla</div>
            </div>
          </div>
        </div>
        <div className="w-full h-max py-4">
          <h1 className="text-2xl">{project.name}</h1>
          <div className="h-32 flex flex-col justify-between">
            <p className="line-clamp-3">{project.description}</p>
            <TagList tags={project.tags} />
          </div>
        </div>

        <div
          className={` ${
            isHovered ? 'flex' : 'hidden'
          } absolute top-0 left-0 w-full h-full justify-center items-center bg-accent bg-opacity-80 transition-all ease-in-out`}
        >
          <ExternalIcon />
        </div>
      </Animated>
    </div>
  );
}

export default ProjectCard;
