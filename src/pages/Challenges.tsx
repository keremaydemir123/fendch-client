import React from 'react';
import ChallengeList from '../components/lists/ChallengeList';
import ChallengeToolbar from '../components/toolbars/ChallengeToolbar';
import { Challenge } from '../types/Challenge';

const challenges: Challenge[] = [
  {
    name: 'Challenge 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, nec aliquam nunc nisl eu ante. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, nec aliquam nunc nisl eu ante.',
    tags: ['redux', 'react', 'typescript'],
    githubLink: 'https://github.com',
    liveLink: 'https://github.com',
  },
];

function Challenges() {
  return (
    <div className="py-8 flex flex-col items-center justify-center">
      <ChallengeToolbar />
      <ChallengeList challenges={challenges} />
    </div>
  );
}

export default Challenges;
