import React, { useState } from 'react';
import ExternalIcon from '../../icons/ExternalIcon';
import { Challenge } from '../../types/Challenge';
import Animated from '../Animated';
import TagList from '../lists/TagList';

function ChallengeCard({ delay, challenge }: { delay: number; challenge: Challenge }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="hover:-translate-y-2 max-w-[280px] w-[280px] h-[280px] transition-all duration-200 ease-in-out">
      <Animated
        as="div"
        delay={`${delay}s`}
        animationName="slide-left"
        duration="0.5s"
        className="flex flex-col h-full w-full justify-between p-6 bg-primary text-primary-content rounded-md shadow-md overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-sm mr-3">WEEK 1</h4>
          <h5 className="font-light text-sm mr-3">14/12/22</h5>
        </div>
        <div className="flex flex-col h-36 mt-2">
          <h1 className="text-3xl font-bold">React</h1>
          <h2 className="font-bold text-lg">Snake Game</h2>
          <p className="mt-3 line-clamp-3">{challenge?.description}</p>
        </div>

        <TagList tags={challenge?.tags} />

        <div
          className={` ${
            isHovered ? 'flex' : 'hidden'
          } absolute top-0 left-0 w-full h-full justify-center items-center bg-primary bg-opacity-80 transition-all ease-in-out`}
        >
          <ExternalIcon />
        </div>
      </Animated>
    </div>
  );
}

export default ChallengeCard;
