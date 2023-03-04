import React from 'react';
import { Challenge } from '../../types/Challenge';
import ChallengeCard from '../cards/ChallengeCard';

function ChallengeList({ challenges }: { challenges: Challenge[] }) {
  return (
    <div className="container mx-auto flex flex-wrap w-full justify-center gap-6 p-6">
      {challenges.map((challenge, index) => (
        <ChallengeCard key={index} challenge={challenge} delay={index * 0.1} />
      ))}
    </div>
  );
}

export default ChallengeList;
