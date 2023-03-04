import React from 'react';
import ProjectList from '../components/lists/ProjectList';
import ProjectToolbar from '../components/toolbars/ProjectToolbar';

const projects = [
  {
    name: 'Project 1',
    description: 'This is a project',
    tags: ['redux', 'react'],
    githubLink: 'https://github.com',
    liveLink: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, quaerat, earum vitae voluptate temporibus laboriosam blanditiis illo ea nostrum modi consequuntur soluta? Dolore ad porro beatae asperiores neque adipisci numquam?',
    tags: ['redux', 'react'],
    githubLink: 'https://github.com',
    liveLink: 'https://github.com',
  },
];

function Projects() {
  return (
    <div className="py-8 flex flex-col items-center justify-center">
      <ProjectToolbar />
      <ProjectList projects={projects} />
    </div>
  );
}

export default Projects;
