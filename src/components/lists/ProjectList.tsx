import React from 'react';
import ProjectCard from '../cards/ProjectCard';
import { Project } from '../../types/Project';

type Props = {
  projects: Project[];
};

function ProjectList({ projects }: Props) {
  return (
    <div className="container mx-auto flex flex-wrap w-full justify-center gap-6 p-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.name} project={project} delay={index * 0.1} />
      ))}
    </div>
  );
}

export default ProjectList;
