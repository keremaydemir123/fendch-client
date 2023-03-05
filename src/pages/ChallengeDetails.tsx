import React from 'react';
import ClockIcon from '../icons/ClockIcon';
import ReactPlayer from 'react-player/youtube';
import ProjectSubmitModal from '../components/modals/ProjectSubmitModal';
import CommentCard from '../components/cards/CommentCard';
import CommentForm from '../components/CommentForm';

function ChallengeDetails() {
  return (
    <>
      <div className="relative w-full bg-base-200 p-8 rounded-md shadow-md mt-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-accent text-4xl font-bold">React</h1>
            <h2 className="text-base-content text-2xl font-semibold">Todo App</h2>
          </div>
          <div>
            <h1 className="text-base-content text-xl font-bold text-end">WEEK 1</h1>
            <h2 className="text-base-content text-sm font-semibold flex items-center justify-end gap-2">
              <span> 14/12/22</span>
              <ClockIcon />
            </h2>
          </div>
        </div>
        <div className="mt-4 flex md:flex-row flex-col justify-between items-start gap-6 min-h-full py-4">
          <ol className="space-y-4 w-full text-base-content list-decimal list-inside">
            <li>
              List item one
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>You might feel like you are being really organized o</li>
                <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
                <li>Nesting tons of folders in your source code is also not helpful.</li>
              </ul>
            </li>
            <li>
              List item two
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>I m not sure if we ll bother styling more than two levels deep.</li>
                <li>Two is already too much, three is guaranteed to be a bad idea.</li>
                <li>If you nest four levels deep you belong in prison.</li>
              </ul>
            </li>
            <li>
              List item three
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>Again please don t nest lists if you want</li>
                <li>Nobody wants to look at this.</li>
                <li>I m upset that we even have to bother styling this.</li>
              </ul>
            </li>
          </ol>
          <div className="flex flex-col gap-2 w-full">
            <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
            <div className="flex justify-end items-center">
              <label htmlFor="project-submit" className="btn btn-primary mt-4 w-max">
                Submit Your Project
              </label>
            </div>
          </div>
          <ProjectSubmitModal id="project-submit" />
        </div>
      </div>
      <div className="w-full bg-base-200 p-8 rounded-md shadow-md mt-6">
        <CommentForm />
        <CommentCard />
      </div>
    </>
  );
}

export default ChallengeDetails;
