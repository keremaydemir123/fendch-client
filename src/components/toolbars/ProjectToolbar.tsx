import React from 'react';
import SearchIcon from '../../icons/SearchIcon';

function ProjectToolbar() {
  return (
    <div className="flex bg-base-200 rounded-md gap-6 justify-between items-center p-2 max-w-[280px] w-[280px]">
      <select className="select select-accent max-w-xs">
        <option>Auto</option>
        <option>Dark mode</option>
        <option>Light mode</option>
      </select>
      <button className="btn btn-accent">
        <SearchIcon />
      </button>
    </div>
  );
}

export default ProjectToolbar;
