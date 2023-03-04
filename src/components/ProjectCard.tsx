import ExternalIcon from '../icons/ExternalIcon';
import FolderIcon from '../icons/FolderIcon';
import Tag from './Tag';
import { Project } from '../types/Project';
import Animated from './Animated';

type Props = {
  delay: number;
  project: Project;
};

function ProjectCard({ delay, project }: Props) {
  return (
    <div className="hover:-translate-y-2 max-w-[280px] w-[280px] h-[280px] transition-all duration-200 ease-in-out">
      <Animated
        as="div"
        delay={`${delay}s`}
        animationName="slide-left"
        duration="0.5s"
        className="bg-accent w-full h-full p-6 opacity-0 rounded-md shadow-md text-accent-content"
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src="/kerem.jpeg" />
              </div>
            </div>
            <div className="flex flex-col justify-center text-sm">
              <div>Kerem Aydemir</div>
              <div>bla bla</div>
            </div>
          </div>
          <ExternalIcon />
        </div>
        <div className="w-full h-max py-4">
          <h1 className="text-2xl">{project.name}</h1>
          <div className="h-32 flex flex-col justify-between">
            <p className="line-clamp-3">{project.description}</p>
            <div className="flex flex-wrap items-center gap-4">
              {project.tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
        </div>
      </Animated>
    </div>
  );
}

export default ProjectCard;
